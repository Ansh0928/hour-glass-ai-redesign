import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hourglass AI — Your admin, handled by AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          background:
            "radial-gradient(ellipse at center, rgba(22,128,60,0.18) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${process.env.NEXT_PUBLIC_SITE_URL ?? "https://hourglassai.com.au"}/hourglass-logo.png`}
        alt="Hourglass AI"
        width={72}
        height={72}
        style={{ marginBottom: 32, borderRadius: 16 }}
      />

      {/* wordmark */}
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "rgba(255,255,255,0.9)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: 24,
          display: "flex",
        }}
      >
        Hourglass AI
      </div>

      {/* headline */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.2,
          maxWidth: 820,
          marginBottom: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        Your admin, handled by AI.
      </div>

      {/* sub */}
      <div
        style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.45)",
          textAlign: "center",
          maxWidth: 680,
          lineHeight: 1.5,
          display: "flex",
        }}
      >
        AI agents for emails, invoices, scheduling and follow-ups — so you can
        focus on growth.
      </div>

      {/* bottom domain */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          fontSize: 16,
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.06em",
          display: "flex",
        }}
      >
        hourglassai.com.au
      </div>
    </div>,
    { ...size },
  );
}
