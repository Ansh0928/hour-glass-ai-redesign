import { AnimatedCounter } from "./animated-counter";

const STATS = [
  { value: 12, suffix: " hrs", label: "Admin hours saved per week" },
  { value: 98, suffix: "%", label: "Tasks completed without human input" },
  { value: 3, suffix: " min", label: "Average AI response time" },
  { value: 200, suffix: "+", label: "Australian businesses on Hourglass" },
];

export function StatsBar() {
  return (
    <section
      style={{
        background: "var(--text)",
        padding: "72px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: "0 40px",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: "clamp(40px, 4vw, 60px)",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.5,
                fontWeight: 500,
                maxWidth: 160,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
