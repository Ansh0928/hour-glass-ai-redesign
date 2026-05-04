"use client";

import { useEffect, useRef } from "react";
import { AgentMockup } from "./agent-mockup";
import { ParallaxScene } from "./parallax-scene";

export function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const scroll = window.scrollY;

      if (textRef.current) {
        const scale = Math.max(0.65, 1 - scroll * 0.0003);
        const opacity = Math.max(0, 1 - scroll * 0.0018);
        textRef.current.style.transform = `scale(${scale})`;
        textRef.current.style.opacity = String(opacity);
      }

      if (mockupRef.current) {
        mockupRef.current.style.transform = `translateY(${-scroll * 0.35}px) rotate(-2deg)`;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        background: "var(--hero-bg)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .hero-section { padding: 0 20px; }
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 100px !important; }
          .hero-mockup { display: none; }
        }
      `}</style>

      {/* 4-layer cinematic parallax background */}
      <ParallaxScene />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          paddingTop: 64,
        }}
      >
        {/* Left — text */}
        <div
          ref={textRef}
          style={{
            transformOrigin: "left center",
            transition: "none",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(84,143,40,0.15)",
              border: "1px solid rgba(84,143,40,0.3)",
              borderRadius: 20,
              padding: "6px 14px",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--green)",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--green)",
                letterSpacing: "0.04em",
              }}
            >
              Now in early access · Australian SMBs
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: 20,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Your admin,
            <br />
            <span style={{ color: "var(--green)" }}>handled by AI.</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              marginBottom: 36,
              maxWidth: 480,
            }}
          >
            Hourglass AI agents handle your emails, invoices, scheduling and
            follow-ups — so you can focus on the work that actually grows your
            business.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                background: "var(--green)",
                color: "white",
                padding: "14px 28px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get early access
            </a>
            <a
              href="#"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.65)",
                padding: "14px 24px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
              }
            >
              See how it works →
            </a>
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Free 14-day trial · No credit card · Cancel any time
          </p>
        </div>

        {/* Right — mockup with parallax */}
        <div
          ref={mockupRef}
          className="hero-mockup"
          style={{
            transform: "rotate(-2deg)",
            transformOrigin: "center center",
            transition: "none",
          }}
        >
          <AgentMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: "white",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, white, transparent)",
          }}
        />
      </div>
    </section>
  );
}
