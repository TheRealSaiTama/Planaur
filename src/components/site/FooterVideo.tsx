export default function FooterVideo() {
  return (
    <section className="pt-0 pb-8 md:pb-10 -mt-10 md:-mt-12">
      <div className="container">
        <div className="mx-auto flex items-center justify-center">
          <video
            src="/planaur3.mp4"
            className="block w-full max-w-5xl h-10 md:h-14 object-contain"
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


