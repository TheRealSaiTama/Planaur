import React from "react";

const items = [
  { title: "Purchase", desc: "Secure checkout via Stripe.", img: "/how/1.jpg" },
  { title: "Duplicate", desc: "Copy to your Notion in one click.", img: "/how/2.jpg" },
  { title: "Customize", desc: "Tweak pages and databases.", img: "/how/3.jpg" },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="type-h2 mb-8">How it works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="rounded-2xl bg-[var(--color-dark-1)] text-white overflow-hidden">
              <div className="aspect-[14/9] bg-black/20">
                <img src={it.img} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg">{it.title}</h3>
                <p className="mt-2 text-sm opacity-80">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
