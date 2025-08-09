import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Plan = {
  id: "popular" | "pro" | "advanced";
  name: string;
  description: string;
  price: number;
};

const plans: Plan[] = [
  { id: "popular", name: "Popular", description: "For Small Businesses", price: 40 },
  { id: "pro", name: "Pro", description: "For Marketing Teams", price: 50 },
  { id: "advanced", name: "Advanced", description: "For Agencies", price: 60 }
];

const featureBullets = [
  "Easily create, assign, and track tasks in real time.",
  "Chat, share files, and collaborate seamlessly with your team.",
  "Gain insights with detailed performance dashboards.",
  "Automate repetitive tasks with custom workflow rules.",
  "Connect with Dropbox, Google Drive, and more."
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan["id"]>("popular");

  return (
    <section id="pricing" className="py-24 md:py-28">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl tracking-tight">Choose the ideal plan</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Get access to premium features designed to boost productivity and simplify your workflow with seamless performance.</p>
        </div>
        <div className="relative rounded-3xl border border-border bg-card/90 p-6 md:p-10 shadow-xl overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-pricing)" }} />
          <div className="grid gap-6 md:grid-cols-[1.15fr,1fr]">
            <div className="rounded-2xl border border-border bg-card/80 p-6 md:p-8 relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-pricing-selected)" }} />
              <div className="relative">
                <ul className="space-y-4">
                  {featureBullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-background text-primary border border-border"><Check className="h-3.5 w-3.5" /></span>
                      <span className="text-sm md:text-[15px] text-foreground/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 inline-flex items-center text-sm font-medium text-foreground/80 hover:text-foreground underline underline-offset-4">See All Comparison</a>
              </div>
            </div>

            <RadioGroup value={selectedPlan} onValueChange={(v) => setSelectedPlan(v as Plan["id"])} className="gap-4">
              {plans.map((plan) => (
                <label
                  key={plan.id}
                  htmlFor={`plan-${plan.id}`}
                  className={cn(
                    "relative flex items-center justify-between gap-4 rounded-2xl border p-5 md:p-6 cursor-pointer transition-colors",
                    selectedPlan === plan.id
                      ? "border-primary/40"
                      : "bg-card hover:bg-muted/30"
                  )}
                >
                  {selectedPlan === plan.id && (
                    <span aria-hidden className="absolute inset-0 opacity-80" style={{ background: "var(--gradient-pricing-selected)" }} />
                  )}
                  <div className="flex items-start gap-4">
                    <RadioGroupItem id={`plan-${plan.id}`} value={plan.id} />
                    <div className="relative">
                      <div className="font-semibold text-base">{plan.name}</div>
                      <div className="text-sm text-muted-foreground">{plan.description}</div>
                    </div>
                  </div>
                  <div className="relative text-right">
                    <div className="font-heading text-2xl md:text-3xl">${plan.price}<span className="ml-1 text-sm font-normal text-muted-foreground">/month</span></div>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
