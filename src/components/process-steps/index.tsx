"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Mail,
  FileText,
  Calendar,
  ClipboardList,
  BarChart2,
  Bell,
} from "lucide-react";

/* ─── Data ─── */
const STEPS = [
  {
    num: "01",
    label: "Audit",
    heading: "We find where your time disappears.",
    meta: "$2,000 – $10,000 · 7–14 days",
    points: [
      {
        title: "Time audit",
        body: "We map every recurring task your team touches — emails, invoices, scheduling, data entry — and measure where the hours actually go.",
      },
      {
        title: "Cost analysis",
        body: "We calculate the dollar value of the time being lost. Most businesses are surprised. The average is 12 hours per owner per week.",
      },
      {
        title: "Prioritised roadmap",
        body: "You leave with a ranked list of automations, the expected ROI for each, and a clear sequence for what to build first.",
      },
    ],
  },
  {
    num: "02",
    label: "Build",
    heading: "We deploy agents into the tools you already use.",
    meta: "$5,000 – $15,000 per agent · 30 days",
    points: [
      {
        title: "Agent design",
        body: "We design each agent around your specific workflow — not a generic template. It reads your tools, learns your patterns, and handles the task end to end.",
      },
      {
        title: "Integration & testing",
        body: "Connected to Gmail, Xero, Calendly, ServiceM8. Tested against your real data before going live. No surprises at launch.",
      },
      {
        title: "Handover",
        body: "We walk you through what the agent does and doesn't do. You stay in control — it handles the rest.",
      },
    ],
  },
  {
    num: "03",
    label: "Maintain",
    heading: "Systems that improve every month.",
    meta: "Monthly retainer · Always improving",
    points: [
      {
        title: "Monitoring & alerts",
        body: "We watch every agent for errors, slowdowns, or edge cases. You're notified only when something needs a decision — never just noise.",
      },
      {
        title: "Monthly refinement",
        body: "Your business changes. Your agents adapt. Every month we review performance and push improvements — no ticket required.",
      },
      {
        title: "Expansion roadmap",
        body: "Once the first agents are running, we identify the next wave. The ROI compounds as coverage grows.",
      },
    ],
  },
];

const ORBITAL_NODES = [
  { label: "Email", Icon: Mail, angle: 0 },
  { label: "Invoices", Icon: FileText, angle: 60 },
  { label: "Scheduling", Icon: Calendar, angle: 120 },
  { label: "Job Sheets", Icon: ClipboardList, angle: 180 },
  { label: "Reports", Icon: BarChart2, angle: 240 },
  { label: "Follow-ups", Icon: Bell, angle: 300 },
];

/* ─── Hourglass SVG (inline, from logo.tsx) ─── */
function HourglassIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="3" width="16" height="2" rx="1" fill="#fff" />
      <rect x="4" y="19" width="16" height="2" rx="1" fill="#fff" />
      <path d="M5 5 L19 5 L12 12 Z" fill="#fff" opacity="0.9" />
      <path d="M9 19 L15 19 L12 15 Z" fill="#fff" opacity="0.9" />
      <line
        x1="5"
        y1="5"
        x2="12"
        y2="12"
        stroke="#fff"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      <line
        x1="19"
        y1="5"
        x2="12"
        y2="12"
        stroke="#fff"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      <line
        x1="12"
        y1="12"
        x2="5"
        y2="19"
        stroke="#fff"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      <line
        x1="12"
        y1="12"
        x2="19"
        y2="19"
        stroke="#fff"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

