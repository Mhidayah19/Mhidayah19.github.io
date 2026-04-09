# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page personal portfolio at https://muhammad-hidayah.github.io using React 18 + Vite + Tailwind CSS v4 with editorial modernism design.

**Architecture:** React single-page app scaffolded with Vite, styled with Tailwind CSS v4 utility classes and CSS custom properties, animated with Framer Motion. Content is data-driven: all text lives in `src/data/` files; components are pure presentational. Deployed to GitHub Pages via `gh-pages`.

**Tech Stack:** React 18, Vite, Tailwind CSS v4, Framer Motion, react-type-animation, Google Fonts (Fraunces + Plus Jakarta Sans), gh-pages

---

## File Map

| File | Responsibility |
|---|---|
| `package.json` | Dependencies, scripts (dev/build/predeploy/deploy) |
| `vite.config.js` | Vite config with `base: "/"` |
| `index.html` | HTML entry point with Google Fonts `<link>` |
| `src/index.css` | Tailwind base import + CSS custom properties (tokens) |
| `src/main.jsx` | React root mount |
| `src/App.jsx` | Root component — composes all sections in order |
| `src/components/Nav.jsx` | Sticky nav, logo, section links, Resume CTA |
| `src/components/Hero.jsx` | Name, typewriter tagline, bio, CTAs |
| `src/components/About.jsx` | 2-col bio + skill pills |
| `src/components/Works.jsx` | 12-col bento grid container with stagger |
| `src/components/WorkCard.jsx` | Individual bento card (badge, title, desc, footer) |
| `src/components/Experience.jsx` | 2-col timeline rows |
| `src/components/Education.jsx` | 2-col education rows |
| `src/components/Contact.jsx` | 2-col heading + link list |
| `src/data/projects.js` | All project content objects |
| `src/data/experience.js` | Experience + education content objects |

---

## Task 1: Scaffold Vite + React project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `.gitignore`

- [ ] **Step 1: Initialise project**

