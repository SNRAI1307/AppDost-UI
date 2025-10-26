// appdost-ui/components/CTA.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTA = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Background decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-16 -right-5 w-52 h-52 bg-white/10 rounded-full" />

          <h2 className="text-3xl font-extrabold text-white mb-4 z-10 relative">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 z-10 relative">
            Let&apos;s discuss how we can help transform your ideas into reality with
            cutting-edge technology and expert development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 z-10 relative">
            <Button asChild size="lg" variant="secondary" className="rounded-full text-primary hover:bg-gray-200">
              <Link href="/contact">Get Free Consultation &rarr;</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-white border-white/50 bg-transparent hover:bg-white hover:text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};