/* ─── Audit right panel ─── */
function AuditVisual() {
  const AUDIT_ROWS = [
    { task: "Email triage & replies", hrs: "6.5 hrs", hi: true },
    { task: "Invoice chasing", hrs: "4.0 hrs", hi: true },
    { task: "Scheduling & rescheduling", hrs: "3.5 hrs", hi: true },
    { task: "Purchase order data entry", hrs: "2.0 hrs", hi: false },
    { task: "Report generation", hrs: "1.5 hrs", hi: false },
  ];
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--border-old, #e9ede9)",
        borderRadius: 14,
        overflow: "hidden",
        width: "100%",
        maxWidth: 380,
        boxShadow: "0 8px 32px rgba(43,57,10,0.10)",
      }}
    >
      <div
        style={{
          padding: "11px 16px",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#e9ede9",
            }}
          />
        ))}
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#4a6d47",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginLeft: 6,
          }}
        >
          Time audit — weekly hours
        </span>
      </div>
      <div style={{ padding: "12px 14px" }}>
        {AUDIT_ROWS.map((row) => (
          <div
            key={row.task}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 12px",
              borderRadius: 6,
              marginBottom: 5,
              background: row.hi ? "#eef6dc" : "var(--color-surface)",
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: row.hi ? "#2b390a" : "var(--color-secondary)",
                fontWeight: row.hi ? 500 : 400,
              }}
            >
              {row.task}
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: row.hi ? "#548f28" : "var(--color-secondary)",
              }}
            >
              {row.hrs}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "11px 16px",
          borderTop: "1px solid var(--color-border)",
          background: "#f4f7ee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#4a6d47",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
          }}
        >
          Automatable per week
        </span>
        <span style={{ fontSize: 15, fontWeight: 800, color: "#2b390a" }}>
          14 hrs saved
        </span>
      </div>
    </div>
  );
}

/* ─── Build right panel (orbital) ─── */
function BuildVisual() {
  const RADIUS = 130;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* CSS keyframes — one counter-spin per starting angle so labels stay upright */}
      <style>{`
        @keyframes hg-orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes hg-counter-0   { from { transform: rotate(0deg); }    to { transform: rotate(-360deg); } }
        @keyframes hg-counter-60  { from { transform: rotate(-60deg); }  to { transform: rotate(-420deg); } }
        @keyframes hg-counter-120 { from { transform: rotate(-120deg); } to { transform: rotate(-480deg); } }
        @keyframes hg-counter-180 { from { transform: rotate(-180deg); } to { transform: rotate(-540deg); } }
        @keyframes hg-counter-240 { from { transform: rotate(-240deg); } to { transform: rotate(-600deg); } }
        @keyframes hg-counter-300 { from { transform: rotate(-300deg); } to { transform: rotate(-660deg); } }
        @keyframes hg-hub-ping {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
      `}</style>

      <div style={{ position: "relative", width: 300, height: 300 }}>
        {/* Rings */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "1px solid rgba(84,143,40,0.18)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "1px dashed rgba(84,143,40,0.1)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* Orbit spinner */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            animation: "hg-orbit-spin 20s linear infinite",
          }}
        >
          {ORBITAL_NODES.map(({ label, Icon, angle }) => (
            <div
              key={label}
              style={{
                position: "absolute",
                width: 48,
                height: 48,
                marginLeft: -24,
                marginTop: -24,
                borderRadius: 12,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(84,143,40,0.38)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                transform: `rotate(${angle}deg) translateX(${RADIUS}px)`,
              }}
            >
              {/* Green live dot */}
              <div
                style={{
                  position: "absolute",
                  top: -3,
                  right: -3,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#548f28",
                  boxShadow: "0 0 5px rgba(84,143,40,0.9)",
                }}
              />
              {/* Counter-rotating content — per-angle keyframe keeps label upright */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  animation: `hg-counter-${angle} 20s linear infinite`,
                }}
              >
                <Icon
                  size={15}
                  color="rgba(255,255,255,0.72)"
                  strokeWidth={1.75}
                />
                <span
                  style={{
                    fontSize: 7,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hub ping ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "1.5px solid rgba(84,143,40,0.3)",
            transform: "translate(-50%, -50%)",
            animation: "hg-hub-ping 2.5s ease-out infinite",
            zIndex: 1,
          }}
        />

        {/* Hub */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--color-hero-bg)",
            border: "1.5px solid rgba(84,143,40,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            boxShadow:
              "0 0 0 8px rgba(84,143,40,0.07), 0 0 28px rgba(84,143,40,0.25)",
          }}
        >
          <HourglassIcon size={28} />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 10,
          fontWeight: 700,
          color: "rgba(84,143,40,0.5)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        6 agents · live &amp; running
      </div>
    </div>
  );
}

