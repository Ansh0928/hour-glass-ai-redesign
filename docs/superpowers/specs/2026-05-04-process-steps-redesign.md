# Process Steps Redesign — Adaline-style

**Date:** 2026-05-04  
**Status:** Approved  
**File to rewrite:** `src/components/process-steps/index.tsx`

## Overview

Replace the current static 3-column grid with an Adaline-style interactive section: step nav at the top, two-panel content area (left text + right visual), and scroll-driven sub-item advancement.

## Layout

Full-width section on `#fdfefb`, max-width 1100px centred. Section overline ("How we work") and heading ("Audit. Build. Maintain.") sit above the interactive area.

**Step nav bar** — 3 tabs:

- Active: solid `2px solid #2b390a` circle, bold name, green `1/3` fraction, `2px` underline bar
- Inactive: `1.5px dashed #c8d0bc` circle, muted grey name

**Two-panel content area:**

- Left: 400px — headline (Playfair Display, 30px), body copy, green meta tag, numbered sub-items
- Right: remaining width — step-specific visual

## Scroll Behaviour

Section wrapper: `min-height: 300vh`. Inner sticky container: `position: sticky; top: 0; height: 100vh`. A scroll listener maps page progress → active step + active sub-item.

| Scroll % | Step     | Sub-item |
| -------- | -------- | -------- |
| 0–11%    | Audit    | 1        |
| 11–22%   | Audit    | 2        |
| 22–33%   | Audit    | 3        |
| 33–44%   | Build    | 1        |
| 44–55%   | Build    | 2        |
| 55–66%   | Build    | 3        |
| 66–77%   | Maintain | 1        |
| 77–88%   | Maintain | 2        |
| 88–100%  | Maintain | 3        |

Tabs also clickable to jump directly to a step (jumps scroll position to that band's start).

## Per-Step Content

### Audit

- **Headline:** "We find where your time disappears."
- **Meta:** $2,000 – $10,000 · 7–14 days
- **Sub-items:** Time audit / Cost analysis / Prioritised roadmap
- **Right panel:** Time audit table card — tasks + hours (top 3 highlighted), footer shows "14 hrs saved"

### Build

- **Headline:** "We deploy agents into the tools you already use."
- **Meta:** $5,000 – $15,000 per agent · 30 days
- **Sub-items:** Agent design / Integration & testing / Handover
- **Right panel:** Dark orbital (`#0a1506` bg, dot grid) — Hourglass SVG logo hub, 6 agent nodes rotating (Email, Invoices, Scheduling, Job Sheets, Reports, Follow-ups). Uses `RadialOrbitalTimeline` pattern with CSS `rotate + translateX + counter-rotate` for upright labels.

### Maintain

- **Headline:** "Systems that improve every month."
- **Meta:** Monthly retainer · Always improving
- **Sub-items:** Monitoring & alerts / Monthly refinement / Expansion roadmap
- **Right panel:** Monthly metrics card — hours automated, tasks handled, error rate, value generated

## Component Architecture

- Single file: `src/components/process-steps/index.tsx`
- `"use client"` — uses scroll listener and state
- No new dependencies — uses existing design tokens from `globals.css`
- Hourglass SVG inlined (from `src/components/logo.tsx`)
- Lucide icons for orbital nodes (already installed)

## Transitions

- Step/content switch: `opacity` + `translateY` fade (0.3s ease)
- Sub-item expand: instant (no animation — clean)
- Orbital rotation: CSS `animation: spin 20s linear infinite` on wrapper, counter-rotation on node content
