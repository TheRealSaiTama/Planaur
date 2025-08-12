import Navbar from "@/components/site/Navbar";
import React, { Suspense } from "react";
const Hero = React.lazy(() => import("@/components/site/Hero"));
const TemplatesStack = React.lazy(() => import("@/components/site/TemplatesStack"));
const HowItWorks = React.lazy(() => import("@/components/site/HowItWorks"));
const NewlyAdded = React.lazy(() => import("@/components/site/NewlyAdded"));
const Testimonials = React.lazy(() => import("@/components/site/Testimonials"));
const Newsletter = React.lazy(() => import("@/components/site/Newsletter"));
const HelpLinks = React.lazy(() => import("@/components/site/HelpLinks"));
import FooterVideo from "@/components/site/FooterVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <FooterVideo />
    </div>
  );
};

export default Index;
