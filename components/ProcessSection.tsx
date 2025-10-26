// components/ProcessSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const steps = [
  { icon: "/icons/process-discovery.svg", title: "1. Discovery", desc: "We understand your requirements, goals, and target audience to create a strategic plan." },
  { icon: "/icons/process-design.svg", title: "2. Design", desc: "Our designers create intuitive and beautiful interfaces that enhance user experience." },
  { icon: "/icons/process-development.svg", title: "3. Development", desc: "Our expert developers bring designs to life using cutting-edge technologies." },
  { icon: "/icons/process-testing.svg", title: "4. Testing", desc: "Rigorous testing ensures quality, performance, and security of your solution." },
  { icon: "/icons/process-deployment.svg", title: "5. Deployment", desc: "We launch your solution and ensure smooth deployment to production." },
  { icon: "/icons/process-support.svg", title: "6. Support", desc: "Ongoing maintenance and support to keep your solution running smoothly." },
];

export const ProcessSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-foreground">Our Development Process</h2>
        <div className="flex justify-center my-4">
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>
        {/* Subtitle missing in screenshot, skipped */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step) => (
             <Card key={step.title} className="rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
               <CardHeader className="items-center">
                  <Image src={step.icon} alt={step.title} width={64} height={64} className="mb-4"/>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-muted-foreground">{step.desc}</p>
               </CardContent>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
};