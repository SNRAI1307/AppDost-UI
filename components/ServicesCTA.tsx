// components/ServicesCTA.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ServicesCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Let&apos;s Build Something Amazing Together</h2>
        <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
          Contact us today to discuss your project requirements
        </p>
        <Button asChild size="lg" variant="secondary" className="rounded-full text-primary hover:bg-gray-200 shadow-lg px-8 py-3 text-lg">
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </div>
    </section>
  );
};