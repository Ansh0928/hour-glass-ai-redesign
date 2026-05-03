"use client";

import Image from "next/image";
import {
  Link2,
  Zap,
  Database,
  LayoutGrid,
  Mail,
  FileText,
  Calendar,
  Bell,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";

/* ─── Integration data ─── */
const INTEGRATIONS = [
  {
    name: "Xero",
    category: "Accounting",
    logo: "/images/integrations/xero.svg",
    color: "#13b5ea",
  },
  {
    name: "Gmail",
    category: "Email",
    logo: "/images/integrations/gmail.svg",
    color: "#ea4335",
  },
  {
    name: "Calendly",
    category: "Scheduling",
    logo: "/images/integrations/calendly.svg",
    color: "#006bff",
  },
  {
    name: "ServiceM8",
    category: "Field Service",
    logo: "/images/integrations/googledrive.svg",
    color: "#34c759",
  },
  {
    name: "MYOB",
    category: "Accounting",
    logo: "/images/integrations/myob.svg",
    color: "#a855f7",
  },
];

const FEATURES = [
  {
    Icon: Link2,
    name: "Connect API",
    sub: "Secure Integrations",
    color: "#22d3ee",
  },
  {
    Icon: Zap,
    name: "Event Triggers",
    sub: "Real-time Events",
    color: "#22d3ee",
  },
  {
    Icon: Database,
    name: "Data Pipeline",
    sub: "Clean · Transform · Sync",
    color: "#22d3ee",
  },
  {
    Icon: LayoutGrid,
    name: "App Marketplace",
    sub: "100+ Integrations",
    color: "#818cf8",
  },
];

const AGENTS = [
  {
    Icon: Mail,
    name: "Email Agent",
    sub: "Smart replies.\nInstant responses.",
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.12)",
  },
  {
    Icon: FileText,
    name: "Invoice Agent",
    sub: "Create, send & track\ninvoices automatically.",
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.12)",
  },
  {
    Icon: Calendar,
    name: "Scheduling",
    sub: "Book meetings.\nAvoid double bookings.",
    iconColor: "#818cf8",
    iconBg: "rgba(129,140,248,0.12)",
  },
  {
    Icon: Bell,
    name: "Follow-ups",
    sub: "Nurture leads.\nClose more deals.",
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.12)",
  },
];

const TRUST = [
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
  { Icon: Layers, name: "Scalable Infrastructure", sub: "Built for growth" },
  { Icon: Sparkles, name: "AI-Powered Intelligence", sub: "Smarter every day" },
];

/* ─── SVG path geometry (1100 × 520 viewBox) ─── */
const VW = 1100;
const VH = 520;

// Left card connectors: right edge, 5 Y positions
const LX = 232;
const LYS = [56, 140, 224, 308, 392];

// Hub: left=370, right=730, midY=250
const HL = 370;
const HR = 730;
const HY = 250;

// Right card connectors: left edge, 4 Y positions
const RX = 868;
const RYS = [80, 186, 292, 398];

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

function AnimatedDot({
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
    <circle r={3.5} fill={color} opacity={0.9}>
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
  dotColor,
  dur,
}: {
  path: string;
  dotColor: string;
  dur: number;
}) {
  return (
    <>
      <path
        d={path}
        stroke="rgba(255,255,255,0.07)"
        strokeWidth={1.2}
        fill="none"
      />
      <AnimatedDot path={path} color={dotColor} dur={dur} delay={0} />
      <AnimatedDot path={path} color={dotColor} dur={dur} delay={-dur / 2} />
    </>
  );
}

/* ─── Hourglass SVG (large, outline, white) ─── */
function HourglassIcon({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 56" fill="none">
      {/* Top bar */}
      <rect
        x="4"
        y="2"
        width="40"
        height="4"
        rx="2"
        fill="white"
        opacity="0.9"
      />
      {/* Bottom bar */}
      <rect
        x="4"
        y="50"
        width="40"
        height="4"
        rx="2"
        fill="white"
        opacity="0.9"
      />
      {/* Left side lines */}
      <path
        d="M6 6L22 26"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M42 6L26 26"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Bottom V */}
      <path
        d="M22 26L6 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M26 26L42 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Top fill (sand falling) */}
      <path d="M8 6L24 24L40 6Z" fill="white" opacity="0.85" />
      {/* Bottom fill (accumulated sand) */}
      <path d="M16 50L24 40L32 50Z" fill="white" opacity="0.85" />
    </svg>
  );
}

