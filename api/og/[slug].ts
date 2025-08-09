import type { VercelRequest, VercelResponse } from "@vercel/node"
import { templates } from "../../src/data/templates"

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { slug } = req.query as { slug?: string }
  const t = templates.find(x => x.slug === slug)
  if (!t) return res.status(404).send("Not found")
  res.setHeader("Content-Type", "application/json")
  res.status(200).json({ image: t.coverImg })
}

