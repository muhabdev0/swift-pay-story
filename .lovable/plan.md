# ImmediatePay — Premium Fintech Landing Page

A single long-form, scroll-driven landing page for ImmediatePay (earned wage access). Editorial sage-green palette, serif headlines, warm people imagery, restrained cinematic motion.

## Design system (src/styles.css)

Replace default tokens with a custom semantic palette in `oklch`:
- `--background` warm off-white
- `--surface-mint` pale mint (hero, alt sections)
- `--surface-sage` soft sage (feature backgrounds)
- `--surface-lime` vibrant yellow-lime (testimonials panel, CTA gradient)
- `--forest` deep forest green (footer, primary buttons, dark hero accents)
- `--forest-foreground` warm off-white
- `--ink` near-black forest for body text
- `--muted-foreground` warm gray-green
- Radius scale: cards 1.25rem, pill buttons full
- Soft shadow tokens: `--shadow-card`, `--shadow-float`

Fonts (via Google Fonts link in `__root.tsx` head):
- Headlines: **Instrument Serif** (editorial, confident)
- Body / labels: **Inter** (clean sans)
- Eyebrow labels: Inter uppercase, tracked-wide, 11px

## Page structure

Single route: `src/routes/index.tsx` (replace placeholder). Each section as its own component under `src/components/landing/`:

1. `Nav.tsx` — sticky translucent nav, wordmark left, 4 links right, pill CTA "Download app" (forest fill).
2. `Hero.tsx` — pale mint background, eyebrow label, large serif headline "Access your pay when you need it most", supporting paragraph, primary CTA, phone mockup visual right/below with gentle parallax drift.
3. `Feature.tsx` — two-column: large serif headline "Access the pay without having to wait for payday" + warm lifestyle photo in rounded rectangle.
4. `HowItWorks.tsx` — eyebrow + headline "How ImmediatePay works", wide hero photo, three floating white cards overlapping bottom edge: 01 Clock Out, 02 Set Up Wallet, 03 Transfer. Staggered fade-up on scroll.
5. `Testimonials.tsx` — lime-green panel, "Happy customers, great reviews", 3-card editorial layout (image card / centered quote card / image card on desktop, stacked on mobile).
6. `CTA.tsx` — "Unlock access to your earned pay", app store badges, centered phone mockup overlapping a yellow-lime gradient field below white upper area.
7. `Footer.tsx` — forest-green, closing line "Meet modern payroll needs without compromising", 3-4 link columns, app store badges, social icons, oversized ImmediatePay watermark behind.

## Motion

Install `motion` (Motion for React). Build a shared `<Reveal>` wrapper using IntersectionObserver + `whileInView` for fade-up (y: 24 → 0, opacity 0 → 1, 0.7s easeOut). Use it on every section heading, paragraph, image, and card.

- Hero: on mount, headline + CTA fade-up with 80ms stagger; phone mockup scales 0.98 → 1 with slow drift via `useScroll` + `useTransform` (translateY parallax ~ -40px across viewport).
- Feature image: subtle scroll-linked scale 0.98 → 1.02.
- How-it-works cards: stagger children 120ms, fade-up + lift.
- Testimonials cards: stagger left/center/right with slight rotate (-1°, 0, 1°).
- CTA phone: scroll-linked vertical drift.

No exaggerated motion. All eases `[0.22, 1, 0.36, 1]`.

## Imagery

Generate via `imagegen--generate_image` (standard quality, jpg) into `src/assets/`:
- `hero-phone.jpg` — modern phone mockup showing minimal pay/wallet UI on soft mint surface, top-down editorial.
- `feature-people.jpg` — warm candid photo, person at home checking phone, soft daylight.
- `how-it-works-bg.jpg` — wide horizontal lifestyle shot, person clocking out of work, warm tones.
- `testimonial-1.jpg`, `testimonial-2.jpg` — portrait crops of real-feeling people.
- `cta-phone.jpg` — phone mockup showing transfer confirmation screen.

All used as ES6 imports.

## Responsive

- Desktop: max-w container 1240px, 2-col asymmetric grids, generous py-32.
- Tablet: collapses to single column with maintained whitespace (py-24).
- Mobile: stacked, py-20, headline sizes scale via `clamp()`, cards full-width with 24px gutters.

## SEO / metadata

Index route `head()`: title "ImmediatePay — Access your pay when you need it most", meta description, og:title/description/image (use hero-phone as og:image), single H1 in hero, semantic `<section>`/`<header>`/`<footer>`, alt text on every image.

## Technical notes

- Add `motion` package: `bun add motion`
- Google Fonts via `<link>` tags in `__root.tsx` `head().links`
- All colors via semantic tokens in `src/styles.css` — no inline hex in components
- Reuse shadcn `Button` with a new `forest` variant
- Smooth scroll: `html { scroll-behavior: smooth }` in styles.css
- No backend, no auth, no database — pure marketing page

## Out of scope

Real app store deep links, working sign-up form, CMS, blog, legal pages. The page is presentational only; CTAs are visual.
