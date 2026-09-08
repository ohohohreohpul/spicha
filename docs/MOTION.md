# Motion

2026-09 rebuild: the GSAP system (scroll pins, split-text reveals, kinetic
marquee, count-ups, magnetic CTAs, spotlight tracking) was removed. Client
feedback: the page shouted.

## What remains

One vocabulary, in `src/components/ui/fade-in.tsx`:

- blur(6px) → 0, y 16 → 0, 0.55s, ease [0.22, 1, 0.36, 1]
- lists stagger at 0.08 via `StaggerGroup` / `StaggerList`
- `useReducedMotion` renders final state with no motion

Entrances run **on mount**, not on scroll intersection. Intersection-observer
reveals strand content invisible wherever IO callbacks are paused
(backgrounded tabs, embedded panes) — an invisible page is a worse failure
than a missed entrance. The hero (`ui/hero-08.tsx`) uses the same
mount-timed pattern.

## Kept

- Body-map finder: `pulse-ring` CSS keyframes (compositor-only), reduced-motion kills it
- Hovers: color shifts, image scale ≤ 1.04, 150–300ms — CSS transitions only

## Rules

- No pins, no parallax, no scroll-jacking, no custom cursor, no marquee,
  no number count-ups, no video backgrounds.
- No new motion libraries. If a real need appears, extend `fade-in.tsx`.
