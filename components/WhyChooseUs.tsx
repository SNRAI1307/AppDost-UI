// appdost-ui/components/WhyChooseUs.tsx
import { CheckCircle2 } from "lucide-react";

const features = [
  "Complete Lifecycle Expertise",
  "Cutting-Edge Technology Stack",
  "Agile Development Process",
  "Quality-First Approach",
  "Scalable Solutions",
  "Client-Centric Focus",
];

export const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
        Why Choose AppDost?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-muted-foreground font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};