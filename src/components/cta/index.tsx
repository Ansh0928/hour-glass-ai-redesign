"use client";

import type { CSSProperties } from "react";

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "rgba(255,255,255,0.5)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  marginBottom: 6,
};

const inputStyle: CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 15,
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};

export function CTA() {
  return (
    <section
      style={{
        background: "var(--hero-bg)",
        padding: "120px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(84,143,40,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--green)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Get started
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 20,
            fontFamily: "var(--font-playfair, Georgia, serif)",
          }}
        >
          Stop doing admin. Start growing.
        </h2>
        <p
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          30 minutes. Zero pressure. Total clarity.
        </p>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.6,
            marginBottom: 36,
          }}
        >
          Tell us where your team&apos;s time disappears. If we can help, your
          AI Efficiency Audit starts the same week.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            textAlign: "left",
          }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            <div>
              <label style={labelStyle}>Name *</label>
              <input required placeholder="Your name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                required
                type="email"
                placeholder="you@company.com"
                style={inputStyle}
              />
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            <div>
              <label style={labelStyle}>Company</label>
              <input placeholder="Company name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Team size</label>
              <select style={{ ...inputStyle, appearance: "none" as const }}>
                <option value="">Select</option>
                <option>1–5</option>
                <option>6–20</option>
                <option>21–50</option>
                <option>51–200</option>
                <option>200+</option>
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>What would you like to automate?</label>
            <textarea
              rows={3}
              placeholder="e.g. invoicing, scheduling, reporting…"
              style={{ ...inputStyle, resize: "vertical" as const }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "white",
              color: "var(--hero-bg)",
              padding: "14px 28px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.01em",
              transition: "opacity 0.2s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Book my AI Audit →
          </button>
        </form>
      </div>
    </section>
  );
}
