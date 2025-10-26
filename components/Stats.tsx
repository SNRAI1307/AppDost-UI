// appdost-ui/components/Stats.tsx
import { Card, CardContent } from "@/components/ui/card";
// Import the lucide icons again
import { Monitor, Smartphone, Target, Rocket } from "lucide-react";

// Use the lucide icon components in the data array
const stats = [
  { icon: Monitor, value: "10+", label: "WEB PROJECTS" },
  { icon: Smartphone, value: "4+", label: "ANDROID APPS" },
  { icon: Target, value: "1", label: "CRM PROJECT" },
  { icon: Rocket, value: "2025", label: "FOUNDED YEAR" },
];

export const Stats = () => {
  return (
    // Keep the overlapping layout classes
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 sm:-mt-20 md:-mt-24">
      <Card className="shadow-xl rounded-2xl bg-white">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                {/* Render the icon as a component again */}
                <stat.icon className="w-10 h-10 text-primary mb-3" /> {/* Adjusted size and color */}

                {/* Keep the updated Text Styles */}
                <h3 className="text-4xl font-extrabold text-primary"> {/* Bolder, primary color */}
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold text-gray-700 uppercase mt-1"> {/* Darker gray color */}
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};