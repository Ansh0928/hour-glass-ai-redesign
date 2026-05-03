import { PageShell } from "@/components/page-shell";
import {
  IconMail,
  IconInvoice,
  IconCalendar,
  IconQuote,
  IconBell,
  IconFolder,
} from "@/components/icons";
import type { ReactNode } from "react";

const AGENTS: {
  icon: ReactNode;
  name: string;
  role: string;
  color: string;
  tagline: string;
  description: string;
  handles: string[];
  stats: { tasks: string; accuracy: string; avgTime: string };
  connects: string[];
}[] = [
  {
    icon: <IconMail size={26} color="#3d6b28" strokeWidth={1.5} />,
    name: "Aria",
    role: "Email Agent",
    color: "#eef6dc",
    tagline: "Clears your inbox while you're on site.",
    description:
      "Aria reads every incoming email the moment it arrives. She categorises by urgency, drafts replies in your voice, handles routine enquiries automatically, and escalates anything that genuinely needs you. She also monitors threads for dropped conversations and nudges you before they go cold.",
    handles: [
      "New client enquiries — draft and send",
      "Status update requests — auto-reply",
      "Supplier correspondence — filed and responded",
      "Overdue payment chasers — timed sequences",
      "Cold outreach — silently filtered",
    ],
    stats: { tasks: "4,200+", accuracy: "99.1%", avgTime: "< 2 min" },
    connects: ["Gmail", "Outlook", "Microsoft 365"],
  },
  {
    icon: <IconInvoice size={26} color="#3d6b28" strokeWidth={1.5} />,
    name: "Rex",
    role: "Invoice Agent",
    color: "#ddeabd",
    tagline: "Sends the invoice. Chases the payment. Gets paid.",
    description:
      "Rex creates invoices from completed jobs, quotes, or purchase orders — then sends them. He runs a three-touch follow-up sequence for unpaid invoices (day 3, 7, 14), escalates to a phone prompt at day 21, and reconciles every payment against your accounting software.",
    handles: [
      "Auto-invoice on job completion",
      "Quote-to-invoice conversion",
      "Payment reminder sequences",
      "Credit note and adjustment requests",
      "Reconciliation against Xero / MYOB",
    ],
    stats: { tasks: "1,800+", accuracy: "99.6%", avgTime: "< 4 min" },
    connects: ["Xero", "MYOB", "QuickBooks", "Stripe"],
  },
  {
    icon: <IconCalendar size={26} color="#3d6b28" strokeWidth={1.5} />,
    name: "Cal",
    role: "Calendar Agent",
    color: "#c8dc96",
    tagline: "Books it, confirms it, reschedules it. Without you.",
    description:
      "Cal manages your schedule end to end. He reads incoming meeting requests, checks real availability, factors in travel time for site visits, and books the slot. He sends confirmation sequences, catches conflicts before they happen, and handles reschedule requests without dropping the thread.",
    handles: [
      "Client meeting and site visit booking",
      "Travel buffer calculation",
      "Conflict detection and resolution",
      "Reminder sequences (24hr, 2hr before)",
      "No-show follow-up and rebooking",
    ],
    stats: { tasks: "3,100+", accuracy: "98.8%", avgTime: "< 3 min" },
    connects: ["Google Calendar", "Outlook", "Calendly", "ServiceM8"],
  },
  {
    icon: <IconQuote size={26} color="#3d6b28" strokeWidth={1.5} />,
    name: "Quinn",
    role: "Quote Agent",
    color: "#b4cc78",
    tagline: "Turns a scope into a professional proposal in minutes.",
    description:
      "Quinn takes incoming quote requests — by email, form, or message — and builds a professional proposal using your pricing templates, historical job data, and business rules. She can send automatically for straightforward jobs or hold for your review on complex or high-value work.",
    handles: [
      "Scope-to-quote from email or form",
      "Pricing from historical job data",
      "Branded PDF output",
      "Automatic 48-hr follow-up",
      "Accepted quote → trigger invoice setup",
    ],
    stats: { tasks: "920+", accuracy: "97.4%", avgTime: "< 10 min" },
    connects: ["Gmail", "Outlook", "ServiceM8", "Xero"],
  },
  {
    icon: <IconBell size={26} color="#3d6b28" strokeWidth={1.5} />,
    name: "Chase",
    role: "Follow-up Agent",
    color: "#eef6dc",
    tagline: "The touchpoint you always meant to make.",
    description:
      "Chase monitors your pipeline and fires personalised follow-ups at exactly the right moment — after quotes, after meetings, after delivery, after a period of silence. He tracks every thread, stops automatically when a reply comes in, and re-engages dormant clients at smart intervals.",
    handles: [
      "Post-quote follow-up sequences",
      "Post-delivery satisfaction checks",
      "Review request after job completion",
      "Dormant client re-engagement (90-day)",
      "Proposal accepted → kickoff trigger",
    ],
    stats: { tasks: "2,600+", accuracy: "99.3%", avgTime: "< 5 min" },
    connects: ["Gmail", "Outlook", "HubSpot", "Slack"],
  },
  {
    icon: <IconFolder size={26} color="#3d6b28" strokeWidth={1.5} />,
    name: "Doc",
    role: "Document Agent",
    color: "#ddeabd",
    tagline: "Files it where it belongs. Finds it when you need it.",
    description:
      "Doc processes every attachment that comes through your email or file storage. He names documents consistently, links them to the right client or job, tracks expiry dates on licences and certificates, and retrieves anything on request — without you digging through folders.",
    handles: [
      "Incoming attachment naming and filing",
      "Contract storage linked to client record",
      "Licence and certificate expiry tracking",
      "On-request document retrieval",
      "Document version management",
    ],
    stats: { tasks: "5,400+", accuracy: "99.7%", avgTime: "< 1 min" },
    connects: ["Google Drive", "Dropbox", "OneDrive", "Gmail"],
  },
];

