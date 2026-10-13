import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { siteConfig } from "../config/site";

/**
 * Neo-Brutalist Minimal Footer Component
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        {/* Brand & Sign-off */}
        <div>
          <div className="footer-logo">{siteConfig.name.toUpperCase()}</div>
          <div className="footer-copy" style={{ marginTop: "0.25rem" }}>
            © {currentYear} • BUILT WITH CURIOSITY & NEO-BRUTALIST RIGOR
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="footer-actions">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-paper btn-icon-only"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-paper btn-icon-only"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="btn btn-sm btn-paper btn-icon-only"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="btn btn-sm btn-lime"
            aria-label="Scroll back to top of page"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <span>TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
