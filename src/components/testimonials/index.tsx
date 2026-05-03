"use client";

import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "I used to spend two hours every morning just clearing emails and sending invoices. Now I check in once a day to approve what the AI drafted. It's genuinely changed my mornings.",
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Plumbing",
    location: "Melbourne, VIC",
  },
  {
    quote:
      "We're a small team of four. Hourglass gave us back about twelve hours a week collectively. That's basically a part-time hire we didn't have to make.",
    name: "James Tran",
    role: "Founder, Tran & Co Accounting",
    location: "Sydney, NSW",
  },
  {
    quote:
      "The follow-up agent alone paid for itself in the first month. We were leaving so much money on the table just from not following up fast enough.",
    name: "Priya Sharma",
    role: "Director, Sharma Legal",
    location: "Brisbane, QLD",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards =
      ref.current?.querySelectorAll<HTMLDivElement>(".testimonial-card");
    cards?.forEach((card, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting)
            setTimeout(() => card.classList.add("visible"), i * 100);
        },
        { threshold: 0.15 },
      );
      obs.observe(card);
    });
  }, []);

  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "120px 40px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--green)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          From the field
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 60,
            fontFamily: "var(--font-playfair, Georgia, serif)",
          }}
        >
          Australian businesses love it.
        </h2>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="testimonial-card reveal"
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--text)",
                  }}
                >
                  {t.name}
                </div>
                <div style={{ fontSize: 13, color: "var(--gmid)" }}>
                  {t.role}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--green)",
                    fontWeight: 600,
                    marginTop: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  📍 {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
