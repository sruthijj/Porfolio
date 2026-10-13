import React from "react";

/**
 * Neo-Brutalist 12-Point Starburst Component
 * Center text badge surrounded by a spinning geometric starburst.
 */
export default function Starburst({
  text = "BUILT WITH CURIOSITY",
  size = 140,
  fill = "#FF4FA3",
  textColor = "#171717",
  className = ""
}) {
  return (
    <div
      className={`starburst-container ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <svg
        className="starburst-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 16-point geometric star polygon */}
        <polygon
          points="50,0 61,22 85,15 78,39 100,50 78,61 85,85 61,78 50,100 39,78 15,85 22,61 0,50 22,39 15,15 39,22"
          fill={fill}
          stroke="#171717"
          strokeWidth="3.5"
          strokeLinejoin="miter"
        />
      </svg>
      <span className="starburst-text" style={{ color: textColor }}>
        {text}
      </span>
    </div>
  );
}
