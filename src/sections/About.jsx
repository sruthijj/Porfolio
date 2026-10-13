import React from "react";
import { ArrowRight, Code, Terminal, Sparkles, Cpu } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Sticker from "../components/Sticker";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { siteConfig } from "../config/site";

/**
 * Section 05 — About Me
 * Editorial two-column layout combining original neo-brutalist graphic art with technical biography.
 */
export default function About() {
  const { about } = siteConfig;

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading
          label={about.sectionLabel}
          title={about.heading}
        />

        <div className="about-grid">
          {/* Visual Artwork Column */}
          <Reveal delay={0.2} className="about-visual-column">
            <div className="about-poster-frame">
              {/* Original Neo-Brutalist SVG Geometric Avatar / Poster */}
              <svg
                className="about-svg-portrait"
                viewBox="0 0 320 380"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Abstract neo-brutalist engineer illustration"
              >
                {/* Background Grid Pattern */}
                <defs>
                  <pattern id="brutalist-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#171717" strokeWidth="0.75" />
                  </pattern>
                </defs>
                <rect width="320" height="380" fill="#F6F3EA" />
                <rect width="320" height="380" fill="url(#brutalist-grid)" opacity="0.6" />

                {/* Geometric Face & Brutalist Composition */}
                <rect x="35" y="45" width="250" height="290" fill="#D7FF3F" stroke="#171717" strokeWidth="4" />
                <circle cx="160" cy="140" r="70" fill="#FF4FA3" stroke="#171717" strokeWidth="4" />

                {/* Stylized Glasses / Tech Visor */}
                <rect x="105" y="115" width="45" height="35" fill="#171717" />
                <rect x="170" y="115" width="45" height="35" fill="#171717" />
                <line x1="150" y1="130" x2="170" y2="130" stroke="#171717" strokeWidth="6" />

                {/* Glint Eyes */}
                <rect x="120" y="125" width="10" height="15" fill="#D7FF3F" />
                <rect x="185" y="125" width="10" height="15" fill="#D7FF3F" />

                {/* Smile / Terminal prompt */}
                <path d="M 130 180 Q 160 200 190 180" fill="none" stroke="#171717" strokeWidth="5" strokeLinecap="square" />

                {/* Circuit lines */}
                <line x1="50" y1="280" x2="270" y2="280" stroke="#171717" strokeWidth="3" />
                <line x1="50" y1="300" x2="270" y2="300" stroke="#171717" strokeWidth="2" strokeDasharray="6 6" />

                {/* Stamp */}
                <text x="50" y="325" fontFamily="var(--font-mono)" fontSize="12" fontWeight="900" fill="#171717">
                  SRUTHIJ // DEV.ID #2026
                </text>
              </svg>

              {/* Identity Pin Sticker */}
              <div className="about-sticker-pin">
                <Sticker theme="ink" rotation={5}>
                  <span>BUILDER MODE: ON</span>
                </Sticker>
              </div>
            </div>
          </Reveal>

          {/* Biography & Achievements Column */}
          <Reveal delay={0.4} className="about-bio-column">
            {/* Verified Professional Summary Quote */}
            <div className="about-quote-box">
              <p style={{ fontWeight: 600 }}>
                "{siteConfig.hero.summary}"
              </p>
            </div>

            <p>{about.bioParagraph2}</p>
            <p>{about.bioParagraph3}</p>

            {/* Sticker Badges */}
            <div className="about-stickers-row">
              {about.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`tag ${idx % 2 === 0 ? "tag-lime" : "tag-pink"}`}
                  style={{ fontSize: "0.85rem", padding: "0.4rem 0.75rem" }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Stats Metrics Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1rem",
                marginTop: "1rem"
              }}
            >
              {about.stats.map((st, i) => (
                <div
                  key={i}
                  style={{
                    border: "var(--border-thin)",
                    background: "var(--color-paper)",
                    boxShadow: "3px 3px 0 var(--color-ink)",
                    padding: "0.85rem",
                    textAlign: "center"
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 900,
                      color: "var(--color-ink)"
                    }}
                  >
                    {st.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      marginTop: "0.25rem",
                      color: "#444"
                    }}
                  >
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Section CTA */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
              <Button href="#experience" variant="primary">
                <span>VIEW WORK EXPERIENCE</span>
                <ArrowRight size={16} />
              </Button>
              <Button href={siteConfig.resume} variant="paper">
                <span>DOWNLOAD RÉSUMÉ</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
