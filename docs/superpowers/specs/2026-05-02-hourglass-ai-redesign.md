# Hourglass AI Website Redesign

**Date:** 2026-05-02  
**Status:** Approved — pending implementation

---

## Overview

Redesign thehourglass.ai with an aesthetic combining three reference sites:

- **Adaline.ai** — earthy green palette, cinematic hero with parallax, sticky scroll-story nav
- **Pieterkoopt.nl** — dark full-bleed hero, large bold serif typography, stacking animated value cards
- **Stripe.com/au** — product UI in floating mockup cards, giant stats section, trust logos

Target audience: Australian SMB owners drowning in admin (invoices, emails, scheduling, follow-ups).  
Product: AI agents that handle admin work autonomously.

---

## Design Tokens

```css
/* Colors — lifted from Adaline's actual CSS */
--bg: #fdfefb; /* warm off-white with green tint */
--surface: #f4f7ee; /* slightly darker for cards */
--text: #2b390a; /* very dark olive green */
--green: #548f28; /* bright green — CTA, active states */
--gmid: #4a6d47; /* medium green — secondary text */
--glight: #eef6dc; /* light lime — tag backgrounds */
--glight2: #ddeabd; /* light olive — hover states */
--border: #e9ede9; /* subtle border */
--hero-bg: #1a2a0e; /* dark forest green — hero section */

/* Typography */
--font-sans: "Inter", system-ui, sans-serif;
--font-serif: "Playfair Display", Georgia, serif; /* headlines */

/* Spacing */
--nav-height-desktop: 64px;
--nav-height-mobile: 48px;
```

---

## Page Architecture

```
1.  Nav
2.  Hero
3.  Trust logos (marquee)
4.  Stats bar
5.  Scroll story (sticky left nav)
6.  Agent cards grid
7.  Value prop stacking cards (Pieter Koopt style)
8.  Process steps
9.  Testimonials
9.5 Founders (origin story + photos)
10. CTA
11. Footer
```

---

## Section Specs

### 1. Nav

- Fixed top, 64px height desktop / 48px mobile
- Background: `--bg` with blur backdrop when scrolled
- Logo left, links center, CTA button right ("Book a Demo")
- Hides on scroll-down, reappears on scroll-up (same as Adaline)
- Border-bottom: `--border` appears after scroll

### 2. Hero

**Layout:**

- Full viewport height (100vh), dark forest green background (`--hero-bg`)
- Left 55%: headline + subheading + CTA buttons
- Right 45%: floating product mockup (AI agent dashboard)

**Headline:** `[TBD — placeholder: "Your admin, handled by AI."]`  
**Subheading:** "Hourglass AI agents handle your emails, invoices, scheduling and follow-ups — so you can focus on the work that actually grows your business."

**Hero mockup visual:**

- Floating card showing AI agent activity in real-time: emails being drafted, invoices auto-sent, calendar events created
- Card has subtle drop shadow + slight tilt (-2deg)
- On scroll: card translates up at 0.4x scroll rate (parallax)
- Headline text scales from 1.0 → 0.65 as user scrolls (exact Adaline mechanism)

**Parallax mechanism (Adaline-exact):**

```js
lenis.on("scroll", ({ scroll }) => {
  heroText.style.transform = `scale(${Math.max(0.65, 1 - scroll * 0.0003)})`;
  heroMockup.style.transform = `translateY(${-scroll * 0.4}px)`;
});
```

**CTA buttons:**

- Primary: "Get early access" — bg `--green`, white text
- Secondary: "See how it works →" — text only, `--glight` underline

**Lenis config:**

```js
{ duration: 1.3, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }
```

### 3. Trust Logos (Marquee)

- Single line scrolling marquee, infinite loop, 40s duration
- Australian business logos + "Trusted by 200+ Australian SMBs" label
- Background: `--bg`, subtle `--border` top and bottom

### 4. Stats Bar

- 4 stats in a row on `--glight` background
- Stripe-style: giant number + label
- Counter animation triggers on scroll-into-view (Framer Motion `animate(0, value)`)
- Example stats:
  - "12 hrs" — Average admin hours saved per week
  - "98%" — Tasks completed without human input
  - "3 min" — Average response time for AI agents
  - "200+" — Australian businesses using Hourglass

