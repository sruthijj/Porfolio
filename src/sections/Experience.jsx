import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { experienceData } from "../data/experience";

/**
 * Section 07 — Experience
 * Typographic timeline showcasing professional engineering internship at Elif Consultancy & Services.
 */
export default function Experience() {
  const [internship] = experienceData;

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading
          label="04 / WHERE I'VE WORKED"
          title="LEARNING BY BUILDING."
          lead="Real-world engineering impact, frontend optimization, and agile team collaboration."
        />

        <Reveal delay={0.2}>
          <div className="timeline-card">
            {/* Header / Role Details */}
            <div className="timeline-header-grid">
              <div>
                <h3 className="timeline-role-title">{internship.role}</h3>
                <div className="timeline-company-name">
                  <Briefcase size={20} />
                  <span>{internship.company}</span>
                </div>
              </div>

              <div className="timeline-meta-badges">
                <span className="tag tag-lime" style={{ fontSize: "0.85rem", padding: "0.4rem 0.8rem" }}>
                  <Calendar size={14} />
                  <span>{internship.duration}</span>
                </span>
                <span className="tag tag-white" style={{ fontSize: "0.85rem", padding: "0.4rem 0.8rem" }}>
                  <MapPin size={14} />
                  <span>{internship.location}</span>
                </span>
              </div>
            </div>

            {/* Bullet Points with Highlighted Metrics */}
            <ul className="timeline-bullets-list">
              {internship.achievements.map((item, idx) => (
                <li key={idx} className="timeline-bullet-item">
                  <div className="timeline-bullet-marker">
                    {idx + 1}
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 800,
                        background: "var(--color-pink)",
                        padding: "0.15rem 0.45rem",
                        border: "var(--border-thin)",
                        marginRight: "0.5rem",
                        display: "inline-block"
                      }}
                    >
                      {item.metric}
                    </span>
                    <span>{item.highlight}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
