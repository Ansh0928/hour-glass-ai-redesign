"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { label: "What we do", href: "/what-we-do" },
  { label: "Our agents", href: "/agents" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkBg = scrolled || !isHome;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 64,
          display: "flex",
          alignItems: "center",
          padding: "0 40px",
          justifyContent: "space-between",
          background: darkBg ? "rgba(253,254,251,0.94)" : "transparent",
          backdropFilter: darkBg ? "blur(12px)" : "none",
          borderBottom: darkBg
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition:
            "transform 0.35s ease, background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: "var(--green)",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2C5.8 2 4 3.6 4 5.6c0 1.2.6 2.4 1.6 3.2L4 13h8l-1.6-4.2C11.4 8 12 6.8 12 5.6 12 3.6 10.2 2 8 2z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 17,
              color: isHome && !scrolled ? "white" : "var(--text)",
              letterSpacing: "-0.02em",
              transition: "color 0.3s",
            }}
          >
            Hourglass
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: active
                    ? "var(--text)"
                    : isHome && !scrolled
                      ? "rgba(255,255,255,0.7)"
                      : "var(--gmid)",
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: 8,
                  background: active ? "var(--glight)" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="#"
          style={{
            background: "var(--green)",
            color: "white",
            padding: "10px 20px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Book a demo
        </Link>
      </nav>
    </>
  );
}
