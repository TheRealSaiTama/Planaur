export default function FooterVideo() {
  return (
    <section className="pt-0 pb-0 -mt-12 md:-mt-20">
      <div className="container">
        <div className="mx-auto relative w-full max-w-7xl h-[240px] md:h-[355px] overflow-hidden">
          <video
            src="/planaur3.mp4"
            className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply pointer-events-none"
            style={{ clipPath: 'inset(0 0 12% 0)' }}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </div>
      </div>
    </section>
  );
}


