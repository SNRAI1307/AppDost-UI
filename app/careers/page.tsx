// app/careers/page.tsx
"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CareersHero } from "@/components/CareersHero";
import { WhyWorkWithUs } from "@/components/WhyWorkWithUs";
import { CurrentOpenings } from "@/components/CurrentOpenings";
import { SubmitResumeForm } from "@/components/SubmitResumeForm";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <CareersHero />
        <WhyWorkWithUs />
        <CurrentOpenings />
        <SubmitResumeForm />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}