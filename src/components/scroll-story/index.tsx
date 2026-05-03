"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: "capture",
    label: "Capture",
    heading: "AI reads everything coming in",
    body: "Hourglass connects to your inbox, messages, and accounting tools. Every email, quote request, and invoice is read, categorised, and triaged — automatically, the moment it arrives.",
    emoji: "📥",
    color: "#eef6dc",
  },
  {
    id: "draft",
    label: "Draft",
    heading: "Agents write the responses",
    body: "Your AI agents draft professional replies, quotes, follow-up messages, and payment reminders in your tone and voice. Nothing goes out without your approval — but most of the time, it's perfect first go.",
    emoji: "✍️",
    color: "#ddeabd",
  },
  {
    id: "send",
    label: "Send",
    heading: "Approved content goes out automatically",
    body: "Once you give the nod, everything is sent, filed, and logged. Invoices get emailed. Meetings get booked. Follow-ups fire at the right time. You don't have to touch a thing.",
    emoji: "🚀",
    color: "#c8dc96",
  },
  {
    id: "track",
    label: "Track",
    heading: "One dashboard, everything in motion",
    body: "See every task your agents are handling, what's been sent, what's awaiting approval, and what's been resolved. Full visibility, zero micromanagement.",
    emoji: "📊",
    color: "#b4cc78",
  },
];

export function ScrollStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });

    const focusObs = itemRefs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          el.classList.toggle("focused", entry.isIntersecting);
        },
        { rootMargin: "-28% 0px -28% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      observers.forEach((o) => o?.disconnect());
      focusObs.forEach((o) => o?.disconnect());
    };
  }, []);

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "120px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
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
          How it works
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 80,
            maxWidth: 520,
            fontFamily: "var(--font-playfair, Georgia, serif)",
          }}
        >
          From inbox chaos to handled — in seconds
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80 }}
        >
          {/* Sticky nav */}
          <div style={{ position: "sticky", top: 120, height: "fit-content" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {STEPS.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => {
                    itemRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  style={{
                    textAlign: "left",
                    padding: "10px 16px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: activeIndex === i ? 700 : 500,
                    color: activeIndex === i ? "var(--text)" : "var(--gmid)",
                    background:
                      activeIndex === i ? "var(--glight)" : "transparent",
                    transition: "all 0.25s ease",
                  }}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="story-item"
                style={{ paddingBottom: 40 }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    marginBottom: 24,
                  }}
                >
                  {step.emoji}
                </div>
                <h3
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "var(--text)",
                    marginBottom: 16,
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                  }}
                >
                  {step.heading}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    color: "var(--gmid)",
                    lineHeight: 1.7,
                    maxWidth: 540,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
