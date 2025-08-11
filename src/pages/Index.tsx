import Navbar from "@/components/site/Navbar";
import React, { Suspense, useState } from "react";
const Hero = React.lazy(() => import("@/components/site/Hero"));
const TemplatesStack = React.lazy(() => import("@/components/site/TemplatesStack"));
const HowItWorks = React.lazy(() => import("@/components/site/HowItWorks"));
const NewlyAdded = React.lazy(() => import("@/components/site/NewlyAdded"));
const Testimonials = React.lazy(() => import("@/components/site/Testimonials"));
const Newsletter = React.lazy(() => import("@/components/site/Newsletter"));
const HelpLinks = React.lazy(() => import("@/components/site/HelpLinks"));
import Footer from "@/components/site/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "@/components/ui/button";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {entered ? (
        <>
          <Navbar />
          <main className="snap-y snap-mandatory">
            <Suspense fallback={<div className="min-h-[50vh]" />}> 
              <Hero />
              <TemplatesStack />
              <HowItWorks />
              <NewlyAdded />
              <Testimonials />
              <Newsletter />
              <HelpLinks />
            </Suspense>
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
