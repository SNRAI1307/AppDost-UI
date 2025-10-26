// appdost-ui/app/main-page.tsx
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WorkCulture } from "@/components/WorkCulture";
import { DevelopmentProcess } from "@/components/DevelopmentProcess";
import { OpenSourceProjects } from "@/components/OpenSourceProjects";
import { Technologies } from "@/components/Technologies";
import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";
import { WhatWeDo } from "@/components/WhatWeDo"; // Import the new component

export default function MainPage() {
  return (
    <main>
      {/* Hero is not animated, it animates its own content */}
      <Hero />

      <AnimatedSection>
        <Stats />
      </AnimatedSection>
      
      {/* This is the new "What We Do" section */}
      <AnimatedSection>
        <WhatWeDo />
      </AnimatedSection>

      {/* This is the "Our Services" section */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>

      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection>
        <WorkCulture />
      </AnimatedSection>

      {/* DevelopmentProcess has its own background, so no AnimatedSection */}
      <DevelopmentProcess />

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <OpenSourceProjects />
      </AnimatedSection>

      <AnimatedSection>
        <Technologies />
      </AnimatedSection>

      <AnimatedSection>
        <Blog />
      </AnimatedSection>

      {/* CTA has its own background, so no AnimatedSection */}
      <CTA />
    </main>
  );
}