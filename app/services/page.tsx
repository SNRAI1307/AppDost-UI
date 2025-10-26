"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ServicesHero } from "@/components/ServicesHero";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesCTA } from "@/components/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ServicesHero />
        <WhatWeOffer />
        <ProcessSection />
        <ServicesCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}