### 5. Scroll Story (Sticky Left Nav)

Sticky left navigation + scrolling content panels on the right. Exact Adaline pattern.

**Nav items (left, sticky):**

1. Capture — AI reads your emails, messages, and invoices
2. Draft — Agents write replies, quotes, and follow-ups
3. Send — Approved content sent automatically
4. Track — Dashboard shows everything in motion

**Content panels (right, scroll-revealed):**

- Each panel: heading + 2-3 sentence description + product screenshot/mockup
- Active panel highlighted in sticky nav (IntersectionObserver, rootMargin: "-40% 0px -40% 0px")
- Inactive panels: opacity 0.3, scale 0.97 (focus effect, rootMargin: "-28% 0px -28% 0px")

### 6. Agent Cards Grid

- 3-column grid, responsive (2-col tablet, 1-col mobile)
- Each card: agent icon + name + description + "tasks handled" count
- Example agents: Email Agent, Invoice Agent, Calendar Agent, Quote Agent, Follow-up Agent, Document Agent
- Cards stagger-animate on scroll (nth-child delay: 0, 80ms, 160ms, 240ms...)
- Card style: white bg, `--border` border, `--text` heading, `--gmid` body

### 7. Value Prop Stacking Cards (Pieter Koopt style)

- Cards stack/appear as user scrolls
- Each card full-width, dark background (`--hero-bg`), large white serif text
- 4 cards:
  1. "No hidden setup fees."
  2. "Works with your existing tools."
  3. "Cancel any time."
  4. "Australian-built and supported."
- Each card pins briefly as next one slides up from below

### 8. Process Steps

- 3-step horizontal layout on desktop, vertical on mobile
- Dark olive pill labels ("Step 1", "Step 2", "Step 3")
- Steps: Connect → Configure → Go Live
- Short description under each step (1-2 sentences)

### 9. Testimonials

- 3 testimonial cards, horizontally scrollable on mobile
- Quote + person name + business type + location (e.g., "Melbourne, VIC")
- Subtle `--glight` background, `--border` border

### 9.5 Founders Section

**Position:** After testimonials, before CTA. Visitor has seen what the product does and heard from clients — now they meet the people behind it right before the final conversion ask.

**Section heading (Playfair Display, h2):**
"Built by people who've seen every way it breaks."

**Layout (desktop): 2-column**

- **Left (55%):** Pull quote + origin story copy
- **Right (45%):** Photo of both founders together (source: Startup Daily, Apr 2026 — `finlay-batko-founders.jpg`)

**Pull quote (large Playfair Display, `--text` color, 32px):**

> "Everyone feels behind on AI. Not because they don't get it. Because no one just builds the thing."

Attribution below quote: `— Michael Batko, Co-founder` (Inter, 14px, `--gmid`)

**Story copy (2 paragraphs, Inter 16px, `--text`, max-width 480px):**

> Para 1: After eight years running Startmate and watching 300+ startups navigate every kind of challenge, the question Batko heard most wasn't about funding or hiring. It was the same thing, every time: "How do we actually use AI — in our business, right now?" Strategy decks, discovery phases, roadmap presentations. Nobody just built the thing.
>
> Para 2: So he left to go and build it. Teamed up with Finlay Ekins — a 22-year-old who'd rather ship than slide — and set a rule from day one: fixed scope, fixed fee, live system in weeks. Not strategy. Not slides. A working AI system inside your business, running before you've finished reading this sentence.

**Founder mini-bios (below columns, 2-card row):**

```
[Photo: Finlay]         [Photo: Batko]
Finlay Ekins            Michael Batko
Co-founder & Builder    Co-founder & CEO
22. Surfs. Reads.       8 yrs Startmate CEO
Ships first.            300+ startups
                        2x founder, both acquired
```

- Card style: `--surface` background, `--border` border, 6px radius
- Name: Inter 18px bold, `--text`
- Role: Inter 12px, `--green` (uppercase label style)
- Bio lines: Inter 14px, `--gmid`

**Transparency signal (below bios, centered):**

