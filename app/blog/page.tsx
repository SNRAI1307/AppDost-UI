"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { BlogHero } from "@/components/BlogHero"; 
import { BlogPostCard } from "@/components/BlogPostCard"; 
const blogPosts = [
  {
    title: "TestDisabled This account doesn't meet our policy...",
    desc: "TestDisabled This account doesn't meet our policy guidelines.Disabled This account doesn't meet our policy guidelines.Disabled This...",
    category: "DESIGN",
    author: "AppDost Team",
    date: "Oct 12, 2025",
    imgSrc: "/blog/placeholder-article.svg", 
    link: "#",
  },
  {
    title: "The Future of Web Development with Next.js 16",
    desc: "We dive deep into the new features of Next.js 16, including server actions, improved caching, and what it means for...",
    category: "TECH",
    author: "AppDost Team",
    date: "Oct 10, 2025",
    imgSrc: "/blog/placeholder-article.svg",
    link: "#",
  },
  {
    title: "UI vs. UX: What's the Difference and Why It Matters",
    desc: "A comprehensive guide for startups and businesses on understanding the critical roles of UI and UX design in product...",
    category: "DESIGN",
    author: "AppDost Team",
    date: "Oct 5, 2025",
    imgSrc: "/blog/placeholder-article.svg",
    link: "#",
  },
  
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        
        <BlogHero />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.title}
                title={post.title}
                desc={post.desc}
                category={post.category}
                author={post.author}
                date={post.date}
                imgSrc={post.imgSrc}
                link={post.link}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}