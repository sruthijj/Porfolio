import React from "react";
import { ArrowDownRight, ArrowUpRight, Sparkles, Terminal, Code } from "lucide-react";
import Button from "../components/Button";
import Sticker from "../components/Sticker";
import Starburst from "../components/Starburst";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import { siteConfig } from "../config/site";

/**
 * Section 02 — Hero
 * Oversized acid-lime dominant canvas with typographic composition and floating stickers.
 */
export default function Hero() {
  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      {/* Decorative Floating Stickers (Desktop / Tablet) */}
      <div className="hero-floating-sticker sticker-pos-1">
        <Starburst
          text="BUILT WITH CURIOSITY"
          size={130}
          fill="#FF4FA3"
          textColor="#171717"
        />
      </div>

      <div className="hero-floating-sticker sticker-pos-2">
        <Sticker theme="ink" rotation={4} float={true} floatDelay={0.5}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Terminal size={18} color="#D7FF3F" />
            <span>FULL-STACK & AI</span>
          </div>
        </Sticker>
      </div>

      <div className="hero-floating-sticker sticker-pos-3">
        <Sticker theme="pink" rotation={-5} float={true} floatDelay={1.2}>
          <span>ANGULAR 21 / PYTHON</span>
        </Sticker>
      </div>

      {/* Main Content Container */}
      <div className="container hero-main-content">
        {/* Eyebrow & Live Status */}
        <Reveal delay={0.1}>
          <div className="hero-eyebrow-wrap">
            <span className="hero-status-pill">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>{siteConfig.status}</span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--color-ink)"
              }}
            >
              {siteConfig.hero.eyebrow}
            </span>
          </div>
        </Reveal>

        {/* Oversized Multiline Neo-Brutalist Headline */}
        <Reveal delay={0.2}>
          <h1 className="hero-headline">
            {siteConfig.hero.headlineLine1} <br />
            <span className="hero-word-accent">{siteConfig.hero.headlineLine2}</span> <br />
            {siteConfig.hero.headlineLine3}
          </h1>
        </Reveal>

        {/* Supporting Copy */}
        <Reveal delay={0.3}>
          <p className="hero-lead-text">
            {siteConfig.hero.supportingCopy}
          </p>
        </Reveal>

        {/* CTA Actions */}
        <Reveal delay={0.4}>
          <div className="hero-cta-group">
            <Button href="#work" variant="primary">
              <span>{siteConfig.hero.primaryCta}</span>
            </Button>

            <Button href="#contact" variant="secondary">
              <span>{siteConfig.hero.secondaryCta}</span>
            </Button>

            <Button href={siteConfig.resume} variant="paper" size="default">
              <span>VIEW RÉSUMÉ</span>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Hero Bottom Bar & Continuous Ticker */}
      <div className="hero-bottom-bar">
        <div className="hero-meta-row">
          <div className="hero-scroll-indicator">
            <ArrowDownRight size={18} />
            <span>SCROLL TO EXPLORE WORK</span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "var(--color-ink)"
            }}
          >
            LOCATION: THRISSUR / REMOTE
          </div>
        </div>

        {/* Continuous Horizontal Marquee */}
        <Marquee items={siteConfig.hero.tickerItems} speed="24s" />
      </div>
    </section>
  );
}