export function SystemsOrchestration() {
  const leftPaths = LYS.map((y) => curve(LX, y, HL, HY));
  const rightPaths = RYS.map((y) => curve(HR, HY, RX, y));
  const dotColors = ["#13b5ea", "#ea4335", "#006bff", "#34c759", "#a855f7"];
  const durs = [2.4, 2.6, 2.2, 2.8, 2.5];

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        background: "#080c12",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* ── Main diagram ── */}
      <div style={{ position: "relative", padding: "52px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr 280px",
            gap: 0,
            alignItems: "center",
            minHeight: VH,
          }}
        >
          {/* ── Left: Integration cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {INTEGRATIONS.map((intg) => (
              <div
                key={intg.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "13px 16px",
                  position: "relative",
                  cursor: "default",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    `${intg.color}50`;
                  (e.currentTarget as HTMLElement).style.background =
                    `${intg.color}0f`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.04)";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    overflow: "hidden",
                    padding: 6,
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
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    {intg.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.35)",
                      marginTop: 2,
                    }}
                  >
                    {intg.category}
                  </div>
                </div>
                {/* Connector dot */}
                <div
                  style={{
                    position: "absolute",
                    right: -5,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: intg.color,
                    boxShadow: `0 0 8px ${intg.color}`,
                    zIndex: 2,
                  }}
                />
              </div>
            ))}
          </div>

          {/* ── Center: Hub ── */}
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
                gap: 18,
                width: 360,
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(34,211,238,0.07) 0%, rgba(34,211,238,0.02) 55%, transparent 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18,
                padding: "40px 32px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Hub left/right connector dots */}
              <div
                style={{
                  position: "absolute",
                  left: -5,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.3)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: -5,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.3)",
                }}
              />

              {/* Large hourglass icon */}
              <HourglassIcon size={64} />

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: 10,
                  }}
                >
                  Hourglass AI
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: 240,
                  }}
                >
                  Automate workflows. Connect everything.
                  <br />
                  Save hours. Close more.
                </p>
              </div>

              {/* Side-by-side CTAs */}
              <div style={{ display: "flex", gap: 10, width: "100%" }}>
                <a
                  href="#"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: "#fff",
                    color: "#080c12",
                    borderRadius: 40,
                    padding: "11px 0",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Get Started <span style={{ opacity: 0.5 }}>→</span>
                </a>
                <a
                  href="#"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.8)",
                    borderRadius: 40,
                    padding: "11px 0",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  See How It Works{" "}
                  <span style={{ fontSize: 10, opacity: 0.5 }}>▶</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Feature cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FEATURES.map((feat) => (
              <div
                key={feat.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "13px 16px",
                  position: "relative",
                  cursor: "default",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(34,211,238,0.3)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(34,211,238,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.04)";
                }}
              >
                {/* Left connector dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -5,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: feat.color,
                    boxShadow: `0 0 8px ${feat.color}`,
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <feat.Icon size={16} color={feat.color} strokeWidth={2} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    {feat.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.35)",
                      marginTop: 2,
                    }}
                  >
                    {feat.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Animated SVG paths ── */}
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          preserveAspectRatio="xMidYMid meet"
          style={{
            position: "absolute",
            inset: "52px 40px 0",
            width: "calc(100% - 80px)",
            height: VH,
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          {leftPaths.map((p, i) => (
            <FlowLine
              key={`l${i}`}
              path={p}
              dotColor={dotColors[i]}
              dur={durs[i]}
            />
          ))}
          {rightPaths.map((p, i) => (
            <FlowLine
              key={`r${i}`}
              path={p}
              dotColor={i === 3 ? "#818cf8" : "#22d3ee"}
              dur={durs[(i + 1) % durs.length]}
            />
          ))}
        </svg>
      </div>

      {/* ── Orchestration header line + cards ── */}
      <div style={{ padding: "0 40px", marginTop: 36 }}>
        {/* Top connecting lines + ORCHESTRATION label */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: 0,
            position: "relative",
          }}
        >
          <svg
            width="100%"
            height="48"
            style={{ display: "block", overflow: "visible" }}
          >
            {/* Horizontal top bar */}
            <line
              x1="12.5%"
              y1="8"
              x2="87.5%"
              y2="8"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            {/* 4 drop lines to cards */}
            {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
              <line
                key={i}
                x1={`${x}%`}
                y1="8"
                x2={`${x}%`}
                y2="48"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
            ))}
            {/* 4 colored dots on the top bar */}
            {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
              <circle
                key={i}
                cx={`${x}%`}
                cy="8"
                r="3.5"
                fill={i === 2 ? "#818cf8" : "#22d3ee"}
                opacity={0.8}
              />
            ))}
          </svg>
          {/* ORCHESTRATION label — centered overlay */}
          <div
            style={{
              position: "absolute",
              top: -10,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#080c12",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 40,
              padding: "4px 16px",
              fontSize: 10,
              fontWeight: 700,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              zIndex: 2,
            }}
          >
            Orchestration
          </div>
        </div>

        {/* Agent cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 10,
          }}
        >
          {AGENTS.map((agent) => (
            <div
              key={agent.name}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "24px 20px 20px",
                cursor: "default",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  `${agent.iconColor}40`;
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.03)";
              }}
            >
              {/* Large icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: agent.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <agent.Icon
                  size={24}
                  color={agent.iconColor}
                  strokeWidth={1.8}
                />
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {agent.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                }}
              >
                {agent.sub}
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trust bar ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          marginTop: 24,
        }}
      >
        {TRUST.map((t, i) => (
          <div
            key={t.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 24px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <t.Icon size={18} color="rgba(255,255,255,0.3)" strokeWidth={1.5} />
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.25)",
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
