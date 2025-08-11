import { templates as templatesData } from "@/data/templates";
import type { Template } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const categories = ["All", "Personal", "Business", "IT", "Student"] as const;

export default function TemplatesStack() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState("Popular");

  const templates = useMemo(() => templatesData.filter(t => t.isPublished) as Template[], []);

  const filtered = useMemo(() => {
    let list = active === "All" ? templates : templates.filter((t) => t.category === active);
    switch (sort) {
      case "Newest":
        return list;
      case "Price ↑":
        return [...list].sort((a, b) => toPrice(a.price) - toPrice(b.price));
      case "Price ↓":
        return [...list].sort((a, b) => toPrice(b.price) - toPrice(a.price));
      default:
        return list;
    }
  }, [active, sort, templates]);

  return (
    <section id="templates" className="py-24 md:py-28 bg-[#D9D9D9]">
      <div className="container">
        <header className="flex flex-col items-center text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl tracking-tight">Explore Beautiful Templates</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Scroll to reveal each template, stacked elegantly like browser screens.</p>
        </header>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
          <nav aria-label="Template categories" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full border",
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                )}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Sort</span>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Popular">Popular</SelectItem>
                <SelectItem value="Newest">Newest</SelectItem>
                <SelectItem value="Price ↑">Price ↑</SelectItem>
                <SelectItem value="Price ↓">Price ↓</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stacked, scroll-driven cards with subtle 3D depth */}
        <ol
          role="list"
          className="relative mx-auto max-w-6xl [--stack-gap:theme(spacing.24)] [--top:theme(spacing.24)] md:[--top:theme(spacing.28)]"
        >
          {filtered.map((t, i) => (
            <li
              key={t.title + i}
              className={cn(
                "sticky top-[var(--top)] -mt-16 md:-mt-24 first:mt-0",
                "animate-fade-in"
              )}
              aria-label={`Template ${i + 1} of ${filtered.length}: ${t.title}`}
              style={{ zIndex: filtered.length - i, transform: `translateZ(${i * -6}px)`, perspective: 1200 }}
            >
              <article
                className={
                  "group mx-auto max-w-5xl rounded-xl border border-border bg-white text-card-foreground overflow-hidden"
                }
                style={{
                  boxShadow:
                    i === filtered.length - 1
                      ? "0 10px 30px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.6) inset"
                      : "0 18px 40px rgba(0,0,0,0.25)",
                  transform: `translateY(${i * 4}px) scale(${1 - i * 0.01}) rotateX(${i * 0.15}deg)`,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-[#EDEDED] border-b border-border">
                  <span className="size-2.5 rounded-full bg-neutral-400/60" />
                  <span className="size-2.5 rounded-full bg-neutral-400/60" />
                  <span className="size-2.5 rounded-full bg-neutral-400/60" />
                  <div className="ml-3 flex-1" />
                 <span className="text-xs text-muted-foreground">{t.category}</span>
                </div>

                <div className="overflow-hidden">
                  <img
                    src={t.img}
                    alt={`${t.title} template preview`}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                 <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium leading-tight">{t.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.tags.join(" • ")}</p>
                    </div>
                     <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">${t.salePriceUSD ?? t.priceUSD}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="ghost" asChild className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                       <a href={`/t/${t.slug}`} aria-label={`Preview ${t.title}`}>Preview</a>
                    </Button>
                    <Button asChild>
                       <a href={`/t/${t.slug}`} aria-label={`Use ${t.title}`}>Use template</a>
                    </Button>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* Spacer so the last sticky card can scroll past */}
        <div className="h-24 md:h-40" aria-hidden="true" />
      </div>
    </section>
  );
}

function toPrice(p: string) {
  return Number(p.replace(/[^0-9.]/g, "")) || 0;
}
