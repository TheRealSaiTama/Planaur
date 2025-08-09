import React from "react";

type LogoProps = { height?: number; className?: string; scale?: number };

export default function Logo({ height = 40, className, scale = 5 }: LogoProps) {
  const scaledHeight = Math.round(height * scale);
  const offset = Math.round((scaledHeight - height) / 2);
  return (
    <div className={className} style={{ height, lineHeight: 1, overflow: "hidden" }}>
      <img
        src="/images/transparent.png"
        alt="Planaur"
        style={{ height: scaledHeight, width: "auto", display: "block", position: "relative", top: -offset }}
        className="select-none"
        draggable={false}
      />
    </div>
  );
}

