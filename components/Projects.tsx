// appdost-ui/components/Projects.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Use next/image for optimization
import Link from "next/link";

const projects = [
  {
    title: "BEU Mate - Bihar Engineering",
    desc: "An AI-powered study companion for B.Tech students offering personalized learning.",
    imgSrc: "/projects/project-beu-mate.svg",
    tags: ["React Native", "Node.js", "AI/ML"],
    links: [
      { label: "Play Store", href: "#" },
      { label: "Website", href: "#" },
    ],
  },
  {
    title: "Devskillquest",
    desc: "An interactive learning platform for aspiring developers to master coding.",
    imgSrc: "/projects/project-devskillquest.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    links: [{ label: "Website", href: "#" }],
  },
  {
    title: "The Weddings Chapter",
    desc: "A premium wedding planning platform connecting couples with top vendors.",
    imgSrc: "/projects/project-weddings.svg",
    tags: ["PHP", "Laravel", "MySQL"],
    links: [{ label: "Website", href: "#" }],
  },
];

export const Projects = () => {
  return (
    <div
      id="projects"
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold text-center text-foreground">
        Our Featured Projects
      </h2>
      <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
        Real solutions for real businesses—explore our successful projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden transition-all duration-300 ease-in-out
                       hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Optimized Image */}
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.desc}
              </p>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex gap-3">
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    asChild
                    variant={link.label === "Website" ? "outline" : "default"}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};