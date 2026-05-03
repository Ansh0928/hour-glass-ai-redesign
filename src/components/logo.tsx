interface LogoProps {
  color?: string;
  size?: number;
}

export function Logo({ color = "#1a1a1a", size = 26 }: LogoProps) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      {/* Hourglass — outline style, matches the reference icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top bar */}
        <rect x="4" y="3" width="16" height="2" rx="1" fill={color} />
        {/* Bottom bar */}
        <rect x="4" y="19" width="16" height="2" rx="1" fill={color} />
        {/* Top sand (filled triangle) */}
        <path d="M5 5 L19 5 L12 12 Z" fill={color} opacity="0.9" />
        {/* Bottom sand (small accumulation) */}
        <path d="M9 19 L15 19 L12 15 Z" fill={color} opacity="0.9" />
        {/* Outer glass lines */}
        <line
          x1="5"
          y1="5"
          x2="12"
          y2="12"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <line
          x1="19"
          y1="5"
          x2="12"
          y2="12"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <line
          x1="12"
          y1="12"
          x2="5"
          y2="19"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <line
          x1="12"
          y1="12"
          x2="19"
          y2="19"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontSize: 15,
          fontWeight: 600,
          color,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)",
        }}
      >
        Hourglass AI
      </span>
    </div>
  );
}
