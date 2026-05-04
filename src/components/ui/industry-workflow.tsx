"use client";

import React, { useState } from "react";
import { useIsMobile } from "@/components/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Briefcase,
  Calendar,
  Coffee,
  Database,
  FileText,
  Heart,
  Mail,
  Settings,
  ShoppingBag,
  Webhook,
  Wrench,
  Zap,
} from "lucide-react";

type IndustryId =
  | "trades"
  | "professional"
  | "retail"
  | "healthcare"
  | "hospitality";

interface Step {
  type: "trigger" | "action" | "condition";
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface IndustryDef {
  id: IndustryId;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  steps: Step[];
}

const TYPE_STYLES: Record<string, { dot: string; label: string }> = {
  trigger: { dot: "var(--green-bright)", label: "Trigger" },
  action: { dot: "rgba(255,255,255,0.3)", label: "Action" },
  condition: { dot: "var(--systems-cyan)", label: "Condition" },
};

const INDUSTRIES: IndustryDef[] = [
  {
    id: "trades",
    label: "Trades",
    Icon: Wrench,
    tagline: "From new job request to paid invoice — without touching a thing.",
    steps: [
      {
        type: "trigger",
        title: "Job Request",
        description: "Customer enquiry via email or web form",
        icon: Webhook,
      },
      {
        type: "action",
        title: "Email Agent",
        description: "Qualifies lead & sends tailored response",
        icon: Mail,
      },
      {
        type: "action",
        title: "Calendar Agent",
        description: "Books site visit around your schedule",
        icon: Calendar,
      },
      {
        type: "action",
        title: "Quote Agent",
        description: "Builds proposal from your pricing templates",
        icon: FileText,
      },
      {
        type: "action",
        title: "Invoice Agent",
        description: "Sends invoice and chases if unpaid",
        icon: Database,
      },
    ],
  },
  {
    id: "professional",
    label: "Professional Services",
    Icon: Briefcase,
    tagline: "Onboard clients, handle billing, and never miss a deadline.",
    steps: [
      {
        type: "trigger",
        title: "Client Enquiry",
        description: "New matter request received via email",
        icon: Webhook,
      },
      {
        type: "action",
        title: "Intake Agent",
        description: "Sends engagement letter & collects info",
        icon: Mail,
      },
      {
        type: "condition",
        title: "Conflict Check",
        description: "Verifies against existing client database",
        icon: Settings,
      },
      {
        type: "action",
        title: "Calendar Agent",
        description: "Schedules initial consultation automatically",
        icon: Calendar,
      },
      {
        type: "action",
        title: "Billing Agent",
        description: "Creates time-based invoices automatically",
        icon: Database,
      },
    ],
  },
  {
    id: "retail",
    label: "Retail",
    Icon: ShoppingBag,
    tagline:
      "Process orders, manage follow-ups, and build loyalty on autopilot.",
    steps: [
      {
        type: "trigger",
        title: "Order Received",
        description: "New order from store or marketplace",
        icon: Webhook,
      },
      {
        type: "condition",
        title: "Inventory Check",
        description: "Verifies stock availability in real time",
        icon: Database,
      },
      {
        type: "action",
        title: "Fulfillment",
        description: "Routes packing instructions to warehouse",
        icon: Settings,
      },
      {
        type: "action",
        title: "Dispatch Email",
        description: "Notifies customer with tracking details",
        icon: Mail,
      },
      {
        type: "action",
        title: "Review Request",
        description: "Requests a review 7 days after delivery",
        icon: Zap,
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    Icon: Heart,
    tagline: "Manage bookings, reminders, and patient follow-ups hands-free.",
    steps: [
      {
        type: "trigger",
        title: "Booking Request",
        description: "Patient requests an appointment online",
        icon: Webhook,
      },
      {
        type: "condition",
        title: "Availability",
        description: "Matches against practitioner schedule",
        icon: Calendar,
      },
      {
        type: "action",
        title: "Confirmation",
        description: "Sends booking confirmation with details",
        icon: Mail,
      },
      {
        type: "action",
        title: "Reminder Agent",
        description: "Sends 24hr & 1hr reminders automatically",
        icon: Bell,
      },
      {
        type: "action",
        title: "Follow-up Agent",
        description: "Post-visit care instructions & billing",
        icon: Zap,
      },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    Icon: Coffee,
    tagline:
      "Handle bookings, upsell guests, and collect reviews on autopilot.",
    steps: [
      {
        type: "trigger",
        title: "Booking Enquiry",
        description: "Guest requests a reservation via any channel",
        icon: Webhook,
      },
      {
        type: "condition",
        title: "Availability",
        description: "Checks real-time table or room availability",
        icon: Calendar,
      },
      {
        type: "action",
        title: "Confirmation",
        description: "Sends confirmation and upsell add-ons",
        icon: Mail,
      },
      {
        type: "action",
        title: "Pre-arrival",
        description: "Sends welcome info 24 hours before visit",
        icon: Bell,
      },
      {
        type: "action",
        title: "Review Request",
        description: "Requests a Google review after the visit",
        icon: Zap,
      },
    ],
  },
];

const stepsVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const stepVariant = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.16, ease: "easeIn" as const },
  },
};

export function IndustryWorkflow() {
  const [activeId, setActiveId] = useState<IndustryId>("trades");
  const isMobile = useIsMobile();

  const industry = INDUSTRIES.find((i) => i.id === activeId)!;

  return (
    <section
      style={{
        background: "var(--black)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: isMobile ? "64px 20px" : "96px 40px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginBottom: 52,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--green-bright)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Built for every industry
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(30px,4vw,52px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              maxWidth: 500,
            }}
          >
            Your workflow,
            <br />
            your way
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.38)",
              lineHeight: 1.65,
              maxWidth: 420,
              marginTop: 4,
            }}
          >
            Select your industry and see exactly how we build a system tailored
            to how your business actually works.
          </p>
        </div>

        {/* ── Industry tabs ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 40,
          }}
        >
          {INDUSTRIES.map((ind) => {
            const TabIcon = ind.Icon;
            const active = ind.id === activeId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "7px 16px",
                  borderRadius: 100,
                  border: active
                    ? "1px solid rgba(34,197,94,0.35)"
                    : "1px solid rgba(255,255,255,0.09)",
                  background: active
                    ? "rgba(22,128,60,0.18)"
                    : "rgba(255,255,255,0.04)",
                  color: active
                    ? "var(--green-bright)"
                    : "rgba(255,255,255,0.42)",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  letterSpacing: "-0.01em",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(255,255,255,0.75)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.18)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(255,255,255,0.42)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.09)";
                  }
                }}
              >
                <TabIcon className="h-3.5 w-3.5" />
                <span>{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Animated tagline ── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeId + "-tag"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.38)",
              fontStyle: "italic",
              marginBottom: 32,
              letterSpacing: "-0.01em",
            }}
          >
            {industry.tagline}
          </motion.p>
        </AnimatePresence>

        {/* ── Workflow panel ── */}
        <div
          style={{
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.025)",
            overflow: "hidden",
          }}
        >
          {/* Panel header */}
          <div
            style={{
              padding: "14px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--green-bright)",
                boxShadow: "0 0 6px var(--green-bright)",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={activeId + "-label"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                {industry.label} Workflow · {industry.steps.length} steps
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Steps */}
          <div
            style={{
              padding: isMobile ? "24px 16px" : "32px 24px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                variants={stepsVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : `repeat(${industry.steps.length}, 1fr)`,
                  gap: isMobile ? 8 : 0,
                  position: "relative",
                }}
              >
                {industry.steps.map((step, i) => {
                  const Icon = step.icon;
                  const style = TYPE_STYLES[step.type];
                  const isLast = i === industry.steps.length - 1;

                  return (
                    <motion.div
                      key={i}
                      variants={stepVariant}
                      style={{
                        position: "relative",
                        paddingRight: isMobile ? 0 : isLast ? 0 : 16,
                        paddingLeft: isMobile ? 0 : i === 0 ? 0 : 16,
                      }}
                    >
                      {/* Connector line between steps — desktop only */}
                      {!isLast && !isMobile && (
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: 19,
                            right: -1,
                            width: 32,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            zIndex: 1,
                            pointerEvents: "none",
                          }}
                        >
                          <div
                            style={{
                              flex: 1,
                              height: 1,
                              background:
                                "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",
                            }}
                          />
                          <ArrowRight
                            style={{
                              width: 10,
                              height: 10,
                              color: "rgba(255,255,255,0.15)",
                              flexShrink: 0,
                            }}
                          />
                        </div>
                      )}

                      {/* Step card */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                          padding: "16px",
                          borderRadius: 12,
                          border: "1px solid rgba(255,255,255,0.07)",
                          background: "rgba(255,255,255,0.03)",
                          height: "100%",
                          minHeight: 140,
                        }}
                      >
                        {/* Step number + type */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: "rgba(255,255,255,0.18)",
                              letterSpacing: "0.1em",
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 4,
                              fontSize: 9,
                              fontWeight: 600,
                              color: "rgba(255,255,255,0.25)",
                              textTransform: "uppercase",
                              letterSpacing: "0.12em",
                            }}
                          >
                            <span
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: style.dot,
                                display: "inline-block",
                                flexShrink: 0,
                              }}
                            />
                            {style.label}
                          </span>
                        </div>

                        {/* Icon */}
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            border: "1px solid rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon className="h-4 w-4 text-white/55" />
                        </div>

                        {/* Title & description */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
                        >
                          <p
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#fff",
                              letterSpacing: "-0.02em",
                              lineHeight: 1.3,
                            }}
                          >
                            {step.title}
                          </p>
                          <p
                            style={{
                              fontSize: 11,
                              color: "rgba(255,255,255,0.35)",
                              lineHeight: 1.55,
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer bar */}
          <div
            style={{
              padding: "12px 24px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <StatPill
                dot="var(--green-bright)"
                label={`${industry.steps.length} Agents`}
              />
              <StatPill
                dot="rgba(255,255,255,0.2)"
                label={`${industry.steps.length - 1} Connections`}
              />
            </div>
            <span
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.18)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Fully automated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatPill({ dot, label }: { dot: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: dot,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        {label}
      </span>
    </div>
  );
}
