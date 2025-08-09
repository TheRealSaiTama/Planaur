import type { VercelRequest, VercelResponse } from "@vercel/node"
import Stripe from "stripe"
import { templates } from "../src/data/templates"
import { getSupabaseAdmin } from "./_supabase"
import { Resend } from "resend"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2024-06-20" })

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sig = req.headers["stripe-signature"] as string
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!whSecret) return res.status(200).send("ok")
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, whSecret)
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 })
    const purchased = lineItems.data
      .map((li) => {
        const name = li.description || ""
        const t = templates.find(x => x.title === name) || null
        return t
      })
      .filter(Boolean)

    const supa = getSupabaseAdmin()
    if (supa) {
      await supa.from("orders").insert({
        id: session.id,
        email: session.customer_details?.email,
        items: purchased.map(t => ({ templateId: t!.id, pricePaidUSD: t!.salePriceUSD ?? t!.priceUSD })),
        createdAt: new Date().toISOString(),
        status: "paid"
      })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey && session.customer_details?.email) {
      const resend = new Resend(resendKey)
      const body = `Thanks for your purchase!\n\nYour templates:\n${purchased.map(t => `- ${t!.title}: ${t!.notionDuplicateUrl}`).join("\n")}\n\nEnjoy. — Planaur`
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "Planaur <support@planaur.co>",
        to: session.customer_details.email,
        subject: "Your Planaur order",
        text: body
      })
    }
  }
  res.status(200).send("ok")
}

