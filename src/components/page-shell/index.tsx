import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

type Props = {
  tag: string;
  headline: string;
  sub: string;
  children: React.ReactNode;
};

export function PageShell({ tag, headline, sub, children }: Props) {
  return (
    <>
      <Nav />
      {/* Inner page hero — cream bg, no parallax */}
      <div
        style={{
          background: "var(--hero-bg)",
          paddingTop: 140,
          paddingBottom: 80,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 20,
            }}
          >
            {tag}
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "white",
              marginBottom: 20,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.65,
              maxWidth: 560,
            }}
          >
            {sub}
          </p>
        </div>
      </div>

      <main style={{ background: "var(--bg)" }}>{children}</main>

      <Footer />
    </>
  );
}
