// appdost-ui/components/WorkCulture.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Users,
  TrendingUp,
  BookOpen,
  Scale,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "Encouraging creative problem-solving" },
  { icon: Users, title: "Collaborative Environment", desc: "Cross-functional teamwork" },
  { icon: BookOpen, title: "Continuous Learning", desc: "Regular training & workshops" },
  { icon: TrendingUp, title: "Growth Mindset", desc: "Diverse projects & new technologies" },
  { icon: Scale, title: "Work-Life Balance", desc: "Flexible arrangements" },
  { icon: Award, title: "Recognition & Rewards", desc: "Celebrating achievements" },
];

export const WorkCulture = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Work Culture */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            Work Culture & Values
          </h2>
          <p className="text-muted-foreground mb-8">At AppDost, we believe in:</p>
          <div className="space-y-6">
            {values.map((item) => (
              <Card
                key={item.title}
                className="transition-all duration-300 hover:shadow-md hover:border-primary/50 rounded-2xl"
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      {item.title}
                    </span>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Get in Touch */}
        <div>
          <Card className="bg-gradient-to-b from-primary to-blue-600 text-white rounded-2xl sticky top-24 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <span>contact@appdost.in</span>
                </li>
                 <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <span>hr@appdost.in</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <span>+91 76350 75422</span>
                </li>
                 {/* Added the second phone number */}
                 <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <span>+91 11 6929 0750</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white/80" />
                  <span>HQ-Patna, Motihari, Banka</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Button asChild variant="secondary" className="rounded-full text-primary hover:bg-gray-200">
                  <Link href="#">Join Our Team &rarr;</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  {/* <<< UPDATE THIS LINK */}
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};