"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSidebarOpen } from "@/components/app-sidebar";
import { Logo } from "@/components/logo";

const LINKS = [
  { label: "Product", href: "/" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Our agents", href: "/agents" },
  { label: "Results", href: "/results" },
  { label: "Team", href: "/team" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const { open: openSidebar } = useSidebarOpen();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 60,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          justifyContent: "space-between",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition:
            "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo color="#fff" size={22} />
        </Link>

        <div className="site-nav-links" style={{ gap: 2 }}>
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 6,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div
          className="site-nav-desktop-cta"
          style={{ gap: 10, alignItems: "center" }}
        >
          <button
            onClick={openSidebar}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.75)",
              padding: "6px 14px",
              borderRadius: 40,
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.14)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "rgba(255,255,255,0.75)";
            }}
          >
            AI Pod
          </button>
          <a
            href="#"
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              padding: "10px 12px",
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Sign in
          </a>
          <a
            href="#"
            style={{
              background: "#fff",
              color: "#0a0a0a",
              padding: "8px 18px",
              borderRadius: 40,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Book a demo
          </a>
        </div>

        {/* Mobile CTAs */}
        <div
          className="site-nav-mobile-cta"
          style={{ gap: 10, alignItems: "center" }}
        >
          <a
            href="#"
            style={{
              background: "#fff",
              color: "#0a0a0a",
              padding: "7px 16px",
              borderRadius: 40,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              minHeight: 44,
              display: "flex",
              alignItems: "center",
            }}
          >
            Book a demo
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#fff",
              width: 44,
              height: 44,
              borderRadius: 8,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 5,
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                background: "#fff",
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen
                  ? "translateY(6.5px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                background: "#fff",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                background: "#fff",
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen
                  ? "translateY(-6.5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 94,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 190,
            background: "rgba(8,8,8,0.97)",
            backdropFilter: "blur(20px)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 22,
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                transition: "color 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                padding: "12px 0",
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Sign in
            </a>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "var(--green)",
                color: "#fff",
                padding: "16px 24px",
                borderRadius: 40,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </>
  );
}
