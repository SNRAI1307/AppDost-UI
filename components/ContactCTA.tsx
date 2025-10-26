// components/ContactCTA.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ContactCTA = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl overflow-hidden p-12 text-center relative">
        {/* Background decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full opacity-50" />
        <div className="absolute -bottom-16 -right-5 w-52 h-52 bg-white/5 rounded-full opacity-50" />

        <h2 className="text-3xl font-extrabold text-white mb-4 z-10 relative">Ready to Start Your Project?</h2>
        <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8 z-10 relative">
          Our team is ready to turn your ideas into reality. Let&apos;s build something amazing together!
        </p>
        <div className="flex flex-wrap justify-center gap-4 z-10 relative">
          
          {/* Button 1: Make sure ONLY the Link is inside */}
          <Button asChild size="lg" variant="secondary" className="rounded-full text-primary hover:bg-gray-200 shadow-lg">
            <Link href="#send-message">Send Message &rarr;</Link>
            {/* NO other text, comments, or elements here */}
          </Button>

          {/* Button 2: Make sure ONLY the Link is inside */}
          <Button asChild size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
            <Link href="tel:+917635075422">Call Now</Link>
            {/* NO other text, comments, or elements here */}
          </Button>

        </div>
      </div>
    </section>
  );
};