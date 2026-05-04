# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-05-04

### Added

- `/pricing` page — 3-step fixed-fee pricing (Time Audit, Agent Build, Maintain & Improve) with FAQ section and page metadata for SEO
- `/team` page — founders page with photo, stats strip, founder cards, credential chips, and "Why we built this" section
- `SiteNav` + `AnnouncementBar` components replacing the old `Nav` — dark-first design with scroll-hide, mobile hamburger menu (CSS-only, no hydration flash), and AI Pod sidebar button
- Tablet breakpoint (`768–1024px`) across all page grids — pricing, founder cards, results case studies, footer
- `src/lib/stats.ts` — single source of truth for site stats (hours saved, revenue, workflows); results and team pages now import from here
- `next.config.ts` — `remotePatterns` for team page photo host

### Changed

- `SystemsOrchestration` component — removed JS-based `useIsMobile()` hook, replaced with CSS media query classes (`so-diagram-grid`, `so-agents-grid`, `so-trust-grid`); eliminates CLS on mobile page loads
- `SiteNav` — same CSS-only mobile fix applied; desktop/mobile nav sections controlled by `.site-nav-links`, `.site-nav-desktop-cta`, `.site-nav-mobile-cta` classes
- Team page background aligned to `var(--hero-bg)` (warm forest green) matching the rest of the site's dark sections
- Pricing card CTA buttons use `borderRadius: 9999` (pill) per design system
- Pricing Step 3 copy changed from "Monthly retainer" to "Monthly · ongoing" (removes contradiction with "No retainers" headline)
- Team page CTA headline changed from "Want to meet us properly?" to "See if we're a fit."
- Footer copyright updated to 2026 with Melbourne & Sydney and ACN 696 937 372 (both team page footer and global `Footer` component)
- Team page photo upgraded from `<img>` to `next/image` with `priority` flag
- `team/page.tsx` — removed `"use client"` directive (no hooks in page body); now exports `metadata` for correct SEO title/description
- Results page stats updated to match shared `HOURGLASS_STATS` constants

### Removed

- `src/components/nav/index.tsx` — dead code (nothing imported it after SiteNav rollout)
- `src/app/playground/` — removed demo playground pages

### Fixed

- Double `AppSidebar` wrapper on team page (layout.tsx already provides it)
- `fontWeight: 450` in SiteNav replaced with valid Inter weight `400`
- Stale `.next/types/app/playground/` after playground deletion
- Duplicate logo in team page hero removed

## [0.1.0] - 2026-04-01

### Added

- Initial Hourglass AI website — homepage, results, agents, what-we-do pages
- Dark hero with Playfair Display typography
- SystemsOrchestration, IndustryWorkflow, Testimonial, AgentPlan components
- AppSidebar with AI Pod promo card
- Responsive layout foundation
