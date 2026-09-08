# DESIGN.md — Kosmetikschule Picha

Client feedback 2026-09: the 2026-08 editorial system (giant display type
everywhere, hairline ceremonies, kinetic marquee, pinned scroll sequences)
"shouts". Retired — **with one sanctioned exception**: the film hero
("The Working Hand", 3-clip crossfade + live next-course module +
SplitText headline) was restored by client decision on 2026-09-08 and is
the **only** surface allowed to exceed the type ceiling, use video, or
animate via GSAP. Everything below it follows the hero-08 language: calm,
tangible, quiet. Both hero directions are kept: `components/hero/` (video,
production hero) and `components/ui/hero-08` (calm, demo at /demo-hero08).
This file is the source of truth for any future surface.

## 1. Visual Theme & Atmosphere

**Direction: calm product-page clarity on porcelain.** One background, one
ink, one teal. Serif display type at conversational scale (never above
5xl), muted leads, and real photography inside softly rounded cards. Every
element earns its place: if a visitor can't act on it, it's muted or gone.

Atmosphere keywords: **quiet, tangible, credible, close**.

One-line thesis: *"Berührung ist eine Fähigkeit. Übung macht daraus einen Beruf."*

**Guidance before catalog.** The page's first job is orientation for people
who arrive with no idea what to study: *which life situation is mine → which
course do I start with → what does the school recommend and why → only then
dates and prices.* Level badges and recommendation flags travel with every
course mention. (Details in §4.)

The Thai locale is first-class: `font-serif` has no Thai cut, so Thai
headings use the Thai sans at weight 600 with per-level flat leading, Thai
body gets `line-height: 1.85`, italics are forced upright.

## 2. Color Palette & Roles

House tokens in `globals.css @theme`; shadcn semantic tokens bridge onto
them (never a second palette). Never hardcode a hex.

| House token | Hex | shadcn alias | Role |
|---|---|---|---|
| `--color-porcelain` | `#f6f3ec` | `background` | Page background |
| `--color-porcelain-deep` | `#efeade` | `muted` | Footer, quiet fills |
| `--color-paper` | `#fdfcf9` | `card` | Cards, form panel |
| `--color-teal` | `#006f73` | `primary`, `ring` | Primary action, links, focus, small labels, selection |
| `--color-teal-deep` | `#004b4f` | — | Primary hover |
| `--color-aqua` | `#58c6d2` | — | Only inside the "neu" flag tint |
| `--color-gold` | `#c79a42` | — | **Certification/notes only** (tiny text accents, never fills) |
| `--color-pressure` | `#c94b3f` | `destructive` | Scarcity, cancelled, form errors |
| `--color-ink` | `#1b2325` | `foreground` | All primary text |
| `--color-ink-muted` | `#5a6668` | `muted-foreground` | Secondary text |
| `--color-hairline` | `#d8d2c4` | `border`, `input` | All borders |

## 3. Typography Rules

- **Display:** Fraunces via `font-serif` (`--font-serif` → `--font-fraunces`),
  weight 400, `tracking-tight`, `text-balance`. On Thai pages forced to the
  sans at 600.
- **Body/UI:** Noto Sans Thai in both locales.
- Scale (hard ceiling — nothing larger):
  - Hero title `text-3xl sm:text-4xl md:text-5xl`
  - Section title `text-2xl sm:text-3xl md:text-4xl`
  - Card title `text-xl sm:text-2xl`
  - Lead `text-base`; body `text-sm`–`text-base`
- Section labels: `text-sm font-semibold text-teal` (or `text-foreground`).
  No letterspaced uppercase ceremonies.
- Numbers: `.numeric` tabular figures for dates, prices, phones.
- Line lengths: titles `max-w-2xl`, leads `max-w-2xl`, body `max-w-[65ch]`.
- Headlines take the dictionary's `titleA` + `titleAccent` + `titleB` joined
  (punctuation attaches without space); the accent is no longer italic or
  colored — it is rendered plain.

## 4. Component Stylings

### Buttons
One button, the shadcn one (`ui/hero-08-utils/button.tsx`): `rounded-md`,
`bg-primary` → hover `bg-primary/90`, `focus-visible:ring-2 ring-ring`, h-10
default. Links-styled-as-buttons use `variant="outline"`. On photos: white
bg + ink text. Full-width pill CTAs and press-scale tricks are gone.

### Course discovery: exactly two sections (client feedback 2026-09-08)

Seven surfaces used to carry course listings (finder, schedule, catalog,
guide, featured, wegweiser). That read as chaotic. Discovery is now:

1. **Wegweiser** — for visitors who don't know what to study: persona panels
   (situation → named first course), the learning-path strip, and the
   3-question guide. Level badges and flags travel with every course mention.
2. **Katalog** — the full, SEO-readable record: three category families,
   every course as a card with photo/monogram, subtitle, level badge, flag
   ribbon, price + VAT note, next bookable date, CTA.

Then Termine (dates) — never before these two. The body-map finder and the
featured-course deep-dive are **unmounted but kept** in the repo
(`components/finder/`, `components/featured/`); remounting either requires
an explicit client decision.

