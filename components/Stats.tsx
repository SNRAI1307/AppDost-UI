// appdost-ui/components/Stats.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Target, Rocket } from "lucide-react";

const stats = [
  { icon: Monitor, value: "10+", label: "Web Projects" },
  { icon: Smartphone, value: "4+", label: "Android Apps" },
  { icon: Target, value: "1", label: "CRM Project" },
  { icon: Rocket, value: "2025", label: "Founded Year" },
];

export const Stats = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
      <Card className="shadow-xl">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <stat.icon className="w-10 h-10 text-primary mb-2" />
                <h3 className="text-3xl font-bold text-foreground">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase mt-1">
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