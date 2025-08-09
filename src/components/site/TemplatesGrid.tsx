import { templates as templatesData } from "@/data/templates";
import type { Template } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const categories = ["All", "Personal", "Business", "IT", "Student"] as const;

export default function TemplatesGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState("Popular");

  const templates = useMemo(() => templatesData.filter(t => t.isPublished) as Template[], []);

  const filtered = useMemo(() => {
    let list = active === "All" ? templates : templates.filter(t => t.category === active);
    switch (sort) {
      case "Newest":
        return list;
      case "Price ↑":
        return [...list].sort((a,b) => (a.salePriceUSD ?? a.priceUSD) - (b.salePriceUSD ?? b.priceUSD));
      case "Price ↓":
        return [...list].sort((a,b) => (b.salePriceUSD ?? b.priceUSD) - (a.salePriceUSD ?? a.priceUSD));
      default:
        return list;
    }
  }, [active, sort, templates]);

  return (
    <section id="templates" className="py-24 md:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl tracking-tight">Choose from over 50 templates!</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Curated for Personal, Business, IT, and Student workflows.</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full border",
                  active === c ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                )}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </div>
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((t) => (
            <article key={t.title} className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                 <img src={t.coverImg} alt={`${t.title} preview`} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium leading-tight">{t.title}</h3>
                     <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.tags.join(" • ")}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">${t.salePriceUSD ?? t.priceUSD}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="text-xs text-muted-foreground">{t.category}</span>
                  {t.tags.slice(0,2).map(tag => (
                    <span key={tag} className="text-xs text-muted-foreground">• {tag}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                   <Button variant="ghost" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={`/t/${t.slug}`} aria-label={`Preview ${t.title}`}>Preview</a>
                  </Button>
                  <Button asChild>
                    <a href={`/t/${t.slug}`} aria-label={`Use ${t.title}`}>Use template</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
