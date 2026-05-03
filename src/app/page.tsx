"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSidebarOpen } from "@/components/app-sidebar";
import type { ReactNode } from "react";
import { animate, stagger, scrambleText } from "animejs";
import {
  IconMail,
  IconInvoice,
  IconCalendar,
  IconQuote,
  IconBell,
  IconFolder,
  IconBuilding,
  IconZap,
  IconShield,
  IconLock,
  IconClipboard,
} from "@/components/icons";
import { Marquee } from "@/components/ui/marquee";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CardsSlider } from "@/components/ui/cards-slider-shadcnui";
import { Logo } from "@/components/logo";
import { LogoTimeline } from "@/components/ui/logo-timeline";
import type { LogoItem } from "@/components/ui/logo-timeline";
import { Testimonials as BentoTestimonials } from "@/components/ui/testimonial";
import CpuArchitecture from "@/components/ui/cpu-architecture";
import MagnifiedBento from "@/components/ui/magnified-bento";
import Plan from "@/components/ui/agent-plan";

/* ─── anime.js scroll reveal with stagger ─── */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
    });

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);
        if (visible.length === 0) return;
        animate(visible, {
          opacity: [0, 1],
          translateY: ["24px", "0px"],
          duration: 650,
          ease: "out(3)",
          delay: stagger(80),
        });
        visible.forEach((el) => obs.unobserve(el));
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── stats scramble on scroll ─── */
function useStatsReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".stat-value");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          animate(el, {
            innerHTML: scrambleText({ chars: "0-9", duration: 900 }),
          });
          obs.unobserve(el);
        });
      },
      { threshold: 0.6 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Announcement bar ─── */
function AnnouncementBar() {
  return (
    <div
      style={{
        background: "var(--green)",
        color: "#fff",
        textAlign: "center",
        padding: "10px 24px",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.01em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <span>Now in early access for Australian SMBs</span>
      <span style={{ opacity: 0.6 }}>·</span>
      <a
        href="#"
        style={{
          color: "#fff",
          fontWeight: 700,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        Get access <span>→</span>
      </a>
    </div>
  );
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { open: openSidebar } = useSidebarOpen();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Product", "What we do", "Our agents", "Results"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 34,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 60,
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        transform: hidden ? "translateY(calc(-100% - 34px))" : "translateY(0)",
        transition:
          "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Logo color="#fff" size={22} />
      </Link>

      <div style={{ display: "flex", gap: 2 }}>
        {links.map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontSize: 14,
              fontWeight: 450,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: 6,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
            }
          >
            {l}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button
          onClick={openSidebar}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.75)",
            padding: "6px 14px",
            borderRadius: 40,
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            letterSpacing: "-0.01em",
            transition: "background 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.14)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "rgba(255,255,255,0.75)";
          }}
        >
          AI Pod
        </button>
        <a
          href="#"
          style={{
            fontSize: 14,
            fontWeight: 450,
            color: "rgba(255,255,255,0.55)",
            textDecoration: "none",
          }}
        >
          Sign in
        </a>
        <a
          href="#"
          style={{
            background: "#fff",
            color: "#0a0a0a",
            padding: "8px 18px",
            borderRadius: 40,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Book a demo
        </a>
      </div>
    </nav>
  );
}

/* ─── Connect step: tool integrations ─── */
const CONNECT_LOGOS: LogoItem[] = [
  {
    label: "Gmail",
    icon: <IconMail size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -50,
    animationDuration: 50,
    row: 1,
  },
  {
    label: "Xero",
    icon: <IconInvoice size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -25,
    animationDuration: 50,
    row: 1,
  },
  {
    label: "Calendly",
    icon: <IconCalendar size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -45,
    animationDuration: 45,
    row: 2,
  },
  {
    label: "Outlook",
    icon: <IconMail size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -22.5,
    animationDuration: 45,
    row: 2,
  },
  {
    label: "Google Drive",
    icon: <IconFolder size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -60,
    animationDuration: 60,
    row: 3,
  },
  {
    label: "MYOB",
    icon: <IconInvoice size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -40,
    animationDuration: 60,
    row: 3,
  },
  {
    label: "ServiceM8",
    icon: <IconZap size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -20,
    animationDuration: 60,
    row: 3,
  },
  {
    label: "Slack",
    icon: <IconBell size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -55,
    animationDuration: 55,
    row: 4,
  },
  {
    label: "Stripe",
    icon: <IconShield size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -27.5,
    animationDuration: 55,
    row: 4,
  },
  {
    label: "Dropbox",
    icon: <IconFolder size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -50,
    animationDuration: 50,
    row: 5,
  },
  {
    label: "QuickBooks",
    icon: <IconClipboard size={14} color="rgba(255,255,255,0.45)" />,
    animationDelay: -25,
    animationDuration: 50,
    row: 5,
  },
];

/* ─── Hero animations: clean entrance ─── */
function useHeroAnimations() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      headlineRef.current.style.opacity = "0";
      headlineRef.current.style.transform = "translateY(24px)";
    }
    if (mockupRef.current) {
      mockupRef.current.style.opacity = "0";
      mockupRef.current.style.transform = "translateY(32px)";
    }
    if (headlineRef.current) {
      animate(headlineRef.current, {
        opacity: [0, 1],
        translateY: ["24px", "0px"],
        duration: 700,
        ease: "out(3)",
        delay: 150,
      });
    }
    if (mockupRef.current) {
      animate(mockupRef.current, {
        opacity: [0, 1],
        translateY: ["32px", "0px"],
        duration: 900,
        ease: "out(4)",
        delay: 400,
      });
    }
  }, []);

  return { heroRef, headlineRef, mockupRef, glowRef, subtextRef, h1Ref };
}

