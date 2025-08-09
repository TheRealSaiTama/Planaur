"use client";
import { motion } from "motion/react";
import React, { ReactElement, cloneElement, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedBackgroundProps = {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
  transition?: any;
  enableHover?: boolean;
  highlightClassName?: string;
};

export function AnimatedBackground({ children, defaultValue, className, transition, enableHover = true, highlightClassName }: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | undefined>(defaultValue);
  const [rect, setRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

  function calcRectById(id?: string) {
    const root = containerRef.current;
    if (!root || !id) return null;
    const el = root.querySelector<HTMLElement>(`[data-id="${CSS.escape(id)}"]`);
    if (!el) return null;
    const a = el.getBoundingClientRect();
    const b = root.getBoundingClientRect();
    return { left: a.left - b.left, top: a.top - b.top, width: a.width, height: a.height };
  }

  useLayoutEffect(() => {
    const r = calcRectById(defaultValue);
    if (r) setRect(r);
    setActiveId(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    function onResize() {
      const r = calcRectById(activeId);
      if (r) setRect(r);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId]);

  const handleEnter = (id: string, el: HTMLElement) => {
    if (!enableHover) return;
    const root = containerRef.current;
    if (!root) return;
    const a = el.getBoundingClientRect();
    const b = root.getBoundingClientRect();
    setActiveId(id);
    setRect({ left: a.left - b.left, top: a.top - b.top, width: a.width, height: a.height });
  };

  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const id = (child.props as any)?.["data-id"] ?? String((child.props as any)?.children ?? "");
    return cloneElement(child as ReactElement, {
      "data-id": id,
      className: cn("relative z-10 px-3 py-1 text-sm", (child.props as any)?.className),
      onMouseEnter: (e: React.MouseEvent<HTMLElement>) => handleEnter(id, e.currentTarget),
    });
  });

  return (
    <div ref={containerRef} className={cn("relative inline-flex items-center gap-1 p-1", className)} onMouseLeave={() => setActiveId(defaultValue)}>
      {rect && (
        <motion.div
          className={cn("absolute rounded-md", highlightClassName || "bg-foreground/5 ring-1 ring-border")}
          style={{ top: 0, left: 0 }}
          animate={{ x: rect.left, y: rect.top, width: rect.width, height: rect.height }}
          transition={transition || { type: "spring", bounce: 0.2, duration: 0.3 }}
        />
      )}
      {enhancedChildren}
    </div>
  );
}


