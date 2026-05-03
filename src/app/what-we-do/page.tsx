import { PageShell } from "@/components/page-shell";
import {
  IconMail,
  IconInvoice,
  IconCalendar,
  IconQuote,
  IconBell,
  IconFolder,
  IconGlobe,
  IconLock,
  IconClipboard,
} from "@/components/icons";
import type { ReactNode } from "react";

const CAPABILITIES: {
  icon: ReactNode;
  title: string;
  problem: string;
  what: string;
  examples: string[];
  color: string;
}[] = [
  {
    icon: <IconMail size={22} color="#3d6b28" strokeWidth={1.5} />,
    title: "Email management",
    problem:
      "The average SMB owner reads and replies to 60+ emails a day. Most of it is enquiries, status checks, and follow-ups — not decisions.",
    what: "Hourglass reads every incoming email, drafts a reply in your tone, and either sends it automatically or queues it for your approval. Categorises by urgency, flags anything that needs a human.",
    examples: [
      "Quote requests → draft and send",
      "Overdue invoice follow-ups → timed sequences",
      "Client status checks → auto-reply with current info",
      "Spam + cold outreach → filtered out silently",
    ],
    color: "#eef6dc",
  },
  {
    icon: <IconInvoice size={22} color="#3d6b28" strokeWidth={1.5} />,
    title: "Invoicing & payments",
    problem:
      "Late invoices are the number one cash flow killer for Australian small businesses. Most owners forget to follow up — or feel awkward doing it.",
    what: "Creates invoices from your quotes or job completions, sends them on time, and runs a follow-up sequence that escalates politely. Reconciles payments and flags outstanding balances daily.",
    examples: [
      "Auto-invoice on job completion",
      "3-touch follow-up sequence (day 3, 7, 14)",
      "Overdue escalation to phone call prompt",
      "Xero / MYOB sync for reconciliation",
    ],
    color: "#ddeabd",
  },
  {
    icon: <IconCalendar size={22} color="#3d6b28" strokeWidth={1.5} />,
    title: "Scheduling & calendar",
    problem:
      "Back-and-forth scheduling eats 45 minutes a day on average. Missed bookings and double-ups cost real money in trades and services.",
    what: "Connects to your calendar, reads availability, books meetings and site visits, sends confirmations, and reschedules when conflicts arise. No assistant required.",
    examples: [
      "Client meeting requests → auto-book",
      "Site visit scheduling with travel buffer",
      "Conflict detection + rescheduling",
      "Reminder sequences for no-show prevention",
    ],
    color: "#c8dc96",
  },
  {
    icon: <IconQuote size={22} color="#3d6b28" strokeWidth={1.5} />,
    title: "Quoting",
    problem:
      "A slow quote is a lost job. Most tradies and service businesses take 2–4 days to turn around a quote — by which time the client has moved on.",
    what: "Takes incoming scope requests, pulls from your pricing templates and past jobs, and generates a professional quote in minutes. Sends it automatically or holds for review.",
    examples: [
      "Scope-to-quote in under 10 minutes",
      "Pulls from historical job pricing",
      "Branded PDF output",
      "Automatic follow-up if no response in 48 hrs",
    ],
    color: "#b4cc78",
  },
  {
    icon: <IconBell size={22} color="#3d6b28" strokeWidth={1.5} />,
    title: "Follow-ups & nurture",
    problem:
      "Most business is lost in the gap between 'I'll think about it' and the next touchpoint. That touchpoint never comes because the owner forgot.",
    what: "Monitors your pipeline and fires personalised follow-ups at the right time — after quotes, after meetings, after delivery. Tracks responses and stops when a reply comes in.",
    examples: [
      "Post-quote: follow up at day 2, 5, 10",
      "Post-delivery: satisfaction check + review request",
      "Dormant clients: re-engagement after 90 days",
      "Proposal accepted: kickoff sequence",
    ],
    color: "#eef6dc",
  },
  {
    icon: <IconFolder size={22} color="#3d6b28" strokeWidth={1.5} />,
    title: "Document handling",
    problem:
      "Attachments land in emails and disappear. Contracts get lost. Certificates expire. Nobody knows where the signed copy is.",
    what: "Files and names every attachment automatically, links documents to the right client or job, tracks expiry dates on certificates and licences, and surfaces the right file when needed.",
    examples: [
      "Incoming attachments → named and filed",
      "Contract signed → stored against client record",
      "Licence expiry → 60-day alert",
      "Client asks for docs → instant retrieval",
    ],
    color: "#ddeabd",
  },
];

const INTEGRATIONS = [
  "Xero",
  "MYOB",
  "QuickBooks",
  "Gmail",
  "Outlook",
  "Google Calendar",
  "Calendly",
  "Shopify",
  "ServiceM8",
  "Deputy",
  "Slack",
  "HubSpot",
];

