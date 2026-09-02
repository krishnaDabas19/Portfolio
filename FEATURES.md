# Krishna Dabas Portfolio — Complete Feature Breakdown

This document provides a comprehensive technical breakdown of all features, architecture patterns, and design decisions implemented in the **Krishna Dabas Editorial Developer Portfolio**.

---

## 🎨 1. Design Identity & Theme System

- **Clean Editorial Dev-Aesthetic**: Single-column layout with generous whitespace, confident typography hierarchy, and zero distracting gimmicks.
- **Dark Palette**: Deep charcoal / near-black background (`#0A0A0F`), dark card surfaces (`#12121A` / `#161B22`), and subtle borders (`rgba(255, 255, 255, 0.08)`).
- **ONE Restrained Accent Color**: Electric Teal / Emerald (`#14B8A6` / `#2DD4BF`), used sparingly for monospace tags (`// skills`, `// projects`), active links, indicators, and button highlights.
- **Typography Hierarchy**:
  - **Headings**: `Space Grotesk` (modern geometric sans-serif for H1/H2/H3).
  - **Body Text**: `Inter` (high-legibility neutral sans-serif).
  - **Monospace Elements**: `JetBrains Mono` for `// tags`, code labels, and coordinate metrics.
- **Signature Hero Visual**: Isometric blueprint schematic grid in pure CSS/SVG with dynamic mouse perspective tilt and pulsing connection nodes.

---

## 🧭 2. Navigation & Global Controls

- **Shrinking Glass Navbar**: Automatically shrinks padding and introduces a subtle backdrop blur on scroll (`scrollY > 40`).
- **Monogram Logo ("KD")**: Minimal circular initials badge in the navbar that smoothly navigates to the top.
- **Active Section Highlighting**: Real-time scroll spy that underlines the active nav link with a crisp electric teal indicator.
- **Mobile Navigation Drawer**: Smooth slide-in menu for small screens with monospace formatted section links.
- **Scroll Progress Bar**: A 2px electric teal line fixed at the top of the viewport tracking reading progress in real time.
- **Precision Custom Cursor**: Interactive dot and trailing ring that snaps and scales over clickable targets (automatically disabled on touch devices).

---

## 🌟 3. Section Breakdown

### 1. Hero Section (`#hero`)
- Monospace status pill: `// Available for opportunities` with animated ping indicator.
- Bold Space Grotesk headline: `Hi, I'm Krishna Dabas` with electric teal accent.
- Tagline and code-style descriptor explaining full-stack web and AI/ML focus.
- Dual CTAs: Primary "View Work" and secondary "Get in Touch".
- Interactive profile card with terminal status bar, profile avatar, and fallback SVG.
- Quick social icons row: GitHub, LinkedIn, and Email.

### 2. About Section (`#about`)
- Section header: `// about` — "Background & Mindset".
- Academic and engineering narrative focusing on AI/ML at Lovely Professional University.
- **"Now Building & Exploring" Ticker Card**: Displays active focus areas in terminal format with `❯` markers.
- **Soft Skills Badges**: Rounded pills with checkmarks for Problem Solving, Team Collaboration, Communication, Time Management, and Adaptability.
- **Download Resume Action**: Direct PDF download button with hover elevation.
- **Schematic SVG Divider**: Animated architectural divider line.

### 3. Technical Arsenal (`#skills`)
- Section header: `// skills` — "Technical Arsenal".
- **Categorized Pill Tags (Exactly 4 Categories)**:
  1. `Languages`: C, C++, Python, JavaScript
  2. `Web Technologies`: HTML, CSS, JavaScript, React.js, Node.js
  3. `Databases & Tools`: MySQL, MongoDB, Git, GitHub *(Figma and VS Code excluded)*
  4. `Soft Skills`: Problem Solving, Team Collaboration, Communication, Time Management, Adaptability
- **Interactive Tooltips**: Hovering or focusing any skill pill reveals proficiency level and focus concepts.

### 4. Things I've Built (`#projects`)
- Section header: `// projects` — "Things I've Built".
- **Category Filter Tabs**: `All`, `Web Dev`, `C++/DSA`.
- **Scan-Line Reveal Effect**: Hovering a project card triggers a sweeping gradient scan-line and transitions the border to an electric teal glow.
- **Card Contents**:
  - Category badge + Project duration (e.g., `Jan 2026 – Feb 2026`).
  - Space Grotesk project title with teal hover transition.
  - Problem & solution summary paragraph.
  - Key technical feature bullet points with `❯` bullet markers.
  - Tech stack pill tags.
  - Action links: "View Code" (GitHub) and "Live Demo".

### 5. Milestones & Activities (`#achievements`)
- Section header: `// achievements` — "Milestones & Activities".
- 3-card responsive grid:
  1. Technical Events & Hackathons
  2. 50+ Coding Problems Solved (DSA in C++)
  3. AI & Web Exploration
- **Animated Counter**: Count-up animation triggering when numbers enter the viewport.

### 6. Academic Background (`#education`)
- Section header: `// education` — "Academic Background".
- **Vertical Timeline**:
  - Glowing teal timeline nodes.
  - Lovely Professional University (B.Tech CSE AI & ML, CGPA: 6.23, Aug 2025 – Present).
  - DAV Public School (12th Grade: 86%, 10th Grade: 89%).
  - Detailed coursework and academic records.

### 7. Collaborations & Notes (`#testimonials`)
- Section header: `// testimonials` — "Collaborations & Notes".
- Clean peer notes and mentorship feedback cards.

### 8. Get in Touch (`#contact`)
- Section header: `// contact` — "Get in Touch".
- Direct details: Email, Phone, Location.
- **Copy Email with Toast**: Copies `krishnadabas19@gmail.com` to clipboard and triggers an animated confirmation popup.
- **Validated Contact Form**: Full-width form with client-side validation and backend submission hooks.

### 9. Footer
- Copyright notice with dynamic current year.
- Space Grotesk and JetBrains Mono branding.
- Quick social icons and "Back to Top" smooth scrolling button.

---

## 📦 4. Centralized Data Architecture

All content is decoupled from UI components and cleanly structured inside **`src/data/portfolioData.js`**:
- `personalInfo`: Core developer profile details and social links.
- `skillsData`: 4 exact categories with tooltips.
- `projectsData`: Structured projects with features, tags, and URLs.
- `achievementsData`: Milestones and metrics.
- `educationData`: Academic timeline entries.
- `testimonialsData`: Feedback quotes.
