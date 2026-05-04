# TODOS

## Pre-launch

### Wire up CTA booking links

**What:** Replace all `href="#"` on CTA buttons with a real booking URL (Calendly, Cal.com, or similar).
**Why:** Every conversion button on `/pricing` and `/team` currently goes nowhere. Users who decide to book hit a dead end.
**Pros:** Closes the conversion loop; the entire site is built toward this action.
**Cons:** Requires a booking calendar to be configured first.
**Context:** Affects 5 CTAs — "Start here" (pricing step 1), "Book a demo" (pricing step 2), "Ask about this" (pricing step 3), "Book a demo" in SiteNav, and "Book a demo →" at the bottom of the team page.
**Depends on:** Booking calendar URL being ready.

---

### Host team photo locally

**What:** Download the founders photo from `https://assets.startupdaily.net/wp-content/uploads/sites/7/2026/04/Elkins-Batko.jpg` and commit it to `/public/images/team/founders.jpg`. Update `src/app/team/page.tsx` to use the local path.
**Why:** The photo is on a third-party media CDN with no uptime guarantee. If Startup Daily reorganises their assets, the founders' photo — the most trust-critical element on the team page — silently breaks.
**Pros:** Photo is always available; no external dependency; load time improves (served from Vercel CDN).
**Cons:** Adds a binary file to git; need to update the `next.config.ts` remotePatterns entry after moving (remove `assets.startupdaily.net`).
**Context:** `next/image` is already configured with `remotePatterns` for this host. After moving locally, remove that pattern.
**Depends on:** Nothing.

---

## Design system

### Audit and consolidate CSS token aliases

**What:** `globals.css` defines two parallel variable systems — `--color-*` (matching DESIGN.md) and short aliases (`--bg`, `--text`, `--green-bright`, etc.). Unify into one authoritative set.
**Why:** `--green-bright: #22c55e` is Tailwind green-500, not the Hourglass olive (`#548f28`). If this leaks into a component it will look wrong. The dual system also confuses future contributors.
**Pros:** One source of truth for colours; eliminates silent divergence between DESIGN.md and runtime tokens.
**Cons:** Touching tokens requires auditing every component that uses the short aliases — moderate scope.
**Context:** Short aliases are used throughout page components. `--color-*` aliases are used in some components. Both need to be mapped to the same values before removing duplicates.
**Depends on:** Nothing — can be done independently.
