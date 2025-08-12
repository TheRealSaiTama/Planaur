export default function FooterVideo() {
  return (
    <section className="pt-0 pb-0 -mt-12 md:-mt-20">
      <div className="container">
        <div className="mx-auto flex items-center justify-center">
          <video
            src="/planaur3.mp4"
            className="relative block w-full max-w-7xl h-40 md:h-48 object-contain mix-blend-multiply pointer-events-none z-[-1]"
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


