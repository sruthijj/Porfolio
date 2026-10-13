import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Activity, Calendar, Clock, Filter, Sparkles, ChevronRight } from "lucide-react";

/**
 * High-craft Neo-brutalist interactive UI mockups for Lumina Health and DentCare.
 * Labeled transparently as portfolio interface mockups.
 */

export function LuminaMockup() {
  const [selectedDept, setSelectedDept] = useState("Cardiology");
  const [bookedSlot, setBookedSlot] = useState(null);

  const departments = ["Cardiology", "Orthopedics", "Neurology", "Pediatrics"];
  const doctors = [
    {
      name: "Dr. Elena Vance, MD",
      dept: "Cardiology",
      slots: ["10:00 AM", "11:30 AM", "02:00 PM"],
      rating: "4.9 ★",
      room: "Suite 402"
    },
    {
      name: "Dr. Marcus Bell, MS",
      dept: "Orthopedics",
      slots: ["09:15 AM", "01:45 PM", "04:30 PM"],
      rating: "4.8 ★",
      room: "Suite 210"
    },
    {
      name: "Dr. Sarah Lin, MD",
      dept: "Neurology",
      slots: ["11:00 AM", "03:15 PM"],
      rating: "5.0 ★",
      room: "Suite 512"
    }
  ];

  const filteredDoctors = doctors.filter(
    (d) => selectedDept === "All" || d.dept === selectedDept
  );

  return (
    <div className="mockup-window" style={{ width: "100%", maxWidth: "100%", margin: 0 }}>
      {/* Mockup Header */}
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <div className="mockup-dot red"></div>
          <div className="mockup-dot yellow"></div>
          <div className="mockup-dot green"></div>
        </div>
        <div className="mockup-title">clinic.cubacle.uk — Patient Portal</div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="tag tag-lime" style={{ fontSize: "0.65rem", padding: "0.2rem 0.4rem" }}>
            AWS Cognito: Verified
          </span>
        </div>
      </div>

      {/* Mockup Body */}
      <div className="mockup-window-body" style={{ background: "#FDFDFD", padding: "1.25rem" }}>
        {/* Top Control Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1rem",
            paddingBottom: "0.75rem",
            borderBottom: "2px solid #171717"
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.1rem" }}>
              LUMINA HEALTH PORTAL
            </div>
            <div style={{ fontSize: "0.75rem", color: "#555" }}>
              8+ Departments | 20+ Doctor Profiles
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`tag ${selectedDept === dept ? "tag-pink" : "tag-white"}`}
                style={{ cursor: "pointer" }}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          {filteredDoctors.map((doc, i) => (
            <div
              key={i}
              style={{
                border: "2px solid #171717",
                background: "#FFF",
                boxShadow: "3px 3px 0 #171717",
                padding: "0.85rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag tag-lime" style={{ fontSize: "0.65rem" }}>{doc.dept}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700 }}>
                  {doc.rating}
                </span>
              </div>
              <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>{doc.name}</div>
              <div style={{ fontSize: "0.75rem", color: "#666" }}>{doc.room}</div>

              <div style={{ marginTop: "0.5rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                  AVAILABLE SLOTS:
                </div>
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {doc.slots.map((slot) => {
                    const isBooked = bookedSlot === `${doc.name}-${slot}`;
                    return (
                      <button
                        key={slot}
                        onClick={() => setBookedSlot(isBooked ? null : `${doc.name}-${slot}`)}
                        style={{
                          fontSize: "0.68rem",
                          fontFamily: "var(--font-mono)",
                          padding: "0.25rem 0.45rem",
                          border: "1.5px solid #171717",
                          background: isBooked ? "#D7FF3F" : "#F6F3EA",
                          fontWeight: isBooked ? 800 : 600,
                          cursor: "pointer"
                        }}
                      >
                        {isBooked ? "✓ " + slot : slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Footer */}
        <div
          style={{
            marginTop: "1rem",
            paddingTop: "0.75rem",
            borderTop: "2px dashed #171717",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.72rem",
            fontFamily: "var(--font-mono)"
          }}
        >
          <span style={{ color: "#228B22", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
            <Activity size={12} /> REST API Response: 142ms (&lt;200ms)
          </span>
          <span style={{ color: "#666" }}>
            PORTFOLIO MOCKUP
          </span>
        </div>
      </div>
    </div>
  );
}

export function DentCareMockup() {
  const [activeTab, setActiveTab] = useState("analysis");
  const [claheEnabled, setClaheEnabled] = useState(true);

  return (
    <div className="mockup-window" style={{ width: "100%", maxWidth: "100%", margin: 0 }}>
      {/* Mockup Header */}
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <div className="mockup-dot red"></div>
          <div className="mockup-dot yellow"></div>
          <div className="mockup-dot green"></div>
        </div>
        <div className="mockup-title">DentCare Mobile AI — CNN Inference Engine</div>
        <span className="tag tag-pink" style={{ fontSize: "0.65rem", padding: "0.2rem 0.4rem" }}>
          Accuracy: 92.8%
        </span>
      </div>

      {/* Mockup Body */}
      <div className="mockup-window-body" style={{ background: "#F7F6F2", padding: "1.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", alignItems: "center" }}>
          {/* Simulated Image Scan Frame */}
          <div
            style={{
              border: "3px solid #171717",
              background: claheEnabled ? "#2A2A2A" : "#3D3D3D",
              boxShadow: "4px 4px 0 #171717",
              padding: "1rem",
              position: "relative",
              aspectRatio: "4/3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden"
            }}
          >
            {/* Visual scan graphic */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: claheEnabled ? 0.35 : 0.15,
                backgroundImage:
                  "radial-gradient(#D7FF3F 1px, transparent 1px), radial-gradient(#FF4FA3 1px, #171717 1px)",
                backgroundSize: "20px 20px"
              }}
            />
            {/* Bounding box */}
            <div
              style={{
                position: "absolute",
                top: "22%",
                left: "25%",
                width: "50%",
                height: "55%",
                border: "2px dashed #D7FF3F",
                boxShadow: "0 0 10px rgba(215, 255, 63, 0.4)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "4px"
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  background: "#D7FF3F",
                  color: "#171717",
                  padding: "1px 4px",
                  fontWeight: 900,
                  alignSelf: "flex-start"
                }}
              >
                ROI: Enamel Area [0.94]
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  background: "#FF4FA3",
                  color: "#171717",
                  padding: "1px 4px",
                  fontWeight: 900,
                  alignSelf: "flex-end"
                }}
              >
                Grade 2 Detected
              </span>
            </div>

            <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between" }}>
              <span className="tag tag-lime" style={{ fontSize: "0.62rem" }}>
                INPUT: 512x512 RGB
              </span>
              <button
                onClick={() => setClaheEnabled(!claheEnabled)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  padding: "2px 6px",
                  border: "1.5px solid #FFF",
                  background: claheEnabled ? "#FF4FA3" : "#FFF",
                  color: "#171717",
                  fontWeight: 800,
                  cursor: "pointer"
                }}
              >
                CLAHE: {claheEnabled ? "ON" : "OFF"}
              </button>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "#D7FF3F"
              }}
            >
              OpenCV Normalization Applied
            </div>
          </div>

          {/* Classification Probability Chart */}
          <div
            style={{
              border: "2px solid #171717",
              background: "#FFF",
              boxShadow: "3px 3px 0 #171717",
              padding: "0.85rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem"
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.85rem" }}>
              SEVERITY CLASSIFICATION (4 GRADES)
            </div>

            {[
              { grade: "Grade 1: Normal / Minimal", prob: 3, color: "#CCCCCC" },
              { grade: "Grade 2: Moderate Enamel Wear", prob: 92.8, color: "#D7FF3F", active: true },
              { grade: "Grade 3: Advanced Dentin Exposure", prob: 3.1, color: "#FF4FA3" },
              { grade: "Grade 4: Severe Loss", prob: 1.1, color: "#171717" }
            ].map((tier, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: tier.active ? 800 : 600
                  }}
                >
                  <span>{tier.grade}</span>
                  <span>{tier.prob}%</span>
                </div>
                <div style={{ height: "10px", background: "#EEE", border: "1px solid #171717", width: "100%" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${tier.prob}%`,
                      background: tier.color,
                      transition: "width 0.4s ease"
                    }}
                  />
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: "0.35rem",
                background: "#F6F3EA",
                border: "1.5px solid #171717",
                padding: "0.4rem",
                fontSize: "0.68rem",
                fontFamily: "var(--font-mono)",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Sparkles size={12} color="#FF4FA3" />
              Flutter Mobile Interface: Latency ~45ms
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "0.85rem",
            paddingTop: "0.5rem",
            borderTop: "2px dashed #171717",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.68rem",
            fontFamily: "var(--font-mono)",
            color: "#666"
          }}
        >
          <span>TRANSFER-LEARNED CNN ARCHITECTURE (1,000+ SAMPLES)</span>
          <span>PORTFOLIO RESEARCH MOCKUP</span>
        </div>
      </div>
    </div>
  );
}
