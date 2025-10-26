// components/ContactInfoBanner.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock } from "lucide-react";

export const ContactInfoBanner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <Card className="rounded-2xl shadow-xl bg-white">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x">
          <div className="flex items-center gap-4 pt-4 md:pt-0">
             <Phone className="w-6 h-6 text-primary"/>
             <div>
                <h4 className="font-semibold text-gray-800">Call Us Anytime</h4>
                <p className="text-sm text-primary hover:underline">+91 76350 75422</p>
                <p className="text-sm text-primary hover:underline">+91 11 6929 0750</p>
             </div>
          </div>
           <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
             <Mail className="w-6 h-6 text-primary"/>
             <div>
                <h4 className="font-semibold text-gray-800">Email Us</h4>
                <p className="text-sm text-primary hover:underline">contact@appdost.in</p>
                <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
             </div>
          </div>
           <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
             <Clock className="w-6 h-6 text-primary"/>
             <div>
                <h4 className="font-semibold text-gray-800">Business Hours</h4>
                <p className="text-sm text-muted-foreground">Mon - Sat</p>
                <p className="text-xs text-gray-500">9:00 AM - 6:00 PM IST</p>
             </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};