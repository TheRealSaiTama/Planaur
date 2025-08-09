import { useState } from "react";
import { ChevronRight, Globe, BookOpen, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    title: "Choose language and level",
    subtitle: "Select from over 30 languages and beginner to advanced levels",
    icon: Globe,
    color: "bg-yellow-200",
    content: {
      image: "/placeholder.svg",
      description: "Browse through our extensive collection of languages including English, German, French, Portuguese, Italian, Ukrainian and many more. Each language offers multiple proficiency levels from beginner (A1) to mastery (C2).",
      features: [
        "30+ languages available",
        "6 proficiency levels (A1-C2)",
        "Personalized difficulty adjustment",
        "Native speaker audio"
      ]
    }
  },
  {
    id: 2,
    title: "Interactive learning experience",
    subtitle: "Engage with dynamic lessons and real-time feedback",
    icon: BookOpen,
    color: "bg-blue-200",
    content: {
      image: "/placeholder.svg",
      description: "Experience immersive learning through interactive exercises, voice recognition, and adaptive algorithms that adjust to your learning pace and style.",
      features: [
        "Voice recognition technology",
        "Interactive exercises",
        "Real-time pronunciation feedback",
        "Adaptive learning algorithms"
      ]
    }
  },
  {
    id: 3,
    title: "Track your progress",
    subtitle: "Monitor achievements and celebrate milestones",
    icon: Trophy,
    color: "bg-green-200",
    content: {
      image: "/placeholder.svg",
      description: "Stay motivated with detailed progress tracking, achievement badges, and personalized learning analytics that show your improvement over time.",
      features: [
        "Detailed progress analytics",
        "Achievement badges",
        "Learning streaks",
        "Performance insights"
      ]
    }
  }
];

export default function InteractiveFeatures() {
  const [activeCard, setActiveCard] = useState<number>(1);

  const handleCardClick = (cardId: number) => {
    setActiveCard(cardId);
  };

  return (
    <section className="py-24 md:py-28 snap-start" id="about">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl tracking-tight">
            How it works
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const isActive = activeCard === feature.id;
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveCard(feature.id)}
                aria-expanded={isActive}
                className={cn(
                  "relative text-left rounded-2xl border border-border overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring will-change-[flex-basis]",
                  "transition-[flex-basis,box-shadow,background-color] duration-500 ease-out",
                  "basis-full md:basis-[22%] min-h-[480px] md:min-h-[520px]",
                  isActive ? "md:basis-[56%] bg-card shadow-lg" : "bg-card/80 hover:shadow-md"
                )}
              >
                <div className={cn("absolute inset-0", feature.color, isActive ? "opacity-70" : "opacity-40")}
                     style={{ transform: `translateZ(0)` }} />
                <div className="relative p-6">
                  <div className="flex items-start gap-3 min-h-[64px] md:min-h-[56px]">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold">{feature.id}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5" />
                        <h3 className={cn("font-heading text-2xl")}>{feature.title}</h3>
                      </div>
                      <p className={cn("mt-1 text-sm text-muted-foreground transition-opacity", isActive ? "opacity-0" : "opacity-100")}>{feature.subtitle}</p>
                    </div>
                    <ChevronRight className={cn("w-5 h-5 text-foreground/70 transition-transform", isActive ? "rotate-90" : "rotate-0")} />
                  </div>
                  <div className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-out mt-5", isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}> 
                    <div className="overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div>
                          <p className="text-muted-foreground mb-4">{feature.content.description}</p>
                          <ul className="space-y-2">
                            {feature.content.features.map((item, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-primary" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="w-full max-w-sm aspect-square bg-white/10 rounded-xl flex items-center justify-center">
                            <img src={feature.content.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}