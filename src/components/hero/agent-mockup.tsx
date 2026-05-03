"use client";

const TASKS = [
  {
    icon: "✉️",
    label: "Reply drafted",
    detail: "Invoice enquiry → Sarah Mitchell",
    time: "just now",
    color: "#eef6dc",
  },
  {
    icon: "📄",
    label: "Invoice sent",
    detail: "$3,200 → Mitchell Plumbing",
    time: "2m ago",
    color: "#ddeabd",
  },
  {
    icon: "📅",
    label: "Meeting booked",
    detail: "Strategy call → James Tran, Thu 2pm",
    time: "5m ago",
    color: "#eef6dc",
  },
  {
    icon: "🔔",
    label: "Follow-up queued",
    detail: "Quote #0042 → Priya Sharma",
    time: "8m ago",
    color: "#ddeabd",
  },
  {
    icon: "💬",
    label: "Quote created",
    detail: "Landscaping proposal → $8,400",
    time: "12m ago",
    color: "#eef6dc",
  },
];

export function AgentMockup() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 20,
        overflow: "hidden",
        width: "100%",
        maxWidth: 440,
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--green)",
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Hourglass — Agent Activity
          </span>
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--green)",
            background: "rgba(84,143,40,0.15)",
            padding: "2px 8px",
            borderRadius: 20,
          }}
        >
          LIVE
        </span>
      </div>

      {/* Task list */}
      <div style={{ padding: "8px 0" }}>
        {TASKS.map((task, i) => (
          <div
            key={i}
            style={{
              padding: "12px 20px",
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              borderBottom:
                i < TASKS.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
              opacity: 1 - i * 0.12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                flexShrink: 0,
              }}
            >
              {task.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: 2,
                }}
              >
                {task.label}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {task.detail}
              </div>
            </div>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.3)",
                whiteSpace: "nowrap",
                marginTop: 2,
              }}
            >
              {task.time}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "12px 20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          6 agents active · 0 errors
        </span>
        <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 600 }}>
          View all →
        </span>
      </div>
    </div>
  );
}