Run from `/Users/hid/Developer/Muhammad-Hidayah.github.io`:
```bash
npm create vite@latest . -- --template react
```
When prompted "Current directory is not empty. Remove existing files and continue?" — select **Ignore files and continue**.

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install framer-motion react-type-animation
npm install -D gh-pages
```

- [ ] **Step 3: Install Tailwind CSS v4**

```bash
npm install tailwindcss @tailwindcss/vite
```

- [ ] **Step 4: Configure Vite**

Replace `vite.config.js` with:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

- [ ] **Step 5: Update package.json scripts and homepage**

Open `package.json`. Add `"homepage"` and two scripts:
```json
{
  "homepage": "https://muhammad-hidayah.github.io",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

- [ ] **Step 6: Update .gitignore**

Ensure `.gitignore` contains at minimum:
```
node_modules
dist
.superpowers
```

- [ ] **Step 7: Verify dev server starts**

```bash
npm run dev
```
Expected: Vite prints `Local: http://localhost:5173/` and the default Vite+React page loads in browser. Stop with Ctrl+C.

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vite.config.js index.html .gitignore src/
git commit -m "chore: scaffold vite react project with tailwind v4 and framer motion"
```

---

## Task 2: Design tokens and global CSS

**Files:**
- Modify: `index.html` — add Google Fonts link
- Create/Replace: `src/index.css` — Tailwind import + CSS custom properties
- Modify: `src/main.jsx` — import index.css

- [ ] **Step 1: Add Google Fonts to index.html**

Replace the `<head>` section of `index.html` with:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700;1,9..144,900&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
    <title>Muhammad Hidayah — Software Engineer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Write index.css**

Replace `src/index.css` entirely:
```css
@import "tailwindcss";

:root {
  --cream: #FFF6F6;
  --teal-dark: #2C687B;
  --teal-light: #8CC7C4;
  --red: #DB1A1A;
  --surface: #ffffff;
  --border: oklch(88% 0.02 15);
  --ink: oklch(28% 0.04 200);
  --ink-muted: oklch(48% 0.03 200);

  --font-display: 'Fraunces', serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--cream);
  color: var(--ink);
  font-family: var(--font-body);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Update src/main.jsx**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 4: Stub App.jsx**

```jsx
export default function App() {
  return (
    <div style={{ fontFamily: 'var(--font-display)', color: 'var(--teal-dark)', padding: '2rem' }}>
      Portfolio
    </div>
  )
}
```

- [ ] **Step 5: Verify fonts and tokens load**

```bash
npm run dev
```
Expected: page shows "Portfolio" in Fraunces font with teal colour. Check DevTools → Elements → body `background-color` should be `#FFF6F6`. Stop server.

- [ ] **Step 6: Commit**

```bash
git add index.html src/index.css src/main.jsx src/App.jsx
git commit -m "feat: add design tokens, google fonts, and tailwind v4 css"
```

---

## Task 3: Content data files

**Files:**
- Create: `src/data/projects.js`
- Create: `src/data/experience.js`

- [ ] **Step 1: Create src/data/projects.js**

```js
export const projects = [
  {
    id: 'ai-booking-chatbot',
    title: 'AI Booking Chatbot',
    badge: 'Capstone',
    featured: true,
    description:
      '4-stage architecture at Mymediset — Cloudflare Workers → MCP CDS Plugin → SAP CAP + MCP → SAP CAP + Native Tools. Enterprise healthcare booking. Key insight: native tools outperform protocol-abstracted tools in tightly-coupled enterprise workflows.',
    stack: ['SAP CAP', 'MCP', 'Claude API', 'Cloudflare Workers'],
    year: '2025–2026',
    link: null,
    gridCol: '1 / 7',
    gridRow: '1 / 3',
    bg: 'var(--teal-dark)',
    dark: true,
  },
  {
    id: 'study-arh',
    title: 'Study-ARH',
    badge: null,
    featured: false,
    description:
      'Augmented reality study companion. Top contributor (25/51 commits). ARCore overlays, GPT-3.5 Q&A, offline-first Room DB, Firebase. Presented at Computer Vision Projects Expo 2024.',
    stack: ['Kotlin', 'ARCore', 'GPT-3.5', 'Firebase'],
    year: '2024',
    link: null,
    gridCol: '7 / 13',
    gridRow: '1 / 2',
    bg: 'var(--surface)',
    dark: false,
  },
  {
    id: 'image-segmentation',
    title: 'Image Segmentation',
    badge: null,
    featured: false,
    description:
      'Flutter mobile app running DeepLab V3 and BiseNet via TFLite on-device. Team lead (15/31 commits). Presented at SIT Computer Vision Expo 2024.',
    stack: ['Flutter', 'TFLite', 'DeepLab V3', 'BiseNet'],
    year: '2024',
    link: null,
    gridCol: '7 / 10',
    gridRow: '2 / 3',
    bg: 'var(--surface)',
    dark: false,
  },
  {
    id: 'carousell-automation',
    title: 'Carousell Automation',
    badge: null,
    featured: false,
    description:
      'Puppeteer automation for bulk Carousell messaging — solved a real procurement workflow problem.',
    stack: ['Node.js', 'Puppeteer'],
    year: '2023',
    link: null,
    gridCol: '10 / 13',
    gridRow: '2 / 3',
    bg: 'var(--cream)',
    dark: false,
  },
  {
    id: 'kickstand-mobile',
    title: 'Kickstand Mobile',
    badge: 'In Progress',
    featured: false,
    description:
      'AI voice agent for Singapore motorcycle owners. Tracks maintenance, road tax, COE, insurance. Conversational interface over bike history.',
    stack: ['React Native', 'NestJS', 'Mastra', 'Supabase', 'Claude API'],
    year: '2026',
    link: null,
    gridCol: '1 / 7',
    gridRow: '3 / 4',
    bg: 'var(--surface)',
    dark: false,
  },
  {
    id: 'cap-mcp-plugin',
    title: 'cap-mcp-plugin',
    badge: 'Open Source',
    featured: false,
    description:
      'Contribution to gavdilabs/cap-mcp-plugin — MCP protocol plugin for SAP CAP. Tied to capstone research work.',
    stack: ['SAP CAP', 'MCP', 'TypeScript'],
    year: '2025',
    link: 'https://github.com/gavdilabs/cap-mcp-plugin',
    gridCol: '7 / 13',
    gridRow: '3 / 4',
    bg: 'var(--surface)',
    dark: false,
  },
]
```

- [ ] **Step 2: Create src/data/experience.js**

```js
export const experiences = [
  {
    id: 'mymediset',
    period: 'May 2025 – Present',
    location: 'Singapore',
    company: 'Mymediset (BIT Consultant Pte Ltd)',
    role: 'Software Development & Innovation Intern',
    description:
      'Built AI booking chatbot through 4 architectural iterations. Contributed to open-source CAP MCP Plugin. Supervised by Prof Mahesh Panicker (SIT) and Head of Platform Engineering.',
  },
  {
    id: 'denso',
    period: 'Mar 2019 – Sep 2019',
    location: 'Singapore',
    company: 'Denso Wave Singapore',
    role: 'Engineering Intern',
    description: 'Automated firmware test pipelines using VBA and Python.',
  },
]

export const education = [
  {
    id: 'sit',
    period: '2022 – 2026',
    institution: 'Singapore Institute of Technology',
    degree: 'BEng (Hons) ICT — Software Engineering',
  },
  {
    id: 'np',
    period: '2016 – 2020',
    institution: 'Ngee Ann Polytechnic',
    degree: 'Diploma in Computer Engineering',
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.js src/data/experience.js
git commit -m "feat: add content data files for projects and experience"
```

---

## Task 4: Nav component

**Files:**
- Create: `src/components/Nav.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Nav.jsx**

```jsx
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 2rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        backgroundColor: scrolled ? 'oklch(98% 0.01 15 / 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--ink)',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        M. Hidayah<span style={{ color: 'var(--red)' }}>.</span>
      </a>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: '0.8rem',
              fontWeight: 400,
              color: 'var(--ink-muted)',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target.style.color = 'var(--ink)')}
            onMouseLeave={e => (e.target.style.color = 'var(--ink-muted)')}
          >
            {label}
          </a>
        ))}

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          download
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#fff',
            backgroundColor: 'var(--red)',
            padding: '0.4rem 0.9rem',
            borderRadius: '4px',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.target.style.opacity = '0.85')}
          onMouseLeave={e => (e.target.style.opacity = '1')}
        >
          Resume ↓
        </a>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Update App.jsx to include Nav**

