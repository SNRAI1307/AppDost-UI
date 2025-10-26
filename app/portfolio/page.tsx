// app/portfolio/page.tsx
"use client";
import { useState } from "react"; // Need state for filtering
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { PortfolioHero } from "@/components/PortfolioHero";
import { ProjectFilters } from "@/components/ProjectFilters";
import { ProjectCard, type Project } from "@/components/ProjectCard"; // Import type

// --- Define ALL your projects here ---
// Add more projects to this array as needed
const allProjects: Project[] = [
 {
    title: "BEU Mate - Bihar Engineering",
    desc: "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation. Available as both web ap...",
    imgSrc: "/projects/project-beu-mate.svg",
    category: "Mobile Apps", // For filtering
    displayCategory: "AI-Powered Educational Platform", // For display
    tags: ["React Native", "Node.js", "AI/ML", "Firebase", "MongoDB"],
    // links: [...] // Kept original structure, though button changed
  },
  {
    title: "Devskillquest",
    desc: "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, coding challenges, and industry-r...",
    imgSrc: "/projects/project-devskillquest.svg",
    category: "Web Development", // For filtering
    displayCategory: "Educational Platform", // For display
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket"],
  },
  {
    title: "The Weddings Chapter",
    desc: "A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor portfolios, booking management, budget ...",
    imgSrc: "/projects/project-weddings.svg",
    category: "Web Development", // For filtering
    displayCategory: "Wedding Planning Portal", // For display
    tags: ["PHP", "Laravel", "MySQL", "Vue.js", "Google Maps API"],
  },
   // --- Add more projects below ---
  {
    title: "E-commerce Store",
    desc: "Scalable online store with product management, user accounts, and secure checkout, built for high traffic.",
    imgSrc: "/projects/project-devskillquest.svg", // Re-use placeholder
    category: "E-commerce",
    displayCategory: "Online Retail Platform",
    tags: ["React", "Node.js", "Stripe", "AWS"],
  },
   {
    title: "UI/UX Redesign for App",
    desc: "Complete visual and interaction overhaul for a mobile application, focusing on user engagement and accessibility.",
    imgSrc: "/projects/project-beu-mate.svg", // Re-use placeholder
    category: "UI/UX Design",
    displayCategory: "Mobile App Redesign",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  // Add more...
];
// --- End project data ---


export default function PortfolioPage() {
  const [currentFilter, setCurrentFilter] = useState("All Projects");

  // Filter the projects based on the current selection
  const filteredProjects = currentFilter === "All Projects"
    ? allProjects
    : allProjects.filter(project => project.category === currentFilter);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PortfolioHero />
        <ProjectFilters
          selectedFilter={currentFilter}
          onFilterChange={setCurrentFilter} // Pass the state setter function
        />

        {/* Project Grid Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {filteredProjects.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              No projects found for this filter.
            </div>
          )}
        </section>
        {/* You might want to add a CTA section here as well */}
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}