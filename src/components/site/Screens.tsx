import { useEffect, useRef, useState } from "react";

export default function Screens() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const [transactions, setTransactions] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  useEffect(() => {
    let raf = 0;
    const startTs = performance.now();
    const durationMs = 1400;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = () => {
      const now = performance.now();
      const progress = Math.min(1, (now - startTs) / durationMs);
      const eased = ease(progress);
      setTransactions(Math.round(eased * 43));
      setSatisfaction(Math.round(eased * 96));
      setEfficiency(Math.round(eased * 45));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setPos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  }

  function onMoveRight(e: React.MouseEvent<HTMLDivElement>) {
    const el = rightRef.current;
    if (!el) return;
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -6;
    const ry = (px - 0.5) * 8;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  }

  function onLeaveRight() {
    const el = rightRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }

  return (
    <section id="screens" className="py-24 md:py-28">
      <div className="container animate-enter">
        <header className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl tracking-tight">Beautiful Screens, Thoughtfully Crafted</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">A glimpse of the polished, easy-to-read interfaces users experience when using our Notion templates.</p>
        </header>

        <div
          ref={wrapRef}
          onMouseMove={onMove}
          className="relative rounded-3xl border border-border bg-card/80 p-6 md:p-10 overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(600px circle at ${pos.x * 100}% ${pos.y * 100}%, hsl(var(--primary)/0.10), transparent 60%)`,
            ['--mx' as any]: `${pos.x * 100}%`,
            ['--my' as any]: `${pos.y * 100}%`,
          }}
        >
          <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
            <div className="absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
            <div className="absolute left-[-10%] bottom-[-20%] h-72 w-72 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-primary)" }} />
          </div>

          <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] items-start">
            <article className="relative rounded-2xl border border-border bg-card shadow-sm p-5 overflow-hidden">
              <span aria-hidden className="pointer-events-none absolute left-[-30%] top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 hover:opacity-70 animate-sheen" />
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p className="font-medium">Sales statistic</p>
                  <p className="text-muted-foreground">Last 6 months</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">Report</span>
              </div>
             <div className="mt-4 h-32 w-full rounded-md bg-muted relative overflow-hidden" aria-hidden>
                <div className="absolute inset-x-0 bottom-0 flex items-end gap-1 p-2">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="h-10 w-2 origin-bottom rounded-sm bg-accent/40 animate-bar-pulse" style={{ animationDelay: `${(i % 6) * 150}ms` }} />
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="relative rounded-lg border border-border bg-background p-3 overflow-hidden">
                  <span aria-hidden className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-primary/10 to-transparent" />
                  <p className="text-muted-foreground">Total profit</p>
                  <p className="font-medium">$ 264,2K</p>
                </div>
                <div className="relative rounded-lg border border-border bg-background p-3 overflow-hidden">
                  <span aria-hidden className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-primary/10 to-transparent" />
                  <p className="text-muted-foreground">Visitors</p>
                  <p className="font-medium">56K</p>
                </div>
                <div className="relative rounded-lg border border-border bg-background p-3 overflow-hidden">
                  <span aria-hidden className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-primary/10 to-transparent" />
                  <p className="text-muted-foreground">Rate</p>
                  <p className="font-medium text-primary">+48%</p>
                </div>
              </div>
            </article>

            <article className="relative rounded-2xl border border-border bg-foreground text-background shadow-lg p-7 md:p-8 overflow-hidden min-h-[420px] md:min-h-[460px]">
              <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(60%_80%_at_50%_20%, rgba(255,255,255,0.08), transparent 60%)" }} />
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.08),transparent_60%)] opacity-60" />
              <span aria-hidden className="pointer-events-none absolute left-[-30%] top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 hover:opacity-70 animate-sheen" />
              <div
                ref={rightRef}
                onMouseMove={onMoveRight}
                onMouseLeave={onLeaveRight}
                className="relative z-10 [transform-style:preserve-3d] transition-transform duration-300 ease-out [transform:perspective(1200px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
              >
                <div className="grid grid-cols-2 gap-5 items-stretch">
                  <div className="rounded-xl border border-border/10 bg-foreground/60 p-6 md:p-7 min-h-[150px] md:min-h-[210px] flex flex-col justify-center">
                    <p className="text-sm md:text-base opacity-80">Transactions</p>
                    <p className="mt-3 text-5xl md:text-6xl font-semibold">{transactions}K</p>
                  </div>
                  <div className="rounded-xl border border-border/10 bg-foreground/60 p-6 md:p-7 min-h-[150px] md:min-h-[210px] flex flex-col justify-center">
                    <p className="text-sm md:text-base opacity-80">Satisfaction</p>
                    <p className="mt-3 text-5xl md:text-6xl font-semibold text-primary">{satisfaction}%</p>
                  </div>
                </div>
                <p className="mt-8 text-sm md:text-base opacity-90">Widget control provides a clear overview of the most important analytics at a glance.</p>
              </div>
            </article>
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="relative">
              <div className="text-xl md:text-2xl font-semibold">Up to</div>
              <div className="relative flex items-end gap-3">
                <span className="font-heading tabular-nums leading-none text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
                  {efficiency}
                  <span>%</span>
                </span>
                <span className="pb-1 md:pb-2 text-base md:text-lg text-muted-foreground">efficiency boost</span>
                <span aria-hidden className="absolute -z-10 left-2 bottom-1 h-16 w-16 md:h-24 md:w-24 rounded-full bg-primary/15 blur-2xl" />
              </div>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">Our clean, minimal interfaces reduce friction and highlight the data that matters, helping you move from insights to action faster.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
