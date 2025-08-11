import Navbar from "@/components/site/Navbar";
import React, { Suspense } from "react";
const Hero = React.lazy(() => import("@/components/site/Hero"));
const TemplatesRow = React.lazy(() => import("@/components/TemplatesRow"));
const HowItWorks = React.lazy(() => import("@/components/HowItWorks"));
const Feedback = React.lazy(() => import("@/components/Feedback"));
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-[50vh]" />}> 
          <Hero />
          <TemplatesRow />
          <HowItWorks />
          <Feedback />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
