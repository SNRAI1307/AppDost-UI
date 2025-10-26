// appdost-ui/components/Hero.tsx
"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
// Import CheckCircle, ShieldCheck, Clock for the new row
import { Monitor, Smartphone, Zap, Rocket, CheckCircle, ShieldCheck, Clock } from "lucide-react";

// This is the sub-component for the floating cards
const FloatingCard = ({
  icon: Icon,
  title,
  subtitle,
  className,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  className: string;
  delay?: number;
}) => (
  <motion.div
    // Animation: float up/down
    animate={{
      y: ["-8px", "8px"],
    }}
    transition={{
      delay,
      duration: 3 + delay, // Staggered duration
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className={className}
  >
    <Card className="shadow-xl rounded-2xl">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export const Hero = () => {
  // --- ADDED: Data for the satisfaction row ---
  const satisfactionItems = [
    { icon: CheckCircle, text: "100% Client Satisfaction" },
    { icon: ShieldCheck, text: "Secure & Scalable" },
    { icon: Clock, text: "24/7 Support" },
  ];
  // --- END ADDED DATA ---

  return (
    <section
      id="home"
      // --- UPDATED --- Added overflow-hidden
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* This is the new animated gradient background from your "goal" */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/50 blur-3xl rounded-full opacity-60"
          style={{ animation: "blob-animation 8s linear infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 blur-3xl rounded-full opacity-60"
          style={{ animation: "blob-animation 8s linear infinite reverse" }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content (Corrected) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            // --- UPDATED --- Added padding bottom for overlap
            className="pb-16 md:pb-24" // Adjust as needed
          >
            <span className="inline-flex items-center gap-2 font-semibold text-primary uppercase bg-purple-100 px-3 py-1 rounded-full text-sm">
              <Rocket className="w-4 h-4" />
              Complete IT Solution Provider Since 2025
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-6">
              Transform Your
              <br/>
              <span className="text-purple-600">Ideas Into</span> Digital
              <br/>
              <span className="text-blue-600">Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.
            </p>
            {/* --- UPDATED --- Added margin bottom to button container */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="rounded-full shadow-lg bg-gradient-to-r from-primary to-blue-600 text-white">
                <Link href="/services">Explore Our Services &rarr;</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-white shadow-lg">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* --- ADDED Satisfaction Row --- */}
            <div className="flex flex-wrap gap-4 justify-start">
              {satisfactionItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-gray-100/70 px-3 py-1.5 rounded-full shadow-sm">
                  <item.icon className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            {/* --- END ADDED Row --- */}

          </motion.div>

          {/* Right Side: Floating Cards */}
          {/* --- UPDATED positioning classes --- */}
          <div className="relative h-96 hidden md:block">
            <FloatingCard
              icon={Monitor}
              title="Web Development"
              subtitle="+10 Projects"
              // Moved further up and left
              className="absolute top-4 left-4 lg:left-8" // Adjusted left
              delay={0}
            />
            <FloatingCard
              icon={Smartphone}
              title="Mobile Apps"
              subtitle="+4 Apps"
              // Moved further down and right
              className="absolute bottom-8 right-4 lg:right-12" // Adjusted right and bottom
              delay={0.5}
            />
            <FloatingCard
              icon={Zap}
              title="Fast Delivery"
              subtitle="On Time"
              // Positioned more towards the horizontal center, lower down
              className="absolute bottom-16 left-1/3 lg:left-1/4 transform -translate-x-1/2" // Adjusted bottom and used translate
              delay={1}
            />
          </div>
          {/* --- END UPDATES --- */}
        </div>
      </div>
    </section>
  );
};