import {
  MousePointerClick,
  BriefcaseBusiness,
  Clapperboard,
  Sparkles,
  Rocket,
  Layers,
  Palette,
  HeartHandshake,
} from "lucide-react";
import { useRef } from "react";

const highlights = [
  {
    icon: MousePointerClick,
    title: "User‑first Journeys",
    tag: "UX",
    desc: "Focused information hierarchy and clear CTAs guide visitors to action with ease.",
    gradient:
      "radial-gradient(60% 60% at 0% 0%, hsl(var(--primary)/0.12), transparent 60%), radial-gradient(60% 60% at 100% 0%, hsl(191 94% 67% / 0.12), transparent 60%)",
  },
  {
    icon: BriefcaseBusiness,
    title: "Credible & Conversion‑ready",
    tag: "Brand",
    desc: "Elegant typography and confident spacing create a polished, trustworthy presence.",
    gradient:
      "radial-gradient(70% 70% at 100% 0%, hsl(14 92% 72% / 0.12), transparent 60%), radial-gradient(60% 60% at 0% 100%, hsl(var(--primary)/0.10), transparent 60%)",
  },
  {
    icon: Clapperboard,
    title: "Micro‑interactions",
    tag: "Motion",
    desc: "Subtle hover, lift and reveal effects energize the UI without distraction.",
    gradient:
      "radial-gradient(60% 60% at 0% 0%, hsl(191 94% 67% / 0.12), transparent 60%), radial-gradient(60% 60% at 100% 100%, hsl(var(--primary)/0.10), transparent 60%)",
  },
  {
    icon: Sparkles,
    title: "Delightful Details",
    tag: "Craft",
    desc: "Glossy pills, soft shadows and tasteful gradients add depth and warmth.",
    gradient:
      "radial-gradient(70% 70% at 50% 0%, hsl(var(--primary)/0.12), transparent 60%), radial-gradient(70% 70% at 100% 100%, hsl(14 92% 72% / 0.10), transparent 60%)",
  },
  {
    icon: Rocket,
    title: "Performance Obsessed",
    tag: "Speed",
    desc: "Lean bundles and targeted hydration keep pages snappy and responsive.",
    gradient:
      "radial-gradient(60% 60% at 0% 100%, hsl(var(--primary)/0.12), transparent 60%), radial-gradient(70% 70% at 100% 0%, hsl(191 94% 67% / 0.10), transparent 60%)",
  },
  {
    icon: Layers,
    title: "Composable UI Kit",
    tag: "System",
    desc: "Reusable primitives and tokens enable rapid iteration with visual consistency.",
    gradient:
      "radial-gradient(60% 60% at 0% 0%, hsl(14 92% 72% / 0.12), transparent 60%), radial-gradient(70% 70% at 100% 0%, hsl(var(--primary)/0.10), transparent 60%)",
  },
  {
    icon: Palette,
    title: "Curated Aesthetic",
    tag: "Style",
    desc: "Pinterest‑inspired cards with pastel glows and elegant imagery framing.",
    gradient:
      "radial-gradient(60% 60% at 100% 0%, hsl(191 94% 67% / 0.12), transparent 60%), radial-gradient(70% 70% at 0% 100%, hsl(14 92% 72% / 0.10), transparent 60%)",
  },
  {
    icon: HeartHandshake,
    title: "Human Support",
    tag: "Care",
    desc: "Friendly onboarding and helpful guidance reduce friction for new users.",
    gradient:
      "radial-gradient(70% 70% at 0% 0%, hsl(var(--primary)/0.12), transparent 60%), radial-gradient(60% 60% at 100% 100%, hsl(191 94% 67% / 0.10), transparent 60%)",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 md:py-28">
      <div className="container animate-enter">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl tracking-tight inline-block">Key Highlights of the Website Design</h2>
        </div>

        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-hero)" }} />

          <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, idx) => {
              const ref = useRef<HTMLDivElement>(null);
              const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
                const el = ref.current;
                if (!el) return;
                const r = el.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                const rx = (py - 0.5) * -6;
                const ry = (px - 0.5) * 8;
                el.style.setProperty("--rx", `${rx}deg`);
                el.style.setProperty("--ry", `${ry}deg`);
                el.style.setProperty("--mx", `${px * 100}%`);
                el.style.setProperty("--my", `${py * 100}%`);
              };
              const onLeave = () => {
                const el = ref.current;
                if (!el) return;
                el.style.setProperty("--rx", `0deg`);
                el.style.setProperty("--ry", `0deg`);
              };
              return (
                <article
                  key={item.title}
                  className="group relative rounded-2xl border border-border bg-card/80 overflow-hidden shadow-sm transition-all duration-500 will-change-transform"
                  style={{ perspective: 1200 }}
                >
                  <div aria-hidden className="absolute inset-0 z-0 opacity-80" style={{ background: item.gradient }} />
                  <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500" style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsl(var(--primary)/0.16), transparent 60%)" }} />
                  <span aria-hidden className="absolute left-[-30%] top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-70 group-hover:animate-sheen" />
                  <div
                    ref={ref}
                    onMouseMove={onMove}
                    onMouseLeave={onLeave}
                    className="relative z-10 p-6 [transform-style:preserve-3d] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 [transform:perspective(1200px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-xl bg-white/75 ring-1 ring-black/5 backdrop-blur flex items-center justify-center shadow-sm">
                        <item.icon className="h-5 w-5 text-primary" aria-hidden />
                        <span aria-hidden className="absolute -inset-1 rounded-xl bg-primary/10 blur-lg group-hover:animate-aura-pulse" />
                      </div>
                      <span className="text-xs rounded-full border border-border bg-background/70 px-2.5 py-1 text-foreground/80">{item.tag}</span>
                    </div>
                    <h3 className="mt-4 font-heading text-xl tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{item.desc}</p>
                    <div className="absolute right-2 bottom-2 h-28 w-28 rounded-full bg-primary/10 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute -top-6 -left-6 size-2 rounded-full bg-primary/60 opacity-70 animate-sparkle" />
                    <div className="absolute -bottom-6 -right-8 size-1.5 rounded-full bg-accent/60 opacity-70 animate-sparkle" style={{ animationDelay: `${(idx % 3) * 800}ms` }} />
                    <div className="absolute -top-4 right-6 h-6 w-6 rounded-full bg-white/30 blur-md animate-float-soft" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
