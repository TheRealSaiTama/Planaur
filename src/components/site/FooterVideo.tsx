export default function FooterVideo() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto flex items-center justify-center">
          <video
            src="/planaur.mp4"
            className="block w-full max-w-4xl h-auto max-h-16 md:max-h-20 object-contain object-top"
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


