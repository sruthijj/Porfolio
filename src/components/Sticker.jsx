import React from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Neo-Brutalist Sticker Badge
 * Features thick outlines, hard offset shadow, and subtle floating animation.
 */
export default function Sticker({
  children,
  theme = "pink",
  rotation = -3,
  float = false,
  floatDelay = 0,
  className = "",
  style = {}
}) {
  const shouldReduceMotion = useReducedMotion();
  const themeClass = `sticker-${theme}`;

  if (shouldReduceMotion || !float) {
    return (
      <div
        className={`sticker-badge ${themeClass} ${className}`}
        style={{
          "--rot": `${rotation}deg`,
          transform: `rotate(${rotation}deg)`,
          ...style
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [rotation, rotation + 2, rotation]
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: floatDelay
      }}
      className={`sticker-badge ${themeClass} ${className}`}
      style={{
        "--rot": `${rotation}deg`,
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}
