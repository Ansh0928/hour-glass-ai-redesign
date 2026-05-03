---
version: alpha
name: Hourglass AI
description: Design system for thehourglass.ai — AI agents that handle admin work for Australian SMBs.
colors:
  bg: "#fdfefb"
  surface: "#f4f7ee"
  text: "#2b390a"
  primary: "#548f28"
  secondary: "#4a6d47"
  light: "#eef6dc"
  light-hover: "#ddeabd"
  border: "#e9ede9"
  hero-bg: "#1a2a0e"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h2:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.015em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 6px
  md: 12px
  lg: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
components:
  nav:
    backgroundColor: "{colors.bg}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-ghost:
    backgroundColor: "#ffffff00"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 40px
  tag:
    backgroundColor: "{colors.light}"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 4px 10px
---

# Hourglass AI

## Overview

Hourglass AI is a product for Australian small-to-medium business owners who are drowning in administrative work — emails, invoices, scheduling, and follow-ups. The visual identity balances three reference aesthetics:

- **Earthy calm (Adaline.ai):** Warm off-white background, olive greens, cinematic scroll animations. Signals trust and thoughtfulness — this is not a loud tech startup.
- **Confident editorial (Pieterkoopt.nl):** Dark hero sections, oversized serif headlines, bold stacking card reveals. Commands attention without being aggressive.
- **Product credibility (Stripe.com):** Floating UI mockup cards, precise stats, trust logos. Grounds the brand in a real, working product.

The UI should feel like it was built by people who understand the messiness of running a business — quiet, capable, unhurried. Not a flashy SaaS dashboard. Not a generic "AI-powered" template. It should evoke the feeling of handing something overwhelming to someone competent.

**Target audience:** Australian SMB owners (trades, hospitality, professional services) who are non-technical and time-poor. Design for trust, not features.

## Colors

The palette is rooted in dark olive greens and warm off-whites, evoking natural materials and reliability. One bright green accent drives all interactive states.

