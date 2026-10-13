import React from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projectsData } from "../data/projects";

/**
 * Section 03 — Selected Work
 * Asymmetric editorial project showcase highlighting Lumina Health and DentCare.
 */
export default function SelectedWork() {
  const [lumina, dentcare] = projectsData;

  return (
    <section className="section selected-work-section" id="work">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          label="01 / SELECTED WORK"
          title="A FEW THINGS I'VE BUILT."
          lead="Engineered with clean architectural principles, real-time performance considerations, and verified production benchmarks."
        />

        {/* Asymmetric Editorial Grid */}
        <div className="work-grid-asymmetric">
          {/* Featured Project: Lumina Health */}
          <Reveal delay={0.2}>
            <ProjectCard project={lumina} isFeatured={true} />
          </Reveal>

          {/* Secondary Featured Project: DentCare */}
          <Reveal delay={0.4}>
            <ProjectCard project={dentcare} isFeatured={false} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
