import type { VercelRequest, VercelResponse } from "@vercel/node"
import { templates } from "../src/data/templates"

function getOrigin(req: VercelRequest) {
  const proto = (req.headers["x-forwarded-proto"] as string) || "https"
  const host = (req.headers["x-forwarded-host"] as string) || req.headers.host || ""
  return `${proto}://${host}`
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const origin = getOrigin(req)
  const urls = [
    `${origin}/`,
    `${origin}/templates`,
    ...templates.filter(t => t.isPublished).map(t => `${origin}/t/${t.slug}`)
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map((u) => `<url><loc>${u}</loc></url>`)
    .join("")}</urlset>`
  res.setHeader("Content-Type", "application/xml")
  res.status(200).send(xml)
}

