import { PageShell } from "@/components/page-shell";
import { HOURGLASS_STATS } from "@/lib/stats";

const CASE_STUDIES = [
  {
    business: "Mitchell Plumbing",
    type: "Trades — 4 staff",
    location: "Melbourne, VIC",
    problem:
      "Spending 3+ hours every morning on quote follow-ups, overdue invoices, and scheduling clashes. Jobs were falling through the cracks.",
    results: [
      { metric: "14 hrs", label: "saved per week" },
      {
        metric: "$28k",
        label: "recovered in overdue invoices (first 60 days)",
      },
      { metric: "6 min", label: "average quote turnaround (was 3 days)" },
    ],
    quote:
      "I used to dread Monday mornings. Now the week just starts — everything is already sorted by the time I get to site.",
    name: "Tom Mitchell",
  },
  {
    business: "Tran & Co Accounting",
    type: "Professional services — 8 staff",
    location: "Sydney, NSW",
    problem:
      "Client onboarding took up to 4 days of back-and-forth emails. Tax season was chaos. Staff were doing admin instead of billable work.",
    results: [
      { metric: "22 hrs", label: "per week returned to billable work" },
      { metric: "4 days → 6 hrs", label: "client onboarding time" },
      { metric: "0", label: "missed follow-ups in 6 months" },
    ],
    quote:
      "We're a team of eight but we operate like a team of twelve now. The agents just handle the back-and-forth.",
    name: "James Tran",
  },
  {
    business: "Sharma Legal",
    type: "Legal services — 3 staff",
    location: "Brisbane, QLD",
    problem:
      "Small firm competing against larger practices. Every hour spent on admin was an hour not spent on client files — and clients felt it.",
    results: [
      { metric: "11 hrs", label: "saved per week across the team" },
      { metric: "41%", label: "faster client response time" },
      { metric: "2×", label: "the number of matters handled per month" },
    ],
    quote:
      "We went from always behind to actually getting ahead of client needs. The follow-up agent alone changed how clients perceive us.",
    name: "Priya Sharma",
  },
  {
    business: "Coastal Interiors",
    type: "Retail + trade — 6 staff",
    location: "Gold Coast, QLD",
    problem:
      "Supplier invoices, customer quotes, delivery confirmations — all handled manually by the owner. Growth was stalled because she couldn't step back.",
    results: [
      { metric: "19 hrs", label: "per week freed up for the owner" },
      { metric: "3×", label: "revenue growth in 12 months" },
      { metric: "100%", label: "of supplier invoices auto-reconciled" },
    ],
    quote:
      "I was the bottleneck. Hourglass took the admin off my plate and I finally had time to actually grow the business.",
    name: "Sarah Connelly",
  },
];

const AGGREGATE = HOURGLASS_STATS;

export default function ResultsPage() {
  return (
    <PageShell
      tag="Proof"
      headline="Real results from real Australian businesses."
      sub="Not projections. Not averages. Actual numbers from businesses like yours, in the first 90 days."
    >
      {/* Aggregate stats */}
      <section
        className="results-section-padding"
        style={{
          background: "var(--glight)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="results-stats-grid">
          {AGGREGATE.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <p
                style={{ fontSize: 14, color: "var(--gmid)", fontWeight: 500 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="results-cases-padding">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 16,
            }}
          >
            Case studies
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 64,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Businesses that made the switch.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.business} className="results-case-grid">
                {/* Left — context */}
                <div
                  style={{
                    padding: "48px 40px",
                    borderRight: "1px solid var(--border)",
                    background: i % 2 === 0 ? "var(--surface)" : "white",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--green)",
                      marginBottom: 12,
                    }}
                  >
                    {cs.type} · {cs.location}
                  </div>
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                      marginBottom: 16,
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                    }}
                  >
                    {cs.business}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--gmid)",
                      lineHeight: 1.7,
                      marginBottom: 32,
                    }}
                  >
                    <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                      The problem:
                    </strong>{" "}
                    {cs.problem}
                  </p>
                  <blockquote
                    style={{
                      borderLeft: "3px solid var(--green)",
                      paddingLeft: 16,
                      fontStyle: "italic",
                      fontSize: 15,
                      color: "var(--text)",
                      lineHeight: 1.65,
                    }}
                  >
                    &ldquo;{cs.quote}&rdquo;
                    <footer
                      style={{
                        fontStyle: "normal",
                        fontSize: 13,
                        color: "var(--gmid)",
                        marginTop: 8,
                        fontWeight: 600,
                      }}
                    >
                      — {cs.name}
                    </footer>
                  </blockquote>
                </div>

                {/* Right — results */}
                <div style={{ padding: "48px 40px" }}>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--gmid)",
                      marginBottom: 32,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Results in first 90 days
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 28,
                    }}
                  >
                    {cs.results.map((r) => (
                      <div
                        key={r.label}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 16,
                          paddingBottom: 28,
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "clamp(32px, 3vw, 48px)",
                            fontWeight: 800,
                            color: "var(--text)",
                            letterSpacing: "-0.04em",
                            fontFamily: "var(--font-playfair, Georgia, serif)",
                            lineHeight: 1,
                            flexShrink: 0,
                          }}
                        >
                          {r.metric}
                        </span>
                        <span
                          style={{
                            fontSize: 15,
                            color: "var(--gmid)",
                            lineHeight: 1.4,
                          }}
                        >
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI section */}
      <section
        className="results-roi-padding"
        style={{
          background: "var(--glight)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 16,
            }}
          >
            The math
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 20,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            First automation live in 30 days. 5+ hours back every week.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--gmid)",
              lineHeight: 1.7,
              marginBottom: 60,
            }}
          >
            The average Australian SMB spends 14 hours a week on admin. At
            $85/hr (the average owner&rsquo;s effective rate), that&rsquo;s
            $1,190 per week — or $61,880 a year — going to tasks a Hourglass
            agent handles for a fraction of the cost.
          </p>
          <div className="results-roi-grid">
            {[
              {
                label: "Your admin cost (est.)",
                value: "$61,880 / yr",
              },
              {
                label: "Hourglass subscription",
                value: "From $299 / mo",
              },
              {
                label: "You keep the difference",
                value: "~$58,292 / yr",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "white",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                    marginBottom: 8,
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: 13, color: "var(--gmid)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 12,
              color: "var(--gmid)",
              marginTop: 16,
              opacity: 0.6,
            }}
          >
            Based on 14 hrs/week admin time at $85/hr effective rate. Individual
            results vary.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
