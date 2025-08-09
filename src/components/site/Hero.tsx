import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import Spline from "@splinetool/react-spline";
import heroImage from "@/assets/hero-notion.png";

export default function Hero() {
  return (
    <section className="relative overflow-visible pt-8 pb-12 md:pt-12 md:pb-16 snap-start">
      <div className="container animate-enter">
        <div className="rounded-[1.75rem] md:rounded-[2.25rem] border border-border bg-card shadow-xl overflow-hidden relative">
          <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-0 h-5 w-36 rounded-b-[14px] bg-foreground/5 blur-sm" />
          <div className="bg-background/70 backdrop-blur-sm border-b border-border px-3 md:px-4 py-2.5 flex items-center justify-between relative">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
              <div className="hidden md:flex items-center gap-3 ml-3 text-xs text-foreground/70">
                <img src="/images/planaur.jpg" alt="Planaur logo" className="h-5 w-auto rounded-[6px] ring-1 ring-border" />
                <ChevronLeft className="h-4 w-4" />
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="hidden md:flex items-center gap-2 relative rounded-full px-3 py-1.5 text-xs text-foreground/80 backdrop-blur-md border border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_1px_2px_rgba(2,6,23,0.06),0_8px_24px_rgba(2,6,23,0.08)] bg-gradient-to-b from-white/85 to-white/70 dark:from-foreground/20 dark:to-foreground/10">
                <Lock className="h-3.5 w-3.5 opacity-80" />
                <span className="tracking-wide">planaur.app</span>
                <span aria-hidden className="pointer-events-none absolute -inset-px rounded-full ring-1 ring-black/5" />
              </div>
            </div>
            <div className="w-14" />
          </div>

          {/* Hero content */}
          <div className="relative overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

            <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2 px-0 md:px-10 pt-0 md:pt-6 pb-8 md:pb-12">
              <div className="col-span-2">
                <div className="relative h-[60vh] md:h-[70vh] w-full border-b border-border overflow-hidden">
                  <Spline scene="https://prod.spline.design/CXkWCa4xq7xVnTuc/scene.splinecode" />
                </div>
              </div>
              <div className="px-6 md:px-0">
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground mb-6">
                  +45% Boost your productivity
                </span>
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                  Notion Templates That Organize Your Chaos into Actionable Productivity
                </h1>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Maximize efficiency with our intuitive Notion templates.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild>
                    <a href="/templates" className="group">
                      Explore Templates
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/templates">View Pricing</a>
                  </Button>
                </div>
              </div>
              <div className="relative px-6 md:px-0">
                <div className="rounded-xl border border-border bg-card/80 p-2 shadow-sm">
                  <img
                    src={heroImage}
                    alt="Clean Notion dashboard mockup"
                    className="rounded-lg w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
