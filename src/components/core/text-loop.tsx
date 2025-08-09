"use client";
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type Variants = {
  initial: any;
  animate: any;
  exit: any;
};

export function TextLoop({
  children,
  className,
  interval = 2500,
  transition,
  variants,
}: {
  children: React.ReactNode;
  className?: string;
  interval?: number;
  transition?: any;
  variants?: Variants;
}) {
  const items = React.Children.toArray(children);
  const [idx, setIdx] = React.useState(0);
  const count = items.length;

  React.useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => setIdx((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [count, interval]);

  const fallbackVariants: Variants = {
    initial: { y: 12, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
    exit: { y: -12, opacity: 0, filter: "blur(4px)" },
  };

  return (
    <span className={cn("relative inline-block align-baseline", className)}>
      <span className="invisible">
        {items[0] as any}
      </span>
      <span className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={idx}
            initial={(variants || fallbackVariants).initial}
            animate={(variants || fallbackVariants).animate}
            exit={(variants || fallbackVariants).exit}
            transition={transition || { type: "spring", stiffness: 400, damping: 40, mass: 2 }}
            className="inline-block will-change-transform"
          >
            {items[idx] as any}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}


