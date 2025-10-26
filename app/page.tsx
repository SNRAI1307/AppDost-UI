"use client";
import { useState, useEffect } from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import MainPage from "./main-page"; // Import the actual page content

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <MainPage /> {/* Render the rest of the page */}
          <Footer />
          <WhatsAppWidget />
        </>
      )}
    </>
  );
}