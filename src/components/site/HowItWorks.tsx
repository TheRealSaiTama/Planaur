import React, { useMemo, useState, KeyboardEvent } from "react";

type Card = {
  color: string;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    color: "#555453",
    title: "Effortless Task Management",
    body:
      "Use built-in strategies like Pomodoro and priority matrices to organize daily tasks and boost output.",
  },
  {
    color: "#2A2928",
    title: "Business & IT Optimization",
    body:
      "Curated templates for CRM, bug tracking, and project planning—streamline teams without fluff.",
  },
  {
    color: "#222120",
    title: "Aesthetic Personal Planners",
    body:
      "Habit trackers and journals in styles from minimalistic to vibrant, making productivity enjoyable.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState<number | null>(null);

  const bases = useMemo(() => {
    // Default layout: first larger
    if (active === null) return ["50%", "25%", "25%"] as const;
    if (active === 0) return ["60%", "20%", "20%"] as const;
    if (active === 1) return ["20%", "60%", "20%"] as const;
    return ["20%", "20%", "60%"] as const;
  }, [active]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive((prev) => (prev === i ? null : i));
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-center font-heading text-3xl md:text-5xl tracking-tight mb-10">How It Works</h2>

        {/* Cards row */}
        <div className="flex gap-6 items-stretch">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              role="button"
              tabIndex={0}
              aria-pressed={active === i}
              onClick={() => setActive((prev) => (prev === i ? null : i))}
              onKeyDown={(e) => onKey(e, i)}
              className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                backgroundColor: card.color,
                flexBasis: bases[i],
                height: "clamp(280px, 36vh, 380px)",
                transform: active === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: active === i ? "0 30px 50px rgba(0,0,0,0.35)" : "0 14px 30px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>

        {/* Captions aligned to cards with matching flex-basis */}
        <div className="mt-6 flex gap-6 items-start">
          {CARDS.map((card, i) => {
            const inactive = active !== null && active !== i;
            return (
              <div
                key={card.title + "_caption"}
                role="button"
                tabIndex={0}
                aria-pressed={active === i}
                onClick={() => setActive((prev) => (prev === i ? null : i))}
                onKeyDown={(e) => onKey(e as any, i)}
                className="rise-in cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md"
                style={{
                  flexBasis: bases[i],
                  transition: "all 300ms ease",
                  opacity: inactive ? 0.45 : 1,
                  transform: inactive ? "translateY(0)" : "translateY(-2px)",
                }}
              >
                <h3 className="font-heading text-xl md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-muted-foreground max-w-[52ch]">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


