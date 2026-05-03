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
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-bg, #fdfefb)",
        padding: "48px 24px",
        ["--color-foreground" as string]: "#0a0a0a",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 24,
          width: "100%",
          maxWidth: 576,
        }}
      >
        {formats.map((format) => (
          <FileCard key={format} formatFile={format} />
        ))}
      </div>
    </div>
  );
}
