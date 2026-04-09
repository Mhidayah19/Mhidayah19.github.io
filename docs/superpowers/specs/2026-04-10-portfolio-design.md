# Portfolio Design Spec
**Date:** 2026-04-10  
**Project:** Muhammad-Hidayah.github.io  
**Status:** Approved

---

## 1. Overview

A single-page personal portfolio hosted on GitHub Pages at `https://muhammad-hidayah.github.io`. Targets frontend, mobile, and full-stack engineering roles. Graduating August 2026.

**Design direction:** Editorial modernism — Fraunces serif display paired with Plus Jakarta Sans body. Warm cream base, deep teal primary, red used sparingly as punctuation. Works section uses an asymmetric bento card grid. Everything else is typographically-driven with thin rules and whitespace, not cards.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 + Vite | User knows React; fast builds; clean GitHub Pages deploy |
| Styling | Tailwind CSS v4 | Utility-first; excellent grid control |
| Animations | Framer Motion | Best-in-class for scroll reveals, stagger, hover |
| Typewriter | react-type-animation | Hero role cycling |
| Fonts | Google Fonts (Fraunces + Plus Jakarta Sans) | Distinctive; editorial; not Inter/Roboto |
| Deploy | gh-pages npm package | Simple CI-free deploy to `main` branch |
| Repo | `Muhammad-Hidayah.github.io` | GitHub Pages auto-serves from this repo name |

---

## 3. Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#FFF6F6` | Page background |
| `--teal-dark` | `#2C687B` | Headings, body text, dark cards |
| `--teal-light` | `#8CC7C4` | Section labels, metadata, skill tags, borders |
| `--red` | `#DB1A1A` | Name punctuation, featured project title, role titles, badges, CTAs |
| `--surface` | `#ffffff` | Card backgrounds |
| `--border` | `oklch(88% 0.02 15)` | All dividers and card borders (warm-tinted) |
| `--ink` | `oklch(28% 0.04 200)` | Body text |
| `--ink-muted` | `oklch(48% 0.03 200)` | Secondary body text |

Red is used in at most 4–5 places per section. Overuse kills its power.

---

## 4. Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero name | Fraunces | 900 | `clamp(3.5rem, 8vw, 7rem)` |
| Section titles | Fraunces | 700 | `1.5rem` |
| Card titles | Fraunces | 700 | `1.05–1.6rem` |
| Contact heading | Fraunces | 900 | `clamp(2rem, 4vw, 3.5rem)` |
| Italic accent (hero, contact) | Fraunces italic | 300 | Same as display |
| Body / descriptions | Plus Jakarta Sans | 300 | `0.85–1rem` |
| Badges / labels / metadata | Plus Jakarta Sans | 400–600 | `0.65–0.75rem` |
| Stack tags | Plus Jakarta Sans | 400 | `0.7rem` |

No monospace fonts. No system fonts. Letter-spacing on headings: `-0.02em` to `-0.03em`.

---

## 5. Page Structure

Single scrolling page. Sticky nav links jump to sections via smooth scroll.

```
Nav (sticky)
└── Logo: "M. Hidayah." (red period)
└── Links: About · Work · Experience · Contact
└── CTA: Resume ↓ (red button)

Hero
└── Eyebrow: "SOFTWARE ENGINEER · SINGAPORE"
└── Name: "Muhammad / Hidayah." (italic Fraunces, red)
└── Tagline: "I build [typewriter]" — cycles: AI Agents / Mobile Apps / Web Experiences
└── Bio: 2 sentences, light weight
└── CTAs: "View my work →" (teal) + "Get in touch" (ghost)

01 · About
└── 2-column: left = bio paragraphs, right = skill pill tags

02 · Work  ← BENTO GRID (see Section 6)

03 · Experience
└── 2-column rows: left = period/location, right = company + role + description

04 · Education
└── 2-column: SIT (2022–2026) + NP (2016–2020)

05 · Contact
└── 2-column: left = big heading "Open to / opportunities.", right = link list
└── Links: LinkedIn · GitHub · Email · Resume PDF
```

---

## 6. Works Bento Grid

12-column CSS grid, 12px gap, 6 cards with intentionally varied sizes:

| Card | Columns | Rows | Background | Notes |
|---|---|---|---|---|
| AI Booking Chatbot | 1–7 | 1–2 | `#2C687B` (dark teal) | Featured, 2× height, subtle radial glow |
| Study-ARH | 8–12 | 1 | white | Standard |
| Image Segmentation | 8–10 | 2 | white | Shorter |
| Carousell Automation | 11–12 | 2 | `#FFF6F6` (cream) | Compact, text-only |
| Kickstand Mobile | 1–6 | 3 | white | "In progress" badge |
| cap-mcp-plugin | 7–12 | 3 | white | "Open Source" badge |