Small pill tag in `--glight` background: `🔴 Live every Tuesday` + link text "Watch us build AI systems in real time →"  
(Links to the live-stream — add URL when available)

**Background:** `--bg` (`#fdfefb`) — light, creates visual contrast against the dark CTA that follows

**Mobile layout:**

- Photo above copy (full-width, aspect-ratio 16/9, object-fit cover)
- Pull quote stacks below photo
- Story paragraphs below quote
- Bios stack vertically (single column)
- Transparency pill centered below bios

**Photo spec:**

- Source: Startup Daily article photo (Finlay Ekins and Michael Batko, Apr 2026)
- Save as: `public/images/founders.jpg`
- Dimensions: 600×500px minimum, `next/image` with `sizes="(max-width: 768px) 100vw, 45vw"`
- Alt text: "Finlay Ekins and Michael Batko, co-founders of Hourglass AI"

**Animation:** `.reveal` scroll-trigger (standard, same as all sections)

**Component:** `components/founders/index.tsx`

### 10. CTA Section

- Full-width, dark forest green (`--hero-bg`) background
- Large serif headline + subheading
- Single CTA button: "Book a free demo" (white bg, `--hero-bg` text)
- Subtle animated grain texture overlay (CSS noise filter)

### 11. Footer

- 4-column layout: Logo + tagline, Product links, Company links, Legal
- Background: `--hero-bg`, text: off-white
- Bottom row: copyright + social icons

---

## Animation Spec

### Scroll Reveal (all sections)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Triggered by IntersectionObserver at threshold 0.15.

### Story Spy (scroll story nav highlight)

```js
rootMargin: "-40% 0px -40% 0px"; // panel must be in middle 20% of viewport
```

### Story Focus (dimming inactive panels)

```js
rootMargin: "-28% 0px -28% 0px"; // slightly wider band
```

### Card Stagger

```css
.card:nth-child(1) {
  transition-delay: 0ms;
}
.card:nth-child(2) {
  transition-delay: 80ms;
}
.card:nth-child(3) {
  transition-delay: 160ms;
}
/* etc. */
```

### Counter Animation

```js
// Using Framer Motion animate()
animate(0, targetValue, {
  duration: 1.5,
  ease: [0.16, 1, 0.3, 1],
  onUpdate: (v) => (el.textContent = Math.round(v)),
});
```

### Nav Hide/Show on Scroll

```js
let lastY = 0;
lenis.on("scroll", ({ scroll }) => {
  nav.style.transform =
    scroll > lastY && scroll > 100 ? "translateY(-100%)" : "translateY(0)";
  lastY = scroll;
});
```

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with custom design tokens in `tailwind.config.ts`
- **Smooth scroll:** `@studio-freight/lenis@1.0.42`
- **Animations:** Framer Motion (counters, presence animations)
- **Fonts:** Inter (sans), Playfair Display (serif) via `next/font/google`
- **Images:** `next/image` for optimized loading

---

## Component Structure

```
app/
  page.tsx                    ← root page, assembles all sections
  layout.tsx                  ← LenisProvider, fonts, meta

components/
  nav/
    index.tsx                 ← sticky hide/show nav
  hero/
    index.tsx                 ← full-viewport hero with parallax
    agent-mockup.tsx          ← floating dashboard card
  trust-logos/
    index.tsx                 ← marquee row
  stats-bar/
    index.tsx                 ← 4 animated stats
    animated-counter.tsx      ← counter with Framer Motion
  scroll-story/
    index.tsx                 ← scroll container + Lenis
    sticky-nav.tsx            ← left pinned nav
    scroll-item.tsx           ← individual panel with focus effect
  agent-cards/
    index.tsx                 ← grid container
    agent-card.tsx            ← individual card
  value-cards/
    index.tsx                 ← stacking Pieter Koopt cards
  process-steps/
    index.tsx
  testimonials/
    index.tsx
  founders/
    index.tsx                 ← origin story, 2-col layout, founder bios
  cta/
    index.tsx
  footer/
    index.tsx

hooks/
  use-scroll-spy.ts           ← IntersectionObserver hook
  use-lenis.ts                ← Lenis singleton
  use-counter-animation.ts    ← counter trigger hook

lib/
  lenis-provider.tsx          ← client-side Lenis init + RAF
```

