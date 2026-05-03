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

## Open Questions

- **Hero headline:** TBD — options: "Your admin, handled.", "AI agents that run your business behind the scenes", "Stop drowning in admin. Start growing."
- **Actual product mockup:** Will need real screenshots or a designed mockup of the Hourglass AI dashboard
- **Real testimonials:** Placeholder copy needed until real customer quotes available — Schweigen, Cadence Property Group, The Skincare Company, Sense of Self are live clients
- **Stats:** Confirm actual numbers before launch
- **Founders photo:** Use the Startup Daily Apr 2026 photo — download and save to `public/images/founders.jpg` before implementation
- **Live-stream link:** Add URL to the weekly live-build stream in the founders section transparency pill
- **Founders story copy:** The two paragraphs in section 9.5 are draft — confirm Batko/Finlay are happy with the framing before launch
