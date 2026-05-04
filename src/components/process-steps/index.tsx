"use client";

import { useState } from "react";
import {
  Mail,
  FileText,
  Calendar,
  ClipboardList,
  BarChart2,
  Bell,
} from "lucide-react";
import MagnifiedBento from "@/components/ui/magnified-bento";

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

function HourglassIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
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
          borderBottom: "1px solid #e9ede9",
          background: "#fdfefb",
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
              background: row.hi ? "#eef6dc" : "#f4f7ee",
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: row.hi ? "#2b390a" : "#4a6d47",
                fontWeight: row.hi ? 500 : 400,
              }}
            >
              {row.task}
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: row.hi ? "#548f28" : "#4a6d47",
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
          borderTop: "1px solid #e9ede9",
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
      <style>{`
        @keyframes hg-orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
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
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--color-hero-bg, #1a2a0e)",
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

/* ─── Main component ─── */
export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const step = STEPS[activeStep];
  const isBuilding = activeStep === 1;
  const rightBg = isBuilding ? "var(--color-hero-bg, #1a2a0e)" : "#f4f7ee";

  return (
    <>
      <style>{`
        .hg-section {
          background: var(--surface-2);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 0;
        }
        .hg-tab-bar {
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: var(--surface-2);
        }
        .hg-tab-bar-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: stretch;
          padding: 0 40px;
        }
        .hg-tab-btn {
          background: transparent;
          border: none;
          padding: 18px 32px 16px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: border-color 0.2s;
        }
        .hg-tab-btn[data-active="true"] {
          border-bottom-color: var(--text);
        }
        .hg-content-wrap {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 400px 1fr;
          min-height: 520px;
          padding: 0 40px;
        }
        .hg-left {
          padding: 52px 48px 52px 0;
          border-right: 1px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .hg-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.35s ease;
          overflow: hidden;
          min-height: 400px;
        }
        .hg-right-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }
        .hg-right-dots::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(84,143,40,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .hg-right-dots-light::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(43,57,10,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .hg-point-row {
          display: flex;
          gap: 20px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          transition: opacity 0.25s;
        }
        @media (max-width: 768px) {
          .hg-content-wrap { grid-template-columns: 1fr; padding: 0 20px; }
          .hg-right { display: block; border-left: none; border-top: 1px solid rgba(0,0,0,0.08); padding: 0; min-height: 280px; }
          .hg-right-inner { padding: 24px 0; }
          .hg-left { padding: 36px 0 28px; border-right: none; }
          .hg-tab-bar-inner { padding: 0 20px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .hg-tab-bar-inner::-webkit-scrollbar { display: none; }
          .hg-tab-btn { white-space: nowrap; padding-right: 24px; }
        }
      `}</style>

      <section className="hg-section">
        {/* Header */}
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "72px 40px 48px",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--green, #16803c)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            How it works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(30px, 3.8vw, 52px)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              maxWidth: 560,
            }}
          >
            From chaos to clarity in three steps.
          </h2>
        </div>

        {/* Tab bar */}
        <div className="hg-tab-bar">
          <div className="hg-tab-bar-inner">
            {STEPS.map((s, i) => {
              const isActive = i === activeStep;
              const circ = 2 * Math.PI * 13;
              return (
                <button
                  key={i}
                  className="hg-tab-btn"
                  data-active={String(isActive)}
                  onClick={() => setActiveStep(i)}
                  style={{
                    gap: 10,
                    paddingRight: i < STEPS.length - 1 ? 32 : 0,
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
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="hg-content-wrap">
          {/* Left */}
          <div className="hg-left">
            <div style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  fontSize: "clamp(22px, 2.4vw, 34px)",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
                {step.heading}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-dim)",
                  lineHeight: 1.6,
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

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {step.points.map((point, i) => (
                <div key={point.title} className="hg-point-row">
                  <span
                    style={{
                      fontSize: 12,
                      color: "rgba(0,0,0,0.25)",
                      fontWeight: 600,
                      flexShrink: 0,
                      paddingTop: 2,
                      minWidth: 18,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 5,
                      }}
                    >
                      {point.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text-dim)",
                        lineHeight: 1.65,
                      }}
                    >
                      {point.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step nav arrows */}
            <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
              <button
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                disabled={activeStep === 0}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "transparent",
                  cursor: activeStep === 0 ? "not-allowed" : "pointer",
                  opacity: activeStep === 0 ? 0.3 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M9 2L4 7L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActiveStep((s) => Math.min(STEPS.length - 1, s + 1))
                }
                disabled={activeStep === STEPS.length - 1}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "transparent",
                  cursor:
                    activeStep === STEPS.length - 1 ? "not-allowed" : "pointer",
                  opacity: activeStep === STEPS.length - 1 ? 0.3 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 2L10 7L5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 4,
                }}
              >
                {activeStep + 1} / {STEPS.length}
              </span>
            </div>
          </div>

          {/* Right */}
          <div
            className={
              isBuilding
                ? "hg-right hg-right-dots"
                : "hg-right hg-right-dots-light"
            }
            style={{ background: rightBg }}
          >
            <div className="hg-right-inner">
              {activeStep === 0 && <AuditVisual />}
              {activeStep === 1 && <BuildVisual />}
              {activeStep === 2 && <MagnifiedBento />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
