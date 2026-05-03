"use client";

const CARDS = [
  {
    headline: "No hidden setup fees.",
    sub: "Get up and running in under an hour. No consultants, no lock-in.",
  },
  {
    headline: "Works with your existing tools.",
    sub: "Xero, MYOB, Gmail, Outlook, Calendly — plug in what you already use.",
  },
  {
    headline: "Cancel any time.",
    sub: "Month-to-month pricing. No contracts. No questions asked.",
  },
  {
    headline: "Australian-built and supported.",
    sub: "Our team is in Sydney. Real humans, real support, real hours.",
  },
];

export function ValueCards() {
  return (
    <section
      style={{
        background: "var(--hero-bg)",
        padding: "0",
        overflow: "hidden",
      }}
    >
      {CARDS.map((card, i) => (
        <div
          key={i}
          style={{
            padding: "80px 40px",
            borderBottom:
              i < CARDS.length - 1
                ? "1px solid rgba(255,255,255,0.08)"
                : "none",
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            {card.headline}
          </h3>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 480,
              lineHeight: 1.6,
            }}
          >
            {card.sub}
          </p>
        </div>
      ))}
    </section>
  );
}
