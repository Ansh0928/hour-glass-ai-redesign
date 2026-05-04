import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Hourglass AI",
  description:
    "Simple, fixed-fee pricing. Time Audit from $2,000. Agent Build from $5,000. No retainers until you're ready.",
};

export default function PricingPage() {
  return (
    <PageShell
      tag="Pricing"
      headline="Simple, fixed-fee pricing."
      sub="No retainers. No discovery theater. You pay for results — a working system deployed inside your business."
    >
      <section
        style={{
          padding: "80px 40px 120px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="pricing-grid"
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          {[
            {
              tag: "Step 1",
              name: "Time Audit",
              price: "$2,000 – $10,000",
              duration: "7 – 14 days",
              description:
                "We map every recurring task your team touches and tell you exactly what to automate first — and what it's worth.",
              items: [
                "Full admin workflow mapping",
                "Dollar value of time lost",
                "Prioritised automation roadmap",
                "ROI estimate per workflow",
              ],
              cta: "Start here",
              highlight: false,
            },
            {
              tag: "Step 2",
              name: "Agent Build",
              price: "$5,000 – $15,000",
              duration: "Per agent · 30-day deploy",
              description:
                "We build and deploy AI agents directly inside the tools you already use. No migration. No new platforms.",
              items: [
                "Custom agent built for your workflow",
                "Plugs into Gmail, Xero, ServiceM8",
                "Quick wins in the first week",
                "Built around your business logic",
              ],
              cta: "Book a demo",
              highlight: true,
            },
            {
              tag: "Step 3",
              name: "Maintain & Improve",
              price: "Monthly · ongoing",
              duration: "Always improving",
              description:
                "We monitor, refine, and expand your agents so the gains compound instead of decay.",
              items: [
                "Monthly review call",
                "Continuous agent refinement",
                "New workflow additions",
                "Priority support",
              ],
              cta: "Ask about this",
              highlight: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.highlight ? "var(--text)" : "white",
                padding: "48px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: tier.highlight
                    ? "var(--green-bright)"
                    : "var(--green)",
                  marginBottom: 10,
                }}
              >
                {tier.tag}
              </p>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: tier.highlight ? "white" : "var(--text)",
                  marginBottom: 6,
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                }}
              >
                {tier.name}
              </h2>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: tier.highlight ? "white" : "var(--text)",
                  marginBottom: 4,
                }}
              >
                {tier.price}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: tier.highlight
                    ? "rgba(255,255,255,0.4)"
                    : "var(--text-dim)",
                  marginBottom: 24,
                }}
              >
                {tier.duration}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: tier.highlight
                    ? "rgba(255,255,255,0.55)"
                    : "var(--text-dim)",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                {tier.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 40,
                  flexGrow: 1,
                }}
              >
                {tier.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: tier.highlight
                          ? "rgba(34,197,94,0.15)"
                          : "var(--green-dim)",
                        border: tier.highlight
                          ? "1px solid rgba(34,197,94,0.3)"
                          : "1px solid rgba(22,128,60,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                        color: tier.highlight
                          ? "var(--green-bright)"
                          : "var(--green)",
                      }}
                    >
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1.5 4L3.5 6L6.5 2" />
                      </svg>
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: tier.highlight
                          ? "rgba(255,255,255,0.65)"
                          : "var(--text-dim)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "13px 24px",
                  borderRadius: 9999,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  background: tier.highlight ? "var(--green)" : "var(--text)",
                  color: "white",
                }}
              >
                {tier.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "80px 40px",
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 16,
            }}
          >
            Common questions
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 48,
              fontFamily: "var(--font-playfair, Georgia, serif)",
              lineHeight: 1.1,
            }}
          >
            What you're probably wondering.
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              {
                q: "Do I need to switch tools?",
                a: "No. Your agents plug directly into Gmail, Xero, ServiceM8, Calendly, and whatever else you already use. There's nothing new to learn.",
              },
              {
                q: "How long before I see results?",
                a: "Most clients see meaningful time savings within the first week of deployment. The audit phase takes 7–14 days, then we build.",
              },
              {
                q: "What if it doesn't work for my business?",
                a: "We audit first. If we can't show you a clear ROI case during the audit, we tell you — before you spend anything on a build.",
              },
              {
                q: "Do you work with businesses outside Australia?",
                a: "We're focused on Australian SMBs for now. Our agents are tuned for local tools (Xero, ServiceM8, MYOB) and business context.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  padding: "28px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text-dim)",
                    lineHeight: 1.75,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
