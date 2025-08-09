import type { VercelRequest, VercelResponse } from "@vercel/node"
import { templates } from "../../src/data/templates"
import Stripe from "stripe"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query as { id?: string }
  if (!id) return res.status(400).json({ error: "Missing id" })
  const hasStripe = Boolean(process.env.STRIPE_SECRET_KEY)
  if (!hasStripe) {
    const items = templates.slice(0, 1).map(t => ({ title: t.title, notionDuplicateUrl: t.notionDuplicateUrl }))
    return res.status(200).json({ id, items })
  }
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2024-06-20" })
    const session = await stripe.checkout.sessions.retrieve(id as string)
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 })
    const items = lineItems.data.map((li) => {
      const name = li.description || ""
      const t = templates.find(x => x.title === name) || null
      return t ? { title: t.title, notionDuplicateUrl: t.notionDuplicateUrl } : null
    }).filter(Boolean) as Array<{ title: string; notionDuplicateUrl: string }>
    return res.status(200).json({ id, items })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" })
  }
}

