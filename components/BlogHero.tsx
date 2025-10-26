
"use client";
import { FileText } from "lucide-react";

export const BlogHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 pt-32 pb-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <FileText className="w-10 h-10" />
          <h1 className="text-5xl font-extrabold">Our Blog</h1>
        </div>
        <p className="text-lg text-blue-100 mt-4 max-w-2xl">
          Insights, tutorials, and tech stories from the AppDost team
        </p>
      </div>
    </section>
  );
};