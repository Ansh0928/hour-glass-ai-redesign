import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar, SiteNav } from "@/components/site-nav";
import { Logo } from "@/components/logo";
import { TEAM_STATS } from "@/lib/stats";

export const metadata: Metadata = {
  title: "The Team — Hourglass AI",
  description:
    "Meet Michael Batko and Finlay Ekins — the founders building AI systems inside Australian businesses.",
};

const FOUNDERS = [
  {
    initials: "MB",
    name: "Michael Batko",
    role: "Co-founder & CEO",
    bio: "Ran Startmate for 8 years — Australia's most active startup accelerator. Coached 300+ founders across a $4.5B portfolio. Left to build the thing nobody else was building.",
    credentials: [
      "CEO, Startmate · 8 years",
      "300+ startups coached",
      "$4.5B portfolio managed",
      "2× founder, both acquired",
    ],
    quote:
      "Consulting firms gave them strategy decks. Agencies gave them discovery phases. Nobody just built the thing.",
    linkedin: "https://www.linkedin.com/in/batkomichael/",
    website: "https://batko.ai",
  },
  {
    initials: "FE",
    name: "Finlay Ekins",
    role: "Co-founder",
    bio: "Builder first. Believes AI is new enough that anyone willing to invest the effort can become an expert — regardless of background or age. Ships real systems in real businesses.",
    credentials: ["AI systems builder", "No discovery phases — ships in weeks"],
    quote:
      "The businesses willing to do this are going to end up light-years ahead of the ones sticking their heads in the sand.",
    linkedin: "https://www.linkedin.com/in/finlay-ekins-016913242/",
    website: "https://www.finlayekins.com",
  },
];

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function TeamPage() {
  return (
    <div style={{ background: "var(--hero-bg)", minHeight: "100vh" }}>
      <AnnouncementBar />
      <SiteNav />

      {/* Hero */}
      <div
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          paddingLeft: 40,
          paddingRight: 40,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 16,
            }}
          >
            The team
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "white",
              marginBottom: 20,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Built by people who&rsquo;ve done it.
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Not consultants. Not an agency. Two founders who&rsquo;ve operated
            at scale — now building AI systems inside real businesses with their
            hands on the keyboard.
          </p>
        </div>
      </div>

      {/* Joint photo */}
      <div style={{ padding: "0 40px", maxWidth: 1000, margin: "0 auto 80px" }}>
        <Image
          src="https://assets.startupdaily.net/wp-content/uploads/sites/7/2026/04/Elkins-Batko.jpg"
          alt="Finlay Ekins and Michael Batko, co-founders of Hourglass AI"
          width={1000}
          height={480}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: 480,
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: 20,
            display: "block",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          priority
        />
      </div>

      {/* Stats strip */}
      <div
        style={{
          padding: "0 40px 64px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div className="team-stats-strip">
          {TEAM_STATS.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "28px 24px",
                background: "rgba(255,255,255,0.02)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  marginBottom: 6,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder cards */}
      <div
        style={{
          padding: "0 40px 100px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div className="founder-row" style={{ gap: 20 }}>
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              style={{
                padding: "40px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Identity row */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "rgba(84,143,40,0.12)",
                    border: "1px solid rgba(84,143,40,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--green)",
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    flexShrink: 0,
                  }}
                >
                  {founder.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "white",
                      letterSpacing: "-0.02em",
                      marginBottom: 3,
                    }}
                  >
                    {founder.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.35)",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                }}
              >
                {founder.bio}
              </p>

              {/* Quote */}
              <p
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  borderLeft: "2px solid var(--green)",
                  paddingLeft: 16,
                }}
              >
                &ldquo;{founder.quote}&rdquo;
              </p>

              {/* Credential chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {founder.credentials.map((c) => (
                  <span
                    key={c}
                    style={{
                      padding: "4px 12px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 40,
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.4)",
                      background: "rgba(255,255,255,0.04)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.8)",
                    padding: "11px 16px",
                    minHeight: 44,
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                {founder.website && (
                  <a
                    href={founder.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      color: "rgba(255,255,255,0.35)",
                      padding: "11px 14px",
                      minHeight: 44,
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 500,
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Website ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why we built this */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "100px 40px",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 20,
            }}
          >
            Why we built this
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "white",
              marginBottom: 32,
              fontFamily: "var(--font-playfair, Georgia, serif)",
              lineHeight: 1.1,
            }}
          >
            Hundreds of founders asked the same question. Nobody answered.
          </h2>
          <div className="team-why-grid" style={{ gap: 20 }}>
            {[
              {
                label: "The question",
                body: "After 8 years at Startmate, the same thing came up over and over: how do we actually use AI in our business, right now? Not in a strategy deck. Not after a discovery phase. Now.",
              },
              {
                label: "The answer",
                body: "We embed inside your business, build real systems in weeks, and leave you with something that actually runs. Fixed fee. No retainers. No discovery theater.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "28px 32px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--green)",
                    marginBottom: 12,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.75,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "white",
              marginBottom: 16,
              fontFamily: "var(--font-playfair, Georgia, serif)",
              lineHeight: 1.1,
            }}
          >
            See if we&rsquo;re a fit.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            Book a 30-minute call. We&rsquo;ll show you exactly where AI can
            save 10+ hours a week inside your specific business.
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "var(--black)",
              padding: "14px 32px",
              borderRadius: 40,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Book a demo →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "40px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Logo color="rgba(255,255,255,0.25)" size={18} />
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
          © 2026 Hourglass AI Pty Ltd · Melbourne & Sydney · ACN 696 937 372
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Twitter", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.25)",
                textDecoration: "none",
              }}
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
