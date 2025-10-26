// appdost-ui/components/WhyChooseUs.tsx
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"; // <<< Import Card components

const features = [
  { title: "Complete Lifecycle Expertise", desc: "From ideation to deployment and beyond" },
  { title: "Cutting-Edge Technology Stack", desc: "We work with the latest tools and frameworks" },
  { title: "Agile Development Process", desc: "Fast iterations, continuous feedback, rapid delivery" },
  { title: "Quality-First Approach", desc: "Rigorous testing and code reviews ensure excellence" },
  { title: "Scalable Solutions", desc: "Built to grow with your business" },
  { title: "Client-Centric Focus", desc: "Your success is our success" },
];

export const WhyChooseUs = () => {
  return (
    // You might want to wrap this section in <AnimatedSection> on the homepage
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
        Why Choose AppDost?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
        {features.map((feature) => (
          // --- Wrap each item in a Card ---
          <Card
            key={feature.title}
            className="bg-gray-50/50 rounded-xl shadow-sm transition-shadow hover:shadow-md" 
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /> 
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4> 
                  <p className="text-sm text-muted-foreground">{feature.desc}</p> 
                </div>
              </div>
            </CardContent>
          </Card>
          // --- End Card wrapper ---
        ))}
      </div>
    </div>
  );
};