- **Primary (#548f28):** Bright olive green — used exclusively for CTAs, active states, and interactive highlights. Signals "go", "action", "alive".
- **Secondary (#4a6d47):** Medium forest green — secondary text, supporting labels, subdued emphasis.
- **Light (#eef6dc):** Pale lime — tag backgrounds, subtle section fills, hover state backgrounds.
- **Light Hover (#ddeabd):** Slightly deeper lime — hover state only. Never used at rest.
- **Text (#2b390a):** Very dark olive — primary body text, headings in light sections. High contrast on `bg`.
- **BG (#fdfefb):** Warm off-white with a faint green tint — the base canvas. Never pure white.
- **Surface (#f4f7ee):** Slightly deeper off-white — card backgrounds, section alternation.
- **Border (#e9ede9):** Subtle warm grey-green — all borders, dividers, outlines.
- **Hero BG (#1a2a0e):** Deep forest green — hero section, CTA section, value-prop stacking cards. Dark canvas for high-contrast light text.

**Usage rules:**

- Never use pure `#000000` or `#ffffff` — always use `text` and `bg` tokens.
- Primary green on hero-bg: use white text only, never `text`.
- Primary CTA button always uses `primary` bg + white text. No exceptions.
- Tag elements always use `light` bg + `secondary` text.

## Typography

Two typefaces only. No exceptions.

- **Playfair Display (serif):** Headlines only (`h1`, `h2`). Conveys craft, editorial weight, timelessness. Used at large sizes where its character is visible.
- **Inter (sans-serif):** Everything else — body, labels, nav, buttons, captions. Maximum legibility at small sizes.

**Scale:**

| Token     | Size | Weight | Use                          |
| --------- | ---- | ------ | ---------------------------- |
| `h1`      | 64px | 700    | Hero headline                |
| `h2`      | 44px | 700    | Section headings             |
| `h3`      | 24px | 600    | Card headings, subheadings   |
| `body`    | 16px | 400    | All body copy                |
| `body-sm` | 14px | 400    | Captions, secondary copy     |
| `label`   | 12px | 500    | Tags, overlines, pill labels |

**Rules:**

- Serif headlines sit on dark or light sections. On dark (`hero-bg`), color is `#ffffff`. On light (`bg`), color is `text`.
- Never set body copy in Playfair Display.
- Letter spacing on `h1`/`h2` is always negative (-0.02em / -0.015em). Large serifs need tighter tracking.
- All-caps labels (`label` token) always carry `0.04em` letter spacing to aid readability.

## Layout

The layout system uses a 12-column grid on desktop with a max content width of 1280px. Sections alternate between constrained-width content and full-bleed backgrounds.

**Breakpoints:**

- Mobile: < 768px
- Tablet: 768px–1024px
- Desktop: > 1024px

**Section rhythm:**

- Vertical padding per section: `3xl` (96px) top and bottom on desktop, `2xl` (64px) on mobile.
- Inter-section whitespace is never less than `xl` (40px).

**Grid rules:**

- Hero: 55% left / 45% right split (headline + mockup card).
- Scroll story: 280px sticky left nav / remaining right content.
- Agent cards: 3-column on desktop, 2-column on tablet, 1-column on mobile.
- Stats bar: 4 equal columns on desktop, 2×2 on tablet, 2×2 on mobile.
- Footer: 4 columns on desktop, 2×2 on tablet, stacked on mobile.

**Nav:**

- Fixed top, 64px desktop / 48px mobile.
- Logo left, links centered, CTA button right.
- Hides on scroll-down, reappears on scroll-up.
- `backdrop-filter: blur(12px)` applied when scrolled more than 10px.
- Border-bottom (`border` token) visible only after scroll.

## Elevation & Depth

Elevation is used sparingly — only for floating elements that need to feel "above" the page surface.

| Level | Use                                | Shadow                            |
| ----- | ---------------------------------- | --------------------------------- |
| 0     | Cards in grid, inline elements     | `border: 1px solid {border}` only |
| 1     | Hover state on cards               | `0 4px 16px rgba(43,57,10,0.08)`  |
| 2     | Hero mockup card (always elevated) | `0 24px 48px rgba(43,57,10,0.18)` |

**Rules:**

- Never stack more than one shadow on the same element.
- Hero mockup card: always level 2 + 2deg tilt (`rotate: -2deg`). This tilt is non-negotiable — it signals the card is a floating object, not a flat diagram.
- Dark sections (`hero-bg`): no box shadows. Use opacity and border to separate layers instead.

## Shapes

- Default card radius: `md` (12px).
- Pills (tags, labels, buttons): `full` (9999px).
- Input fields: `sm` (6px).
- Section backgrounds: no border radius — always full-bleed.
- Hero mockup card: `lg` (20px) — slightly more rounded to reinforce the "floating object" feel.

## Components

### Nav

Fixed-position bar. Background is `bg` with blur backdrop when scrolled. `translateY(-100%)` on scroll-down, `translateY(0)` on scroll-up. Transition: `0.3s ease`.

- Logo: Hourglass AI wordmark, `text` color.
- Links: `body-sm` font, `secondary` color at rest, `primary` on hover.
- CTA: `button-primary` component, text "Book a Demo".

### Button — Primary

- Background: `primary`, text: white.
- Padding: `12px 24px`.
- Radius: `full`.
- Font: Inter 15px / 600.
- Hover: `brightness(1.08)` on background, `translateY(-1px)`, shadow level 1.
- Active: `brightness(0.96)`, `translateY(0)`.

### Button — Ghost

- No background, no border.
- Text: `primary`, underline on hover (`text-decoration: underline`, `text-underline-offset: 3px`).
- Used for secondary CTAs alongside a primary button.

### Card — Agent

- Background: white, border: `1px solid {border}`, radius: `md`.
- Padding: `xl` (40px).
- Heading: `h3` token, `text` color.
- Body: `body` token, `secondary` color.
- Footer stat: `label` token, `primary` color.
- Hover: shadow level 1, `translateY(-2px)`, transition `0.25s ease`.

### Tag / Pill Label

- Background: `light`, text: `secondary`.
- Font: `label` token (12px / 500 / 0.04em tracking).
- Padding: `4px 10px`.
- Radius: `full`.
- Dark sections: background `rgba(255,255,255,0.12)`, text: `rgba(255,255,255,0.85)`.

### Stats Bar

- 4 equal columns on `light` background.
- Stat value: Playfair Display, 48px, 700, `text` color.
- Stat label: `body-sm`, `secondary` color.
- Counter animates from 0 on scroll-into-view. Duration: 1.5s, ease: `[0.16, 1, 0.3, 1]`.

### Scroll Story

Sticky left nav (280px) + scrolling right panels. Nav items highlight as corresponding panel enters the viewport middle 20% (IntersectionObserver `rootMargin: "-40% 0px -40% 0px"`).

- Active nav item: `primary` color, `body` weight 600.
- Inactive nav item: `secondary` color, `body` weight 400.
- Inactive panels: `opacity: 0.3`, `scale: 0.97`.
- Active panels: `opacity: 1`, `scale: 1`. Transition: `0.4s ease`.

### Value Prop Cards (Stacking)

Full-width cards on `hero-bg` background. Each card pins briefly as the next slides up from below. Cards stack in z-order using `position: sticky` + increasing `top` offsets.

- Headline: `h2` token, `#ffffff`.
- Body (optional): `body`, `rgba(255,255,255,0.7)`.
- No border — edge-to-edge on dark background.

## Do's and Don'ts

**Do:**

- Use Playfair Display for hero headlines to create editorial weight.
- Use the `primary` green exclusively for interactive elements and CTAs — scarcity preserves signal value.
- Apply scroll animations (reveal, parallax) to add cinematic depth without distracting from content.
- Use real Australian business contexts in copy (trades, hospitality, professional services, Melbourne/Sydney references).
- Keep copy concise — the target user is time-poor. One idea per sentence.

**Don't:**

- Don't use pure black or white — always use `text` and `bg` tokens.
- Don't apply the hero mockup tilt to any other card component.
- Don't add more than two CTA buttons in any single section.
- Don't use more than two typefaces (Playfair Display + Inter only).
- Don't add decorative illustrations or icons beyond the agent icon set — the UI mockups carry the visual interest.
- Don't use gradient backgrounds — the palette relies on flat color with contrast, not gradients.
- Don't animate elements that don't need animation — if a section is simple, let it be still.
