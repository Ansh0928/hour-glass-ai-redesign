"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    num: "01",
    heading: "Audit",
    meta: "$2,000 – $10,000  ·  7 – 14 days",
    body: "We find where your team's time disappears. You get a prioritised roadmap showing exactly what to automate first – and what it's worth.",
  },
  {
    num: "02",
    heading: "Build",
    meta: "$5,000 – $15,000 per agent  ·  Quick wins in 30 days",
    body: "We deploy AI agents into the tools you already use. No migration. No learning curve. Just less busywork, starting week one.",
  },
  {
    num: "03",
    heading: "Maintain",
    meta: "Monthly retainer  ·  Always improving",
    body: "Systems that improve every month. We monitor, refine, and expand – so the gains compound instead of decay.",
  },
];

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items =
      ref.current?.querySelectorAll<HTMLDivElement>(".process-step");
    if (!items) return;
    const observers: IntersectionObserver[] = [];
    items.forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      style={{
        background: "var(--surface-2)",
        padding: "120px 40px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "var(--green)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          How we work
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 64,
            fontFamily: "var(--font-playfair, Georgia, serif)",
          }}
        >
          Audit. Build. Maintain.
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--border)",
          }}
        >
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="process-step reveal"
              style={{
                padding: "48px 40px 48px 0",
                paddingLeft: i > 0 ? 40 : 0,
                borderLeft: i > 0 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "var(--green)",
                  letterSpacing: "0.06em",
                  fontVariantNumeric: "tabular-nums",
                  marginBottom: 24,
                  opacity: 0.7,
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  lineHeight: 1.15,
                }}
              >
                {s.heading}
              </h3>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--green)",
                  letterSpacing: "0.04em",
                  marginBottom: 14,
                  opacity: 0.8,
                }}
              >
                {s.meta}
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-dim)",
                  lineHeight: 1.7,
                  maxWidth: 280,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
