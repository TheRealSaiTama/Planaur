import Stripe from "stripe"
import type { VercelRequest, VercelResponse } from "@vercel/node"
import { templates } from "../src/data/templates"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2024-06-20" })

function getOrigin(req: VercelRequest) {
  const proto = (req.headers["x-forwarded-proto"] as string) || "https"
  const host = (req.headers["x-forwarded-host"] as string) || req.headers.host || ""
  return `${proto}://${host}`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const hasStripe = Boolean(process.env.STRIPE_SECRET_KEY)
  try {
    const body = req.body as { items: Array<{ templateId: string; quantity?: number }> }
    if (!body?.items || !Array.isArray(body.items)) return res.status(400).json({ error: "Invalid body" })
    const selected = body.items
      .map((i) => {
        const t = templates.find((x) => x.id === i.templateId)
        if (!t) return null
        return { t, quantity: i.quantity || 1 }
      })
      .filter(Boolean) as Array<{ t: typeof templates[number]; quantity: number }>

    if (selected.length === 0) return res.status(400).json({ error: "No valid items" })

    const origin = getOrigin(req)

    if (!hasStripe) {
      const fakeId = `dev_${Date.now()}`
      return res.status(200).json({ url: `${origin}/order/${fakeId}` })
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = selected.map(({ t, quantity }) => ({
      quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round((t.salePriceUSD ?? t.priceUSD) * 100),
        product_data: {
          name: t.title,
          description: t.subtitle || undefined,
          images: [t.coverImg],
          metadata: { templateId: t.id, slug: t.slug },
        },
      },
      adjustable_quantity: { enabled: false },
    }))

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/order/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/templates`,
      allow_promotion_codes: true,
      metadata: { project: "planaur" },
      automatic_tax: { enabled: true },
    })

    return res.status(200).json({ url: session.url })
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Server error" })
  }
}

