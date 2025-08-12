import { useEffect, useRef } from "react";

export default function FooterVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {}
    };
    v.addEventListener("loadeddata", tryPlay, { once: true });
    tryPlay();
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <section className="pt-0 pb-0 -mt-12 md:-mt-20">
      <div className="container">
        <div className="mx-auto relative w-full max-w-7xl h-[240px] md:h-[355px] overflow-hidden">
          <video
            ref={ref}
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply pointer-events-none"
            style={{ clipPath: "inset(0 0 6% 0)" }}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source src="/planaur3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}


