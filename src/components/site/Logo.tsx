import React from "react";

type LogoProps = { height?: number; className?: string; scale?: number };

export default function Logo({ height = 40, className }: LogoProps) {
  return (
    <div className={["flex items-center gap-2", className].filter(Boolean).join(" ")}> 
      <img src="/images/planaur.jpg" alt="Planaur" style={{ height }} className="rounded-[6px] ring-1 ring-border select-none" draggable={false} />
      <span className="font-heading" style={{ fontFamily: 'var(--font-heading)' }}>Planaur</span>
    </div>
  );
}

