"use client";

const LOGOS = [
  "Gmail",
  "Outlook",
  "Xero",
  "MYOB",
  "Slack",
  "HubSpot",
  "Salesforce",
  "Calendly",
  "Google Drive",
  "Dropbox",
  "Notion",
  "Monday.com",
  "QuickBooks",
  "ServiceM8",
  "Stripe",
];

export function TrustLogos() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section
      style={{
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "28px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "0 40px 10px",
          display: "flex",
          alignItems: "center",
          gap: 8,
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
        <span
          style={{
            fontSize: 12,
            color: "var(--text-dimmer)",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Works with the tools Australian businesses already use
        </span>
      </div>

      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background:
              "linear-gradient(to right, var(--surface-2), transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background:
              "linear-gradient(to left, var(--surface-2), transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            width: "max-content",
          }}
        >
          {doubled.map((logo, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-dim)",
                  letterSpacing: "0.01em",
                  padding: "0 28px",
                  whiteSpace: "nowrap",
                  userSelect: "none",
                }}
              >
                {logo}
              </span>
              <span
                style={{
                  width: 1,
                  height: 14,
                  background: "var(--border)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
