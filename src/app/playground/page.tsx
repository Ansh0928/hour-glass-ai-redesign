import { FileCard } from "@/components/ui/file-card-collections";
import { AnnouncementBar, SiteNav } from "@/components/site-nav";

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

const staggerCSS = formats
  .map((_, i) => `.pg-cards>*:nth-child(${i + 1}){animation-delay:${i * 35}ms}`)
  .join("");

export default function Playground() {
  return (
    <>
      <style>{`
        @keyframes pg-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pg-root {
          min-height: 100vh;
          background: #0a0a0a;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0);
          background-size: 28px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 96px 32px;
          gap: 56px;
        }
        .pg-header {
          text-align: center;
          animation: pg-in 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        .pg-label {
          font-family: var(--font-dm-mono, monospace);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin: 0 0 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .pg-label::before, .pg-label::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: rgba(255,255,255,0.15);
        }
        .pg-heading {
          font-family: var(--font-instrument-serif, Georgia, serif);
          font-style: italic;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.05;
          margin: 0 0 12px;
        }
        .pg-sub {
          font-family: var(--font-dm-mono, monospace);
          font-size: 12px;
          color: rgba(255,255,255,0.22);
          letter-spacing: 0.04em;
          margin: 0;
        }
        .pg-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
          width: 100%;
          max-width: 580px;
        }
        .pg-cards > * {
          animation: pg-in 0.5s cubic-bezier(0.16,1,0.3,1) both;
          opacity: 0;
        }
        ${staggerCSS}
        .pg-cards > *:hover {
          transform: translateY(-3px) scale(1.04);
          transition: transform 0.2s cubic-bezier(0.16,1,0.3,1);
        }
        .pg-footer {
          font-family: var(--font-dm-mono, monospace);
          font-size: 10px;
          color: rgba(255,255,255,0.15);
          letter-spacing: 0.08em;
          animation: pg-in 1.2s cubic-bezier(0.16,1,0.3,1) both;
        }
      `}</style>

      <div className="pg-root">
        <header className="pg-header">
          <p className="pg-label">hourglass ai</p>
          <h1 className="pg-heading">
            Every format,
            <br />
            handled.
          </h1>
          <p className="pg-sub">18 file types · zero configuration</p>
        </header>

        <div className="pg-cards">
          {formats.map((format) => (
            <FileCard key={format} formatFile={format} />
          ))}
        </div>

        <p className="pg-footer">localhost:3000/playground</p>
      </div>
    </>
  );
}
