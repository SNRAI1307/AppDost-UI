// components/PortfolioHero.tsx
"use client";

export const PortfolioHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 pt-32 pb-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold">Our Portfolio</h1>
        <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
          Real projects. Real results. See how we&apos;ve helped businesses transform their digital presence.
        </p>
      </div>
    </section>
  );
};