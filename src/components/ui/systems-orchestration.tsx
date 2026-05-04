"use client";

import Image from "next/image";
import {
  Link2,
  Zap,
  Database,
  LayoutGrid,
  Mail,
  ReceiptText,
  CalendarDays,
  BellRing,
  ShieldCheck,
  Layers3,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Token sheet — one accent, everything else
   derives from opacity on pure white / black
───────────────────────────────────────────── */
const C = {
  bg: "#050a0f", // near-black with faint blue undertone
  card: "rgba(255,255,255,0.035)",
  cardHover: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.07)",
  borderHover: "rgba(255,255,255,0.14)",
  line: "rgba(255,255,255,0.05)",
  dot: "#4ade80", // single accent — electric green
  dotAlt: "#a5b4fc", // only used on App Marketplace feature + Scheduling
  text: "#ffffff",
  dim: "rgba(255,255,255,0.38)",
  faint: "rgba(255,255,255,0.2)",
} as const;

/* ─── Data ─── */
const INTEGRATIONS = [
  {
    name: "Xero",
    category: "Accounting",
    logo: "/images/integrations/xero.svg",
    accent: "#13b5ea",
  },
  {
    name: "Gmail",
    category: "Email",
    logo: "/images/integrations/gmail.svg",
    accent: "#ea4335",
  },
  {
    name: "Calendly",
    category: "Scheduling",
    logo: "/images/integrations/calendly.svg",
    accent: "#006bff",
  },
  {
    name: "Google Drive",
    category: "Storage",
    logo: "/images/integrations/googledrive.svg",
    accent: "#34c759",
  },
  {
    name: "MYOB",
    category: "Accounting",
    logo: "/images/integrations/myob.svg",
    accent: "#a855f7",
  },
];

const FEATURES = [
  {
    Icon: Link2,
    name: "Connect API",
    sub: "Secure Integrations",
    accent: C.dot,
  },
  { Icon: Zap, name: "Event Triggers", sub: "Real-time Events", accent: C.dot },
  {
    Icon: Database,
    name: "Data Pipeline",
    sub: "Clean · Transform · Sync",
    accent: C.dot,
  },
  {
    Icon: LayoutGrid,
    name: "App Marketplace",
    sub: "100+ Integrations",
    accent: C.dotAlt,
  },
];

const AGENTS = [
  {
    Icon: Mail,
    name: "Email Agent",
    sub: "Smart replies. Instant responses.",
    accent: C.dot,
  },
  {
    Icon: ReceiptText,
    name: "Invoice Agent",
    sub: "Create, send & track invoices.",
    accent: C.dot,
  },
  {
    Icon: CalendarDays,
    name: "Scheduling",
    sub: "Book meetings. Avoid double bookings.",
    accent: C.dotAlt,
  },
  {
    Icon: BellRing,
    name: "Follow-ups",
    sub: "Nurture leads. Close more deals.",
    accent: C.dot,
  },
];

/* ─── SVG geometry (1140 × 520 viewBox) ─── */
const VW = 1140;
const VH = 520;

// Left card right-edge X, 5 mid-Ys
const LX = 246;
const LYS = [54, 138, 222, 306, 390];

// Hub: left=390, right=750, midY=260
const HL = 390;
const HR = 750;
const HY = 260;

// Right card left-edge X, 4 mid-Ys
const RX = 892;
const RYS = [80, 188, 296, 404];

function curve(x1: number, y1: number, x2: number, y2: number) {
  const cx = (x1 + x2) / 2;
  return `M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`;
}

/* Single dot per path — clean, purposeful */
function FlowDot({
  path,
  color,
  dur,
  delay,
}: {
  path: string;
  color: string;
  dur: number;
  delay: number;
}) {
  return (
    <circle r={3} fill={color} opacity={0.95}>
      <animateMotion
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
        calcMode="linear"
      />
    </circle>
  );
}

function FlowLine({
  path,
  color,
  dur,
}: {
  path: string;
  color: string;
  dur: number;
}) {
  return (
    <>
      <path d={path} stroke={C.line} strokeWidth={1} fill="none" />
      <FlowDot path={path} color={color} dur={dur} delay={0} />
      <FlowDot path={path} color={color} dur={dur} delay={-dur * 0.5} />
    </>
  );
}