```jsx
import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        {/* sections will go here */}
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify nav renders**

```bash
npm run dev
```
Expected: sticky nav at top with logo "M. Hidayah." (red period), four links, red Resume button. On scroll, nav gains blur background. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.jsx src/App.jsx
git commit -m "feat: add sticky nav with scroll blur"
```

---

## Task 5: Hero section

**Files:**
- Create: `src/components/Hero.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Hero.jsx**

```jsx
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(1.5rem, 5vw, 7rem)',
        paddingTop: '80px',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ maxWidth: '900px' }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--teal-light)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          Software Engineer · Singapore
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'var(--teal-dark)',
            marginBottom: '0.1em',
          }}
        >
          Muhammad /
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'var(--teal-dark)',
            marginBottom: '2rem',
          }}
        >
          Hidayah<span style={{ color: 'var(--red)' }}>.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            color: 'var(--ink-muted)',
            marginBottom: '1.5rem',
          }}
        >
          I build{' '}
          <TypeAnimation
            sequence={[
              'AI Agents.', 2000,
              'Mobile Apps.', 2000,
              'Web Experiences.', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: 'var(--red)', fontStyle: 'italic' }}
          />
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--ink-muted)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Final-year Software Engineering student at SIT, graduating August 2026.
          I specialise in AI-integrated systems, mobile, and full-stack web — currently building enterprise AI at Mymediset.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.7rem 1.5rem',
              backgroundColor: 'var(--teal-dark)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.85rem',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View my work →
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.7rem 1.5rem',
              border: '1px solid var(--teal-dark)',
              color: 'var(--teal-dark)',
              fontWeight: 600,
              fontSize: '0.85rem',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--teal-dark)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--teal-dark)'
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Add Hero to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify hero renders**

```bash
npm run dev
```
Expected: full-viewport hero with large Fraunces name, typewriter cycling "AI Agents / Mobile Apps / Web Experiences" in red italic, two CTAs. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.jsx src/App.jsx
git commit -m "feat: add hero section with framer motion stagger and typewriter"
```

---

## Task 6: About section

**Files:**
- Create: `src/components/About.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create About.jsx**

