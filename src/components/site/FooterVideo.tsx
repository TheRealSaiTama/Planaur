import { useEffect, useRef } from "react";

export default function FooterVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const videoSrc = `${import.meta.env.BASE_URL}realdeal.mp4`;

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
        <div className="mx-auto relative w-full max-w-7xl" style={{ background: 'hsl(var(--background))' }}>
          <video
            ref={ref}
            src={videoSrc}
            preload="auto"
            className="block w-full h-auto object-contain pointer-events-none"
            style={{ transform: 'translateZ(0)' }}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            onCanPlay={() => { try { ref.current?.play(); } catch {} }}
            onError={(e) => {
              const v = e.currentTarget as HTMLVideoElement;
              // try a cache-busting reload
              const url = new URL(videoSrc, window.location.origin);
              url.searchParams.set('v', Date.now().toString());
              v.src = url.toString();
              try { v.play(); } catch {}
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}


