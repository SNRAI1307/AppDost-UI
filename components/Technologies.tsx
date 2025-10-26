// appdost-ui/components/Technologies.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import Button
import Link from "next/link"; // Import Link

const techLogos = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "Python", src: "/tech/python.svg" },
  { name: "MongoDB", src: "/tech/mongodb.svg" },
  { name: "AWS", src: "/tech/aws.svg" },
  { name: "Docker", src: "/tech/docker.svg" },
  { name: "Kotlin", src: "/tech/kotlin.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
];

export const Technologies = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-foreground">
        Technologies We Master
      </h2>
      <div className="flex justify-center my-4">
        <div className="w-20 h-1 bg-blue-600 rounded-full" />
      </div>
      <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
        We leverage cutting-edge technologies to build robust, scalable, and innovative
        solutions.
      </p>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {techLogos.map((tech) => (
          <Card
            key={tech.name}
            className="rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardContent className="p-4 flex flex-col items-center justify-center h-32">
              <div className="relative w-12 h-12">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground mt-3">
                {tech.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <<< ADD THIS SECTION BELOW THE GRID */}
      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground mb-4">
          Interested in working with us on your next project?
        </p>
        <Button asChild size="lg" variant="outline" className="rounded-full shadow-lg">
          <Link href="/contact">Start Your Project &rarr;</Link>
        </Button>
      </div>
      {/* >>> END OF ADDED SECTION */}

    </div>
  );
};