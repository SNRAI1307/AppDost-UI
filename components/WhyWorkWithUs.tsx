// appdost-ui/components/WhyWorkWithUs.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const reasons = [
  { icon: "/icons/career-team.svg", title: "Expert Team", desc: "Work alongside 20+ talented developers who are passionate about technology and innovation." },
  { icon: "/icons/career-growth.svg", title: "Career Growth", desc: "Continuous learning opportunities, skill development programs, and clear career progression paths." },
  { icon: "/icons/career-projects.svg", title: "Innovative Projects", desc: "Work on cutting-edge projects using the latest technologies and industry best practices." },
  { icon: "/icons/career-balance.svg", title: "Work-Life Balance", desc: "Flexible working hours, remote work options, and a supportive work environment." },
  { icon: "/icons/career-recognition.svg", title: "Recognition", desc: "Performance-based rewards, employee recognition programs, and competitive compensation." },
  { icon: "/icons/career-learning.svg", title: "Learning Culture", desc: "Regular training sessions, workshops, certifications, and conference sponsorships." },
];

export const WhyWorkWithUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <h2 className="text-3xl font-extrabold text-center text-foreground">Why Work With Us?</h2>
        <div className="flex justify-center my-4">
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>
        {/* Subtitle missing, skipped */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {reasons.map((reason) => (
          <Card
            key={reason.title}
            // --- CHANGES HERE ---
            // 1. Removed the conditional border logic based on 'index'
            // 2. Added hover:border-blue-600 and hover:shadow-blue-200
            className={`rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 text-center hover:border-blue-600 hover:shadow-blue-200`}
            // --- END CHANGES ---
          >
            <CardHeader className="items-center pt-8">
              <Image src={reason.icon} alt={reason.title} width={64} height={64} className="mb-4" />
              <CardTitle className="text-xl">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{reason.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};