# Design system — chetansai portfolio

The reference point is the bold-minimal personal site: a full-bleed color field, giant
type, almost no copy, personality over density. This document is the source of truth
for the visual system. Change the tokens here first, then the code.

## 1. Principles

1. **30-second scan.** The homepage must be readable top to bottom in half a minute:
   name → one line → four multiples → six one-line problems → email.
2. **Depth on demand.** Detail lives behind interaction (card expansion), never on the
   surface. If a section can't be skimmed, it's overweight.
3. **Evidence > decoration.** Every number shown must be substantiated; numbers are
   expressed as multiples and percentages only (10x, 95%+, 9/10, ₹0) — never absolute
   internal counts.
4. **One bold move per screen.** The hero spends the boldness (statement headline +
   lime→indigo blob with floating method chips). Everything after it stays quiet:
   generous space, thin rules, small mono labels. The page ends on the second bold
   moment — the dark glowing CTA band — and nothing bold sits between them.
5. **Operator voice.** Copy is first-person, direct, a little blunt ("Six problems,
   killed."). No corporate filler, no buzzwords.

## 2. Color tokens (lime + indigo, Sep 6 2026 restyle)

Light theme (default) / dark theme (`prefers-color-scheme`):

Softened Sep 6 (owner: "too bright — lighter backgrounds, darker text"): surfaces are
pale tints, text carries the depth. Saturated color never fills a large area.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--paper` | `#F8F7F2` | `#121318` | page ground (warm off-white / near-black) |
| `--card` | `#FDFDFA` | `#1A1B22` | card surfaces |
| `--ink` | `#16161B` | `#E8E8E0` | primary text, primary button |
| `--muted` | `#565761` | `#9C9DA8` | secondary text |
| `--line` | `#E6E5DC` | `#2A2B33` | hairlines, borders |
| `--lime` | `#E9F2C0` (pale) | `#3D4818` (deep) | chip/badge SURFACES only |
| `--lime-ink` | `#333D10` | `#DDE8AC` | text on lime |
| `--accent` | `#4343BD` (deep indigo) | `#9C9CEA` | em text, kickers, CTAs, hot chips |
| `--accent-soft` | `#EFEFFA` | `#1A1B28` | multiples band, step-02 badge, blob base |
| `--night` | `#101218` | `#0C0D12` | closing CTA band (glows at ≤0.2 alpha) |
| `--night-ink` / `--night-dim` | `#F2F2EA` / `#9A9BA8` | — | text on night |

The night-band mail button uses literal pale lime (`#E6F0B6`/`#333D10`) because the
band is dark in both themes — theme tokens would flip it dark-on-dark.
Blob gradients run at 0.28–0.4 alpha over `--accent-soft` — a wash, not a lamp.

Rules:
- **Lime and indigo never sit as text on each other** — lime carries `--lime-ink`,
  indigo carries white; both live on neutral grounds.
- **Lime is the energy, indigo is the voice.** Lime = badges/buttons (surfaces);
  indigo = meaning (highlighted words, labels, interactive states). Don't swap roles.
- The hero **blob** is the one place both colors blend (radial lime → indigo over
  `--accent-soft`); nowhere else gets a gradient except the night band's glows.
- All component colors come from tokens — nothing hardcoded per-theme.
- Neutrals are warm, never pure grey or pure white.

## 3. Typography

| Role | Face | Weights | Where |
|---|---|---|---|
| Display | Bricolage Grotesque | 700 / 800 | hero name, section heads, multiples, CTA |
| Body | Wix Madefor Text | 400 / 500 / 600 | paragraphs, card stories |
| Utility | Spline Sans Mono | 400–600 | kickers, chips, nav, flow chips, card numbers |

Scale (clamp-based, key stops):
- Hero name: `clamp(72px, 14vw, 168px)`, uppercase, line-height 0.92, ls −0.02em.
  First name is **outline** (`-webkit-text-stroke: 2px var(--field-ink)`, transparent
  fill), surname solid — the one typographic signature. Don't reuse outline type
  anywhere else.
- Section head: `clamp(34px, 5.5vw, 52px)` w800.
- Multiples: `clamp(40px, 6vw, 60px)` w800, tabular where digits align.
- Card title: `clamp(19px, 3vw, 25px)` w700.
- Body: 17px/1.6; card stories 14.5px/1.55.
- Kickers/labels: 11–13px mono, uppercase, letter-spacing 0.14–0.22em.

## 4. Layout

- Single column, `max-width: 1020px`, 28px side padding.
- Hero field is full-bleed; all other sections sit on `--paper`.
- Vertical rhythm is generous: 64–96px between sections. When in doubt, add space,
  not content.
- Multiples strip: 4-up grid (2-up under 700px), separated by hairlines — a ledger,
  not cards.
- Problem cards: full-width stacked rows (not a grid) so each reads as one line.

## 5. Components

**Hero chip** — amber rectangle, 12px mono uppercase, 0.22em tracking. One per page.

**Multiples tile** — big display number + ≤22ch muted label. No borders except the
shared hairlines. Numbers are multiples/% only.

**Problem card** (`app/cases.tsx`, client component)
- Face: mono number · title (problem, past tense: "Rent was chased by hand.") ·
  one-line outcome ("Now: …") · pill button "How I solved it".
- Expanded: 3-column story grid (Before / What I did / Today) + full-width flow-chip
  strip under a dashed rule. Single-column under 760px (pill hidden; face is the tap
  target).
- Expansion: `grid-template-rows 0fr→1fr`, 350ms `cubic-bezier(0.2,0.8,0.2,1)`.
  One card open at a time.
- Hover: −2px lift + green border. Open state: pill inverts to solid green.

**Flow chips** — mono pills joined by → arrows; `hot` (green outline) marks the steps
that changed. Wraps freely; never scrolls horizontally.

**Close CTA** — giant question ("Have a messy problem?") + email as display type with
a 3px amber underline. LinkedIn/Resume links render only when their constants in
`app/ui.tsx` are set.

**Nav** — mono, on-field: brand left, Work/About/Contact right, dim → bright on hover.

## 6. Motion

- Page-load: hero elements rise 22px + fade, staggered 80ms, 700ms, expo-out. Once,
  on the hero only.
- Micro: card hover lift 180ms; card expand 350ms; color transitions 150–200ms.
- Everything wrapped in `prefers-reduced-motion: no-preference`; reduced motion gets
  a fully static page.
- No scroll-jacking, no parallax, no autoplaying anything.

## 7. Accessibility

- Card faces are real `<button>`s with `aria-expanded`.
- Focus: 2px green outline, 3px offset, everywhere.
- Contrast: field-ink on field ≈ 8:1; muted on paper ≥ 4.5:1; amber is never used
  for body-size text on paper.
- Both themes are designed, not inverted; check every change in both.

## 8. Improvement backlog (pick and we build)

- [ ] **Hero texture** — the field is currently flat; the reference look uses subtle
      noise/dot texture and floating specks. A CSS grain or sparse drifting dots
      would add depth for ~0 cost.
- [ ] **Favicon + OG image** — none yet; tab and link-shares are anonymous. An
      emerald tile with the outline "CS" monogram would carry the identity.
- [ ] **Multiples count-up** — animate 10x/95%/9/10 on first scroll into view.
- [ ] **Card affordance** — closed cards could tease one flow-chip row on hover.
- [ ] **About hero variant** — currently reuses the homepage pattern; could earn its
      own moment (e.g. a photo treatment, or a typographic timeline).
- [ ] **A human artifact** — a photo, a signature, or a hand-drawn underline would
      cut the all-vector cleanliness with something personal.
- [ ] **Print/PDF stylesheet** — recruiters print; a clean print CSS is cheap.
- [ ] **Custom 404** — same voice ("This page is a missed follow-up.").
