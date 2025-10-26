// components/ProjectCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  desc: string;
  imgSrc: string;
  category: string; // Used for filtering
  displayCategory: string; // Displayed on the card
  tags: string[];
  links?: { label: string; href: string }[]; // Optional links
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      key={project.title}
      className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group"
    >
      <div className="overflow-hidden h-56">
        <Image
          src={project.imgSrc}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <span className="text-xs font-semibold bg-purple-100 text-primary px-2 py-1 rounded-full">
          {project.displayCategory}
        </span>
        <h3 className="text-xl font-semibold my-3">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 h-24 overflow-hidden"> {/* Increased height */}
          {project.desc}
        </p>
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-3">
             {/* Updated button text */}
            <Link href="#" className="text-sm font-semibold text-primary hover:underline">
              View Details &rarr;
            </Link>
          </div>
        )}
         {/* Fallback if no links */}
         {!project.links && (
           <Link href="#" className="text-sm font-semibold text-primary hover:underline">
              View Details &rarr;
            </Link>
         )}
      </CardContent>
    </Card>
  );
};