import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import Button from "../components/Button";

/**
 * Neo-Brutalist 404 Not Found Page
 */
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--page-gutter)",
        background: "var(--color-lime)"
      }}
    >
      <div
        style={{
          border: "var(--border-thick)",
          background: "var(--color-white)",
          boxShadow: "var(--shadow-xl)",
          padding: "clamp(2rem, 6vw, 4rem)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center"
        }}
      >
        <span className="tag tag-pink" style={{ marginBottom: "1rem" }}>
          <AlertTriangle size={14} /> ERROR 404 // ROUTE NOT FOUND
        </span>

        <h1
          style={{
            fontSize: "clamp(4rem, 12vw, 8rem)",
            fontWeight: 900,
            lineHeight: 0.9,
            marginBlock: "0.5rem"
          }}
        >
          404
        </h1>

        <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBlock: "1rem" }}>
          THE REQUESTED SPECIFICATION DOES NOT EXIST.
        </p>

        <p style={{ color: "#555", marginBottom: "2rem" }}>
          The path you navigated to is either deprecated or moved. Let's return to the main station.
        </p>

        <Button to="/" variant="primary">
          <ArrowLeft size={18} />
          <span>RETURN TO HOME</span>
        </Button>
      </div>
    </div>
  );
}