/* Connector knob — shared between left cards (right side) and right cards (left side) */
function Knob({ color }: { color: string }) {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
      }}
    />
  );
}

/* Integration card */
function IntegCard({ intg }: { intg: (typeof INTEGRATIONS)[number] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        background: C.card,
        borderRadius: 12,
        position: "relative",
        cursor: "default",
        transition: "background 0.18s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = C.cardHover;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = C.card;
      }}
    >
      {/* Logo in a neutral pill */}
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
          padding: 7,
        }}
      >
        <Image
          src={intg.logo}
          alt={intg.name}
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: C.text,
            letterSpacing: "-0.01em",
          }}
        >
          {intg.name}
        </div>
        <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>
          {intg.category}
        </div>
      </div>
      {/* Right connector knob */}
      <div
        style={{
          position: "absolute",
          right: -5,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <Knob color={intg.accent} />
      </div>
    </div>
  );
}

/* Feature card */
function FeatCard({ feat }: { feat: (typeof FEATURES)[number] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        background: C.card,
        borderRadius: 12,
        position: "relative",
        cursor: "default",
        transition: "background 0.18s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = C.cardHover;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = C.card;
      }}
    >
      {/* Left connector knob */}
      <div
        style={{
          position: "absolute",
          left: -5,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <Knob color={feat.accent} />
      </div>
      {/* Icon — just the stroke, no bg box */}
      <feat.Icon
        size={18}
        color={feat.accent}
        strokeWidth={1.8}
        style={{ flexShrink: 0 }}
      />
      <div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: C.text,
            letterSpacing: "-0.01em",
          }}
        >
          {feat.name}
        </div>
        <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>
          {feat.sub}
        </div>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export function SystemsOrchestration() {
  const leftPaths = LYS.map((y) => curve(LX, y, HL, HY));
  const rightPaths = RYS.map((y) => curve(HR, HY, RX, y));
  const speeds = [2.4, 2.7, 2.1, 3.0, 2.5];

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        background: C.bg,
      }}
    >
      {/* ══ DIAGRAM AREA ══ */}
      <div
        className="so-diagram-padding"
        style={{
          position: "relative",
        }}
      >
        <div
          className="so-diagram-grid"
          style={{
            gridTemplateColumns: "260px 1fr 270px",
            alignItems: "center",
            minHeight: VH,
            gap: 0,
          }}
        >
          {/* ─ LEFT: Integrations ─ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {INTEGRATIONS.map((intg) => (
              <IntegCard key={intg.name} intg={intg} />
            ))}
          </div>

          {/* ─ CENTER: Hub ─ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
                width: 340,
                padding: "44px 32px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Hub connector dots */}
              <div
                style={{
                  position: "absolute",
                  left: -5,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.25)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: -5,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.25)",
                }}
              />

              {/* Large hourglass — clean outline SVG */}
              <svg width="80" height="92" viewBox="0 0 80 92" fill="none">
                <rect
                  x="4"
                  y="2"
                  width="72"
                  height="6"
                  rx="3"
                  fill="white"
                  opacity="0.85"
                />
                <rect
                  x="4"
                  y="84"
                  width="72"
                  height="6"
                  rx="3"
                  fill="white"
                  opacity="0.85"
                />
                <path d="M8 8L36 42L44 42L72 8Z" fill="white" opacity="0.75" />
                <path d="M28 84L40 68L52 84Z" fill="white" opacity="0.75" />
                <path
                  d="M8 8L36 42"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M72 8L44 42"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M36 42L8 84"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M44 42L72 84"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>

              {/* Brand name — Playfair to match site brand */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily:
                      "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                    fontSize: 32,
                    fontWeight: 700,
                    color: C.text,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    marginBottom: 10,
                  }}
                >
                  Hourglass AI
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: C.dim,
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: 220,
                  }}
                >
                  Automate workflows. Connect everything.
                  <br />
                  Save hours. Close more.
                </p>
              </div>

              {/* Side-by-side CTAs */}
              <div style={{ display: "flex", gap: 8, width: "100%" }}>
                <a
                  href="#"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: C.text,
                    color: C.bg,
                    borderRadius: 40,
                    padding: "11px 0",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Get Started <span>→</span>
                </a>
                <a
                  href="#"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.7)",
                    borderRadius: 40,
                    padding: "11px 0",
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  See How It Works <span style={{ fontSize: 10 }}>▶</span>
                </a>
              </div>
            </div>
          </div>

          {/* ─ RIGHT: Features ─ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FEATURES.map((feat) => (
              <FeatCard key={feat.name} feat={feat} />
            ))}
          </div>
        </div>

        {/* ── Animated SVG paths — absolute overlay ── */}
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          preserveAspectRatio="xMidYMid meet"
          style={{
            position: "absolute",
            inset: "52px 44px 0",
            width: "calc(100% - 88px)",
            height: VH,
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          {/* Left → hub */}
          {leftPaths.map((p, i) => (
            <FlowLine
              key={`l${i}`}
              path={p}
              color={INTEGRATIONS[i].accent}
              dur={speeds[i]}
            />
          ))}
          {/* Hub → right */}
          {rightPaths.map((p, i) => (
            <FlowLine
              key={`r${i}`}
              path={p}
              color={i === 3 ? C.dotAlt : C.dot}
              dur={speeds[(i + 1) % speeds.length]}
            />
          ))}
        </svg>
      </div>

      {/* ══ ORCHESTRATION ══ */}
      <div
        className="so-orch-section"
        style={{ padding: "0 44px", marginTop: 40 }}
      >
        {/* Connecting line topology */}
        <div style={{ position: "relative" }}>
          <svg width="100%" height="44" style={{ display: "block" }}>
            {/* Horizontal spine */}
            <line
              x1="12.5%"
              y1="6"
              x2="87.5%"
              y2="6"
              stroke={C.line}
              strokeWidth="1"
            />
            {/* 4 drops */}
            {["12.5%", "37.5%", "62.5%", "87.5%"].map((x, i) => (
              <g key={i}>
                <line
                  x1={x}
                  y1="6"
                  x2={x}
                  y2="44"
                  stroke={C.line}
                  strokeWidth="1"
                />
                <circle
                  cx={x}
                  cy="6"
                  r="3"
                  fill={i === 2 ? C.dotAlt : C.dot}
                  opacity={0.7}
                />
              </g>
            ))}
          </svg>
          {/* ORCHESTRATION pill — centered on the spine */}
          <div
            style={{
              position: "absolute",
              top: -9,
              left: "50%",
              transform: "translateX(-50%)",
              background: C.bg,
              border: `1px solid rgba(255,255,255,0.09)`,
              borderRadius: 40,
              padding: "4px 18px",
              fontSize: 10,
              fontWeight: 700,
              color: C.faint,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Orchestration
          </div>
        </div>

        {/* 4 agent cards */}
        <div className="so-agents-grid">
          {AGENTS.map((agent) => (
            <div
              key={agent.name}
              style={{
                padding: "26px 22px 22px",
                background: C.card,
                borderRadius: 14,
                cursor: "default",
                transition: "background 0.18s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.cardHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.card;
              }}
            >
              {/* Icon — bare, no bg box */}
              <agent.Icon
                size={28}
                color={agent.accent}
                strokeWidth={1.6}
                style={{ marginBottom: 18, display: "block" }}
              />
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: C.text,
                  letterSpacing: "-0.015em",
                  marginBottom: 8,
                }}
              >
                {agent.name}
              </div>
              <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.65 }}>
                {agent.sub}
              </div>
              <div
                style={{
                  marginTop: 16,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.18)",
                  letterSpacing: "0.02em",
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ TRUST BAR ══ */}
      <div className="so-trust-grid">
        {[
          {
            Icon: ShieldCheck,
            name: "Secure & Compliant",
            sub: "SOC 2 · GDPR · Encrypted",
          },
          {
            Icon: Zap,
            name: "Real-time Automation",
            sub: "Triggers · Actions · Insights",
          },
          {
            Icon: Layers3,
            name: "Scalable Infrastructure",
            sub: "Built for growth",
          },
          {
            Icon: Sparkles,
            name: "AI-Powered Intelligence",
            sub: "Smarter every day",
          },
        ].map((t, i) => (
          <div
            key={t.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              padding: "18px 24px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <t.Icon
              size={16}
              color="rgba(255,255,255,0.28)"
              strokeWidth={1.5}
              style={{ flexShrink: 0 }}
            />
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.52)",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.22)",
                  marginTop: 2,
                }}
              >
                {t.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
