// appdost-ui/components/DevelopmentProcess.tsx
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    step: "1",
    title: "Discovery & Planning",
    desc: "We dive deep into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
  },
  {
    step: "2",
    title: "Design & Prototype",
    desc: "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.",
  },
  {
    step: "3",
    title: "Development & Testing",
    desc: "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.",
  },
  {
    step: "4",
    title: "Deployment & Support",
    desc: "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.",
  },
];

export const DevelopmentProcess = () => {
  return (
    <div id="process" className="bg-gradient-to-b from-blue-600 to-primary text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-4">
          Our Development Process
        </h2>
        <div className="flex justify-center my-4">
          <div className="w-20 h-1 bg-white/50 rounded-full" />
        </div>
        <p className="text-lg text-blue-200 text-center mb-12 max-w-2xl mx-auto">
          A proven methodology that ensures quality, efficiency, and client
          satisfaction.
        </p>
        <div className="relative grid grid-cols-1 gap-8">
          {/* You can add a vertical line here if you want */}
          {/* <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-400/30 hidden md:block" /> */}
          
          {steps.map((item, index) => (
            <div key={item.step} className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400 text-blue-800 flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                {item.step}
              </div>
              <Card
                className="bg-white/90 text-foreground transition-all duration-300 hover:bg-white hover:scale-[1.02] shadow-lg w-full rounded-2xl"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};