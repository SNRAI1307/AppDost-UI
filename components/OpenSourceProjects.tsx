// appdost-ui/components/OpenSourceProjects.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "DeepFake Detection",
    desc: "Advanced deep learning model for detecting media manipulated using computer vision.",
    imgSrc: "/opensource/project-deepfake.svg",
    tags: ["AI/ML", "Jupyter"],
    link: "#",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "NooBot",
    desc: "Smart automation bot built with Python for task scheduling and intelligent workflow automation.",
    imgSrc: "/opensource/project-noobot.svg",
    tags: ["Python", "Automation"],
    link: "#",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "EduTools",
    desc: "Collection of educational tools and utilities for students and teachers.",
    imgSrc: "/opensource/project-edutools.svg",
    tags: ["HTML/CSS", "Education"],
    link: "#",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "DialogFlow Chatbot",
    desc: "Intelligent chatbot using Google's DialogFlow ES for natural language processing.",
    imgSrc: "/opensource/project-dialogflow.svg",
    tags: ["DialogFlow", "NLP"],
    link: "#",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export const OpenSourceProjects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-foreground">
        Open Source & Innovation Projects
      </h2>
      <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
        Explore our contributions to AI, automation, and technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out
                       hover:shadow-2xl hover:-translate-y-2 group"
          >
            <div className={`h-56 relative overflow-hidden bg-gradient-to-br ${project.gradient} flex flex-col justify-center items-center p-6`}>
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={100}
                height={100}
                className="w-28 h-28 object-contain bg-white/90 rounded-full p-4 shadow-xl"
              />
              <h3 className="text-2xl font-bold text-white mt-4">{project.title}</h3>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 h-20">
                {project.desc}
              </p>
              <Button asChild variant="outline" className="rounded-full w-full">
                <Link href={project.link}>View on Github &rarr;</Link>
              </Button>
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