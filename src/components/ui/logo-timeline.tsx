"use client";

import React from "react";
import { motion } from "framer-motion";

export interface LogoItem {
  label: string;
  icon: React.ReactNode;
  animationDelay: number;
  animationDuration: number;
  row: number;
}

export interface LogoTimelineProps {
  items: LogoItem[];
  height?: string;
  className?: string;
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: LogoItem[];
  reverse: boolean;
  duration: number;
}) {
  const doubled = [...items, ...items, ...items];
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* dashed guide line */}
      <div
        style={{
          position: "absolute",
          inset: "auto 0",
          top: "50%",
          height: 1,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 14px)",
        }}
      />
      <motion.div
        style={{ display: "flex", gap: 10, flexShrink: 0 }}
        animate={{ x: reverse ? ["0%", "33.333%"] : ["0%", "-33.333%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              fontSize: 11,
              color: "rgba(255,255,255,0.5)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.3)", lineHeight: 0 }}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function LogoTimeline({
  items,
  height = "h-[360px]",
  className,
}: LogoTimelineProps) {
  const rowsMap = new Map<number, LogoItem[]>();
  items.forEach((item) => {
    if (!rowsMap.has(item.row)) rowsMap.set(item.row, []);
    rowsMap.get(item.row)?.push(item);
  });
  const rows = Array.from(rowsMap.entries())
    .sort(([a], [b]) => a - b)
    .map(([, rowItems]) => rowItems);

  const heightPx = 360;

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.06)",
        background: "#0d0d0d",
        display: "flex",
        flexDirection: "column",
        height: heightPx,
        position: "relative",
      }}
    >
      {/* header bar */}
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
        }}
      >
        {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
          <div
            key={c}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: c,
              opacity: 0.5,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: 8,
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.05em",
          }}
        >
          integrations · {items.length} connected
        </span>
      </div>

      {/* scrolling rows */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "8px 0",
          overflow: "hidden",
        }}
      >
        {rows.map((rowItems, i) => (
          <MarqueeRow
            key={i}
            items={rowItems}
            reverse={i % 2 !== 0}
            duration={rowItems[0]?.animationDuration ?? 40}
          />
        ))}
      </div>

      {/* row separators */}
      {rows.slice(0, -1).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 1,
            top: `calc(${((i + 1) / rows.length) * 100}%)`,
            background:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 14px)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* left/right fade */}
      <div
        style={{
          position: "absolute",
          inset: "0 auto 0 0",
          width: 40,
          background: "linear-gradient(to right, #0d0d0d, transparent)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "0 0 0 auto",
          width: 40,
          background: "linear-gradient(to left, #0d0d0d, transparent)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
}

export default LogoTimeline;