```jsx
import { motion } from 'framer-motion'

const skills = [
  'React', 'React Native', 'TypeScript', 'Node.js', 'NestJS',
  'Flutter', 'Kotlin', 'Python', 'SAP CAP', 'MCP Protocol',
  'Claude API', 'Supabase', 'Firebase', 'Framer Motion', 'Vite',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        01 · About
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left: bio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--teal-dark)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            Engineer who moves between layers.
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--ink-muted)', marginBottom: '1rem' }}>
            I'm a final-year Software Engineering student at SIT (graduating August 2026), currently building
            enterprise AI at Mymediset as part of my capstone. My work spans AI agent design, mobile
            development, and full-stack web — with a preference for systems that feel fast and intentional.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
            Outside of work I'm building Kickstand, an AI voice agent for Singapore motorcycle owners.
            I care about developer experience, clear architecture, and shipping things that actually work.
          </p>
        </motion.div>

        {/* Right: skill tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--teal-light)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Technologies
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map(skill => (
              <span
                key={skill}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  padding: '0.35rem 0.75rem',
                  border: '1px solid var(--teal-light)',
                  borderRadius: '999px',
                  color: 'var(--teal-dark)',
                  letterSpacing: '0.01em',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add About to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <About />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify section renders**

```bash
npm run dev
```
Expected: 2-column layout — left bio text, right skill pill tags with teal border. Fade-up on scroll. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.jsx src/App.jsx
git commit -m "feat: add about section with bio and skill pills"
```

---

## Task 7: WorkCard component

**Files:**
- Create: `src/components/WorkCard.jsx`

- [ ] **Step 1: Create WorkCard.jsx**

```jsx
import { motion } from 'framer-motion'

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function WorkCard({ project }) {
  const {
    title, badge, description, stack, year, link,
    gridCol, gridRow, bg, dark,
  } = project

  const textColor = dark ? '#fff' : 'var(--ink)'
  const mutedColor = dark ? 'rgba(255,255,255,0.65)' : 'var(--ink-muted)'
  const tagBg = dark ? 'rgba(255,255,255,0.12)' : 'transparent'
  const tagBorder = dark ? 'rgba(255,255,255,0.25)' : 'var(--teal-light)'
  const tagColor = dark ? 'rgba(255,255,255,0.85)' : 'var(--teal-dark)'

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        backgroundColor: bg,
        backgroundImage: dark
          ? 'radial-gradient(ellipse at 70% 20%, rgba(140,199,196,0.18) 0%, transparent 65%)'
          : 'none',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        cursor: link ? 'pointer' : 'default',
      }}
      onClick={() => link && window.open(link, '_blank', 'noopener noreferrer')}
    >
      {/* Badge */}
      {badge && (
        <span
          style={{
            alignSelf: 'flex-start',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.25rem 0.6rem',
            borderRadius: '999px',
            backgroundColor: dark ? 'rgba(255,255,255,0.18)' : 'var(--red)',
            color: dark ? '#fff' : '#fff',
          }}
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: dark ? '1.6rem' : '1.05rem',
          fontWeight: 700,
          color: dark ? '#fff' : 'var(--red)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          flex: dark ? 1 : 0,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.82rem',
          fontWeight: 300,
          color: mutedColor,
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {description}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {stack.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.65rem',
                fontWeight: 400,
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: `1px solid ${tagBorder}`,
                backgroundColor: tagBg,
                color: tagColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <span style={{ fontSize: '0.8rem', color: dark ? '#fff' : 'var(--teal-dark)' }}>↗</span>
        )}
      </div>
    </motion.article>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/WorkCard.jsx
git commit -m "feat: add WorkCard component for bento grid"
```

---

## Task 8: Works bento grid section

