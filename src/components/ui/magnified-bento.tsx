"use client";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  UserGroupIcon,
  HierarchyIcon,
  UserIcon,
  RotateLeftIcon,
  Settings02Icon,
  CpuIcon,
  CodeIcon,
  Chart01Icon,
  FlashIcon,
  Link01Icon,
  SmartPhone01Icon,
  CloudIcon,
  DatabaseIcon,
  LockIcon,
} from "@hugeicons/core-free-icons";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const TAG_ROWS = [
  [
    { id: "daily-digest", icon: Search01Icon, label: "Daily Digest" },
    { id: "approve-invoice", icon: UserGroupIcon, label: "Approve Invoice" },
    { id: "audit-log", icon: HierarchyIcon, label: "Audit Log" },
    { id: "client-signoff", icon: UserIcon, label: "Client Sign-off" },
    { id: "re-check", icon: RotateLeftIcon, label: "Re-check" },
  ],
  [
    { id: "review-queue", icon: Settings02Icon, label: "Review Queue" },
    { id: "ai-summary", icon: CpuIcon, label: "AI Summary" },
    { id: "smart-filter", icon: CodeIcon, label: "Smart Filter" },
    { id: "performance", icon: Chart01Icon, label: "Performance" },
    { id: "quick-approve", icon: FlashIcon, label: "Quick Approve" },
  ],
  [
    { id: "action-links", icon: Link01Icon, label: "Action Links" },
    { id: "mobile-review", icon: SmartPhone01Icon, label: "Mobile Review" },
    { id: "cloud-backup", icon: CloudIcon, label: "Cloud Backup" },
    { id: "data-records", icon: DatabaseIcon, label: "Data Records" },
    { id: "secure-access", icon: LockIcon, label: "Secure Access" },
  ],
];

const MagnifiedBento = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const lensX = useMotionValue(0);
  const lensY = useMotionValue(0);

  const clipPath = useMotionTemplate`circle(32px at calc(50% + ${lensX}px) calc(50% + ${lensY}px))`;
  const inverseMask = useMotionTemplate`radial-gradient(circle 32px at calc(50% + ${lensX}px) calc(50% + ${lensY}px), transparent 100%, black 100%)`;

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* Scrolling tag preview */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: 220,
          overflow: "hidden",
          borderRadius: 16,
          background: "rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {/* Base layer (dimmed, with mask) */}
        <motion.div
          style={{
            WebkitMaskImage: inverseMask,
            maskImage: inverseMask,
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 12,
            padding: "0 0",
          }}
        >
          {TAG_ROWS.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              style={{
                display: "flex",
                gap: 10,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              animate={{
                x: rowIndex % 2 === 0 ? [0, "-33.333%"] : ["-33.333%", 0],
              }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...row, ...row, ...row].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 999,
                    fontSize: 11,
                    color: "rgba(0,0,0,0.4)",
                    flexShrink: 0,
                  }}
                >
                  <HugeiconsIcon icon={item.icon} size={12} />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Reveal layer (full color, clipped by lens) */}
        <motion.div
          style={{
            clipPath,
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 12,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {TAG_ROWS.map((row, rowIndex) => (
            <motion.div
              key={`row-reveal-${rowIndex}`}
              style={{
                display: "flex",
                gap: 10,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              animate={{
                x: rowIndex % 2 === 0 ? [0, "-33.333%"] : ["-33.333%", 0],
              }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...row, ...row, ...row].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}-reveal`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    background: "#fff",
                    border: "1px solid rgba(84,143,40,0.25)",
                    borderRadius: 999,
                    fontSize: 11,
                    color: "#1a1a1a",
                    fontWeight: 500,
                    flexShrink: 0,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    size={12}
                    style={{ color: "#548f28" }}
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Draggable magnifying lens */}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            x: lensX,
            y: lensY,
            zIndex: 40,
            cursor: "grab",
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.18))",
          }}
          drag
          dragMomentum={false}
          dragConstraints={containerRef}
          whileDrag={{ cursor: "grabbing" }}
        >
          <MagnifyingLens size={80} />
        </motion.div>

        {/* Edge fades */}
        <div
          style={{
            position: "absolute",
            inset: "0 auto 0 0",
            width: 48,
            background:
              "linear-gradient(to right, rgba(232,229,223,0.9), transparent)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "0 0 0 auto",
            width: 48,
            background:
              "linear-gradient(to left, rgba(232,229,223,0.9), transparent)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Caption */}
      <div style={{ marginTop: 20 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: 4,
          }}
        >
          We value — nothing ever gets forgotten
        </div>
        <div
          style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.55 }}
        >
          Easy to lose sight of what you&rsquo;ve built as things pile up — we
          keep the full picture, so nothing ever gets forgotten.
        </div>
      </div>
    </div>
  );
};

export default MagnifiedBento;

const MagnifyingLens = ({ size = 80 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M365.424 335.392L342.24 312.192L311.68 342.736L334.88 365.936L365.424 335.392Z"
      fill="#B0BDC6"
    />
    <path
      d="M358.08 342.736L334.88 319.552L319.04 335.392L342.24 358.584L358.08 342.736Z"
      fill="#DFE9EF"
    />
    <path
      d="M352.368 321.808L342.752 312.192L312.208 342.752L321.824 352.36L352.368 321.808Z"
      fill="#B0BDC6"
    />
    <path
      d="M332 332C260 404 142.4 404 69.6001 332C-2.3999 260 -2.3999 142.4 69.6001 69.6C141.6 -3.20003 259.2 -2.40002 332 69.6C404.8 142.4 404.8 260 332 332ZM315.2 87.2C252 24 150.4 24 88.0001 87.2C24.8001 150.4 24.8001 252 88.0001 314.4C151.2 377.6 252.8 377.6 315.2 314.4C377.6 252 377.6 150.4 315.2 87.2Z"
      fill="#DFE9EF"
    />
    <path
      d="M319.2 319.2C254.4 384 148.8 384 83.2001 319.2C18.4001 254.4 18.4001 148.8 83.2001 83.2C148 18.4 253.6 18.4 319.2 83.2C384 148.8 384 254.4 319.2 319.2ZM310.4 92C250.4 32 152 32 92.0001 92C32.0001 152 32.0001 250.4 92.0001 310.4C152 370.4 250.4 370.4 310.4 310.4C370.4 250.4 370.4 152 310.4 92Z"
      fill="#7A858C"
    />
    <path
      d="M484.104 428.784L373.8 318.472L318.36 373.912L428.672 484.216L484.104 428.784Z"
      fill="#333333"
    />
    <path
      d="M471.664 441.224L361.344 330.928L330.8 361.48L441.12 471.76L471.664 441.224Z"
      fill="#575B5E"
    />
    <path
      d="M495.2 423.2C504 432 432.8 504 423.2 495.2L417.6 489.6C408.8 480.8 480 408.8 489.6 417.6L495.2 423.2Z"
      fill="#B0BDC6"
    />
    <path
      d="M483.2 435.2C492 444 444.8 492 435.2 483.2L429.6 477.6C420.8 468.8 468 420.8 477.6 429.6L483.2 435.2Z"
      fill="#DFE9EF"
    />
  </svg>
);
