import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { TextLoop } from "@/components/core/text-loop";

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    toast({ title: ok ? "Subscribed!" : "Invalid email", description: ok ? "You're on the list for tips & updates." : "Please enter a valid email address." });
    if (ok) setEmail("");
  }

  return (
    <section id="contact" className="pt-8 pb-1">
      <div className="container">
        <div className="mb-2 text-center">
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Beautiful templates for{" "}
            <TextLoop
              className="ml-2"
              transition={{ type: "spring", stiffness: 900, damping: 80, mass: 10 }}
              variants={{ initial: { y: 20, rotateX: 90, opacity: 0, filter: "blur(4px)" }, animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }, exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" } }}
            >
              <span>Founders</span>
              <span>Developers</span>
              <span>Designers</span>
              <span>Design Engineers</span>
            </TextLoop>
          </p>
        </div>
        <div className="relative -mt-1 md:mt-20 rounded-3xl border border-border bg-card/80 p-6 md:p-10 overflow-hidden shadow-xl md:shadow-2xl">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-pricing)" }} />
          <div aria-hidden className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-primary/90">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-medium">Join 2,000+ productivity fans</span>
              </div>
              <h3 className="mt-3 font-heading text-3xl md:text-4xl">Get productivity tips & template updates</h3>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-foreground/80">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1"><CheckCircle2 className="h-4 w-4 text-primary" /> No spam</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1"><CheckCircle2 className="h-4 w-4 text-primary" /> 1× monthly</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Unsubscribe anytime</span>
              </div>
            </div>
            <form onSubmit={onSubmit} className="relative flex w-full md:w-auto items-center gap-3">
              <Input type="email" inputMode="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" className="w-full md:w-80 h-11 md:h-12 rounded-full" />
              <Button type="submit" className="h-11 md:h-12 rounded-full px-6">Subscribe</Button>
              <div aria-hidden className="pointer-events-none absolute -z-10 inset-0 rounded-full" />
            </form>
          </div>
          <div aria-hidden className="absolute -bottom-10 right-0 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
