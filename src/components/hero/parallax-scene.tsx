"use client";

import { useEffect, useRef } from "react";

export function ParallaxScene() {
  const layer1Ref = useRef<HTMLDivElement>(null); // 0.08x — deep bg grid
  const layer2Ref = useRef<HTMLDivElement>(null); // 0.2x  — mid glow orbs
  const layer3Ref = useRef<HTMLDivElement>(null); // 0.4x  — city nodes
  const layer4Ref = useRef<HTMLDivElement>(null); // 0.6x  — foreground lines

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (layer1Ref.current)
        layer1Ref.current.style.transform = `translateY(${y * 0.08}px)`;
      if (layer2Ref.current)
        layer2Ref.current.style.transform = `translateY(${y * 0.22}px)`;
      if (layer3Ref.current)
        layer3Ref.current.style.transform = `translateY(${y * 0.42}px)`;
      if (layer4Ref.current)
        layer4Ref.current.style.transform = `translateY(${y * 0.65}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Layer 1 — deep background: aerial grid terrain */}
      <div
        ref={layer1Ref}
        style={{
          position: "absolute",
          inset: "-20% 0",
          willChange: "transform",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 1100"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.18 }}
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#548f28"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="1440" height="1100" fill="url(#grid)" />
          {/* Perspective grid lines converging to horizon */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={720 + (i - 6) * 200}
              y1={0}
              x2={720 + (i - 6) * 40}
              y2={1100}
              stroke="#548f28"
              strokeWidth="0.4"
              opacity={0.4}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={0}
              y1={i * 150}
              x2={1440}
              y2={i * 140 + (i - 4) * 8}
              stroke="#548f28"
              strokeWidth="0.4"
              opacity={0.3}
            />
          ))}
        </svg>
      </div>

      {/* Layer 2 — mid: large glow orbs (distant light sources) */}
      <div
        ref={layer2Ref}
        style={{
          position: "absolute",
          inset: "-30% 0",
          willChange: "transform",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(84,143,40,0.22) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "2%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,109,71,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "30%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(84,143,40,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Layer 3 — city: node network (AI connections overhead view) */}
      <div
        ref={layer3Ref}
        style={{
          position: "absolute",
          inset: "-20% 0",
          willChange: "transform",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 1200"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.28 }}
        >
          {/* Connection lines between nodes */}
          {[
            [1100, 180, 960, 320],
            [960, 320, 820, 200],
            [820, 200, 650, 350],
            [650, 350, 500, 250],
            [500, 250, 340, 400],
            [340, 400, 200, 300],
            [960, 320, 880, 500],
            [880, 500, 720, 580],
            [720, 580, 560, 480],
            [560, 480, 400, 560],
            [1100, 180, 1200, 400],
            [1200, 400, 1100, 580],
            [1100, 580, 960, 640],
            [960, 640, 880, 500],
            [720, 580, 680, 750],
            [680, 750, 520, 820],
            [520, 820, 380, 720],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#548f28"
              strokeWidth="0.8"
              opacity={0.5}
            />
          ))}
          {/* Node dots */}
          {[
            [1100, 180, 5],
            [960, 320, 7],
            [820, 200, 4],
            [650, 350, 6],
            [500, 250, 4],
            [340, 400, 5],
            [200, 300, 3],
            [880, 500, 8],
            [720, 580, 6],
            [560, 480, 4],
            [400, 560, 5],
            [1200, 400, 4],
            [1100, 580, 5],
            [960, 640, 7],
            [680, 750, 6],
            [520, 820, 4],
            [380, 720, 5],
          ].map(([cx, cy, r], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="#548f28"
              opacity={0.7}
            />
          ))}
          {/* Pulse rings on key nodes */}
          {[
            [960, 320],
            [880, 500],
            [720, 580],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={20}
              fill="none"
              stroke="#548f28"
              strokeWidth="0.8"
              opacity={0.3}
            />
          ))}
        </svg>
      </div>

      {/* Layer 4 — foreground: floating data particles */}
      <div
        ref={layer4Ref}
        style={{
          position: "absolute",
          inset: "-15% 0",
          willChange: "transform",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 1100"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.2 }}
        >
          {[
            [120, 200],
            [280, 450],
            [420, 160],
            [600, 520],
            [750, 300],
            [900, 480],
            [1050, 200],
            [1180, 420],
            [1320, 280],
            [200, 680],
            [480, 780],
            [700, 700],
            [950, 760],
            [1100, 680],
            [1300, 750],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={2} fill="#9dc46a" />
              <circle
                cx={cx}
                cy={cy}
                r={6}
                fill="none"
                stroke="#9dc46a"
                strokeWidth="0.5"
                opacity={0.4}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Vignette overlay — keeps edges dark and cinematic */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(26,42,14,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Top fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to bottom, var(--hero-bg), transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, var(--hero-bg), transparent)",
        }}
      />
    </div>
  );
}
