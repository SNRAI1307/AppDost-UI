// appdost-ui/components/AnimatedSection.tsx
"use client";
import { motion } from "framer-motion";

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of it is in view, only once
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};