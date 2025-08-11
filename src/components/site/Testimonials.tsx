import React, { useMemo } from "react";
import { testimonials as seed } from "@/data/testimonials";

export default function Testimonials() {
  const list = useMemo(() => seed.concat(seed).concat(seed), []); // duplicate for seamless loop

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-background">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-5xl tracking-tight mb-8">What people say</h2>

        <div className="relative -mx-10 md:-mx-10 lg:-mx-12">
          {/* Row 1 */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-marquee [--marquee-duration:40s]">
              {list.map((t, i) => (
                <article
                  key={`r1-${t.id}-${i}`}
                  className="min-w-[520px] md:min-w-[640px] rounded-2xl bg-[#2A2928] text-white p-6 md:p-8 shadow-xl border border-black/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-white/80" aria-hidden />
                    <h3 className="text-2xl font-heading">{t.name}</h3>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/90">{t.body}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Row 2 (reverse for contrast) */}
          <div className="mt-6 overflow-hidden">
            <div className="flex gap-6 animate-marquee animate-marquee-reverse [--marquee-duration:48s]">
              {list.map((t, i) => (
                <article
                  key={`r2-${t.id}-${i}`}
                  className="min-w-[520px] md:min-w-[640px] rounded-2xl bg-[#222120] text-white p-6 md:p-8 shadow-xl border border-black/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-white/80" aria-hidden />
                    <h3 className="text-2xl font-heading">{t.name}</h3>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/90">{t.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