/* ─── How It Works (Adaline-style) ─── */
function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      label: "Connect",
      heading: "Connect in minutes, not months.",
      description:
        "Link your existing tools — Gmail, Xero, Calendly — with a few clicks. No IT team required.",
      points: [
        {
          title: "Works with what you have",
          body: "Gmail, Outlook, Xero, MYOB, ServiceM8, and 40+ other tools Australian businesses already use.",
        },
        {
          title: "One-time setup",
          body: "Connect once. Your agents stay connected and keep working even when you're offline.",
        },
        {
          title: "No training required",
          body: "Agents learn your tone, clients, and workflows from your existing data automatically.",
        },
      ],
    },
    {
      num: "02",
      label: "Automate",
      heading: "Agents take over the admin.",
      description:
        "Six purpose-built agents run in parallel — handling emails, invoices, scheduling, quoting, follow-ups, and documents.",
      points: [
        {
          title: "Always on",
          body: "Your agents work 24/7 — replying to emails at 2am and sending invoices the moment a job is done.",
        },
        {
          title: "Built for Australian SMBs",
          body: "Trained on local workflows. Understands GST, EOFY, and how Australian trades and services actually operate.",
        },
        {
          title: "Shares context",
          body: "Agents communicate with each other. When Rex sends an invoice, Chase automatically schedules a follow-up.",
        },
      ],
    },
    {
      num: "03",
      label: "Review",
      heading: "You stay in control.",
      description:
        "Check in once a day. Approve what needs approving. Everything else is already handled.",
      points: [
        {
          title: "Daily digest",
          body: "One email each morning with what your agents did overnight and anything that needs your eye.",
        },
        {
          title: "Approve before it sends",
          body: "Set your approval threshold. High-value quotes and first-time client emails wait for your sign-off.",
        },
        {
          title: "Full audit trail",
          body: "Every action is logged. See exactly what your agents did, when, and why.",
        },
      ],
    },
  ];

  return (
    <section
      style={{
        background: "var(--surface)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {/* Step tabs */}
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {steps.map((step, i) => {
            const isActive = i === activeStep;
            const circumference = 2 * Math.PI * 13;
            const dashOffset = isActive ? 0 : circumference * 0.72;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "16px 32px 14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  borderBottom: isActive
                    ? "2px solid var(--text)"
                    : "2px solid transparent",
                  marginBottom: -1,
                  transition: "all 0.2s",
                  position: "relative",
                }}
              >
                {/* SVG ring icon */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  style={{ flexShrink: 0 }}
                >
                  {/* Background ring */}
                  <circle
                    cx="15"
                    cy="15"
                    r="13"
                    fill="none"
                    stroke={isActive ? "var(--text)" : "rgba(0,0,0,0.12)"}
                    strokeWidth="1.5"
                    strokeDasharray={
                      isActive
                        ? undefined
                        : `${circumference * 0.28} ${circumference * 0.72}`
                    }
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    transform="rotate(-90 15 15)"
                    style={{ transition: "all 0.35s" }}
                  />
                  {/* Number */}
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
                    {step.num}
                  </text>
                </svg>

                {/* Label + counter */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "var(--text)" : "rgba(0,0,0,0.4)",
                      transition: "all 0.2s",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.label}
                  </span>
                  {isActive && (
                    <span
                      style={{
                        fontSize: 11,
                        color: "rgba(0,0,0,0.3)",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {activeStep + 1}&thinsp;/&thinsp;{steps.length}
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
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 40px 96px",
          display: "grid",
          gridTemplateColumns: "5fr 7fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* Left — text */}
        <div style={{ minWidth: 0 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {steps[activeStep].heading}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-dim)",
              lineHeight: 1.65,
              marginBottom: 48,
            }}
          >
            {steps[activeStep].description}
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps[activeStep].points.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "20px 0",
                  borderTop: "1px solid rgba(0,0,0,0.09)",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(0,0,0,0.3)",
                    fontWeight: 500,
                    flexShrink: 0,
                    paddingTop: 2,
                    minWidth: 16,
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {point.title}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
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
        </div>

        {/* Right — step visual */}
        <div
          style={{
            position: "sticky",
            top: 120,
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {activeStep === 0 && (
            <LogoTimeline items={CONNECT_LOGOS} height="h-[360px]" />
          )}
          {activeStep === 1 && (
            <div
              style={{
                width: "100%",
                height: 360,
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <Plan />
            </div>
          )}
          {activeStep === 2 && <MagnifiedBento />}
        </div>
      </div>
    </section>
  );
}

/* ─── 3D Testimonials Marquee ─── */
const ALL_TESTIMONIALS = [
  {
    name: "Tom Mitchell",
    username: "@tom.m",
    body: "I used to spend two hours every morning clearing emails and sending invoices. Now I check in once a day. It's genuinely changed how I run the business.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Mitchell Plumbing · Melbourne",
  },
  {
    name: "Priya Sharma",
    username: "@priya.s",
    body: "The follow-up agent alone paid for itself in the first month. We were leaving money on the table just by not following up fast enough.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Sharma Legal · Brisbane",
  },
  {
    name: "James Tran",
    username: "@james.t",
    body: "We're a team of eight but we operate like twelve now. The agents handle the back-and-forth so we're billing more hours without working more.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    role: "Tran & Co Accounting · Sydney",
  },
  {
    name: "Sarah Nguyen",
    username: "@sarah.n",
    body: "Setup was 20 minutes. By the end of the week, my inbox was basically running itself. I didn't believe it until I saw it.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Nguyen Electrical · Perth",
  },
  {
    name: "Marcus Bell",
    username: "@marcus.b",
    body: "Quoting used to take me half a day. Quinn does it in 10 minutes and the proposals look more professional than anything I was doing manually.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    role: "Bell Landscaping · Adelaide",
  },
  {
    name: "Amy Chen",
    username: "@amy.c",
    body: "I was sceptical about AI for my business. Now I can't imagine running it without Hourglass. It just quietly handles everything.",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    role: "Chen Physio · Melbourne",
  },
  {
    name: "Dave O'Brien",
    username: "@dave.ob",
    body: "Cal books every site visit, sends the confirmation, and reminds the client the day before. I haven't double-booked in three months.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    role: "O'Brien Constructions · Gold Coast",
  },
  {
    name: "Lisa Park",
    username: "@lisa.p",
    body: "The document agent is underrated. It files everything, names it properly, and I can find any contract in seconds. Game changer.",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    role: "Park & Associates · Canberra",
  },
  {
    name: "Ryan Walsh",
    username: "@ryan.w",
    body: "Tried three other automation tools before this. None of them understood how a small trade business actually works. Hourglass does.",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    role: "Walsh Plumbing · Brisbane",
  },
];

function TestimonialCard({
  img,
  name,
  username,
  body,
  role,
}: (typeof ALL_TESTIMONIALS)[number]) {
  return (
    <Card style={{ width: 220, flexShrink: 0, marginBottom: 0 }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Avatar style={{ width: 32, height: 32 }}>
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              {name}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
              {username}
            </div>
          </div>
        </div>
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6,
            marginBottom: 8,
          }}
        >
          {body}
        </p>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{role}</p>
      </CardContent>
    </Card>
  );
}

/* ─── Systems Diagram ─── */
function SystemsDiagram() {
  const f = "system-ui,-apple-system,sans-serif";
  const font = f;
  const lc = "rgba(120,150,255,0.22)";
  const lw = 1.2;
  const dash = "3 7";

  // Hub geometry
  const hx = 450,
    hy = 228,
    hw = 162,
    hh = 48;
  const hubL = hx - hw / 2,
    hubR = hx + hw / 2;
  const hubT = hy - hh / 2,
    hubB = hy + hh / 2;

  // Top pills (5, centered around hx)
  const pillW = 106,
    pillH = 28,
    pillGap = 13;
  const totalPillW = 5 * pillW + 4 * pillGap;
  const pillStart = hx - totalPillW / 2;
  const pillCx = [0, 1, 2, 3, 4].map(
    (i) => pillStart + i * (pillW + pillGap) + pillW / 2,
  );
  const pillSources = ["Xero", "MYOB", "Gmail", "ServiceM8", "Calendly"];
  const pillY = 22;
  const trunkY = 84;
  const midJY = 152;

  // Logo grid (2×2, far left)
  const lgSz = 36,
    lgGap = 8,
    lgX = 26,
    lgY = 204;
  const lgRight = lgX + 2 * lgSz + lgGap;
  const logoInfo = [
    { label: "Xero", bg: "rgba(0,170,140,0.18)" },
    { label: "Gmail", bg: "rgba(220,50,50,0.18)" },
    { label: "MYOB", bg: "rgba(40,100,220,0.18)" },
    { label: "S8", bg: "rgba(180,120,0,0.18)" },
  ];

  const intChipX = lgRight + 14;
  const intChipW = 132;
  const dpChipX = hubR + 12;
  const dpChipW = 118;
  const iconX = dpChipX + dpChipW + 14;
  const iconSz = 52;
  const iconCx = iconX + iconSz / 2;

  const orchY = 315,
    orchH = 30;
  const orchBottom = orchY + orchH / 2;
  const branchY = orchBottom + 16;
  const agCx = [282, 388, 494, 600];
  const agW = 96,
    agH = 26;
  const agTopY = branchY + 14;

  const Jdot = ({ cx, cy }: { cx: number; cy: number }) => (
    <circle cx={cx} cy={cy} r="3" fill={lc} />
  );

  return (
    <svg
      viewBox="0 0 900 422"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        borderRadius: 16,
      }}
    >
      <defs>
        <pattern
          id="ndots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.04)" />
        </pattern>
        <radialGradient id="hglow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(34,197,94,0.14)" />
          <stop offset="100%" stopColor="rgba(34,197,94,0)" />
        </radialGradient>
        <filter id="hub-filter" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="hub-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(34,197,94,0.25)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="900" height="422" fill="#07111d" rx="16" />
      <rect width="900" height="422" fill="url(#ndots)" rx="16" />
      <ellipse cx={hx} cy={hy} rx="240" ry="130" fill="url(#hglow2)" />

      {/* ── STATIC LINES ── */}

      {/* Horizontal trunk connecting top pills */}
      <line
        x1={pillCx[0]}
        y1={trunkY}
        x2={pillCx[4]}
        y2={trunkY}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Pill drops to trunk */}
      {pillCx.map((cx, i) => (
        <line
          key={`pd-${i}`}
          x1={cx}
          y1={pillY + pillH}
          x2={cx}
          y2={trunkY}
          stroke={lc}
          strokeWidth={lw}
          strokeDasharray={dash}
        />
      ))}

      {/* Main vertical: trunk → hub top */}
      <line
        x1={hx}
        y1={trunkY}
        x2={hx}
        y2={hubT}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* API chip → main vertical */}
      <line
        x1={302}
        y1={midJY}
        x2={hx}
        y2={midJY}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Webhooks chip → main vertical */}
      <line
        x1={560}
        y1={midJY}
        x2={hx}
        y2={midJY}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Left horizontal: logos → hub left */}
      <line
        x1={lgRight}
        y1={hy}
        x2={hubL}
        y2={hy}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Right horizontal: hub right → right icon */}
      <line
        x1={hubR}
        y1={hy}
        x2={iconX}
        y2={hy}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Hub → Orchestration */}
      <line
        x1={hx}
        y1={hubB}
        x2={hx}
        y2={orchY - orchH / 2}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Orch trunk → branch */}
      <line
        x1={hx}
        y1={orchBottom}
        x2={hx}
        y2={branchY}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Branch horizontal */}
      <line
        x1={agCx[0]}
        y1={branchY}
        x2={agCx[3]}
        y2={branchY}
        stroke={lc}
        strokeWidth={lw}
        strokeDasharray={dash}
      />

      {/* Agent drops */}
      {agCx.map((cx, i) => (
        <line
          key={`ad-${i}`}
          x1={cx}
          y1={branchY}
          x2={cx}
          y2={agTopY}
          stroke={lc}
          strokeWidth={lw}
          strokeDasharray={dash}
        />
      ))}

      {/* ── JUNCTION DOTS ── */}
      {[
        [hx, trunkY],
        [hx, midJY],
        [302, midJY],
        [560, midJY],
        [hubL, hy],
        [hubR, hy],
        ...agCx.map((cx) => [cx, branchY]),
      ].map(([cx, cy], i) => (
        <circle
          key={`jd-${i}`}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="rgba(140,170,255,0.55)"
        />
      ))}

      {/* ── FLOW ANIMATIONS — green pulses flowing toward hub ── */}
      {/* Trunk: left → right */}
      <path
        d={`M ${pillCx[0]} ${trunkY} L ${pillCx[4]} ${trunkY}`}
        fill="none"
        stroke="rgba(52,211,114,0.5)"
        strokeWidth="1.5"
        strokeDasharray="4 300"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="304"
          to="0"
          dur="3.8s"
          repeatCount="indefinite"
        />
      </path>
      {/* Main vertical: trunk → hub */}
      <path
        d={`M ${hx} ${trunkY} L ${hx} ${hubT}`}
        fill="none"
        stroke="rgba(52,211,114,0.6)"
        strokeWidth="1.5"
        strokeDasharray="4 300"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="304"
          to="0"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </path>
      {/* Left horizontal: logos → hub */}
      <path
        d={`M ${lgRight} ${hy} L ${hubL} ${hy}`}
        fill="none"
        stroke="rgba(52,211,114,0.5)"
        strokeWidth="1.5"
        strokeDasharray="4 300"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="304"
          to="0"
          dur="2.9s"
          repeatCount="indefinite"
        />
      </path>
      {/* Hub → Orchestration */}
      <path
        d={`M ${hx} ${hubB} L ${hx} ${orchY - orchH / 2}`}
        fill="none"
        stroke="rgba(52,211,114,0.6)"
        strokeWidth="1.5"
        strokeDasharray="4 300"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="304"
          to="0"
          dur="1.9s"
          repeatCount="indefinite"
        />
      </path>
      {/* Right horizontal: hub → data pipeline */}
      <path
        d={`M ${hubR} ${hy} L ${iconX} ${hy}`}
        fill="none"
        stroke="rgba(52,211,114,0.45)"
        strokeWidth="1.5"
        strokeDasharray="4 300"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="304"
          to="0"
          dur="3.3s"
          repeatCount="indefinite"
        />
      </path>

      {/* ── SOURCE PILLS ── */}
      {pillSources.map((label, i) => (
        <g key={`pill-${i}`}>
          <rect
            x={pillCx[i] - pillW / 2}
            y={pillY}
            width={pillW}
            height={pillH}
            rx={pillH / 2}
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth="1"
          />
          <text
            x={pillCx[i]}
            y={pillY + pillH / 2 + 4.5}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontFamily={f}
            fontWeight="500"
          >
            {label}
          </text>
        </g>
      ))}

      {/* ── CONNECT CHIP ── */}
      <rect
        x={215}
        y={midJY - 14}
        width={87}
        height={28}
        rx={5}
        fill="rgba(120,150,255,0.08)"
        stroke="rgba(120,150,255,0.2)"
        strokeWidth="1"
      />
      <text
        x={258}
        y={midJY + 4.5}
        textAnchor="middle"
        fill="rgba(255,255,255,0.65)"
        fontSize="11"
        fontFamily={f}
        fontWeight="500"
      >
        Connect API
      </text>

      {/* ── EVENT TRIGGERS CHIP ── */}
      <rect
        x={560}
        y={midJY - 14}
        width={128}
        height={28}
        rx={5}
        fill="rgba(120,150,255,0.08)"
        stroke="rgba(120,150,255,0.2)"
        strokeWidth="1"
      />
      <text
        x={624}
        y={midJY + 4.5}
        textAnchor="middle"
        fill="rgba(255,255,255,0.65)"
        fontSize="11"
        fontFamily={f}
        fontWeight="500"
      >
        Event Triggers
      </text>

      {/* ── BRAND ICONS (2x2 grid) ── */}
      {/* Xero — teal X */}
      <rect
        x={lgX}
        y={lgY}
        width={lgSz}
        height={lgSz}
        rx={9}
        fill="rgba(19,181,234,0.15)"
        stroke="rgba(19,181,234,0.22)"
        strokeWidth="1"
      />
      <line
        x1={lgX + 10}
        y1={lgY + 10}
        x2={lgX + 26}
        y2={lgY + 26}
        stroke="rgba(19,181,234,0.85)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1={lgX + 26}
        y1={lgY + 10}
        x2={lgX + 10}
        y2={lgY + 26}
        stroke="rgba(19,181,234,0.85)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Gmail — envelope */}
      <rect
        x={lgX + lgSz + lgGap}
        y={lgY}
        width={lgSz}
        height={lgSz}
        rx={9}
        fill="rgba(234,67,53,0.15)"
        stroke="rgba(234,67,53,0.22)"
        strokeWidth="1"
      />
      <path
        d={`M${lgX + lgSz + lgGap + 7} ${lgY + 13} L${lgX + lgSz + lgGap + 18} ${lgY + 22} L${lgX + lgSz + lgGap + 29} ${lgY + 13}`}
        fill="none"
        stroke="rgba(234,100,90,0.85)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={lgX + lgSz + lgGap + 7}
        y={lgY + 13}
        width={22}
        height={12}
        rx={2}
        fill="none"
        stroke="rgba(234,100,90,0.65)"
        strokeWidth="1.2"
      />
      {/* MYOB — M path */}
      <rect
        x={lgX}
        y={lgY + lgSz + lgGap}
        width={lgSz}
        height={lgSz}
        rx={9}
        fill="rgba(26,93,173,0.2)"
        stroke="rgba(60,130,220,0.22)"
        strokeWidth="1"
      />
      <path
        d={`M${lgX + 9} ${lgY + lgSz + lgGap + 24} L${lgX + 9} ${lgY + lgSz + lgGap + 12} L${lgX + 18} ${lgY + lgSz + lgGap + 20} L${lgX + 27} ${lgY + lgSz + lgGap + 12} L${lgX + 27} ${lgY + lgSz + lgGap + 24}`}
        fill="none"
        stroke="rgba(100,160,240,0.82)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* ServiceM8 — target/service */}
      <rect
        x={lgX + lgSz + lgGap}
        y={lgY + lgSz + lgGap}
        width={lgSz}
        height={lgSz}
        rx={9}
        fill="rgba(232,112,58,0.15)"
        stroke="rgba(232,112,58,0.22)"
        strokeWidth="1"
      />
      <circle
        cx={lgX + lgSz + lgGap + 18}
        cy={lgY + lgSz + lgGap + 18}
        r={8}
        fill="none"
        stroke="rgba(232,140,80,0.82)"
        strokeWidth="2"
      />
      <circle
        cx={lgX + lgSz + lgGap + 18}
        cy={lgY + lgSz + lgGap + 18}
        r={2.5}
        fill="rgba(232,140,80,0.82)"
      />

      {/* ── APP MARKETPLACE CHIP ── */}
      <rect
        x={intChipX}
        y={hy - 14}
        width={intChipW}
        height={28}
        rx={5}
        fill="rgba(120,150,255,0.07)"
        stroke="rgba(120,150,255,0.17)"
        strokeWidth="1"
      />
      <text
        x={intChipX + intChipW / 2}
        y={hy + 4.5}
        textAnchor="middle"
        fill="rgba(255,255,255,0.6)"
        fontSize="11"
        fontFamily={f}
        fontWeight="500"
      >
        App Marketplace
      </text>

      {/* ── HUB ── */}
      <rect
        x={hubL - 2}
        y={hubT - 2}
        width={hw + 4}
        height={hh + 4}
        rx={12}
        fill="rgba(34,197,94,0.1)"
        filter="url(#hub-filter)"
      />
      <rect x={hubL} y={hubT} width={hw} height={hh} rx={10} fill="#17733a" />
      <rect
        x={hubL}
        y={hubT}
        width={hw}
        height={hh / 2}
        rx={10}
        fill="url(#hub-grad)"
        opacity="0.4"
      />
      <rect
        x={hubL}
        y={hubT}
        width={hw}
        height={hh}
        rx={10}
        fill="none"
        stroke="rgba(52,211,114,0.4)"
        strokeWidth="1.5"
      />
      <text
        x={hx}
        y={hy + 5}
        textAnchor="middle"
        fill="rgba(255,255,255,0.95)"
        fontSize="13"
        fontFamily={f}
        fontWeight="700"
      >
        Hourglass AI
      </text>
      {/* Hub pulse ring */}
      <ellipse
        cx={hx}
        cy={hy}
        rx="90"
        ry="34"
        fill="none"
        stroke="rgba(34,197,94,0.2)"
        strokeWidth="1.2"
      >
        <animate
          attributeName="rx"
          values="86;106;86"
          dur="3.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values="30;40;30"
          dur="3.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.35;0;0.35"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* ── DATA PIPELINE CHIP ── */}
      <rect
        x={dpChipX}
        y={hy - 14}
        width={dpChipW}
        height={28}
        rx={5}
        fill="rgba(120,150,255,0.07)"
        stroke="rgba(120,150,255,0.17)"
        strokeWidth="1"
      />
      <text
        x={dpChipX + dpChipW / 2}
        y={hy + 4.5}
        textAnchor="middle"
        fill="rgba(255,255,255,0.6)"
        fontSize="11"
        fontFamily={f}
        fontWeight="500"
      >
        Data Pipeline
      </text>

      {/* ── RIGHT ICON — 3x3 grid ── */}
      <rect
        x={iconX}
        y={hy - iconSz / 2}
        width={iconSz}
        height={iconSz}
        rx={12}
        fill="rgba(120,150,255,0.09)"
        stroke="rgba(120,150,255,0.2)"
        strokeWidth="1"
      />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`gi-${row}-${col}`}
            x={iconCx - 12 + col * 10}
            y={hy - 9 + row * 10}
            width={7}
            height={7}
            rx={2}
            fill="rgba(150,185,255,0.32)"
          />
        )),
      )}

      {/* ── ORCHESTRATION ── */}
      <rect
        x={hx - 60}
        y={orchY - orchH / 2}
        width={120}
        height={orchH}
        rx={6}
        fill="rgba(120,150,255,0.09)"
        stroke="rgba(120,150,255,0.2)"
        strokeWidth="1"
      />
      <text
        x={hx}
        y={orchY + 5}
        textAnchor="middle"
        fill="rgba(255,255,255,0.7)"
        fontSize="10.5"
        fontFamily={f}
        fontWeight="600"
        letterSpacing="0.8"
      >
        ORCHESTRATION
      </text>

      {/* ── AGENT CHIPS ── */}
      {["Email Agent", "Invoice Agent", "Scheduling", "Follow-ups"].map(
        (label, i) => (
          <g key={`ag-${i}`}>
            <rect
              x={agCx[i] - agW / 2}
              y={agTopY}
              width={agW}
              height={agH}
              rx={5}
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.09)"
              strokeWidth="1"
            />
            <text
              x={agCx[i]}
              y={agTopY + agH / 2 + 4.5}
              textAnchor="middle"
              fill="rgba(255,255,255,0.5)"
              fontSize="10.5"
              fontFamily={f}
              fontWeight="500"
            >
              {label}
            </text>
          </g>
        ),
      )}
    </svg>
  );
}

