// appdost-ui/components/WhatWeDo.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const services = [
  // ... (Keep the services array as is) ...
  { icon: "/icons/service-uiux.svg", title: "UI/UX Design Excellence", desc: "Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement." },
  { icon: "/icons/stat-laptop.svg", title: "Custom Software Development", desc: "Building robust, scalable enterprise solutions tailored to your unique business requirements." },
  { icon: "/icons/service-web.svg", title: "Web Application Development", desc: "Creating responsive, high-performance web applications using the latest frameworks and technologies." },
  { icon: "/icons/service-android.svg", title: "Mobile App Development", desc: "Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid." },
  { icon: "/icons/service-fullstack.svg", title: "Full-Stack Development", desc: "End-to-end development expertise covering frontend, backend, database, and cloud infrastructure." },
  { icon: "/icons/stat-rocket.svg", title: "Digital Transformation", desc: "Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud." },
];


export const WhatWeDo = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* ... (Keep the heading section as is) ... */}
       <div className="text-center">
        <span className="text-sm font-semibold bg-purple-100 text-primary px-3 py-1 rounded-full">
          ABOUT APPDOST
        </span>
        <h2 className="text-3xl font-extrabold text-foreground mt-4">
          Your Trusted Partner for Complete
          <br />
          <span className="text-primary">Digital Transformation</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
          AppDost is your trusted partner for complete digital transformation. We
          are a dynamic, innovation-driven IT solutions provider specializing in
          turning visionary ideas into powerful, market-ready products.
        </p>
        <h3 className="text-3xl font-extrabold text-foreground mt-16">
          What We Do
        </h3>
        <p className="text-lg text-muted-foreground mt-4 mb-12">
          Our Core Expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={service.title}
            // --- UPDATED CLASSES ---
            // Removed index check, added hover effect and transparent border
            className="rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-blue-600 hover:shadow-blue-200"
            // --- END UPDATES ---
          >
            <CardHeader>
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mb-2"
              />
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};