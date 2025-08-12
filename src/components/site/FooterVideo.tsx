export default function FooterVideo() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-border bg-card shadow-xl overflow-hidden">
          <video
            src="/planaur.mp4"
            className="block w-full h-auto"
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


