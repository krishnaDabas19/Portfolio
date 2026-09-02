# Project Summary: Krishna Dabas Developer Portfolio

A high-performance personal developer portfolio built for **Krishna Dabas**, B.Tech Computer Science and Engineering (AI & ML) student at Lovely Professional University.

---

## 🎯 Architecture & Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 19 (`react`, `react-dom`) |
| **Bundler & Build** | Vite 8 with `@vitejs/plugin-react` |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) |
| **Animations** | Framer Motion & CSS SVG Stroke Transitions |
| **Icons** | Lucide React (`lucide-react`) & Custom SVG marks |
| **Linter** | Oxlint (`oxlint`) |
| **Deployment** | GitHub Pages via `gh-pages` branch |

---

## 🎨 Design System & Theme Spec

- **Aesthetic**: Editorial dev-portfolio with generous whitespace and clear hierarchy.
- **Palette**:
  - Background: Deep charcoal / near-black (`#0A0A0F`)
  - Surface & Cards: `#12121A` / `#161B22` with `1px rgba(255, 255, 255, 0.08)` border
  - Accent: **ONE Electric Teal / Emerald** (`#14B8A6` / `#2DD4BF`)
  - Typography: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code & Tags)
- **Visual Features**:
  - Isometric Blueprint Schematic Grid in Hero
  - Scan-line hover reveal on project cards
  - Terminal masked wipe on section headings
  - Pill tags in 4 categories (Languages, Web Technologies, Databases & Tools, Soft Skills) with hover tooltips
  - Filterable projects (`All`, `Web Dev`, `C++/DSA`)
  - Custom precision cursor

---

## 📁 Key File Index

- `src/data/portfolioData.js`: Centralized data store for all portfolio text and links.
- `src/index.css`: Design tokens, typography variables, scan line keyframes, and global styles.
- `src/components/Hero.jsx`: Landing section with isometric blueprint grid.
- `src/components/About.jsx`: Academic narrative, active focus ticker, and resume download.
- `src/components/Skills.jsx`: 4 categorized pill groups with hover tooltips.
- `src/components/Projects.jsx`: Filterable project cards with scan line hover effect.
- `src/components/Achievements.jsx`: 3 milestone cards with animated counter.
- `src/components/Education.jsx`: Academic timeline with LPU & DAV Public School.
- `src/components/Testimonials.jsx`: Peer and mentor notes.
- `src/components/Contact.jsx`: Direct contact details, copy email toast, and form.
- `src/components/CustomCursor.jsx`: Trailing custom cursor.

---

## 🚀 Live Links

- **Live Site**: [https://krishnadabas19.github.io/Portfolio/](https://krishnadabas19.github.io/Portfolio/)
- **Repository**: [https://github.com/krishnaDabas19/Portfolio](https://github.com/krishnaDabas19/Portfolio)
