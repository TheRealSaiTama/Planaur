export default function FooterVideo() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto flex items-center justify-center">
          <div className="relative aspect-square w-[240px] md:w-[320px] rounded-3xl border border-border bg-card shadow-xl overflow-hidden">
            <video
              src="/planaur.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