Level badge: soft outline pill, teal dot "Ohne Vorkenntnisse" / ink dot "Mit
Grundlagen", derived via `requiresBasics()`. Flags from `Program.flag`:
`einstieg` teal tint, `neu` aqua tint, `beliebt` ink outline — labels from
the dictionary.

### Schedule
Calm list inside the page flow: quiet view-switch pills (`bg-ink text-paper`
active), filters as plain selects, rows as `border-b` hairlines — day-serif
number, title, muted meta, price + small outline CTA. No spotlight-follow,
no hover slides, no sticky month headers.

### Forms (`contact/InquiryForm.tsx`)
`bg-paper` rounded-lg panel with `shadow-sm`, labels 13px semibold, inputs
`rounded-md border-input` with teal focus ring, primary submit (shadcn).
Native POST fallback and hash-query preselect (`#anfrage?kurs=…&termin=…`)
unchanged.

### Cards/Surfaces
Images in `rounded-md` frames with `outline outline-black/10` (the hero-08
idom) or `-md`/`lg` paper panels with `shadow-sm`. No glass films, no dark
scrim hero panel, no grain.

### Header / Footer
Sticky header: `bg-background/90 backdrop-blur border-b border-hairline`,
logo left, quiet nav links, language pills, phone as small outline button.
Mobile sheet keeps the existing focus/Escape contract. Footer: `bg-muted`
light panel — wordmark line, address, hairline-separated legal links.

## 5. Layout Principles

- Container: `mx-auto max-w-6xl px-6` everywhere (hero-08 measure).
- Section padding: `py-20 sm:py-28`; sub-block spacing `mt-12/mt-16`.
- One porcelain plane; dense/data sections (Termine, Belege) and the footer
  may carry a `bg-muted/60` band for rhythm — nothing louder.
- `scroll-mt-24` on anchored sections.

## 6. Depth & Elevation

- Elevation vocabulary: `outline-black/10` + `shadow-sm` on cards (level 1);
  header blur (level 2). Nothing else. No decorative shadows, no grain, no
  cursor spotlights.

## 7. Animation & Interaction

**Tier: L1+ — hero-08 subtle only.** One shared engine in
`ui/fade-in.tsx`: `whileInView`, blur 6–8px → 0, y 12–24 → 0, 0.5–0.6s,
easing `[0.22,1,0.36,1]`, `viewport={{ once: true, margin: '-80px' }}`,
stagger 0.1 for lists. Honors `useReducedMotion`; animation `'none'` renders
final state without motion. Body-map pulse rings stay (pure CSS, compositor
only). Hover = color shifts and image scale ≤ 1.06, 150–300ms.

**Removed for good (below the hero):** ScrollTrigger pins, kinetic marquee,
count-ups, spotlight tracking, scroll-progress bar, grain overlay.

**Exception (client decision 2026-09-08):** the film hero keeps GSAP,
SplitText, Magnetic CTAs and the video crossfade — restored to production.
Those techniques stay fenced inside `components/hero/`.

## 8. Do's and Don'ts

**Do**
- Keep the discovery order: Wegweiser → Katalog → Körperkarte → Termine.
- Gold only where certification is the claim; pressure-red only for scarcity
  and errors.
- All prices net with the VAT note attached (`VAT_NOTE`).
- Format dates/prices via `lib/schedule.ts` (`Intl`, Europe/Berlin,
  th-TH-u-ca-gregory) — never hand-built display strings.
- Keep Thai typographic overrides (sans headings, 1.85 body leading, upright).
- Keep accessibility contracts: `aria-pressed` pill groups, `aria-live`
  result regions, body-map radiogroup with arrow keys, focus-visible rings,
  ≥ 44px touch targets.

**Don't**
- No display type above `text-5xl`; no uppercase tracking ceremonies; no
  italic accent words.
- No video backgrounds, no pins, no marquee, no parallax, no custom cursor.
- No decorative numbering ("03", "01/02/03") — real data only; house bullet
  for small notes is a plain `border-l-2` indent or the gold text dash at
  text size.
- No promotion without a stated reason: courses are highlighted only through
  `Program.flag` (`einstieg`/`neu`/`beliebt`) with its dictionary label.
- No jargon-first course references without the level badge in the same
  surface.
- No persona panel ending in "browse the catalog" — always a named first
  course.
- No emoji in UI; lucide-react icons (or Phosphor) only.
- No new fonts, no new color tokens, no second button system.
- No cropping of client-supplied posters/certificates; CSS pixel values as
  hardcoded hex are forbidden — theme tokens only.

## 9. Responsive Behavior

- Tailwind defaults; content stacks at `md`, grids at `lg/xl`.
- Mobile header collapses to a sheet: 44px rows, focus in on open, focus and
  Escape handling on close.
- 375px must not overflow horizontally; Thai text gets the sans/leading
  overrides automatically via `html[lang='th']`.
- Images keep explicit aspect boxes (`aspect-16/10` etc.) to prevent CLS.
