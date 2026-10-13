import React from "react";
import Reveal from "./Reveal";

/**
 * Section Heading Component
 * Standardized neo-brutalist section header with label badge, oversized title, and lead copy.
 */
export default function SectionHeading({
  label,
  title,
  lead,
  align = "left",
  className = ""
}) {
  return (
    <div className={`section-heading-wrap ${className}`} style={{ textAlign: align }}>
      {label && (
        <Reveal delay={0.1}>
          <span className="section-label-badge">
            <span aria-hidden="true">■</span> {label}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <h2 className="section-main-title">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.3}>
          <p className="section-lead-text">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
