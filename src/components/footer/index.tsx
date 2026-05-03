"use client";

import Image from "next/image";

export function Footer() {
  const cols = [
    {
      heading: "Product",
      links: ["Features", "Agents", "Integrations", "Pricing", "Changelog"],
    },
    {
      heading: "Company",
      links: ["About", "Blog", "Careers", "Press", "Contact"],
    },
    {
      heading: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Security",
        "Cookie Policy",
      ],
    },
  ];

  return (
    <>
      {/* CTA + Melbourne banner */}
      <section style={{ position: "relative", width: "100%" }}>
        <Image
          src="/melbourne-sketch.png"
          alt="Melbourne skyline"
          width={1536}
          height={1024}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority={false}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, var(--hero-bg) 0%, transparent 25%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--hero-bg) 0%, transparent 25%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              margin: "0 auto 20px",
              maxWidth: 800,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Stop doing admin.
            <br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              Start growing.
            </span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 440,
              margin: "0 auto 48px",
              lineHeight: 1.65,
            }}
          >
            Join 200+ Australian businesses that run their back office on
            autopilot. Free 14-day trial, no credit card required.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a
              href="#"
              style={{
                background: "white",
                color: "var(--hero-bg)",
                padding: "14px 32px",
                borderRadius: 40,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Start free trial
            </a>
            <a
              href="#"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.6)",
                padding: "14px 28px",
                borderRadius: 40,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Book a demo →
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "var(--hero-bg)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "64px 40px 40px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
              gap: 40,
              marginBottom: 48,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    background: "var(--green)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 2C5.8 2 4 3.6 4 5.6c0 1.2.6 2.4 1.6 3.2L4 13h8l-1.6-4.2C11.4 8 12 6.8 12 5.6 12 3.6 10.2 2 8 2z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    color: "white",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Hourglass
                </span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.6,
                  maxWidth: 220,
                }}
              >
                AI agents that handle admin for Australian small businesses.
              </p>
            </div>

            {cols.map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                      }
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              © 2025 Hourglass AI Pty Ltd. ABN 00 000 000 000. Sydney,
              Australia.
            </span>
            <div style={{ display: "flex", gap: 16 }}>
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
