import React from "react";
import { Mail, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Starburst from "../components/Starburst";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { siteConfig } from "../config/site";

/**
 * Section 09 — Contact
 * Memorable closing section with high-contrast lime and pink typography on ink black.
 */
export default function Contact() {
  return (
    <section className="section contact-section" id="contact" style={{ paddingBottom: 0 }}>
      <div className="container" style={{ paddingBottom: "var(--section-gap)" }}>
        <Reveal delay={0.1}>
          <div className="contact-card">
            {/* Corner Decorative Starburst */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                display: "none"
              }}
              className="contact-starburst"
            >
              <Starburst text="PING ME" size={100} fill="#D7FF3F" textColor="#171717" />
            </div>

            <span className="contact-badge">GET IN TOUCH</span>

            <h2 className="contact-headline">GOT A GOOD IDEA?</h2>

            <p className="contact-lead">
              "I'm interested in building useful software, solving interesting problems, and working with people who care about what they create."
            </p>

            {/* Main Email CTA */}
            <div className="contact-buttons-row">
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="lime"
                size="default"
                ariaLabel="Send email to Sruthij S Nair"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight size={20} />
              </Button>

              <Button
                href={siteConfig.resume}
                variant="paper"
                size="default"
                ariaLabel="Download Resume PDF"
              >
                <FileText size={18} />
                <span>DOWNLOAD RÉSUMÉ</span>
              </Button>
            </div>

            {/* Direct Channel Links */}
            <div className="contact-links-grid">
              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-link-pill"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Mail size={18} /> EMAIL: {siteConfig.email}
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-pill"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <GithubIcon size={18} /> GITHUB: /sruthijj
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-pill"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <LinkedinIcon size={18} /> LINKEDIN: /sruthij-s-nair
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Closing Marquee Ticker */}
      <Marquee
        items={[
          "LET'S BUILD SOMETHING GREAT",
          "SRUTHIJ S NAIR",
          "SOFTWARE ENGINEER",
          "FULL STACK & AI",
          "OPEN FOR OPPORTUNITIES"
        ]}
        variant="lime"
        speed="22s"
      />
    </section>
  );
}
