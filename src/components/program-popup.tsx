"use client";

import { useEffect, useState } from "react";

export function ProgramPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("program-popup-dismissed")
    ) {
      return;
    }
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    setTimeout(() => setDismissed(true), 400);
    localStorage.setItem("program-popup-dismissed", "1");
  }

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 9999,
        width: 288,
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 18,
        padding: "20px 20px 18px",
        boxShadow:
          "0 28px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03)",
        transform: visible ? "translateY(0)" : "translateY(calc(100% + 40px))",
        opacity: visible ? 1 : 0,
        transition:
          "transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* close */}
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          width: 22,
          height: 22,
          background: "rgba(255,255,255,0.07)",
          border: "none",
          borderRadius: 99,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.35)",
          fontSize: 11,
          cursor: "pointer",
          padding: 0,
          lineHeight: 1,
        }}
      >
        ✕
      </button>

      {/* label row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          4-week program
        </span>
        <span
          style={{
            width: 7,
            height: 7,
            background: "var(--green-bright)",
            borderRadius: 99,
            boxShadow: "0 0 8px var(--green-bright)",
            display: "block",
          }}
        />
      </div>

      {/* heading */}
      <h3
        style={{
          color: "var(--white)",
          fontSize: 16,
          fontWeight: 700,
          margin: "0 0 6px",
          lineHeight: 1.3,
        }}
      >
        Go from curious
        <br />
        to shipping.
      </h3>

      {/* tagline */}
      <p
        style={{
          color: "rgba(255,255,255,0.38)",
          fontSize: 11,
          lineHeight: 1.55,
          margin: "0 0 14px",
        }}
      >
        "I should learn AI" → shipping in 4 weeks.
      </p>

      {/* divider */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.07)",
          marginBottom: 14,
        }}
      />

      {/* features */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          marginBottom: 12,
        }}
      >
        {[
          "Written lessons",
          "Matched pod of 4–5",
          "Private Slack",
          "Friday live call every week",
        ].map((f) => (
          <span
            key={f}
            style={{
              color: "rgba(255,255,255,0.32)",
              fontSize: 11,
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.14)", fontSize: 10 }}>
              —
            </span>
            {f}
          </span>
        ))}
      </div>

      {/* teachers */}
      <p
        style={{
          color: "rgba(255,255,255,0.22)",
          fontSize: 10,
          fontStyle: "italic",
          margin: "0 0 16px",
        }}
      >
        Co-taught by Batko and Finlay
      </p>

      {/* price + CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span
            style={{
              color: "var(--white)",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            $1,499
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: 11,
              marginLeft: 4,
            }}
          >
            AUD
          </span>
        </div>
        <a
          href="#"
          style={{
            background: "var(--white)",
            color: "var(--black)",
            fontSize: 11,
            fontWeight: 700,
            padding: "8px 16px",
            borderRadius: 9,
            textDecoration: "none",
            letterSpacing: "0.01em",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--surface)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--white)")
          }
        >
          Enrol now →
        </a>
      </div>
    </div>
  );
}
