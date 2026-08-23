# Motion

## Engine

GSAP 3.15 — `ScrollTrigger`, `SplitText`, `DrawSVGPlugin`, `CustomEase`.

One engine, deliberately. The unused Framer Motion dependency was removed
rather than kept alongside: mixing two animation runtimes in one tree means two
ticker loops fighting over the same transforms.

`MotionRoot` registers the plugins once for the document and sets the house
defaults, so no component has to think about setup. The house eases are
registered with `CustomEase` from the **same cubic-beziers the stylesheet
declares** (`src/lib/motion.ts` ↔ `globals.css`), so a GSAP tween and a CSS
transition on one element cannot drift apart.

### Not ScrollSmoother

It was available and it was rejected. It requires every `position: fixed`
element to be hoisted out of a transformed wrapper — which means restructuring
the layout around the sticky header — it needs anchor navigation routed through
its own `scrollTo`, and it replaces the browser's native scrolling with a lerped
imitation. The budget went to choreography that rides real scroll instead.

## The house gesture

**Nothing fades in.** A fade tells the reader that JavaScript ran; it carries no
information. Every entrance here has a direction or an occluder:

| Element | Gesture |
|---|---|
| Headlines, section titles | Line-by-line, riding up from behind a per-line mask (`SplitLines`) |
| Blocks, figures | Clip-path wipe from a named edge, with travel behind it (`Reveal`) |
| Hairlines | Draw themselves from one end (`RuleDraw`) |
| Buttons | Wipe open from the leading edge |
| Quantities | Count into place (`CountUp`) |
| Progress | Drawn by the scrollbar via DrawSVG (`ProgressPath`) |

## Easing

Curves and durations come from `src/lib/motion.ts`. The rule is the frequency
of the interaction, not the taste of the moment:

- **Entrances** — `outExpo` / `outQuart`, 0.9–1.4s. Marketing surface, so the
  long tail is affordable.
- **Scrubbed motion** — `none`. The scrollbar is the timeline; any curve on top
  of the reader's own scrolling reads as lag.
- **Hover, colour, border** — plain `ease`, 150ms.
- **Press** — 120ms, and buttons compress (`scale(0.98)`) rather than sinking.
- **Progress and marquees** — linear, because they report time.

No bounce anywhere. Nothing here is gesture-driven or interruptible, and bounce
on a tap-to-open reads as a toy.

## Two failure modes that shaped the code

**Background tabs.** Every entrance is a GSAP `from`, which writes the hidden
start state immediately and only unwinds it as the tween plays. GSAP advances on
`requestAnimationFrame`, and a background tab gets no frames — so a page opened
in a background tab painted its start state and froze there, with the headline
stuck off its own baseline. `whenVisible` (`src/lib/when-visible.ts`) defers
registration to the first visible moment, which also means a tab nobody is
looking at does no work at all.

**Reduced motion.** All choreography sits inside `gsap.matchMedia()` gated on
`prefers-reduced-motion: no-preference`. When it does not match, the tweens are
never created, so no start state is ever written and the content is simply
there. The CSS block neutralises the pulse, the spotlight and the hover wipes
separately.

## Performance

- Compositor properties only for anything continuous: `transform`, `opacity`.
  `clip-path` appears in one-shot entrances only.
- Perpetual motion is CSS, not JS. The pressure-point pulse is a keyframe
  animation — a looping tween on a React-driven component would re-render the
  finder on every frame.
- Pointer-tracking never touches React state. `Magnetic` uses `gsap.quickTo`
  and `Spotlight` uses `gsap.quickSetter`, both writing outside the render
  cycle; a `pointermove` handler calling `setState` collapses on mid-range
  phones.
- Magnetic and spotlight effects are scoped to `(hover: hover) and
  (pointer: fine)`, so a touch tap never leaves an element displaced.
- Grain stays on a fixed, `pointer-events: none` pseudo-element, never inside a
  scrolling container.

### Payload, measured

First-load JS for the landing page is **≈249 kB gzipped**. GSAP and its four
plugins account for roughly **55 kB**; the remaining ~194 kB is the Next 16 /
React 19 baseline, which was already over the 150 kB landing budget in
`rules/web/performance.md` before any motion was added.

The available lever is deferring the engine: move the `gsap` imports behind a
dynamic `import()` inside the existing `useEffect` bodies and GSAP leaves the
critical path entirely, arriving shortly after hydration. That trades ~55 kB of
first load for motion that starts a few hundred milliseconds later. It has not
been done — the baseline, not the engine, is what puts this page over budget.
