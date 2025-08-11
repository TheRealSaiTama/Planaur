import React, { useMemo } from "react";
import { templates as templatesData } from "@/data/templates";
import type { Template } from "@/data/types";
import { ArrowRight } from "lucide-react";

function sortByUpdated(a: Template, b: Template) {
  const da = new Date(a.lastUpdated).getTime();
  const db = new Date(b.lastUpdated).getTime();
  return db - da;
}

type CardData = {
  title: string;
  imageUrl: string;
  price: number | string;
  category: string;
  href: string;
  isPlaceholder?: boolean;
};

export default function NewlyAdded() {
  const list = useMemo(() => {
    const base: CardData[] = [...templatesData]
      .filter((t) => t.isPublished)
      .sort(sortByUpdated)
      .slice(0, 3)
      .map((t) => ({
        title: t.title,
        imageUrl: t.coverImg,
        price: t.salePriceUSD ?? t.priceUSD,
        category: t.category,
        href: `/t/${t.slug}`,
      }));
    // pad to 3 with placeholders if dataset < 3
    while (base.length < 3) {
      base.push({
        title: "Coming soon",
        imageUrl: "/placeholder.svg",
        price: "",
        category: "Templates",
        href: "/templates",
        isPlaceholder: true,
      });
    }
    return base;
  }, []);

  return (
    <section id="newly-added" className="py-16 md:py-20 bg-[#D9D9D9]">
      <div className="container max-w-[1600px]">
        <h2 className="text-center font-heading text-2xl md:text-4xl tracking-tight mb-8 md:mb-10">
          Newly Added to the Marketplace
        </h2>

        <div className="grid gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t, idx) => (
            <article
              key={t.title + idx}
              className="group rounded-[28px] bg-white shadow-xl overflow-hidden border border-black/5 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <a href={t.href} aria-label={`Open ${t.title}`} className={t.isPlaceholder ? "pointer-events-none block" : "block"}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={t.imageUrl}
                    alt={`${t.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="flex items-start justify-between gap-4 px-7 py-5 border-t border-black/5">
                <div>
                  <h3 className="font-medium text-lg leading-tight">{t.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1">{t.price !== "" ? `$${t.price}` : ""}</div>
                </div>
                <a
                  href="/templates"
                  className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground"
                >
                  <span>Find in {t.category} Templates</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="/templates"
            className="group inline-flex items-stretch overflow-hidden rounded-full bg-black/85 text-white shadow-md hover:bg-black focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors"
          >
            <span className="px-6 py-3 text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5">
              Browse All
            </span>
            <span
              className="relative flex w-10 items-center justify-center bg-black/85 text-white transition-all duration-200 group-hover:bg-white group-hover:text-black group-hover:w-12 before:absolute before:left-0 before:top-1/2 before:h-5 before:w-px before:-translate-y-1/2 before:bg-white/30 before:opacity-0 group-hover:before:opacity-100"
              aria-hidden="true"
            >
              {/* default arrow (right) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute inset-0 m-auto h-5 w-5 opacity-100 transition-all duration-200 group-hover:opacity-0 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              {/* hover arrow (diagonal top-right) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute inset-0 m-auto h-5 w-5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}