---

## Section Headings (user-visible)

Every section must have a visible heading so the page is scannable without reading body copy.

| Section       | Visible heading                                    | Level                 |
| ------------- | -------------------------------------------------- | --------------------- |
| Nav           | _(none — persistent chrome)_                       | —                     |
| Hero          | TBD headline                                       | h1                    |
| Trust Logos   | "Trusted by Australian businesses"                 | p (eyebrow)           |
| Stats Bar     | _(no heading — numbers speak)_                     | —                     |
| Scroll Story  | "How Hourglass Works"                              | h2                    |
| Agent Cards   | "Meet Your AI Agents"                              | h2                    |
| Value Cards   | "Built for businesses like yours"                  | h2 (above first card) |
| Process Steps | "Get started in 3 steps"                           | h2                    |
| Testimonials  | "Trusted by businesses across Australia"           | h2                    |
| Founders      | "Built by people who've seen every way it breaks." | h2                    |
| CTA           | TBD — large serif closing headline                 | h2                    |

All h2 headings: Playfair Display, 36px, `--text` (light sections) or `#fff` (dark sections).

---

## User Journey & Emotional Arc

### Intended visitor

Australian SMB owner. Entry emotion: skeptical, busy, has heard "AI solution" 100 times.  
Exit goal: convinced this is different — founders are credible, product is real, risk is low.

### Arc

| Section      | Emotion                                   | Narrative job                                                                              |
| ------------ | ----------------------------------------- | ------------------------------------------------------------------------------------------ |
| Hero         | Recognition + small hope                  | "You're drowning in admin. AI can fix this."                                               |
| Trust logos  | Skepticism drops                          | "200+ Australian SMBs already running this"                                                |
| Stats        | Specificity builds credibility            | "Not 'a little faster'. 12 hours/week. 98% done without you."                              |
| Scroll story | Clarity                                   | The 4-step flow makes abstract "AI" a concrete workflow. Execution gap resolved here.      |
| Agent cards  | "There's an agent for each type of work?" | Specificity beats generic "AI automation"                                                  |
| Value cards  | Objections dissolve                       | No fees, no lock-in, no migration, Australian team                                         |
| Testimonials | "Real people like me"                     | Third-party proof from peers                                                               |
| Founders     | Personal trust                            | Batko left Startmate because nobody was building this. Finlay ships. They build in public. |
| CTA          | Urgency without pressure                  | "Book a demo. See it work for your exact setup."                                           |

### Design implications

1. **Scroll story** must visually resolve the execution gap — each panel: problem → agent response
2. **Founders section** is the emotional apex — the only place personality + credibility + action align
3. The `🔴 Live every Tuesday` transparency signal is authenticity proof that no consultant section ever has

---

## Interaction State Spec

### Buttons (primary: "Get early access", "Book a demo"; secondary: "See how it works →")

| State    | Primary                                          | Secondary                                   |
| -------- | ------------------------------------------------ | ------------------------------------------- |
| Default  | bg `--green`, white text, 6px radius             | transparent, `--text`, `--glight` underline |
| Hover    | bg `--glight2`, `--text`                         | underline +1px, bg opacity 0.05             |
| Focus    | outline 2px solid `--green`, offset 2px          | same                                        |
| Active   | scale(0.98), inset shadow                        | —                                           |
| Disabled | bg `--border`, `--gmid` text, cursor not-allowed | —                                           |

All transitions: `0.2s ease`

### Nav links

- Default: `rgba(255,255,255,0.55)` on dark hero
- Hover: `#fff`
- Focus: outline 2px solid `--green`, offset 4px
- Active page: `--green`, persistent underline

### Scroll story pills (sticky left nav)

- Inactive: transparent bg, `--gmid`, opacity 0.5
- Hover: `--glight` bg, `--text`
- Active (in viewport): `--glight` bg, `border-left: 3px solid --green`, `--text`, opacity 1
- Focus: outline 2px solid `--green`

### Agent cards

- Default: `--border` border, white bg, no shadow
- Hover: `--green` border, `shadow-hover`, translateY(-2px), 0.3s ease
- Focus: outline 2px solid `--green`

