import React from "react";
import { Code2, Layers, Database, Cloud, Cpu } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { skillsData } from "../data/skills";

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu
};

/**
 * Section 06 — Skills
 * Outlined visual clusters with no arbitrary progress bars.
 */
export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          label="03 / MY TOOLBOX"
          title="TOOLS OF THE TRADE."
          lead="Categorized technical stack focused on scalable web applications, REST services, and machine learning pipelines."
        />

        <div className="skills-grid">
          {skillsData.map((cluster, idx) => {
            const IconComponent = iconMap[cluster.iconName] || Code2;

            return (
              <Reveal key={cluster.category} delay={0.1 * (idx + 1)}>
                <div className={`skill-category-card ${cluster.cardClass}`}>
                  {/* Category Header */}
                  <div className="skill-category-header">
                    <h3 className="skill-category-title">{cluster.category}</h3>
                    <IconComponent size={22} strokeWidth={2.5} />
                  </div>

                  {/* Skills Cloud */}
                  <div className="skill-tag-cloud">
                    {cluster.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`tag ${
                          cluster.theme === "black"
                            ? "tag-black"
                            : cluster.theme === "pink"
                            ? "tag-paper"
                            : cluster.theme === "lime"
                            ? "tag-white"
                            : "tag-lime"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
