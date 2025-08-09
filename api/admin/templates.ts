import type { VercelRequest, VercelResponse } from "@vercel/node"
import { getSupabaseAdmin } from "../_supabase"
import { nanoid } from "nanoid"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const supa = getSupabaseAdmin()
  if (!supa) {
    if (req.method === "GET") return res.status(200).json([])
    return res.status(501).json({ error: "Storage not configured" })
  }

  if (req.method === "GET") {
    const { data, error } = await supa.from("templates").select("*").order("lastUpdated", { ascending: false })
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json(data)
  }

  const adminKey = req.headers["x-admin-key"] as string
  if (!adminKey || adminKey !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" })

  if (req.method === "POST") {
    const now = new Date().toISOString()
    const payload = req.body || {}
    const row = {
      id: payload.id || nanoid(),
      slug: payload.slug,
      title: payload.title,
      subtitle: payload.subtitle || null,
      category: payload.category,
      priceUSD: Number(payload.priceUSD ?? 0),
      salePriceUSD: payload.salePriceUSD ? Number(payload.salePriceUSD) : null,
      notionDuplicateUrl: payload.notionDuplicateUrl,
      description: payload.description || "",
      features: Array.isArray(payload.features) ? payload.features : String(payload.features || "").split(",").map((s: string) => s.trim()).filter(Boolean),
      version: payload.version || "1.0.0",
      lastUpdated: payload.lastUpdated || now,
      coverImg: payload.coverImg,
      gallery: Array.isArray(payload.gallery) ? payload.gallery : String(payload.gallery || "").split(",").map((s: string) => s.trim()).filter(Boolean),
      tags: Array.isArray(payload.tags) ? payload.tags : String(payload.tags || "").split(",").map((s: string) => s.trim()).filter(Boolean),
      isPublished: Boolean(payload.isPublished),
      seo: payload.seo || null,
    }
    const { data, error } = await supa.from("templates").insert(row).select().single()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json(data)
  }

  return res.status(405).json({ error: "Method not allowed" })
}

