import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, FileText, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { siteConfig } from "../config/site";

/**
 * Neo-Brutalist Navbar Component
 * Desktop links, direct resume trigger, and mobile drawer handler.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // If on a sub-route (e.g. /work/lumina-health), format hash links to point back to /#section
  const formattedNavLinks = siteConfig.navLinks.map((link) => {
    if (location.pathname === "/") {
      return { ...link, href: link.href.replace("/", "") };
    }
    return link;
  });

  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-container">
          {/* Wordmark returning to Hero */}
          <Link to="/" className="nav-wordmark" aria-label="Sruthij S Nair - Home">
            <span>{siteConfig.shortName}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-desktop-links">
              {formattedNavLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="nav-desktop-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Resume & Mobile Hamburger */}
          <div className="nav-actions">
            <div className="nav-desktop-actions">
              <Button
                href={siteConfig.resume}
                variant="primary"
                size="sm"
                ariaLabel="Open Resume PDF in new tab"
              >
                <FileText size={15} />
                <span>RÉSUMÉ</span>
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="nav-mobile-toggle"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={formattedNavLinks}
      />
    </>
  );
}