**Files:**
- Create: `src/components/Works.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Works.jsx**

```jsx
import { motion } from 'framer-motion'
import WorkCard from './WorkCard.jsx'
import { projects } from '../data/projects.js'

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export default function Works() {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        02 · Work
      </motion.p>

      {/* Bento Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: '12px',
        }}
      >
        {projects.map(project => (
          <WorkCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Add Works to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <About />
        <Works />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify bento grid renders**

```bash
npm run dev
```
Expected: 12-column bento grid — AI Booking Chatbot card occupies ~half width at double height with dark teal background, other 5 cards fill remaining positions. Cards lift on hover. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Works.jsx src/App.jsx
git commit -m "feat: add works bento grid with stagger animation"
```

---

## Task 9: Experience section

**Files:**
- Create: `src/components/Experience.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Experience.jsx**

```jsx
import { motion } from 'framer-motion'
import { experiences } from '../data/experience.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        03 · Experience
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: '3rem',
              padding: '2rem 0',
              borderTop: i === 0 ? 'none' : '1px solid var(--border)',
            }}
          >
            {/* Left: period + location */}
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--ink-muted)', marginBottom: '0.25rem' }}>
                {exp.period}
              </p>
              <p style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--teal-light)', letterSpacing: '0.04em' }}>
                {exp.location}
              </p>
            </div>

            {/* Right: company, role, description */}
            <div>
              <p
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--teal-light)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                {exp.company}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--red)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                {exp.role}
              </h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Experience to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Experience from './components/Experience.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <About />
        <Works />
        <Experience />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify section renders**

```bash
npm run dev
```
Expected: 2-column rows per experience entry — period/location left, company + role (red) + description right. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.jsx src/App.jsx
git commit -m "feat: add experience section with 2-col timeline rows"
```

---

## Task 10: Education section

**Files:**
- Create: `src/components/Education.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Education.jsx**

```jsx
import { motion } from 'framer-motion'
import { education } from '../data/experience.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        04 · Education
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              paddingTop: i > 0 ? '0' : '0',
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--teal-light)', marginBottom: '0.5rem' }}>
              {edu.period}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--teal-dark)',
                letterSpacing: '-0.02em',
                marginBottom: '0.35rem',
              }}
            >
              {edu.institution}
            </h3>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--ink-muted)' }}>
              {edu.degree}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Education to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <About />
        <Works />
        <Experience />
        <Education />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify section renders**

```bash
npm run dev
```
Expected: 2-column side-by-side SIT and NP entries with period, institution name, and degree. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Education.jsx src/App.jsx
git commit -m "feat: add education section"
```

---

## Task 11: Contact section

