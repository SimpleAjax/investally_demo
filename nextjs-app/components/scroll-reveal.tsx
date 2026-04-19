"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  viewportMargin?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  viewportMargin = "-50px",
}: ScrollRevealProps) {
  const directionStops = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionStops[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // cubic-bezier for smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
