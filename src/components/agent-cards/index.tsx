"use client";

import { useEffect, useRef } from "react";
import {
  IconMail,
  IconInvoice,
  IconCalendar,
  IconQuote,
  IconBell,
  IconFolder,
} from "@/components/icons";
import type { ReactNode } from "react";

type Agent = {
  icon: ReactNode;
  name: string;
  desc: string;
  tasks: string;
};

const AGENTS: Agent[] = [
  {
    icon: <IconMail size={20} strokeWidth={1.5} />,
    name: "Email Agent",
    desc: "Reads, categorises and drafts replies to every incoming email. Handles enquiries, complaints, and follow-ups.",
    tasks: "4,200+",
  },
  {
    icon: <IconInvoice size={20} strokeWidth={1.5} />,
    name: "Invoice Agent",
    desc: "Creates and sends invoices, tracks payment status, fires automated reminders at the right intervals.",
    tasks: "1,800+",
  },
  {
    icon: <IconCalendar size={20} strokeWidth={1.5} />,
    name: "Calendar Agent",
    desc: "Books meetings, sends confirmations, reschedules on conflicts, and blocks focus time automatically.",
    tasks: "3,100+",
  },
  {
    icon: <IconQuote size={20} strokeWidth={1.5} />,
    name: "Quote Agent",
    desc: "Turns incoming quote requests into professional proposals using your pricing and templates.",
    tasks: "920+",
  },
  {
    icon: <IconBell size={20} strokeWidth={1.5} />,
    name: "Follow-up Agent",
    desc: "Sends personalised follow-ups after meetings, proposals, and service delivery — at exactly the right time.",
    tasks: "2,600+",
  },
  {
    icon: <IconFolder size={20} strokeWidth={1.5} />,
    name: "Document Agent",
    desc: "Files, organises, and retrieves documents. Auto-names attachments and links them to the right contacts.",
    tasks: "5,400+",
  },
];

export function AgentCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards =
      containerRef.current?.querySelectorAll<HTMLDivElement>(".agent-card");
    if (!cards) return;

    const observers: IntersectionObserver[] = [];
    cards.forEach((card, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => card.classList.add("visible"), i * 80);
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      obs.observe(card);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "120px 40px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "var(--green)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Meet your team
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 56,
            fontFamily: "var(--font-playfair, Georgia, serif)",
            maxWidth: 480,
          }}
        >
          Six agents. Every admin task covered.
        </h2>

        <div
          ref={containerRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            background: "var(--border)",
          }}
        >
          {AGENTS.map((agent) => (
            <div
              key={agent.name}
              className="agent-card reveal"
              style={{
                background: "white",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "white";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "var(--text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--green-bright)",
                  marginBottom: 20,
                  flexShrink: 0,
                }}
              >
                {agent.icon}
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {agent.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-dim)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                {agent.desc}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--green)",
                  letterSpacing: "0.02em",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--green)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {agent.tasks} tasks handled
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
