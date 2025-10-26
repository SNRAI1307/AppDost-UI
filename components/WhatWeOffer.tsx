// components/WhatWeOffer.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// Using the same service icons
const services = [
  {
    icon: "/icons/service-android.svg",
    title: "Android App Development",
    desc: "Custom Android applications built with the latest technologies to bring your ideas to life.",
    items: ["Native & Hybrid Apps", "Play Store Deployment", "App Maintenance & Support"],
  },
  {
    icon: "/icons/service-web.svg",
    title: "Web Development",
    desc: "Responsive and scalable web applications tailored to your business needs.",
    items: ["Responsive Web Design", "E-commerce Solutions", "Progressive Web Apps"],
  },
  {
    icon: "/icons/service-uiux.svg",
    title: "UI/UX Development",
    desc: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
    items: ["User Research & Testing", "Wireframing & Prototyping", "Brand Identity Design"],
  },
  {
    icon: "/icons/service-crm.svg",
    title: "CRM Software",
    desc: "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
    items: ["Custom CRM Development", "Integration Services", "Training & Support"],
  },
  {
    icon: "/icons/service-cloud.svg",
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and migration services for modern businesses.",
    items: ["AWS, Azure, Google Cloud", "Migration Services", "Performance Tuning"],
  },
  {
    icon: "/icons/service-cybersecurity.svg",
    title: "Cybersecurity",
    desc: "Protect your business with robust security solutions and best practices.",
    items: ["Security Audits", "Penetration Testing", "Compliance"], // Items from screenshot missing, added placeholders
  },
];

export const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className="rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 text-center"
          >
            <CardHeader className="items-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mb-4"
              />
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-sm h-16">{service.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Use ul with discs instead of checkmarks */}
              <ul className="space-y-2 text-left list-disc list-inside">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};