// appdost-ui/components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils"; // Import cn

export const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      // Use cn utility for cleaner conditional classes
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b", // Always have border-b
        hasScrolled
          ? "bg-background/90 backdrop-blur-sm shadow-md border-border" // Scrolled state: Opaque bg, shadow, standard border
          : "bg-transparent border-gray-200" // Default state: Transparent bg, VISIBLE light border
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AppDost Logo"
              width={168}
              height={40}
              priority
              className="w-32 md:w-44"
            />
          </Link>

          {/* Links (Hidden on mobile) */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = !link.href.includes('#') && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};