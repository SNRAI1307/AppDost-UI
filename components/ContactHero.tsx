// components/ContactHero.tsx
"use client";
import { PhoneCall } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-blue-600 to-cyan-500 pt-32 pb-16 text-white relative overflow-hidden">
       {/* Background decorative circles */}
       <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/5 rounded-full opacity-50" />
       <div className="absolute -bottom-16 -right-5 w-72 h-72 bg-white/5 rounded-full opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <span className="inline-flex items-center gap-2 font-semibold text-white uppercase bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
          <PhoneCall className="w-4 h-4" />
          Let&apos;s Talk
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold">Get In Touch</h1>
        <p className="text-lg md:text-xl text-blue-100 mt-6 max-w-2xl mx-auto bg-black/10 px-6 py-3 rounded-full backdrop-blur-sm">
          We&apos;d love to hear from you. Let&apos;s discuss how we can help bring your project to life!
        </p>
      </div>
    </section>
  );
};