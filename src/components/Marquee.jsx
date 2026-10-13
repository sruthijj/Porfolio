import React from "react";

/**
 * Continuous Marquee Ticker Component
 * Infinite horizontal scrolling text ticker with neo-brutalist styling.
 */
export default function Marquee({
  items = [],
  variant = "default", // "default" (ink), "pink", "lime"
  reverse = false,
  speed = "20s",
  className = ""
}) {
  const variantClass = variant === "pink" ? "pink-variant" : variant === "lime" ? "lime-variant" : "";
  const trackClass = `marquee-track ${reverse ? "reverse" : ""}`.trim();

  // Duplicate items array to create seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`marquee-container ${variantClass} ${className}`}
      role="region"
      aria-label="Scrolling Highlights"
    >
      <div className={trackClass} style={{ animationDuration: speed }}>
        {displayItems.map((item, idx) => (
          <span key={idx} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-star" aria-hidden="true">★</span>
          </span>
        ))}
      </div>
      <div className={trackClass} style={{ animationDuration: speed }} aria-hidden="true">
        {displayItems.map((item, idx) => (
          <span key={`clone-${idx}`} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-star">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
