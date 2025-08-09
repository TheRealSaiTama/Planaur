import { useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { templates } from "@/data/templates"
import type { Template } from "@/data/types"
import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import { track } from "@/lib/analytics"

export default function TemplateDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const t = useMemo<Template | undefined>(() => templates.find(x => x.slug === slug && x.isPublished), [slug])

  if (!t) return null

  const price = t.salePriceUSD ?? t.priceUSD

  const onBuy = async () => {
    track("begin_checkout", { slug: t.slug })
    try {
      const res = await fetch(`/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ templateId: t.id, quantity: 1 }] })
      })
      const data = await res.json()
      if (data?.url) window.location.href = data.url
    } catch (_) {}
  }

  return (
    <section className="py-12 md:py-16">
      <Helmet>
        <title>{t.seo?.title ?? `${t.title} — Planaur`}</title>
        <meta name="description" content={t.seo?.description ?? t.description.slice(0, 150)} />
        <meta property="og:image" content={t.seo?.ogImg ?? t.coverImg} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: t.title,
          description: t.description,
          image: [t.coverImg, ...t.gallery],
          sku: t.id,
          brand: { "@type": "Brand", name: "Planaur" },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: String(t.salePriceUSD ?? t.priceUSD),
            availability: "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>
      <div className="container grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <div className="rounded-xl border overflow-hidden" onMouseEnter={() => track("view_template", { slug: t.slug })}>
            <img src={t.coverImg} alt={`${t.title} cover`} className="w-full object-cover" />
          </div>
          {t.gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
              {t.gallery.map((g) => (
                <img key={g} src={g} alt="Preview" className="rounded-lg border" loading="lazy" />
              ))}
            </div>
          )}
          <article className="prose prose-neutral dark:prose-invert max-w-none mt-8">
            <h2>What’s inside</h2>
            <p>{t.description}</p>
            <h3>Features</h3>
            <ul>
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <h3>FAQ</h3>
            <ul>
              <li>How do I get the template? You get a Notion duplicate link immediately after purchase.</li>
              <li>Can I use it commercially? Personal license by default; contact us for commercial licensing.</li>
            </ul>
          </article>
        </div>
        <aside className="self-start rounded-2xl border p-6 bg-card/60">
          <h1 className="text-2xl font-semibold leading-tight">{t.title}</h1>
          {t.subtitle && <p className="text-muted-foreground mt-1">{t.subtitle}</p>}
          <div className="mt-5 flex items-center gap-3">
            <div className="text-3xl font-heading">${price}</div>
            {t.salePriceUSD && <div className="text-muted-foreground line-through">${t.priceUSD}</div>}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button onClick={onBuy}>Buy now</Button>
            <Button variant="outline" asChild>
              <a href={t.notionDuplicateUrl} target="_blank" rel="noreferrer" onClick={() => track("click_preview", { slug: t.slug })}>Preview in Notion</a>
            </Button>
          </div>
          <div className="mt-6 text-xs text-muted-foreground">
            Version {t.version} · Updated {new Date(t.lastUpdated).toLocaleDateString()}
          </div>
          <button className="mt-6 text-sm underline" onClick={() => navigate(-1)}>Back</button>
        </aside>
      </div>
    </section>
  )
}

