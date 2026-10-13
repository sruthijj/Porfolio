import React from "react";
import { ArrowUpRight, CheckCircle, ExternalLink, BookOpen, Layers } from "lucide-react";
import Button from "./Button";
import { LuminaMockup, DentCareMockup } from "./ProjectMockups";

/**
 * Neo-Brutalist Project Card
 * Shows project details, verified achievements, interactive custom preview, and actions.
 */
export default function ProjectCard({ project, isFeatured = false }) {
  const isLumina = project.id === "lumina-health";

  return (
    <article
      className="project-card"
      style={{
        "--card-header-bg": project.theme === "lime" ? "var(--color-lime)" : "var(--color-paper)"
      }}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Card Header Bar */}
      <div className="project-card-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span className="project-num">{project.num}</span>
          <span className="project-category">{project.category}</span>
        </div>
        {project.hasLiveUrl ? (
          <span className="tag tag-lime">
            LIVE SYSTEM
          </span>
        ) : (
          <span className="tag tag-pink">
            AI LAB PROTOTYPE
          </span>
        )}
      </div>

      {/* Visual Preview Frame */}
      <div className="project-preview-frame">
        {isLumina ? <LuminaMockup /> : <DentCareMockup />}
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <h3 id={`project-title-${project.id}`} className="project-card-title">
          {project.title}
        </h3>

        <p className="project-card-desc">{project.description}</p>

        {/* Verified Technical Highlights */}
        <ul className="project-card-highlights">
          {project.verifiedHighlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="project-card-highlight-item">
              <CheckCircle size={16} strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="project-tech-tags">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tag tag-white">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="project-card-footer">
        <Button to={project.route} variant="primary" size="sm">
          <span>CASE STUDY</span>
          <ArrowUpRight size={16} />
        </Button>

        {project.hasLiveUrl ? (
          <Button
            href={project.liveUrl}
            external={true}
            variant="secondary"
            size="sm"
            ariaLabel={`Visit live deployment for ${project.shortTitle}`}
          >
            <span>VISIT LIVE</span>
            <ExternalLink size={16} />
          </Button>
        ) : (
          <span
            className="tag tag-paper"
            style={{ fontSize: "0.75rem", padding: "0.5rem 0.75rem", border: "var(--border-thin)" }}
          >
            STANDALONE SYSTEM
          </span>
        )}
      </div>
    </article>
  );
}
