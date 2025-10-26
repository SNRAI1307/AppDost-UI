// components/ContactWhyChooseUs.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, DollarSign, Award, Trophy, Lock, Target } from "lucide-react"; // Different icons

const reasons = [
 { icon: Zap, title: "Fast Delivery", desc: "We deliver high-quality solutions on time, every time, using agile methodologies." },
 { icon: DollarSign, title: "Competitive Pricing", desc: "Get the best value for your investment with transparent pricing and no hidden costs." },
 { icon: Award, title: "Dedicated Support", desc: "Our team is always here to support you throughout the entire project lifecycle and beyond." },
 { icon: Trophy, title: "Proven Track Record", desc: "We have a history of successful projects and satisfied clients across various industries." },
 { icon: Lock, title: "Data Security", desc: "We prioritize the security and confidentiality of your data with robust measures." },
 { icon: Target, title: "Custom Solutions", desc: "We tailor our services to meet your specific business needs and objectives." },
];

export const ContactWhyChooseUs = () => {
 return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-foreground">Why Choose AppDost?</h2>
         <div className="flex justify-center my-4">
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>
        <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
          We&apos;re more than just developers - we&apos;re your technology partners
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
             <Card key={reason.title} className="rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
               <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-xl inline-block mb-4">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-muted-foreground">{reason.desc}</p>
               </CardContent>
             </Card>
          ))}
        </div>
      </div>
    </section>
 );
};