import React from "react";
import notionCube from "@/assets/image.png";

function NotionBadge() {
  return (
    <img
      src={notionCube}
      alt="Notion logo"
      className="inline-block align-[-0.25em] h-[1.1em] w-auto mx-2 select-none"
      draggable={false}
      loading="lazy"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-visible pt-8 pb-12 md:pt-12 md:pb-16 snap-start">
      <div className="container animate-enter">
        <div className="rounded-[2rem] border border-border bg-white shadow-xl overflow-hidden">
          <div className="grid items-stretch lg:grid-cols-[1.3fr,0.7fr]">
            {/* Left copy */}
            <div className="px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
              <h1 className="font-league font-black text-[36px] leading-[1.02] md:text-[64px] md:leading-[1.04] lg:text-[90px] lg:leading-[1.04] text-black tracking-tight">
                <span className="block whitespace-nowrap fade-in">Notion <NotionBadge /> Templates</span>
                <span className="block whitespace-nowrap mt-2 md:mt-3 lg:mt-4 fade-in" style={{ animationDelay: "80ms" }}>that Organize Your</span>
                <span className="block whitespace-nowrap mt-2 md:mt-3 lg:mt-4">
                  <span className="text-[#7C7C7C] tracking-in-expand">chaos</span>
                  <span className="inline-block fade-in" style={{ animationDelay: "160ms" }}> into</span>
                </span>
                <span className="block whitespace-nowrap mt-2 md:mt-4 fade-in" style={{ animationDelay: "240ms" }}>Actionable</span>
                <span className="block whitespace-nowrap mt-2 md:mt-4 fade-in" style={{ animationDelay: "320ms" }}>Productivity</span>
              </h1>
            </div>
            {/* Right: Mini Mac screen mock with collage inside */}
            <div className="relative hidden lg:flex items-center justify-center pr-10">
              <div className="relative w-[520px] max-w-[90%] aspect-[16/10] rounded-[22px] border border-border bg-[#f5f5f4] shadow-xl overflow-hidden">
                <div className="absolute left-0 right-0 top-0 h-8 bg-[#e7e5e4] border-b border-border flex items-center gap-2 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
                </div>
                <img
                  src="/images/notioncollage.png"
                  alt="Collage of Notion templates"
                  className="absolute inset-0 h-full w-full object-cover pt-8"
                  loading="lazy"
                />
              </div>
              <span aria-hidden className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-3 w-40 rounded-full bg-black/10 blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
