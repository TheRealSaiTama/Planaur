export default function FooterVideo() {
  return (
    <section className="pt-0 pb-0 -mt-6 md:-mt-8">
      <div className="container">
        <div className="mx-auto flex items-center justify-center">
          <video
            src="/planaur3.mp4"
            className="block w-full max-w-7xl h-28 md:h-36 object-contain"
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


