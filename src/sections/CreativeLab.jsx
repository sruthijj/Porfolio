import React, { useState } from "react";
import { Sparkles, RefreshCw, Sliders, Eye, Terminal } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { experimentsData } from "../data/experiments";

/**
 * Section 08 — Creative Lab
 * Interactive visual explorations, kinetic type manipulations, and creative coding studies.
 */
export default function CreativeLab() {
  // Experiment 1 State: Kinetic Type
  const [typeTrack, setTypeTrack] = useState(0);
  const [typeInverted, setTypeInverted] = useState(false);

  // Experiment 2 State: Generative Matrix Seed
  const [matrixSeed, setMatrixSeed] = useState(42);

  // Experiment 3 State: Tactile Controls
  const [switchOn, setSwitchOn] = useState(true);
  const [sliderVal, setSliderVal] = useState(75);
  const [activePreset, setActivePreset] = useState("RAW");

  // Experiment 4 State: Convolution Kernel Explorer
  const [activeKernel, setActiveKernel] = useState("SOBEL");

  const kernels = {
    SOBEL: [
      [-1, 0, 1],
      [-2, 0, 2],
      [-1, 0, 1]
    ],
    RIDGE: [
      [0, -1, 0],
      [-1, 4, -1],
      [0, -1, 0]
    ],
    BLUR: [
      [1, 2, 1],
      [2, 4, 2],
      [1, 2, 1]
    ]
  };

  return (
    <section className="section lab-section" id="lab">
      <div className="container">
        <SectionHeading
          label="05 / EXPERIMENTS & EXPLORATIONS"
          title="PLAY. BREAK. REBUILD."
          lead="Self-initiated creative playground featuring interactive typography, generative SVG geometry, and computer vision exploratory components."
        />

        <div className="lab-grid">
          {/* Experiment 1: Kinetic Type Study */}
          <Reveal delay={0.1}>
            <div className="lab-card">
              <div className="lab-header">
                <span className="tag tag-lime">PERSONAL EXPERIMENT</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>01 // TYPE</span>
              </div>

              <div
                className="lab-preview-area"
                style={{
                  background: typeInverted ? "var(--color-ink)" : "var(--color-lime)",
                  color: typeInverted ? "var(--color-lime)" : "var(--color-ink)",
                  transition: "background 0.3s ease, color 0.3s ease"
                }}
              >
                <div style={{ textAlign: "center", width: "100%" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 5vw, 3.2rem)",
                      fontWeight: 900,
                      lineHeight: 0.9,
                      letterSpacing: `${typeTrack}px`,
                      textTransform: "uppercase"
                    }}
                  >
                    BRUTAL
                    <br />
                    FORM
                  </div>
                </div>
              </div>

              <div className="lab-body">
                <h3 className="lab-title">Kinetic Type Disruption</h3>
                <p className="lab-desc">
                  Interactive typography exploring variable tracking, contrast flipping, and brutalist optical scale.
                </p>

                <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto", paddingTop: "0.75rem" }}>
                  <button
                    onClick={() => setTypeTrack((prev) => (prev >= 12 ? 0 : prev + 4))}
                    className="btn btn-sm btn-paper"
                  >
                    TRACKING: +{typeTrack}PX
                  </button>
                  <button
                    onClick={() => setTypeInverted(!typeInverted)}
                    className="btn btn-sm btn-secondary"
                  >
                    INVERT COLOR
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Experiment 2: Algorithmic Geometric Matrix */}
          <Reveal delay={0.2}>
            <div className="lab-card">
              <div className="lab-header">
                <span className="tag tag-pink">VISUAL STUDY</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>02 // GEOMETRY</span>
              </div>

              <div className="lab-preview-area" style={{ background: "var(--color-paper)" }}>
                <svg
                  viewBox="0 0 200 200"
                  style={{ width: "100%", maxHeight: "180px" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="200" height="200" fill="#F6F3EA" />
                  {/* Procedural elements based on seed */}
                  <circle
                    cx="100"
                    cy="100"
                    r={35 + (matrixSeed % 40)}
                    fill="none"
                    stroke="#171717"
                    strokeWidth="3"
                  />
                  <rect
                    x={30 + (matrixSeed % 20)}
                    y={30 + (matrixSeed % 20)}
                    width="60"
                    height="60"
                    fill="#FF4FA3"
                    stroke="#171717"
                    strokeWidth="3"
                    transform={`rotate(${matrixSeed * 15} 100 100)`}
                  />
                  <polygon
                    points="100,20 120,60 160,70 130,100 140,140 100,120 60,140 70,100 40,70 80,60"
                    fill="#D7FF3F"
                    stroke="#171717"
                    strokeWidth="2.5"
                    transform={`scale(${0.6 + (matrixSeed % 5) * 0.1}) translate(40, 20)`}
                  />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="#171717" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="#171717" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="lab-body">
                <h3 className="lab-title">Swiss Geometric Matrix</h3>
                <p className="lab-desc">
                  Generative SVG composition utilizing randomized brutalist quadrants, coordinate crosshairs, and geometric stamps.
                </p>

                <div style={{ marginTop: "auto", paddingTop: "0.75rem" }}>
                  <button
                    onClick={() => setMatrixSeed((s) => s + 7)}
                    className="btn btn-sm btn-lime"
                    style={{ width: "100%" }}
                  >
                    <RefreshCw size={14} />
                    <span>MUTATE SEED ({matrixSeed})</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Experiment 3: Tactile Neo-Brutalist Controls */}
          <Reveal delay={0.3}>
            <div className="lab-card">
              <div className="lab-header">
                <span className="tag tag-white">CONCEPT</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>03 // UI PHYSICS</span>
              </div>

              <div className="lab-preview-area" style={{ background: "#FFFFFF", flexDirection: "column", gap: "1rem" }}>
                {/* Physical Heavy Switch */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700 }}>
                    POWER GATE:
                  </span>
                  <button
                    onClick={() => setSwitchOn(!switchOn)}
                    style={{
                      width: "68px",
                      height: "36px",
                      border: "3px solid #171717",
                      background: switchOn ? "#D7FF3F" : "#EEE",
                      boxShadow: "3px 3px 0 #171717",
                      position: "relative",
                      cursor: "pointer",
                      padding: "2px"
                    }}
                    aria-label="Toggle Power Gate"
                  >
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        background: "#171717",
                        position: "absolute",
                        top: "2px",
                        left: switchOn ? "33px" : "3px",
                        transition: "left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }}
                    />
                  </button>
                  <span className="tag tag-black" style={{ fontSize: "0.68rem" }}>
                    {switchOn ? "ENGAGED" : "OFF"}
                  </span>
                </div>

                {/* Tactile Range Slider */}
                <div style={{ width: "85%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "4px" }}>
                    <span>VOLTAGE:</span>
                    <span>{sliderVal}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => setSliderVal(e.target.value)}
                    style={{ width: "100%", accentColor: "#FF4FA3", cursor: "pointer" }}
                  />
                </div>
              </div>

              <div className="lab-body">
                <h3 className="lab-title">Tactile Hardware Widgets</h3>
                <p className="lab-desc">
                  Heavy-outline mechanical interfaces with hard drop-shadow tactile response and direct interaction physics.
                </p>

                <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto", paddingTop: "0.75rem" }}>
                  {["RAW", "HOT", "COLD"].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setActivePreset(preset)}
                      className={`btn btn-sm ${activePreset === preset ? "btn-primary" : "btn-paper"}`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Experiment 4: CNN Kernel Explorer */}
          <Reveal delay={0.4}>
            <div className="lab-card">
              <div className="lab-header">
                <span className="tag tag-lime">PERSONAL EXPERIMENT</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>04 // AI CODE</span>
              </div>

              <div className="lab-preview-area" style={{ background: "var(--color-ink)", color: "var(--color-lime)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#FF4FA3", fontWeight: 700 }}>
                    3×3 KERNEL WEIGHTS [{activeKernel}]
                  </div>
                  {/* Kernel Matrix Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 40px)",
                      gap: "4px",
                      border: "2px solid #D7FF3F",
                      padding: "4px",
                      background: "#000"
                    }}
                  >
                    {kernels[activeKernel].flat().map((val, kIdx) => (
                      <div
                        key={kIdx}
                        style={{
                          height: "36px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 900,
                          background: val > 0 ? "#D7FF3F" : val < 0 ? "#FF4FA3" : "#222",
                          color: val === 0 ? "#FFF" : "#171717"
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lab-body">
                <h3 className="lab-title">CNN Feature Filter Matrix</h3>
                <p className="lab-desc">
                  Interactive convolutional filter explorer visualizing spatial frequency weights used in computer vision pipelines.
                </p>

                <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto", paddingTop: "0.75rem" }}>
                  {["SOBEL", "RIDGE", "BLUR"].map((k) => (
                    <button
                      key={k}
                      onClick={() => setActiveKernel(k)}
                      className={`btn btn-sm ${activeKernel === k ? "btn-secondary" : "btn-paper"}`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
