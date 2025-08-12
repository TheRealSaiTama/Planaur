import { useEffect, useRef } from "react";

export default function FooterVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const onMeta = () => {
      try {
        if (v.currentTime === 0) v.currentTime = 0.01;
      } catch {}
    };
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {}
    };
    v.addEventListener("loadedmetadata", onMeta, { once: true });
    v.addEventListener("loadeddata", tryPlay, { once: true });
    tryPlay();
    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, []);
  return (
    <section className="pt-0 pb-0 -mt-12 md:-mt-20">
      <div className="container">
        <div className="mx-auto relative w-full max-w-7xl h-[240px] md:h-[355px] overflow-hidden">
          <video
            ref={ref}
            src="/planaur3.mp4#t=0.001"
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
            style={{ clipPath: 'inset(0 0 12% 0)', transform: 'translateZ(0)' }}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            onCanPlay={() => { try { ref.current?.play(); } catch {} }}
          >
            <source src="/planaur3.mp4#t=0.001" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}


