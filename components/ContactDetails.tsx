import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
  </svg>
);

const details = [
  {
    icon: "/icons/contact-email.svg",
    title: "Email Us",
    info: "contact@appdost.in",
    link: "mailto:contact@appdost.in",
    response: "We respond within 24 hours",
  },
  {
    icon: "/icons/contact-phone.svg",
    title: "Call Us",
    info: "+91 76350 75422\n+91 11 6929 0750",
    link: "tel:+917635075422",
    response: "Mon - Sat: 9:00 AM - 6:00 PM IST",
  },
  {
    icon: "/icons/contact-map.svg",
    title: "Our Offices",
    info: "3 Locations Across Bihar\n& Delhi",
    link: "#office-locations",
    response: "Visit us at our offices",
  },
  {
    icon: "/icons/contact-social.svg",
    title: "Social Media",
    info: "",
    link: "#",
    response: "Follow us for updates",
    social: true,
  },
];

export const ContactDetails = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {details.map((item) => (
        <Card
          key={item.title}
          className={`
            group transition-all duration-300 overflow-hidden
            bg-gradient-to-br from-primary to-blue-600
            hover:bg-white
          `}
        >
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div className="mb-4 p-3 bg-white/10 rounded-xl transition-colors duration-300 group-hover:bg-primary/10">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-card-foreground transition-colors duration-300">
              {item.title}
            </h3>
            {item.info && (
              <p className="text-sm whitespace-pre-line flex-grow text-blue-100 group-hover:text-card-foreground transition-colors duration-300">
                {item.info}
              </p>
            )}
            {item.social ? (
              <div className="flex gap-3 mt-4">
                <Link href="#" passHref>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 border-white/20 text-white group-hover:text-card-foreground group-hover:bg-blue-50 group-hover:border-blue-200 rounded-full transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#" passHref>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 border-white/20 text-white group-hover:text-card-foreground group-hover:bg-blue-50 group-hover:border-blue-200 rounded-full transition-all duration-300"
                  >
                    <XIcon />
                  </Button>
                </Link>
                <Link href="#" passHref>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 border-white/20 text-white group-hover:text-card-foreground group-hover:bg-blue-50 group-hover:border-blue-200 rounded-full transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#" passHref>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 border-white/20 text-white group-hover:text-card-foreground group-hover:bg-blue-50 group-hover:border-blue-200 rounded-full transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ) : (
              <Link
                href={item.link}
                className="text-xs mt-3 text-blue-200 group-hover:text-card-foreground hover:underline transition-colors duration-300"
              >
                {item.response}
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
