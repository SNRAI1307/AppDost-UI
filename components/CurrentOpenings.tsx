// components/CurrentOpenings.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const CurrentOpenings = () => {
  // In the future, you might fetch job openings here
  const hasOpenings = false; // Set to true to show job listings

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">Current Openings</h2>

        {hasOpenings ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through job openings here and display cards */}
          </div>
        ) : (
          <Card className="max-w-2xl mx-auto rounded-2xl shadow-lg text-center">
            <CardContent className="p-12 flex flex-col items-center">
              <Image src="/icons/career-briefcase.svg" alt="Briefcase" width={64} height={64} className="mb-6"/>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Current Openings</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                We don&apos;t have any job openings at the moment, but we&apos;re always looking for
                talented individuals to join our team. Feel free to submit your resume for
                future opportunities!
              </p>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                <Link href="#submit-resume">Submit Your Resume &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};