/* ─── Main page ─── */
export default function Home() {
  useReveal();
  useStatsReveal();
  const { heroRef, headlineRef, mockupRef, glowRef, subtextRef, h1Ref } =
    useHeroAnimations();

  const FEATURES: {
    icon: ReactNode;
    title: string;
    sub: string;
    body: string;
  }[] = [
    {
      icon: <IconMail size={22} color="var(--green)" strokeWidth={1.5} />,
      title: "Email management",
      sub: "Reads, drafts and sends.",
      body: "Aria reads every email the moment it arrives, drafts replies in your voice, handles routine enquiries automatically, and surfaces only what genuinely needs you. Most owners never touch the inbox again.",
    },
    {
      icon: <IconInvoice size={22} color="var(--green)" strokeWidth={1.5} />,
      title: "Invoicing & payments",
      sub: "Creates, sends, and chases.",
      body: "Rex turns completed jobs into invoices, sends them immediately, and runs a timed follow-up sequence for anything unpaid — day 3, 7, 14. Reconciles against Xero and MYOB automatically.",
    },
    {
      icon: <IconCalendar size={22} color="var(--green)" strokeWidth={1.5} />,
      title: "Scheduling & calendar",
      sub: "Books, confirms, reschedules.",
      body: "Cal manages your entire calendar. Books meetings and site visits, factors in travel time, catches conflicts before they happen, and sends confirmation sequences without you touching a thing.",
    },
    {
      icon: <IconQuote size={22} color="var(--green)" strokeWidth={1.5} />,
      title: "Quoting",
      sub: "Scope in. Proposal out.",
      body: "Quinn takes incoming quote requests and builds professional proposals in under 10 minutes — drawing on your pricing templates and past jobs. Slow quotes lose jobs. Quinn is never slow.",
    },
    {
      icon: <IconBell size={22} color="var(--green)" strokeWidth={1.5} />,
      title: "Follow-ups",
      sub: "The touchpoint you always forget.",
      body: "Chase watches your pipeline and fires personalised follow-ups at exactly the right moment — post-quote, post-meeting, post-delivery. Stops automatically when someone replies.",
    },
    {
      icon: <IconBuilding size={22} color="var(--green)" strokeWidth={1.5} />,
      title: "Built for every industry",
      sub: "Flexible solutions for every business model.",
      body: "Industry-focused efficiency without limits.",
    },
  ];

  const STATS = [
    { value: "12 hrs", label: "saved per week, per owner" },
    { value: "98%", label: "of tasks completed without human input" },
    { value: "8 days", label: "average time to full ROI" },
    { value: "200+", label: "Australian businesses on Hourglass" },
  ];

  return (
    <div style={{ background: "var(--black)" }}>
      <AnnouncementBar />
      <Nav />

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "0 40px",
          textAlign: "center",
          position: "relative",
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 0,
          }}
        />
        <div
          ref={headlineRef}
          style={{
            maxWidth: 860,
            width: "100%",
            willChange: "transform, opacity",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* We are hiring pill */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 40,
              padding: "6px 16px 6px 6px",
              marginBottom: 40,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                background: "#16803c",
                borderRadius: 40,
                padding: "3px 10px",
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              WE&rsquo;RE HIRING
            </span>
            <span
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              Join the team →
            </span>
          </a>

          {/* H1 */}
          <h1
            ref={h1Ref}
            style={{
              fontSize: "clamp(56px, 9vw, 108px)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.045em",
              lineHeight: 1.0,
              marginBottom: 24,
            }}
          >
            Every business
            <br />
            has a story.
          </h1>

          {/* Sub */}
          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.5,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: 48,
            }}
          >
            The AI operations layer for Australian small business.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="#"
              style={{
                background: "#fff",
                color: "#0a0a0a",
                padding: "14px 32px",
                borderRadius: 40,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              Book a demo
            </a>
            <a
              href="#"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.55)",
                padding: "14px 28px",
                borderRadius: 40,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              See how it works →
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <section
        style={{
          background: "var(--black)",
          padding: "28px 0",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontWeight: 500,
          }}
        >
          Trusted by Australian businesses
        </p>
        <div style={{ overflow: "hidden" }}>
          <div
            className="marquee-track"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 80,
              width: "max-content",
            }}
          >
            {[
              { name: "TCACC", src: "/images/logos/tcacc.webp" },
              { name: "Voyagin Australia", src: "/images/logos/voyagin.avif" },
              { name: "Integr8", src: "/images/logos/integr8.png" },
              {
                name: "Main Sequence",
                src: "/images/logos/main-sequence.webp",
              },
              {
                name: "Nutrition 4 Performance",
                src: "/images/logos/nutrition4performance.webp",
              },
              { name: "Schweigen", src: "/images/logos/schweigen.webp" },
              { name: "TCACC", src: "/images/logos/tcacc.webp" },
              { name: "Voyagin Australia", src: "/images/logos/voyagin.avif" },
              { name: "Integr8", src: "/images/logos/integr8.png" },
              {
                name: "Main Sequence",
                src: "/images/logos/main-sequence.webp",
              },
              {
                name: "Nutrition 4 Performance",
                src: "/images/logos/nutrition4performance.webp",
              },
              { name: "Schweigen", src: "/images/logos/schweigen.webp" },
            ].map(({ name, src }, i) => (
              <img
                key={`${name}-${i}`}
                src={src}
                alt={name}
                style={{
                  height: 32,
                  width: "auto",
                  maxWidth: 180,
                  objectFit: "contain",
                  opacity: 0.5,
                  filter: "grayscale(1)",
                  flexShrink: 0,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <HowItWorks />

      {/* ─── AGENTS BENTO ─── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "100px 40px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 56 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--green)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Our agents
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: 14,
                maxWidth: 560,
              }}
            >
              Agents we&rsquo;ve built
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--text-dim)",
                lineHeight: 1.7,
                maxWidth: 500,
              }}
            >
              Every agent is built from your actual workflows and deployed
              inside the tools you already use. No new platforms to learn.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {(
              [
                {
                  icon: (
                    <IconMail size={18} color="#16803c" strokeWidth={1.8} />
                  ),
                  title: "Email Agent",
                  description:
                    "Reads, triages, and drafts responses across your inbox. Routes urgent items, handles routine replies, escalates the rest.",
                  span: 2,
                },
                {
                  icon: (
                    <IconInvoice size={18} color="#16803c" strokeWidth={1.8} />
                  ),
                  title: "Invoice Agent",
                  description:
                    "Chases overdue invoices, reconciles payments, and notifies your team when money lands.",
                },
                {
                  icon: (
                    <IconCalendar size={18} color="#16803c" strokeWidth={1.8} />
                  ),
                  title: "Weekly Reporter",
                  description:
                    "Pulls KPIs from your tools and delivers a plain-English summary every Monday morning.",
                },
                {
                  icon: (
                    <IconClipboard
                      size={18}
                      color="#16803c"
                      strokeWidth={1.8}
                    />
                  ),
                  title: "Order Processor",
                  description:
                    "Parses incoming orders from email, creates records in your system, and flags exceptions for review.",
                },
                {
                  icon: (
                    <IconZap size={18} color="var(--green)" strokeWidth={1.8} />
                  ),
                  title: "Content Agent",
                  description:
                    "Turns one piece of content into LinkedIn posts, email sequences, and social drafts in your brand voice.",
                },
                {
                  icon: (
                    <IconFolder size={18} color="#16803c" strokeWidth={1.8} />
                  ),
                  title: "Document Extractor",
                  description:
                    "Reads PDFs, contracts, and spreadsheets. Extracts structured data into your existing systems.",
                },
                {
                  icon: (
                    <IconBell size={18} color="#16803c" strokeWidth={1.8} />
                  ),
                  title: "Support Agent",
                  description:
                    "Handles routine support queries via email or chat. Auto-sends the simple ones, escalates the rest.",
                },
                {
                  icon: (
                    <IconShield size={18} color="#16803c" strokeWidth={1.8} />
                  ),
                  title: "Competitor Monitor",
                  description:
                    "Tracks competitor pricing, offerings, and reviews. Surfaces changes weekly so you stay ahead.",
                },
              ] as {
                icon: React.ReactNode;
                title: string;
                description: string;
                span?: number;
              }[]
            ).map((agent, i) => (
              <div
                key={agent.title}
                className="reveal"
                style={{
                  gridColumn: agent.span ? `span ${agent.span}` : undefined,
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 14,
                  padding: "28px 28px 28px 28px",
                  position: "relative",
                  minHeight: 170,
                  transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.07)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.13)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                }}
              >
                {/* Arrow indicator */}
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M2 9L9 2M9 2H3.5M9 2V7.5"
                      stroke="rgba(0,0,0,0.28)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "rgba(22,128,60,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  {agent.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                    marginBottom: 7,
                  }}
                >
                  {agent.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-dim)",
                    lineHeight: 1.65,
                    maxWidth: agent.span === 2 ? 400 : undefined,
                  }}
                >
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "0 40px 100px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "48px 0 0",
                borderRight: i < 3 ? "1px solid rgba(0,0,0,0.1)" : "none",
                paddingRight: i < 3 ? 40 : 0,
                paddingLeft: i > 0 ? 40 : 0,
              }}
            >
              <div
                className="stat-value"
                style={{
                  fontSize: "clamp(32px, 3.5vw, 52px)",
                  fontWeight: 800,
                  color: "var(--text)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {s.value}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-dim)",
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section
        style={{
          background: "var(--surface-2)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 40px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
              borderTop: "1px solid rgba(0,0,0,0.09)",
            }}
          >
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="reveal"
                style={{
                  padding: "48px 0",
                  paddingRight: i % 2 === 0 ? 60 : 0,
                  paddingLeft: i % 2 === 1 ? 60 : 0,
                  borderBottom:
                    i < FEATURES.length - 2
                      ? "1px solid rgba(0,0,0,0.09)"
                      : "none",
                  borderRight:
                    i % 2 === 0 ? "1px solid rgba(0,0,0,0.09)" : "none",
                }}
              >
                <div
                  style={{
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.025em",
                    marginBottom: 4,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--green)",
                    marginBottom: 14,
                    letterSpacing: "0.01em",
                  }}
                >
                  {f.sub}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text-dim)",
                    lineHeight: 1.7,
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <BentoTestimonials />

      {/* ─── SYSTEMS ─── */}
      <section
        style={{
          background: "var(--black)",
          padding: "120px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 64,
              gap: 40,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--green-bright)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Systems
              </p>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  maxWidth: 580,
                }}
              >
                You don&rsquo;t have a people problem. You have a systems
                problem.
              </h2>
            </div>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.65,
                maxWidth: 360,
                flexShrink: 0,
              }}
            >
              Connect to existing systems. Orchestrate your back office across
              every tool, agent, and workflow — without writing a single line of
              code.
            </p>
          </div>
          <SystemsDiagram />
        </div>
      </section>

      {/* ─── PROGRAM ─── */}
      <section
        id="program"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        {/* Background image */}
        <Image
          src="/melbourne-sketch.png"
          alt="Melbourne skyline"
          width={1536}
          height={1024}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority={false}
        />
        {/* Top fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, var(--black) 0%, transparent 30%)",
            zIndex: 1,
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--black) 0%, transparent 30%)",
            zIndex: 1,
          }}
        />
        {/* Darkening overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.62)",
            zIndex: 1,
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 40px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 700, width: "100%" }}>
            {/* Label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 40,
                padding: "6px 16px",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.45)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                4-Week Program
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: "clamp(38px, 5.5vw, 80px)",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                margin: "0 0 20px",
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              Go from &ldquo;I should learn AI&rdquo;
              <br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>
                to shipping in 4 weeks.
              </span>
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.42)",
                lineHeight: 1.75,
                margin: "0 auto 10px",
                maxWidth: 480,
              }}
            >
              Written lessons · matched pod of 4–5 · private Slack · Friday live
              call every week
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.25)",
                margin: "0 auto 36px",
                letterSpacing: "0.01em",
              }}
            >
              Co-taught by Batko and Finlay
            </p>

            {/* Price */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                gap: 8,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: "12px 28px",
                marginBottom: 36,
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.03em",
                }}
              >
                $1,499 AUD
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.3)",
                  fontWeight: 400,
                }}
              >
                one-off
              </span>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#"
                style={{
                  background: "white",
                  color: "var(--black)",
                  padding: "14px 36px",
                  borderRadius: 40,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Apply now
              </a>
              <a
                href="#"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.5)",
                  padding: "14px 28px",
                  borderRadius: 40,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: "var(--black)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "60px 40px 40px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
              gap: 40,
              marginBottom: 48,
            }}
          >
            <div>
              <div style={{ marginBottom: 12 }}>
                <Logo color="#fff" size={20} />
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.3)",
                  lineHeight: 1.6,
                  maxWidth: 200,
                }}
              >
                AI agents that handle admin for Australian small businesses.
              </p>
            </div>

            {[
              {
                heading: "Product",
                links: [
                  "What we do",
                  "Our agents",
                  "Results",
                  "Pricing",
                  "Changelog",
                ],
              },
              {
                heading: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                heading: "Legal",
                links: ["Privacy Policy", "Terms", "Security", "Cookies"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                      }
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
              © 2025 Hourglass AI Pty Ltd · ABN 00 000 000 000 · Sydney,
              Australia
            </span>
            <div style={{ display: "flex", gap: 20 }}>
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.25)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