**Files:**
- Create: `src/components/Contact.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Contact.jsx**

```jsx
import { motion } from 'framer-motion'

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-hidayah/' },
  { label: 'GitHub', href: 'https://github.com/Muhammad-Hidayah' },
  { label: 'Email', href: 'mailto:muhd.hidayah@outlook.com' },
  { label: 'Resume PDF', href: '/resume.pdf' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        05 · Contact
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left: heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--teal-dark)',
            }}
          >
            Open to{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
              opportunities
            </span>
            <span style={{ color: 'var(--red)' }}>.</span>
          </h2>
          <p style={{ marginTop: '1.25rem', fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
            Graduating August 2026. Interested in full-time roles in Singapore or remote — frontend, mobile, or full-stack.
          </p>
        </motion.div>

        {/* Right: links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ paddingTop: '0.5rem' }}
        >
          {contactLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'var(--ink)',
                fontSize: '0.95rem',
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--teal-dark)'
                e.currentTarget.querySelector('.arrow').style.transform = 'translateX(4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--ink)'
                e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0)'
              }}
            >
              <span>{label}</span>
              <span
                className="arrow"
                style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}
              >
                →
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          marginTop: '5rem',
          fontSize: '0.75rem',
          fontWeight: 400,
          color: 'var(--ink-muted)',
          textAlign: 'center',
          letterSpacing: '0.02em',
        }}
      >
        © 2026 Muhammad Hidayah. Built with React + Vite.
      </motion.p>
    </section>
  )
}
```

- [ ] **Step 2: Add Contact to App.jsx**

```jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <About />
        <Works />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify section renders**

```bash
npm run dev
```
Expected: 2-column contact section — large "Open to opportunities." heading left, link list (LinkedIn, GitHub, Email, Resume) right with arrows that slide right on hover. Footer at bottom. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.jsx src/App.jsx
git commit -m "feat: add contact section with link list and footer"
```

---

## Task 12: Full visual pass and production build

**Files:**
- Review: all component files for spacing, alignment, responsive behaviour
- Modify: any component where layout breaks on small viewport

- [ ] **Step 1: Run production build**

```bash
npm run build
```
Expected: Vite outputs `dist/` with no errors. Note any warnings.

- [ ] **Step 2: Preview production build locally**

```bash
npm run preview
```
Open `http://localhost:4173` in browser. Check each section:
- Nav: blur appears on scroll
- Hero: name, typewriter, CTAs render correctly; font loads
- About: 2-col layout, pills wrap cleanly
- Works: 12-col bento grid — featured card spans 6 col × 2 row
- Experience: 2-col rows divide cleanly
- Education: 2-col side by side
- Contact: 2-col, arrow hover works

Stop preview with Ctrl+C.

- [ ] **Step 3: Add mobile breakpoint to About**

The 2-col grid should collapse to 1-col on narrow viewports. Inline styles don't support media queries, so use a `<style>` tag approach. At the top of `About.jsx`, add inside the component's JSX before the section:

```jsx
<style>{`
  @media (max-width: 640px) {
    .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
  }
`}</style>
```

And add `className="about-grid"` to the grid `<div>`.

- [ ] **Step 4: Add mobile breakpoint to Contact**

Same pattern in `Contact.jsx`:

```jsx
<style>{`
  @media (max-width: 640px) {
    .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .contact-heading { font-size: clamp(1.75rem, 8vw, 2.5rem) !important; }
  }
`}</style>
```

Add `className="contact-grid"` to the grid `<div>` and `className="contact-heading"` to the `<h2>`.

- [ ] **Step 5: Add mobile breakpoint to bento grid**

In `Works.jsx`, add a scoped style to collapse bento to single column on mobile:

```jsx
<style>{`
  @media (max-width: 768px) {
    .bento-grid > article {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
`}</style>
```

Add `className="bento-grid"` to the grid `<div>`.

- [ ] **Step 6: Add mobile breakpoint to Nav**

On narrow viewports, hide the nav links and show only logo + Resume button. In `Nav.jsx`:

```jsx
<style>{`
  @media (max-width: 640px) {
    .nav-links { display: none !important; }
  }
`}</style>
```

Add `className="nav-links"` to the links `<div>`.

- [ ] **Step 7: Rebuild and preview**

```bash
npm run build && npm run preview
```

Resize browser to 375px width. Verify: bento cards stack vertically, About/Contact go single column, nav shows only logo + Resume button. Stop preview.

- [ ] **Step 8: Commit**

```bash
git add src/components/About.jsx src/components/Contact.jsx src/components/Works.jsx src/components/Nav.jsx
git commit -m "feat: add mobile responsive breakpoints to grid layouts and nav"
```

---

## Task 13: Deploy to GitHub Pages

**Files:**
- No code changes

- [ ] **Step 1: Ensure remote is correct**

```bash
git remote -v
```
Expected: `origin` points to `https://github.com/Muhammad-Hidayah/Muhammad-Hidayah.github.io` (or SSH equivalent).

- [ ] **Step 2: Run deploy**

```bash
npm run deploy
```
Expected output:
```
> predeploy
> npm run build
...
Published
```

The `gh-pages` package builds `dist/` then force-pushes to the `gh-pages` branch (or `main` depending on GitHub Pages settings).

- [ ] **Step 3: Verify GitHub Pages source setting**

Go to `https://github.com/Muhammad-Hidayah/Muhammad-Hidayah.github.io/settings/pages`.
Ensure **Source** is set to **Deploy from a branch** → branch: `gh-pages`, folder: `/ (root)`.

If the repo is `Muhammad-Hidayah.github.io` (user pages repo), GitHub Pages may serve from `main` by default — in that case, change the deploy script to push to `main`:

```bash
# Alternative: if GH Pages serves from main
npx gh-pages -d dist -b main
```

- [ ] **Step 4: Wait for deployment and verify**

After ~60 seconds, open `https://muhammad-hidayah.github.io` in browser.
Expected: full portfolio page loads with all sections, fonts, and animations.

- [ ] **Step 5: Commit deploy config if changed**

If you modified the deploy script in step 3:
```bash
git add package.json
git commit -m "chore: set gh-pages deploy branch to main for user pages repo"
```
