import { useMemo, useRef, useState } from "react";
import type { Template } from "@/data/types";
import { templates as seed } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TemplatesRow() {
  const list = useMemo<Template[]>(() => seed.filter(t => t.isPublished), []);
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 320; // replace with exact Figma width
  const GUTTER = 16;      // replace with exact Figma gap

  const onNext = () => scrollByCards(1);
  const onPrev = () => scrollByCards(-1);

  function scrollByCards(delta: number) {
    const el = scroller.current;
    if (!el) return;
    const amount = delta * (CARD_WIDTH + GUTTER);
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  function onScroll() {
    const el = scroller.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (CARD_WIDTH + GUTTER));
    setActive(Math.max(0, Math.min(list.length - 1, idx)));
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="type-h2">New to Planaur</h2>
          <div className="flex items-center gap-3 text-sm text-muted">
            <button onClick={onPrev} aria-label="Previous" className="rounded-full border px-2 py-1">←</button>
            <span>
              {active + 1}/{list.length}
            </span>
            <button onClick={onNext} aria-label="Next" className="rounded-full border px-2 py-1">→</button>
          </div>
        </div>
        <div
          ref={scroller}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory", paddingBottom: 8 }}
        >
          {list.map((t) => (
            <article
              key={t.id}
              className={cn("snap-start rounded-2xl border bg-surface overflow-hidden shadow-sm min-w-[320px]", "hover:shadow-md transition-shadow")}
              style={{ width: CARD_WIDTH }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={t.coverImg} alt="Cover" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium leading-tight">{t.title}</h3>
                    <p className="text-xs text-muted mt-1">{t.tags.slice(0, 3).join(" • ")}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    ${t.salePriceUSD ?? t.priceUSD}
                  </span>
                </div>
                <div className="mt-3">
                  <Button asChild size="sm">
                    <a href={`/t/${t.slug}`}>Use template</a>
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
