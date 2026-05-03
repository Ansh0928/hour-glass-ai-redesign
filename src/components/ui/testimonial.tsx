"use client";

import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";

const TESTIMONIALS = [
  {
    quote:
      "We've decreased our administration costs by 40%, while improving customer service benchmarks by up to 80%. The biggest help has been automation of repetitive weekly reporting, which has saved me hours each week.",
    name: "Phil Amato",
    company: "Integr8",
  },
  {
    quote:
      "The consulting process was well executed and I am very happy with the improvements. I highly recommend them to any business.",
    name: "Edwina Hodgkinson",
    company: "Nutrition 4 Performance",
  },
  {
    quote:
      "Hourglass AI is the partner you want. Smart, reliable, and genuinely invested in outcomes. Highly recommended.",
    name: "Jay Little",
    company: "Schweigen",
  },
  {
    quote:
      "This was tremendously efficient. All in all, a really great first experience.",
    name: "Robert Honan",
    company: "TCACC",
  },
  {
    quote:
      "The early results from the project are incredible. Our admin hours have quartered since working together.",
    name: "Toby Chilver",
    company: "Voyagin Australia",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-current text-amber-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  const initials =
    parts.length >= 2 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : name[0];
  return (
    <div className="w-10 h-10 rounded-full bg-[var(--green)] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
      {initials}
    </div>
  );
}

const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
  hidden: {
    filter: "blur(6px)",
    y: 16,
    opacity: 0,
  },
};

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [t0, t1, t2, t3, t4] = TESTIMONIALS;

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--black)",
        padding: "120px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-16">
          <TimelineContent
            as="p"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={sectionRef}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--green-bright)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Client results
          </TimelineContent>
          <TimelineContent
            as="h2"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={sectionRef}
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Trusted by businesses across Australia
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={sectionRef}
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            From solo tradies to 20-person professional services firms. If you
            have admin, Hourglass handles it.
          </TimelineContent>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              style={{
                flex: "7",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "rgba(84,143,40,0.15)",
                border: "1px solid rgba(84,143,40,0.3)",
                borderRadius: 16,
                padding: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)",
                  backgroundSize: "50px 56px",
                  maskImage:
                    "radial-gradient(ellipse 80% 50% at 50% 0%,black 70%,transparent 110%)",
                }}
              />
              <Stars />
              <p
                style={{
                  fontSize: 15,
                  color: "#fff",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                &ldquo;{t0.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Initials name={t0.name} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>
                    {t0.name}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                    {t0.company}
                  </div>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              style={{
                flex: "3",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <Stars />
              <p
                style={{
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                &ldquo;{t1.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Initials name={t1.name} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#fff" }}>
                    {t1.name}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}
                  >
                    {t1.company}
                  </div>
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Column 2 — middle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[t2, t3, t4].map((t, idx) => (
              <TimelineContent
                key={t.name}
                animationNum={idx + 2}
                customVariants={revealVariants}
                timelineRef={sectionRef}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <Stars />
                <p
                  style={{
                    fontSize: 14,
                    color: "#fff",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Initials name={t.name} />
                  <div>
                    <div
                      style={{ fontWeight: 700, fontSize: 13, color: "#fff" }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}
                    >
                      {t.company}
                    </div>
                  </div>
                </div>
              </TimelineContent>
            ))}
          </div>

          {/* Column 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              style={{
                flex: "3",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <Stars />
              <p
                style={{
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                &ldquo;{t3.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Initials name={t3.name} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#fff" }}>
                    {t3.name}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}
                  >
                    {t3.company}
                  </div>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              style={{
                flex: "7",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "rgba(84,143,40,0.15)",
                border: "1px solid rgba(84,143,40,0.3)",
                borderRadius: 16,
                padding: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)",
                  backgroundSize: "50px 56px",
                  maskImage:
                    "radial-gradient(ellipse 80% 50% at 50% 0%,black 70%,transparent 110%)",
                }}
              />
              <Stars />
              <p
                style={{
                  fontSize: 15,
                  color: "#fff",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                &ldquo;{t4.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Initials name={t4.name} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>
                    {t4.name}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                    {t4.company}
                  </div>
                </div>
              </div>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
