import React from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Reusable Scroll-Triggered Reveal Component
 * Fades in and translates upward when element enters viewport.
 * Automatically respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 30,
  once = true,
  className = "",
  style = {}
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const initialY = direction === "up" ? distance : direction === "down" ? -distance : 0;
  const initialX = direction === "left" ? distance : direction === "right" ? -distance : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
