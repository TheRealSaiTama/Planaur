import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Highlights from "@/components/site/Highlights";
import Screens from "@/components/site/Screens";
import InteractiveFeatures from "@/components/site/InteractiveFeatures";
import TemplatesStack from "@/components/site/TemplatesStack";
import Features from "@/components/site/Features";
import Newsletter from "@/components/site/Newsletter";
import Footer from "@/components/site/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {entered ? (
        <>
          <Navbar />
          <main className="snap-y snap-mandatory">
            <Hero />
            <Highlights />
            <Screens />
            <InteractiveFeatures />
            <TemplatesStack />
            <AnimatedTestimonialsDemo />
            <Features />
            <Newsletter />
          </main>
          <Footer />
        </>
      ) : (
        <main>
          <section className="relative h-screen w-full flex items-center justify-center">
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative z-10 w-[92vw] md:w-[80vw] max-w-6xl h-[60vh] md:h-[70vh] flex items-center justify-center">
              <TextHoverEffect text="PLANAUR" />
            </div>
            <div className="absolute bottom-8 inset-x-0 flex items-center justify-center">
              <Button onClick={() => setEntered(true)}>Next</Button>
            </div>
          </section>
        </main>
      )}
    </div>
  );
};

export default Index;
