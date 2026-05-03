import { FileCard } from "@/components/ui/file-card-collections";

const formats = [
  "txt",
  "doc",
  "pdf",
  "md",
  "mdx",
  "xls",
  "csv",
  "zip",
  "tar",
  "ppt",
  "pptx",
  "json",
  "css",
  "code",
  "png",
  "jpg",
  "img",
  "video",
] as const;

export default function Playground() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        gap: 48,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: 12,
          }}
        >
          File Types
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Every format, handled.
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          width: "100%",
          maxWidth: 560,
        }}
      >
        {formats.map((format) => (
          <FileCard key={format} formatFile={format} />
        ))}
      </div>
    </div>
  );
}