const WHY_AGENTS = [
  {
    heading: "Not a chatbot.",
    body: "Chatbots wait for you to ask them something. Agents watch what's happening and act. You don't prompt Hourglass — it just works.",
  },
  {
    heading: "Not another tool to learn.",
    body: "You don't change how you work. Hourglass plugs into your existing email, calendar, and accounting software and runs in the background.",
  },
  {
    heading: "Not a virtual assistant.",
    body: "A VA needs briefing, oversight, and management. Hourglass agents make decisions within the rules you set and escalate only when they genuinely need you.",
  },
];

export default function WhatWeDoPage() {
  return (
    <PageShell
      tag="The product"
      headline="Admin that runs itself."
      sub="Six AI agents that handle the back-office work keeping you from growing. No prompts. No micromanagement. No missed follow-ups."
    >
      {/* Why agents section */}
      <section
        style={{
          padding: "100px 40px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
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
                Why agents
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 24,
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  lineHeight: 1.1,
                }}
              >
                There&rsquo;s a difference between a tool and a team member.
              </h2>
              <p
                style={{ fontSize: 17, color: "var(--gmid)", lineHeight: 1.75 }}
              >
                Tools sit on your desk waiting to be used. A Hourglass agent
                watches your inbox, your calendar, your outstanding invoices —
                and acts. It drafts, sends, files, follows up, and escalates.
                The way a good ops person would.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {WHY_AGENTS.map((item) => (
                <div
                  key={item.heading}
                  style={{
                    padding: "24px 28px",
                    background: "var(--surface)",
                    borderRadius: 14,
                    border: "1px solid var(--border)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 8,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--gmid)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ padding: "100px 40px" }}>
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
            What we handle
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
            Every category of admin work, covered.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "var(--border)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                style={{
                  background: "white",
                  padding: "48px 48px",
                  display: "grid",
                  gridTemplateColumns: "300px 1fr 260px",
                  gap: 48,
                  alignItems: "start",
                }}
              >
                {/* Label */}
                <div>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: cap.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    {cap.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                      marginBottom: 10,
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--gmid)",
                      lineHeight: 1.65,
                    }}
                  >
                    {cap.problem}
                  </p>
                </div>

                {/* What it does */}
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--gmid)",
                      marginBottom: 12,
                    }}
                  >
                    What Hourglass does
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--text)",
                      lineHeight: 1.7,
                    }}
                  >
                    {cap.what}
                  </p>
                </div>

                {/* Examples */}
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--gmid)",
                      marginBottom: 12,
                    }}
                  >
                    Examples
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {cap.examples.map((ex) => (
                      <li
                        key={ex}
                        style={{
                          fontSize: 13,
                          color: "var(--gmid)",
                          lineHeight: 1.5,
                          display: "flex",
                          gap: 8,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--green)",
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          →
                        </span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section
        style={{
          background: "var(--surface)",
          padding: "80px 40px",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Works with your tools
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 48,
              textAlign: "center",
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Plug in what you already use.
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {INTEGRATIONS.map((name) => (
              <div
                key={name}
                style={{
                  padding: "10px 20px",
                  border: "1px solid var(--border)",
                  borderRadius: 40,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--gmid)",
                  background: "white",
                }}
              >
                {name}
              </div>
            ))}
            <div
              style={{
                padding: "10px 20px",
                border: "1px dashed var(--border)",
                borderRadius: 40,
                fontSize: 14,
                fontWeight: 500,
                color: "var(--border)",
              }}
            >
              + more via Zapier
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
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
            Security & compliance
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 20,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Your data stays in Australia.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--gmid)",
              lineHeight: 1.75,
              marginBottom: 48,
            }}
          >
            Hourglass is hosted on Australian infrastructure, compliant with the
            Privacy Act 1988, and never trains on your business data. Your
            client information, emails, and financial records are yours.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {(
              [
                {
                  icon: (
                    <IconGlobe
                      size={22}
                      color="var(--green)"
                      strokeWidth={1.5}
                    />
                  ),
                  title: "Australian hosted",
                  body: "Data stored in AWS ap-southeast-2 (Sydney). Never leaves Australian jurisdiction.",
                },
                {
                  icon: (
                    <IconLock
                      size={22}
                      color="var(--green)"
                      strokeWidth={1.5}
                    />
                  ),
                  title: "End-to-end encrypted",
                  body: "AES-256 at rest, TLS 1.3 in transit. Read-only access to your accounts by default.",
                },
                {
                  icon: (
                    <IconClipboard
                      size={22}
                      color="var(--green)"
                      strokeWidth={1.5}
                    />
                  ),
                  title: "Privacy Act compliant",
                  body: "Built for Australian privacy law. No data sold, no third-party advertising, no training on your data.",
                },
              ] as { icon: ReactNode; title: string; body: string }[]
            ).map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "28px 24px",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  background: "var(--surface)",
                  textAlign: "left",
                }}
              >
                <div style={{ marginBottom: 12, display: "flex" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--gmid)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
