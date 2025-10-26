// appdost-ui/components/Services.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion"; // Make sure motion is imported

const services = [
  // ... (Keep the services array as is) ...
  { icon: "/icons/service-android.svg", title: "Android App Development", desc: "Custom Android applications built with the latest technologies to bring your ideas to life.", items: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support"] },
  { icon: "/icons/service-web.svg", title: "Web Development", desc: "Responsive and scalable web applications tailored to your business needs.", items: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"] },
  { icon: "/icons/service-uiux.svg", title: "UI/UX Development", desc: "Beautiful, intuitive user interfaces that enhance user experience and engagement.", items: ["User Research", "Wireframing", "Brand Identity"] },
  { icon: "/icons/service-crm.svg", title: "CRM Software", desc: "Comprehensive CRM solutions to manage customer relationships and boost productivity.", items: ["Custom Development", "Integration Services", "Training & Support"] },
  { icon: "/icons/service-cloud.svg", title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services for modern businesses.", items: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning"] },
  { icon: "/icons/service-cybersecurity.svg", title: "Cybersecurity", desc: "Protect your business with robust security solutions and best practices.", items: ["Security Audits", "Penetration Testing", "Compliance"] },
];

export const Services = () => {
  return (
    <div id="services" className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* ... (Keep the heading section as is) ... */}
      <h2 className="text-3xl font-extrabold text-center text-foreground">
        Our Services
      </h2>
      <div className="flex justify-center my-4">
        <div className="w-20 h-1 bg-blue-600 rounded-full" />
      </div>
      <p className="text-lg text-muted-foreground text-center mt-4 mb-12 max-w-2xl mx-auto">
        We deliver end-to-end IT solutions that drive business growth and digital
        transformation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div // Keep the motion div for hover lift
            key={service.title}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              // --- UPDATED CLASSES ---
              // Removed index check, added hover effect and transparent border
              className="rounded-2xl shadow-lg h-full flex flex-col justify-between border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-blue-600 hover:shadow-blue-200"
              // --- END UPDATES ---
            >
              <CardHeader className="items-center text-center">
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
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-sm gap-3">
                      <Check className="w-5 h-5 p-1 rounded-full bg-green-100 text-green-600" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};