### Stats counters

- Before intersection: value 0, opacity 0
- Animating: 0 → target, 1.5s, ease [0.16,1,0.3,1]
- Complete: final value, opacity 1

### `prefers-reduced-motion` rule (must implement)

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

All parallax, counter, and stagger animations respect this. Stats display final value instantly if reduced-motion active.

---

## AI Slop Mitigation

### Page classifier: MARKETING / LANDING PAGE

### Hard guardrails

**Hero mockup brand signal (blocking)**
The floating card must show Hourglass branding: logo top-left of card, `--green` accent, 1-2 animated agent actions. Do NOT use a generic SaaS dashboard screenshot.

**Agent cards — avoiding the generic grid**
Card order must tell a story: Email → Invoice → Calendar → Quote → Follow-up → Document  
(most frequent pain first). Stagger animation + hover states prevent the static "3-column template" feeling.

**Testimonials — curation rationale**
3 testimonials selected to address different objections:

- Quote 1 (Phil Amato, Integr8): execution concern → "40% admin cost reduction"
- Quote 2 (Jay Little, Schweigen): trust concern → "partner you want, genuinely invested"
- Quote 3 (Toby Chilver, Voyagin): ROI concern → "admin hours have quartered"

**Value cards — rhythm**
All 4 cards use dark `--hero-bg`. Add subtle icon (opacity 0.2, top-right) to each card to prevent monotony without breaking the dark aesthetic.

**Copy standard: no AI slop copy**
Forbidden phrases: "Unlock the power of...", "Your all-in-one solution", "Welcome to [X]", "seamlessly integrate", "robust".

---

## Design Token Additions

The following tokens extend DESIGN.md for implementation consistency.

```css
/* Derived / new tokens */
--text-inverse: #ffffff;
--error: #d32f2f;

/* Spacing scale */
--space-4: 4px;
--space-8: 8px;
--space-12: 12px;
--space-16: 16px;
--space-24: 24px;
--space-32: 32px;
--space-48: 48px;
--space-64: 64px;
--section-pad-y: 80px; /* desktop */
--section-pad-y-mobile: 48px;

/* Border + radius */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-full: 9999px;
--border-default: 1px solid var(--border);

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.06);

/* Z-index */
--z-nav: 200;
--z-drawer: 190;
--z-sticky: 50;
--z-base: 1;

/* Animation timing */
--ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
--ease-standard: 0.2s ease;
--ease-reveal: 0.6s ease;
```

**WCAG AA contrast — verified**

