// appdost-ui/components/Preloader.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Animated Logo (the flip effect) */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotateY: -180 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateY: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        {/* Use next/image to load the logo from the /public folder */}
        <Image
          src="/logo.png"
          alt="AppDost Logo"
          width={96} // 24 * 4 = 96px
          height={96}
          priority // Load it first
        />
      </motion.div>

      {/* Loading Bar */}
      <div className="w-48 h-1.5 bg-secondary rounded-full overflow-hidden mt-6">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{
            width: "100%",
            transition: { duration: 2.5, ease: "linear", delay: 0.5 },
          }}
        />
      </div>
      <motion.p
        className="text-muted-foreground text-sm mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};