import type { VercelRequest, VercelResponse } from "@vercel/node"
import { templates as seed } from "../src/data/templates"
import { getSupabaseAdmin } from "./_supabase"

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const supa = getSupabaseAdmin()
  if (!supa) return res.status(200).json(seed)
  const { data, error } = await supa.from("templates").select("*").order("lastUpdated", { ascending: false })
  if (error || !data) return res.status(200).json(seed)
  return res.status(200).json(data)
}