/* ─── Maintain right panel ─── */
function MaintainVisual() {
  const METRICS = [
    { label: "Hours automated", value: "52 hrs", delta: "↑ 8%", good: true },
    {
      label: "Tasks handled by agents",
      value: "340",
      delta: "↑ 12%",
      good: true,
    },
    { label: "Error rate", value: "0.3%", delta: "↓ 0.1%", good: true },
    { label: "Agents deployed", value: "3 active", delta: null, good: true },
  ];
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e9ede9",
        borderRadius: 14,
        overflow: "hidden",
        width: "100%",
        maxWidth: 380,
        boxShadow: "0 8px 32px rgba(43,57,10,0.10)",
      }}
    >
      <div
        style={{
          padding: "11px 16px",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#e9ede9",
            }}
          />
        ))}
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#4a6d47",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginLeft: 6,
          }}
        >
          Monthly performance
        </span>
      </div>
      <div style={{ padding: "12px 14px" }}>
        {METRICS.map((m) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 12px",
              borderRadius: 6,
              marginBottom: 5,
              background: "var(--color-surface)",
            }}
          >
            <span style={{ fontSize: 12, color: "#4a6d47" }}>{m.label}</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#2b390a" }}>
              {m.value}
              {m.delta && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#548f28",
                    marginLeft: 6,
                  }}
                >
                  {m.delta}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "11px 16px",
          borderTop: "1px solid var(--color-border)",
          background: "#f4f7ee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#4a6d47",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
          }}
        >
          Est. value generated
        </span>
        <span style={{ fontSize: 15, fontWeight: 800, color: "#2b390a" }}>
          $6,240 / mo
        </span>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollable = el.offsetHeight - vh;
    if (scrollable <= 0) return;
    const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
    const totalSlots = STEPS.length * 3;
    const slot = Math.min(Math.floor(progress * totalSlots), totalSlots - 1);
    setActiveStep(Math.floor(slot / 3));
    setActiveSubItem(slot % 3);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const jumpToStep = (idx: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollable = el.offsetHeight - window.innerHeight;
    const targetProgress = (idx * 3) / (STEPS.length * 3);
    const target = window.scrollY + rect.top + targetProgress * scrollable;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const step = STEPS[activeStep];
  const rightBg = activeStep === 1 ? "var(--color-hero-bg)" : "#f4f7ee";

  return (
    <>
      {/* Inject CSS for dot grid on audit/maintain panels */}
      <style>{`
        .hg-right-dotgrid::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(84,143,40,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .hg-right-dotgrid-light::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(43,57,10,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .hg-content-grid { grid-template-columns: 1fr !important; }
          .hg-right-panel { display: none !important; }
          .hg-sticky { height: auto !important; position: relative !important; }
        }
      `}</style>

      {/* 300vh scrollable wrapper */}
      <div
        ref={wrapperRef}
        style={{ minHeight: "300vh", position: "relative" }}
      >
        {/* Sticky container */}
        <div
          className="hg-sticky"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            background: "var(--surface-2)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {/* Step nav */}
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              background: "var(--surface-2)",
            }}
          >
            <div
              style={{
                maxWidth: 1280,
                margin: "0 auto",
                display: "flex",
                alignItems: "stretch",
                padding: "0 40px",
              }}
            >
              {STEPS.map((s, i) => {
                const isActive = i === activeStep;
                const circ = 2 * Math.PI * 13;
                return (
                  <button
                    key={i}
                    onClick={() => jumpToStep(i)}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "16px 32px 14px 0",
                      paddingRight: i < STEPS.length - 1 ? 32 : 0,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      borderBottom: isActive
                        ? "2px solid var(--text)"
                        : "2px solid transparent",
                      marginBottom: -1,
                      transition: "all 0.2s",
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      style={{ flexShrink: 0 }}
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="13"
                        fill="none"
                        stroke={isActive ? "var(--text)" : "rgba(0,0,0,0.12)"}
                        strokeWidth="1.5"
                        strokeDasharray={
                          isActive ? undefined : `${circ * 0.28} ${circ * 0.72}`
                        }
                        strokeLinecap="round"
                        transform="rotate(-90 15 15)"
                        style={{ transition: "all 0.35s" }}
                      />
                      <text
                        x="15"
                        y="15"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="9"
                        fontWeight={isActive ? "700" : "500"}
                        fill={isActive ? "var(--text)" : "rgba(0,0,0,0.35)"}
                        fontFamily="inherit"
                        style={{ transition: "all 0.2s" }}
                      >
                        {s.num}
                      </text>
                    </svg>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? "var(--text)" : "rgba(0,0,0,0.4)",
                          transition: "all 0.2s",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {s.label}
                      </span>
                      {isActive && (
                        <span
                          style={{
                            fontSize: 11,
                            color: "rgba(0,0,0,0.3)",
                            fontWeight: 400,
                          }}
                        >
                          {i + 1}&thinsp;/&thinsp;{STEPS.length}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content grid */}
          <div
            className="hg-content-grid"
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "420px 1fr",
              height: "calc(100vh - 57px)",
              padding: "0 40px",
            }}
          >
            {/* Left panel */}
            <div
              style={{
                padding: "48px 48px 48px 0",
                borderRight: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: "clamp(26px, 2.8vw, 38px)",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    marginBottom: 14,
                    transition: "opacity 0.3s",
                  }}
                >
                  {step.heading}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-dim)",
                    lineHeight: 1.65,
                    marginBottom: 6,
                  }}
                >
                  {step.meta.split("·").map((part, i) => (
                    <span key={i}>
                      {i > 0 && <span style={{ opacity: 0.4 }}> · </span>}
                      {part.trim()}
                    </span>
                  ))}
                </p>
              </div>

              {/* Sub-items */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                {step.points.map((point, i) => {
                  const isOpen = i === activeSubItem;
                  return (
                    <div
                      key={point.title}
                      style={{
                        display: "flex",
                        gap: 20,
                        padding: "16px 0",
                        borderBottom: "1px solid rgba(0,0,0,0.08)",
                        cursor: "default",
                        transition: "opacity 0.2s",
                        opacity: isOpen ? 1 : 0.45,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          color: isOpen ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.2)",
                          fontWeight: 500,
                          flexShrink: 0,
                          paddingTop: 1,
                          minWidth: 16,
                          transition: "color 0.2s",
                        }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: isOpen ? 700 : 500,
                            color: "var(--text)",
                            marginBottom: isOpen ? 6 : 0,
                            transition: "font-weight 0.2s, margin 0.2s",
                          }}
                        >
                          {point.title}
                        </div>
                        {isOpen && (
                          <div
                            style={{
                              fontSize: 13,
                              color: "var(--text-dim)",
                              lineHeight: 1.65,
                            }}
                          >
                            {point.body}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right panel */}
            <div
              className={
                activeStep === 1
                  ? "hg-right-panel hg-right-dotgrid"
                  : "hg-right-panel hg-right-dotgrid-light"
              }
              style={{
                position: "relative",
                background: rightBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.4s ease",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 40,
                }}
              >
                {activeStep === 0 && <AuditVisual />}
                {activeStep === 1 && <BuildVisual />}
                {activeStep === 2 && <MaintainVisual />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