**Card anatomy:**
- Badge (Capstone / In Progress / Open Source) — pill, top-left
- Title — Fraunces 700
- Description — Plus Jakarta Sans 300
- Footer row: stack tags (pill) left + link arrow right

**No colored top borders. No rainbow backgrounds.** Depth comes from card size, dark teal featured card, and hover lift.

**Hover:** `translateY(-3px)` + `box-shadow: 0 12px 40px oklch(28% 0.04 200 / 0.08)` via Framer Motion `whileHover`.

---

## 7. Animations

All animations via Framer Motion. Respect `prefers-reduced-motion`.

| Element | Animation | Config |
|---|---|---|
| Hero name | Fade up on mount | `y: 30 → 0`, `opacity: 0 → 1`, `duration: 0.6`, `ease: easeOut` |
| Hero elements | Staggered children | `staggerChildren: 0.1` |
| Typewriter | role cycling | `react-type-animation`, 2s per phrase, loop |
| Section reveal | Fade up on scroll | `whileInView`, `y: 24 → 0`, `once: true`, `viewport: { margin: "-80px" }` |
| Bento cards | Staggered on scroll | `staggerChildren: 0.07` on container |
| Card hover | Lift | `whileHover: { y: -3 }`, `transition: { type: "spring", stiffness: 300 }` |
| Nav background | Blur appears on scroll | CSS `backdrop-filter` toggled via `scrollY` listener |
| Contact link arrows | Translate right on hover | CSS transition `transform: translateX(4px)` |

No bounce or elastic easing. No layout property animations (width/height/padding). Transform + opacity only.

---

## 8. Content — Projects

### AI Booking Chatbot *(Featured)*
4-stage architecture at Mymediset — Cloudflare Workers → MCP CDS Plugin → SAP CAP + MCP → SAP CAP + Native Tools. Enterprise healthcare booking. Key insight: native tools outperform protocol-abstracted tools in tightly-coupled enterprise workflows. Stack: SAP CAP, MCP, Claude API, Cloudflare Workers. 2025–2026.

### Study-ARH
Augmented reality study companion. Top contributor (25/51 commits). ARCore overlays, GPT-3.5 Q&A, offline-first Room DB, Firebase. Presented at Computer Vision Projects Expo 2024. Stack: Kotlin, ARCore, GPT-3.5, Firebase.

### Image Segmentation
Flutter mobile app running DeepLab V3 and BiseNet via TFLite on-device. Team lead (15/31 commits). Presented at SIT Computer Vision Expo 2024. Stack: Flutter, TFLite, DeepLab V3, BiseNet.

### Carousell Automation
Solo project. Puppeteer automation for bulk Carousell messaging — solved a real procurement workflow problem. Shows product thinking beyond coursework. Stack: Node.js, Puppeteer.

### Kickstand Mobile *(In Progress)*
AI voice agent for Singapore motorcycle owners. Tracks maintenance, road tax, COE, insurance. Conversational interface over bike history. Stack: React Native (Expo), NestJS, Mastra, Supabase, Claude API.

### cap-mcp-plugin *(Open Source)*
Contribution to gavdilabs/cap-mcp-plugin — MCP protocol plugin for SAP CAP. Tied to capstone research work.

---

## 9. Content — Experience & Education

**Mymediset (BIT Consultant Pte Ltd)**  
Software Development & Innovation Intern · May 2025 – present  
Built AI booking chatbot through 4 architectural iterations. Contributed to open-source CAP MCP Plugin. Supervised by Prof Mahesh Panicker (SIT) and Head of Platform Engineering.

**Denso Wave Singapore**  
Engineering Intern · Mar 2019 – Sep 2019  
Automated firmware test pipelines using VBA and Python.

**Singapore Institute of Technology**  
BEng (Hons) ICT — Software Engineering · 2022 – 2026

**Ngee Ann Polytechnic**  
Diploma in Computer Engineering · 2016 – 2020

---

## 10. Component File Structure

```
src/
├── main.jsx
├── App.jsx
├── index.css          # Tailwind base + CSS custom properties
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Works.jsx      # Bento grid
│   ├── WorkCard.jsx   # Individual bento card
│   ├── Experience.jsx
│   ├── Education.jsx
│   └── Contact.jsx
└── data/
    ├── projects.js    # All project content
    └── experience.js  # Experience + education content
```

Content is data-driven: all text lives in `data/` files, components render from props. Easy to update without touching component code.

---

## 11. GitHub Pages Deploy

```bash
# package.json
"homepage": "https://muhammad-hidayah.github.io",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Vite `base` config set to `"/"` for root domain deploy (not a subdirectory).  
`.gitignore` includes `dist/` and `.superpowers/`.

---

## 12. Out of Scope

- Blog section
- Dark mode toggle
- Contact form (links only — no backend needed)
- GitHub stats widget (adds complexity, not needed)
- Custom domain (can be added later)
