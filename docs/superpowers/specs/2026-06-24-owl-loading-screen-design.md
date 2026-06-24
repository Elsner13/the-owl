# Loading Screen — Logo + Tagline — Design

- **Date:** 2026-06-24
- **Project:** `the-owl` (Vercel project `educated-eye-landing-page`, serves thesamelsner.com)
- **Status:** Approved direction — implementation blocked until v0 source is pushed to `Elsner13/the-owl`

## Context & Problem

thesamelsner.com is a Next.js 16 link-in-bio page with WebGL liquid-metal shader marks
(a crimson logo + button accents) and the tagline "See what's already there". On load the
page feels "glitchy": the static HTML paints, React hydrates, then the shader canvases and
web fonts pop in a beat later — a visible flash/reflow.

The goal is a clean, intentional loading screen that masks that warm-up: simply the
**existing main logo and the tagline**, then a clean fade into the homepage.
(An earlier owl wing-flap concept was dropped in favor of this simpler treatment.)

## Goals

- Eliminate the perceived load glitch (canvas pop / font swap) behind a controlled overlay.
- Show the brand: existing liquid-metal logo + tagline, calm and premium.
- Never hang, never flash, never block interactivity longer than necessary.

## Non-Goals

- No custom owl illustration, no wing-flap, no new artwork.
- No redesign of the homepage or the existing liquid-metal marks.
- No new animation/runtime dependencies (reuse `framer-motion`, already in the project).

## Locked Decisions

1. **Content:** the **existing main logo** (the current liquid-metal mark/component) +
   tagline text **"See what's already there"** — reuse what's already on the page, no new asset.
2. **Frequency:** **Once per browser session** (`sessionStorage` flag). Subsequent loads
   that session skip the overlay entirely with zero delay.
3. **Motion:** calm **fade/scale-in** on entry, **fade-out** on exit. (Exit refinement —
   plain cross-fade vs. logo settling into its homepage position — see Open Questions.)

## Detailed Design

### Readiness gating (the anti-glitch mechanism)

- The overlay is an opaque Void (`#080806`) layer at `position: fixed; inset: 0`, top
  z-index, **present from first paint** so no half-rendered content is ever visible.
- The logo + tagline fade/scale in immediately while the page warms up underneath.
- The **fade-out is gated**: it does not begin until a **readiness signal** has fired —
  the first of:
  - `window` `load` **and** `document.fonts.ready` resolved, plus one
    `requestAnimationFrame` tick to let the hero shader mount; **or**
  - a **3.5s hard cap** so it can never hang on a slow/failed shader init.
- This guarantees the overlay only lifts onto a fully-ready page (no canvas-pop or
  font-swap leaks through). The entry animation + a small floor keep it from
  flash-and-vanishing on fast loads.

### Session gate

- On mount, read `sessionStorage["intro_seen"]`. If present → render nothing, homepage
  shows immediately. If absent → run the sequence and set the flag when it completes.

### Content & layout

- Reuse the existing logo component/asset (the liquid-metal mark). Centered on the overlay.
- Tagline "See what's already there" directly beneath, in the site's existing display font,
  Bone (`#EDEBE0`) / Ash for any secondary weight.
- Vertically + horizontally centered; comfortable spacing; nothing else on the overlay.

### Motion timeline (~1.2–2.0s typical, capped)

All motion uses **only `transform` and `opacity`** (GPU-composited; avoids paint jank).

| Time | Phase | Motion |
|---|---|---|
| 0.0–0.5s | Enter | Logo fades + scales in (subtle, e.g. .96→1) on void; tagline fades in just after |
| (hold) | Gate | Hold on the resting logo until the readiness signal (or 3.5s cap) |
| +0.5s | Exit | Overlay (logo + tagline) fades out; homepage revealed beneath |

The homepage is mounted and hydrated underneath the whole time, so it is interactive the
instant the overlay clears. No route change, no refetch.

### Component architecture

- **`LoadingScreen.tsx`** (client component): owns the overlay DOM, readiness detection,
  the `sessionStorage` gate, motion orchestration, and reduced-motion branching.
  Self-contained.
- Reuses the existing logo component/asset for the mark (no duplication).
- Mounted **once in the root layout**, layered above `children`. The homepage renders
  normally underneath and has **no knowledge of the loader** (clean separation).

### Reduced motion

- Under `prefers-reduced-motion: reduce`: no scale, no movement — static logo + tagline,
  then a simple opacity fade-out once ready. (Sam may have Reduce Motion enabled; this path
  must still look intentional.)
- The mark is decorative: `aria-hidden`; the overlay must not trap focus.

### Performance

- Reuses existing logo; only `transform`/`opacity` animate. No new dependencies.
- Net effect is *better* perceived performance: the overlay hides the shader/font warm-up
  that currently causes the glitch.

## Open Questions (confirm before/at implementation)

- **Exit style:** plain cross-fade (default, simplest) **vs.** the logo glides up into its
  final homepage position as the rest of the page fades in (a "continuity" reveal, since the
  logo + tagline already sit at the top of the homepage). Default to cross-fade unless Sam
  wants the continuity version.

## Integration Assumptions (verify when v0 source lands in `the-owl`)

- Root layout is `app/layout.tsx`; `<LoadingScreen/>` mounts there wrapping/above `children`.
- The logo exists as a reusable component/asset to render inside the overlay.
- `framer-motion` is present (the current build uses `motion`).
- Brand color/font tokens exist as CSS variables / Tailwind theme; match real names on arrival.
- If a loading screen component **already exists**, replace/refactor it rather than duplicate.

## Acceptance Criteria

1. First load of a session: logo + tagline fade in on void, hold until the page is ready
   (fonts + shaders) or the 3.5s cap, then fade out to the homepage. Typical total ~1.2–2.0s.
2. No visible canvas-pop or font-swap flash before, during, or after the reveal.
3. Second load in the same session: no overlay, homepage immediately.
4. With Reduce Motion on: static logo + tagline → fade, no movement.
5. Homepage is interactive the moment the overlay clears; no layout shift.
6. No new npm dependencies added.

## Out of Scope

- Custom owl artwork / wing-flap animation (dropped).
- Homepage / hero shader changes (tracked separately: bundle trim + reduced-motion fix).
- Any change to DNS, Vercel projects, or routing.