const HOW_THEY_LEARN = [
  {
    step: "1",
    heading: "You set the rules once",
    body: "Tell each agent your preferences, tone, pricing rules, and escalation thresholds during setup. Takes about 20 minutes.",
  },
  {
    step: "2",
    heading: "They watch and act",
    body: "Agents monitor your connected tools continuously. They handle routine work immediately and flag exceptions for your input.",
  },
  {
    step: "3",
    heading: "You correct, they adapt",
    body: "Every time you edit a draft or override a decision, the agent notes the preference and applies it going forward. No retraining required.",
  },
  {
    step: "4",
    heading: "They get sharper over time",
    body: "After 30 days, most customers see near-zero manual corrections. The agents have learned the nuances of your business and clients.",
  },
];

export default function AgentsPage() {
  return (
    <PageShell
      tag="The team"
      headline="Six agents. One goal: get admin off your plate."
      sub="Each agent is purpose-built for a specific category of work. They run in parallel, share context, and hand off to each other when tasks overlap."
    >
      {/* Live feed teaser */}
      <section
        style={{
          background: "var(--glight)",
          padding: "60px 40px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              background: "var(--hero-bg)",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--green)",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Agent activity — right now
                </span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--green)",
                  background: "rgba(84,143,40,0.15)",
                  padding: "2px 8px",
                  borderRadius: 20,
                }}
              >
                LIVE
              </span>
            </div>
            {(
              [
                {
                  agent: "Aria",
                  action: "Reply drafted",
                  detail: "Invoice enquiry from Sarah B.",
                  time: "just now",
                  icon: (
                    <IconMail
                      size={16}
                      color="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                    />
                  ),
                },
                {
                  agent: "Rex",
                  action: "Invoice sent",
                  detail: "$4,800 → Mitchell Plumbing Pty Ltd",
                  time: "1m ago",
                  icon: (
                    <IconInvoice
                      size={16}
                      color="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                    />
                  ),
                },
                {
                  agent: "Cal",
                  action: "Meeting booked",
                  detail: "Site visit — Thu 10:30am, Chadstone",
                  time: "3m ago",
                  icon: (
                    <IconCalendar
                      size={16}
                      color="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                    />
                  ),
                },
                {
                  agent: "Chase",
                  action: "Follow-up queued",
                  detail: "Quote #0051 — day 2 reminder",
                  time: "6m ago",
                  icon: (
                    <IconBell
                      size={16}
                      color="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                    />
                  ),
                },
                {
                  agent: "Quinn",
                  action: "Quote created",
                  detail: "Landscaping scope → $6,200 proposal",
                  time: "9m ago",
                  icon: (
                    <IconQuote
                      size={16}
                      color="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                    />
                  ),
                },
              ] as {
                agent: string;
                action: string;
                detail: string;
                time: string;
                icon: ReactNode;
              }[]
            ).map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderBottom:
                    i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  opacity: 1 - i * 0.1,
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  {item.icon}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--green)",
                      }}
                    >
                      {item.agent}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.8)",
                        fontWeight: 500,
                      }}
                    >
                      {item.action}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent profiles */}
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
            Agent profiles
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
            Meet the six.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {AGENTS.map((agent, i) => (
              <div
                key={agent.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr 240px",
                  gap: 0,
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "white",
                }}
              >
                {/* Identity */}
                <div
                  style={{
                    padding: "40px 32px",
                    background: agent.color,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {agent.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "var(--text)",
                        letterSpacing: "-0.02em",
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                      }}
                    >
                      {agent.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--gmid)",
                        marginTop: 2,
                      }}
                    >
                      {agent.role}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--gmid)",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{agent.tagline}&rdquo;
                  </p>

                  {/* Stats */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 20,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {[
                      { label: "Tasks handled", val: agent.stats.tasks },
                      { label: "Accuracy rate", val: agent.stats.accuracy },
                      { label: "Avg completion", val: agent.stats.avgTime },
                    ].map((s) => (
                      <div
                        key={s.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: 12, color: "var(--gmid)" }}>
                          {s.label}
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "var(--text)",
                          }}
                        >
                          {s.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description + handles */}
                <div
                  style={{
                    padding: "40px 36px",
                    borderRight: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--gmid)",
                      lineHeight: 1.75,
                      marginBottom: 28,
                    }}
                  >
                    {agent.description}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--gmid)",
                      marginBottom: 14,
                    }}
                  >
                    Handles
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {agent.handles.map((h) => (
                      <li
                        key={h}
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--green)",
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connects */}
                <div style={{ padding: "40px 28px" }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--gmid)",
                      marginBottom: 16,
                    }}
                  >
                    Connects to
                  </p>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    {agent.connects.map((c) => (
                      <div
                        key={c}
                        style={{
                          padding: "8px 14px",
                          border: "1px solid var(--border)",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--gmid)",
                          background: "var(--surface)",
                        }}
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How they learn */}
      <section
        style={{
          background: "var(--surface)",
          padding: "100px 40px",
          borderTop: "1px solid var(--border)",
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
            }}
          >
            How it works
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
            Agents that get better every week.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
              background: "var(--border)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {HOW_THEY_LEARN.map((step) => (
              <div
                key={step.step}
                style={{
                  background: "white",
                  padding: "36px 28px",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--glight)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    color: "var(--green)",
                    marginBottom: 20,
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.heading}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--gmid)",
                    lineHeight: 1.65,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
