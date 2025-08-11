import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Sarah Chen", text: "The attention to detail and innovative features have transformed our workflow." },
  { name: "Michael Rodriguez", text: "Implementation was seamless and the results exceeded expectations." },
  { name: "Emily Watson", text: "Significantly improved productivity; intuitive interface makes tasks simple." },
];

export default function Feedback() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer.current = window.setInterval(() => setIdx((i) => (i + 1) % total), 5000);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="type-h2">What customers say</h2>
          <div className="flex items-center gap-3 text-sm text-muted">
            <button onClick={prev} aria-label="Previous" className="rounded-full border px-2 py-1">←</button>
            <span>{idx + 1}/{total}</span>
            <button onClick={next} aria-label="Next" className="rounded-full border px-2 py-1">→</button>
          </div>
        </div>
        <div className="rounded-2xl border bg-surface p-6 max-w-3xl">
          <p className="type-body text-lg">“{testimonials[idx].text}”</p>
          <div className="mt-4 text-sm text-muted">— {testimonials[idx].name}</div>
        </div>
      </div>
    </section>
  );
}
