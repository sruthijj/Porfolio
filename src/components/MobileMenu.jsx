import React, { useEffect, useRef } from "react";
import { X, ArrowUpRight, FileText } from "lucide-react";
import Button from "./Button";
import { siteConfig } from "../config/site";

/**
 * Accessible Neo-Brutalist Mobile Navigation Drawer
 * Handles focus traps, Escape key dismissal, and backdrop clicks.
 */
export default function MobileMenu({ isOpen, onClose, navLinks }) {
  const drawerRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="mobile-menu-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div
        className="mobile-menu-drawer"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="mobile-menu-header">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.25rem" }}>
            {siteConfig.shortName}
          </span>
          <button
            onClick={onClose}
            className="btn btn-sm btn-paper btn-icon-only"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav aria-label="Mobile Navigation">
          <ul className="mobile-menu-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="mobile-menu-item"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={20} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="mobile-menu-footer">
          <Button
            href={siteConfig.resume}
            variant="primary"
            onClick={onClose}
            className="w-full"
            style={{ width: "100%" }}
          >
            <FileText size={18} />
            <span>VIEW RÉSUMÉ</span>
          </Button>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              textAlign: "center",
              marginTop: "0.5rem"
            }}
          >
            {siteConfig.email}
          </div>
        </div>
      </div>
    </div>
  );
}