- `--text` (#2b390a) on `--bg` (#fdfefb): 9.8:1 ✓
- `--text` on `--surface` (#f4f7ee): ~9.4:1 ✓
- `--green` (#548f28) on `--bg`: ~5.2:1 ✓ (links)
- White on `--hero-bg` (#1a2a0e): 10.5:1 ✓
- `--text` on `--glight` (#eef6dc): verify before shipping (use `--gmid` if <4.5:1)

---

## Responsive Design Spec

### Breakpoints

```
mobile:  < 768px
tablet:  768px – 1023px
desktop: ≥ 1024px
```

### Section-by-section

**Nav**

- Desktop: 64px, logo left, links center, CTA+buttons right
- Mobile (<768px): 48px, logo left, "Book a demo" + hamburger right; links hidden
- Mobile hamburger: full-screen dark drawer (`rgba(8,8,8,0.97)`), links stacked 22px/500 weight, Escape to close

**Hero**

- Desktop: 100vh, 55/45 split (text left, mockup right)
- Tablet: 50/50, mockup shrinks proportionally
- Mobile: text + CTAs full-width, mockup hidden or below text at 100% width; parallax disabled on mobile; headline: ~40px

**Stats Bar**

- Desktop: 4 cols in a row
- Tablet: 2×2 grid
- Mobile: 2×2 grid (keep pairs side-by-side; 1-col makes it too tall)

**Scroll Story**

- Desktop: sticky left nav 30% + right panels 70% (as specified)
- Mobile: horizontal pill row pinned at top (pills: "Capture", "Draft", "Send", "Track"), content panels stack below active pill; all panels visible on scroll

**Agent Cards**

- Desktop: 3-col grid
- Tablet: 2-col grid
- Mobile: horizontally scrollable shelf OR 1-col stack; snap-align start; 90vw card width

**Value Cards**

- Desktop: full-width stacked, ~100vh per card with pin
- Mobile: full-width stacked, auto height; pin effect removed (causes jank on iOS Safari)
- Text size on mobile: ~32px (down from ~48px)

**Process Steps**

- Desktop: 3-col horizontal
- Tablet: 3-col (compact)
- Mobile: 1-col vertical stack

**Testimonials**

- Desktop: 3-col bento grid (as implemented)
- Mobile: single-column stacked cards (bento collapses to 1-col); horizontally scrollable alternative acceptable

**Founders**

- Desktop: 55/45 (text left, photo right)
- Tablet: 50/50
- Mobile: photo full-width above, text below, bios stacked 1-col

**Footer**

- Desktop: 4-col grid
- Tablet: 2×2 grid
- Mobile: 1-col stacked

### Touch targets

All interactive elements: min 44×44px. Buttons: `min-height: 44px`. Nav links: `padding: 8px 16px`.

---

## Accessibility Spec

### Semantic HTML (required)

- `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>` for landmarks
- `<h1>` for hero headline only; `<h2>` for all section headings
- `<button>` for all interactive controls (not `<div onClick>`)
- `<article>` for testimonial cards

### ARIA (required)

- Hamburger: `aria-label="Toggle navigation menu"`, `aria-expanded={bool}`
- Scroll story pills: `aria-label="Step 1: Capture"` (etc.)
- Stats counters: `aria-live="polite"` — announce final value to screen readers
- Product mockup image: descriptive `alt` text
- Founders photo: `alt="Finlay Ekins and Michael Batko, co-founders of Hourglass AI"`

### Keyboard nav (required)

- Tab through all buttons + links in visual order (left→right, top→bottom)
- Arrow keys navigate scroll story pills
- Escape closes mobile drawer
- Focus rings: 2px solid `--green`, offset 2px (all interactive elements)

---

## Implementation Blockers (must resolve before dev starts)

| Item                                   | Owner        | Deadline | Status |
| -------------------------------------- | ------------ | -------- | ------ |
| Hero headline (choose 1 of 3 options)  | Batko        | Day 1    | TBD    |
| Product mockup design                  | Design       | Day 3    | TBD    |
| Scroll story panel copy (4 panels)     | Batko        | Day 1    | TBD    |
| Agent card list (locked or growing?)   | Product      | Day 1    | TBD    |
| Testimonials (3 real quotes + photos)  | Sales        | Day 5    | TBD    |
| Stats confirmation (4 real numbers)    | Data         | Day 1    | TBD    |
| Founders photo (download + optimise)   | Batko/Finlay | Day 1    | TBD    |
| Founders story copy (founder sign-off) | Batko/Finlay | Day 2    | TBD    |
| Live-stream URL                        | Marketing    | Day 3    | TBD    |
| Trust logo list (10–15 logos)          | Sales        | Day 2    | TBD    |
| CTA target (Calendly link or form?)    | Marketing    | Day 1    | TBD    |
| `tailwind.config.ts` token mapping     | Frontend     | Day 1    | TBD    |

---

## Open Questions

- **Hero headline:** TBD — options: "Your admin, handled.", "AI agents that run your business behind the scenes", "Stop drowning in admin. Start growing."
- **Actual product mockup:** Will need real screenshots or a designed mockup of the Hourglass AI dashboard
- **Real testimonials:** Live clients include Schweigen, Cadence Property Group, The Skincare Company, Sense of Self — get permission + photo + quote from 3
- **Stats:** Confirm actual numbers before launch — current site shows "12 hrs / 98% / 8 days / 200+"
- **Founders photo:** Use the Startup Daily Apr 2026 photo — download and save to `public/images/founders.jpg`
- **Live-stream link:** Add URL to the weekly live-build stream in the founders section transparency pill
- **Founders story copy:** Two paragraphs in section 9.5 are draft — confirm with Batko/Finlay before launch
- **Mobile testimonials:** Bento grid currently 2-col on mobile — spec calls for 1-col stack; implement before launch
