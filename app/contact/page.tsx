// app/contact/page.tsx
"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ContactHero } from "@/components/ContactHero";
import { ContactDetails } from "@/components/ContactDetails";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactWhyChooseUs } from "@/components/ContactWhyChooseUs";
import { OfficeLocations } from "@/components/OfficeLocations";
import { ContactInfoBanner } from "@/components/ContactInfoBanner";
import { ContactCTA } from "@/components/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactHero />
        <ContactDetails />
        <ContactFormSection /> {/* Contains the form and office details side-by-side */}
        <FaqSection />
        <ContactWhyChooseUs />
        <OfficeLocations />
        <ContactInfoBanner />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}