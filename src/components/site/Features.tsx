  import { ClipboardCheck, BarChart3, Palette } from "lucide-react";
  import { useEffect, useRef, useState } from "react";
  import { CardSpotlight } from "@/components/ui/card-spotlight";

  const features = [
    {
      icon: ClipboardCheck,
      title: "Effortless Task Management",
      desc: "Use built-in strategies like Pomodoro and priority matrices to organize daily tasks and boost output.",
    },
    {
      icon: BarChart3,
      title: "Business & IT Optimization",
      desc: "Curated templates for CRM, bug tracking, and project planning—streamline teams without fluff.",
    },
    {
      icon: Palette,
      title: "Aesthetic Personal Planners",
      desc: "Habit trackers and journals in styles from minimalistic to vibrant, making productivity enjoyable.",
    },
  ];

  export default function Features() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(0);

    function getItems() {
      const root = trackRef.current;
      if (!root) return [] as HTMLElement[];
      return Array.from(root.querySelectorAll<HTMLElement>('li[data-idx]'));
    }

    function scrollToIndex(next: number) {
      const items = getItems();
      if (items.length === 0) return;
      const total = items.length;
      const idx = ((next % total) + total) % total;
      const el = items[idx];
      const root = trackRef.current!;
      const target = el.offsetLeft + el.offsetWidth / 2 - root.clientWidth / 2;
      root.scrollTo({ left: target, behavior: 'smooth' });
      setActive(idx);
      setProgress(0);
    }

    useEffect(() => {
      const root = trackRef.current;
      if (!root) return;
      const onScroll = () => {
        const items = getItems();
        if (items.length === 0) return;
        const center = root.scrollLeft + root.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        for (let i = 0; i < items.length; i++) {
          const el = items[i];
          const c = el.offsetLeft + el.offsetWidth / 2;
          const d = Math.abs(c - center);
          if (d < bestDist) { bestDist = d; best = i; }
        }
        setActive(best);
      };
      root.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => root.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
      if (paused) return;
      let raf = 0;
      const duration = 4500;
      let start = performance.now() - progress * duration;
      const step = (t: number) => {
        const elapsed = Math.max(0, t - start);
        const p = Math.min(1, elapsed / duration);
        setProgress(p);
        if (p >= 1) {
          setProgress(0);
          scrollToIndex(active + 1);
          start = performance.now();
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [active, paused]);
    return (
      <section id="about" className="py-24 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight inline-block">How Planaur Templates Transform Your Workflow</h2>
          </div>

          <div className="relative">
            <div
              ref={trackRef}
              className="overflow-x-auto overflow-y-visible [-webkit-overflow-scrolling:touch]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <ol className="flex gap-6 min-w-max p-2 snap-x snap-mandatory">
                {features.map((f, i) => {
                  const gradient = [
                    "radial-gradient(60% 60% at 10% 0%, hsl(258 90% 66% / 0.25), transparent 60%), radial-gradient(60% 60% at 100% 0%, hsl(191 94% 67% / 0.20), transparent 60%)",
                    "radial-gradient(70% 70% at 100% 0%, hsl(14 92% 72% / 0.22), transparent 60%), radial-gradient(60% 60% at 0% 100%, hsl(258 90% 66% / 0.16), transparent 60%)",
                    "radial-gradient(60% 60% at 0% 0%, hsl(191 94% 67% / 0.22), transparent 60%), radial-gradient(70% 70% at 100% 100%, hsl(14 92% 72% / 0.18), transparent 60%)",
                  ][i % 3];
                  return (
                    <li key={f.title} data-idx className="relative snap-center">
                      <article
                        onMouseMove={(e) => {
                          const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                          const px = (e.clientX - r.left) / r.width;
                          const py = (e.clientY - r.top) / r.height;
                          const rx = (py - 0.5) * -8;
                          const ry = (px - 0.5) * 10;
                          (e.currentTarget as HTMLDivElement).style.setProperty("--rx", `${rx}deg`);
                          (e.currentTarget as HTMLDivElement).style.setProperty("--ry", `${ry}deg`);
                          (e.currentTarget as HTMLDivElement).style.setProperty("--mx", `${px * 100}%`);
                          (e.currentTarget as HTMLDivElement).style.setProperty("--my", `${py * 100}%`);
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.setProperty("--rx", `0deg`);
                          (e.currentTarget as HTMLDivElement).style.setProperty("--ry", `0deg`);
                        }}
                        className="group relative w-[520px] md:w-[620px] h-[300px] md:h-[340px] rounded-3xl border border-border bg-card/90 backdrop-blur overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 [transform-style:preserve-3d] [transform:perspective(1200px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
                        style={{ backgroundImage: `radial-gradient(800px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.18), transparent 60%)` }}
                      >
                        <div aria-hidden className="absolute inset-0 opacity-90" style={{ background: gradient }} />
                        <div aria-hidden className="absolute left-[-30%] top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-white/0 via-white/60 to-white/0 opacity-0 group-hover:opacity-80 group-hover:animate-sheen" />
                        <div className="relative z-10 p-7 flex flex-col justify-between h-full">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-2xl bg-white/75 ring-1 ring-black/5 backdrop-blur flex items-center justify-center shadow-sm">
                              <f.icon className="h-6 w-6 text-primary" aria-hidden />
                            </div>
                            <span className="text-xs rounded-full border border-border bg-background/70 px-2.5 py-1 text-foreground/80">Capability</span>
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl md:text-3xl leading-snug">{f.title}</h3>
                            <p className="mt-2 text-sm md:text-base text-foreground/85">{f.desc}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium text-primary/90">
                            <span>Explore</span>
                            <span aria-hidden className="h-1 w-1 rounded-full bg-primary/80 animate-pulse" />
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0">
                          <div className="absolute -bottom-16 right-4 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-70" />
                        </div>
                        <div className="absolute inset-0">
                          <CardSpotlight className="absolute inset-0 border-0 bg-transparent p-0" radius={280} color="#0a0a0a" />
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-4 h-1 rounded-full bg-muted relative overflow-hidden">
              <span className="absolute left-0 top-0 h-full bg-primary/70 transition-none" style={{ width: `${((active + progress) / features.length) * 100}%` }} />
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToIndex(active - 1)}
                className="rounded-full border px-3 py-1 text-sm hover:bg-muted"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(active + 1)}
                className="rounded-full border px-3 py-1 text-sm hover:bg-muted"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
