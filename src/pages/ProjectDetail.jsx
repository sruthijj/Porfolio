import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle, ShieldCheck, Activity, Layers, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { LuminaMockup, DentCareMockup } from "../components/ProjectMockups";
import { projectsData } from "../data/projects";

/**
 * Case Study Detail Page
 * Dynamic editorial case study layout for Lumina Health and DentCare.
 */
export default function ProjectDetail() {
  const { slug } = useParams();

  // Scroll to top on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);

  // If unknown slug, redirect to 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Next project navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  const isLumina = project.id === "lumina-health";

  return (
    <article className="case-study-page">
      {/* Case Study Hero */}
      <section className={`case-study-hero ${project.theme === "lime" ? "lime-theme" : "paper-theme"}`}>
        <div className="container">
          <Link to="/#work" className="case-study-back-link">
            <ArrowLeft size={16} />
            <span>BACK TO ALL WORK</span>
          </Link>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.75rem" }}>
            <span className="tag tag-black">{project.category}</span>
            {project.hasLiveUrl && <span className="tag tag-lime">DEPLOYED LIVE</span>}
          </div>

          <h1 className="case-study-title">{project.title}</h1>

          <p style={{ fontSize: "1.25rem", maxWidth: "68ch", fontWeight: 500, lineHeight: 1.5 }}>
            {project.summary}
          </p>

          {/* Quick Meta Grid */}
          <div className="case-study-meta-bar">
            <div className="case-study-meta-col">
              <span className="case-study-meta-label">ROLE</span>
              <span className="case-study-meta-val">{project.deepDive.role}</span>
            </div>
            <div className="case-study-meta-col">
              <span className="case-study-meta-label">TIMELINE</span>
              <span className="case-study-meta-val">{project.deepDive.timeline}</span>
            </div>
            <div className="case-study-meta-col">
              <span className="case-study-meta-label">CORE TECH</span>
              <span className="case-study-meta-val">{project.technologies.slice(0, 3).join(", ")}</span>
            </div>
            <div className="case-study-meta-col">
              <span className="case-study-meta-label">STATUS</span>
              <span className="case-study-meta-val">
                {project.hasLiveUrl ? "LIVE DEPLOYMENT" : "DEVELOPMENT PROTOTYPE"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content Body */}
      <div className="container case-study-body">
        {/* Full Interactive Mockup Showcase */}
        <Reveal delay={0.1} className="case-study-section-block">
          <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <h2 className="case-study-block-title" style={{ margin: 0 }}>
              <span className="case-study-num-pill">01</span> SYSTEM INTERFACE PREVIEW
            </h2>
            {project.hasLiveUrl && (
              <Button href={project.liveUrl} external={true} variant="primary" size="sm">
                <span>OPEN LIVE CLINIC SYSTEM</span>
                <ExternalLink size={15} />
              </Button>
            )}
          </div>

          <div style={{ border: "var(--border-style)", boxShadow: "var(--shadow-lg)", background: "#FFF" }}>
            {isLumina ? <LuminaMockup /> : <DentCareMockup />}
          </div>
        </Reveal>

        {/* Reported Metrics & Benchmarks */}
        <Reveal delay={0.2} className="case-study-section-block">
          <h2 className="case-study-block-title">
            <span className="case-study-num-pill">02</span> REPORTED METRICS & RESULTS
          </h2>

          <div className="case-study-stats-grid">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="case-study-stat-card">
                <div className="case-study-stat-number">{metric.value}</div>
                <div className="case-study-stat-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Grid: Problem / Objective & Architecture Approach */}
        <div className="case-study-grid">
          <div>
            {/* The Problem */}
            <Reveal delay={0.2} className="case-study-section-block">
              <h2 className="case-study-block-title">
                <span className="case-study-num-pill">03</span> PROBLEM & OBJECTIVE
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {project.deepDive.problem}
              </p>
            </Reveal>

            {/* Implementation Approach */}
            <Reveal delay={0.3} className="case-study-section-block">
              <h2 className="case-study-block-title">
                <span className="case-study-num-pill">04</span> IMPLEMENTATION & ARCHITECTURE
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {project.deepDive.architecture}
              </p>

              {/* Key Technical Decisions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
                {project.deepDive.keyDecisions.map((decision, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      border: "var(--border-thin)",
                      background: "var(--color-paper)",
                      boxShadow: "3px 3px 0 var(--color-ink)",
                      padding: "1.25rem"
                    }}
                  >
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.4rem" }}>
                      {decision.title}
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.6 }}>
                      {decision.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Verified Highlights Checklist */}
            <Reveal delay={0.4} className="case-study-section-block">
              <h2 className="case-study-block-title">
                <span className="case-study-num-pill">05</span> VERIFIED HIGHLIGHTS
              </h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {project.verifiedHighlights.map((hl, hIdx) => (
                  <li
                    key={hIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "1.05rem",
                      lineHeight: 1.6
                    }}
                  >
                    <CheckCircle
                      size={20}
                      color="var(--color-ink)"
                      strokeWidth={2.5}
                      style={{ flexShrink: 0, marginTop: "0.2rem" }}
                    />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar Panel */}
          <div>
            <div
              style={{
                position: "sticky",
                top: "calc(var(--header-height) + 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem"
              }}
            >
              {/* Tech Stack Card */}
              <div
                style={{
                  border: "var(--border-style)",
                  background: "var(--color-white)",
                  boxShadow: "var(--shadow-md)",
                  padding: "1.5rem"
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem" }}>
                  TECHNOLOGIES USED
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.technologies.map((t, i) => (
                    <span key={i} className="tag tag-lime">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Card */}
              <div
                style={{
                  border: "var(--border-style)",
                  background: "var(--color-ink)",
                  color: "var(--color-lime)",
                  boxShadow: "var(--shadow-md)",
                  padding: "1.5rem"
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-lime)", marginBottom: "0.5rem" }}>
                  NEED SIMILAR WORK?
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#DDD", marginBottom: "1rem" }}>
                  Let's discuss architecture, performance optimization, or machine learning pipelines.
                </p>
                <Button href="/#contact" variant="lime" size="sm" style={{ width: "100%" }}>
                  <span>LET'S CONNECT</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project Footer Bar */}
      <section className="case-study-nav-footer">
        <div className="container case-study-nav-flex">
          <Link to="/#work" className="case-study-back-link" style={{ margin: 0 }}>
            <ArrowLeft size={16} />
            <span>ALL WORK</span>
          </Link>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "#666" }}>
              NEXT CASE STUDY
            </div>
            <Link
              to={nextProject.route}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 900
              }}
            >
              <span>{nextProject.shortTitle}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
