# Krishna Dabas — Editorial Developer Portfolio

A responsive, high-performance, editorial dev-portfolio website for **Krishna Dabas** (B.Tech CSE with specialization in AI & ML at Lovely Professional University). Built with **React 19**, **Tailwind CSS v4**, **Vite 8**, and **Framer Motion**.

---

## ✨ Style & Design Direction

- **Clean Editorial Aesthetic**: Single-column layout with generous whitespace, confident typography, and zero distracting gimmicks.
- **Monospace Section Headers**: Preceded by accent tags (`// about`, `// skills`, `// projects`, `// achievements`, `// education`, `// contact`).
- **Dark Theme by Default with Instant Light/Dark Mode Switcher**: Preserves user preference in `localStorage`.
- **Restrained Electric Teal / Emerald Accent**: Used sparingly for tags, links, status indicators, and active states.
- **Inter & JetBrains Mono Fonts**: High legibility sans-serif paired with crisp code typography.

---

## 🚀 Key Features

1. **Top Scroll Progress Bar**: Minimalist 2px electric teal line tracking reading progress.
2. **Dynamic Navbar with "KD" Monogram**: Shrinks on scroll, includes active section highlight, smooth scroll navigation, theme switcher, and mobile drawer.
3. **Hero Section**: Circular profile image with fallback SVG, clear tagline, dual CTAs ("View Work" & "Get in Touch"), and clean social links.
4. **About Section (`// about`)**: Academic focus, "Now Building & Exploring" terminal card, soft skills pills, and "Download Resume (PDF)" button.
5. **Technical Arsenal (`// skills`)**: Categorized into *Languages*, *Web Technologies*, *Databases & Tools*, and *Soft Skills* with interactive hover tooltips displaying proficiency and focus areas.
6. **Things I've Built (`// projects`)**: Category filter tabs (*All*, *Web Dev*, *C++/DSA*), structured cards with duration badges, bullet points, tech stack tags, and links.
7. **Milestones (`// achievements`)**: 3-card layout with animated count-up numbers (50+ DSA problems, events, and AI exploration).
8. **Education Timeline (`// education`)**: Vertical timeline displaying degree details, institutions (LPU, DAV Public School), CGPA/percentages, and coursework.
9. **Testimonials (`// testimonials`)**: Clean placeholder cards ready for future peer/mentor quotes.
10. **Contact Section (`// contact`)**: Direct email, phone, location, one-click "Copy Email" with instant Toast notification, and a client-validated contact form with backend integration hooks.
11. **SEO Ready**: Open Graph meta tags, Twitter card, favicon monogram, and accessibility compliant markup.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg                # KD monogram favicon
│   └── assets/
│       ├── profile.jpg            # Drop your real profile photo here!
│       ├── profile.svg            # Fallback avatar
│       └── resume.pdf             # Drop your real resume PDF here!
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Top navigation with KD monogram & theme switch
│   │   ├── ScrollProgressBar.jsx  # Fixed scroll indicator
│   │   ├── Preloader.jsx          # Initial load animation
│   │   ├── Hero.jsx               # Landing section
│   │   ├── About.jsx              # Bio, now building & soft skills
│   │   ├── Skills.jsx             # Categorized pills with hover tooltips
│   │   ├── Projects.jsx           # Filterable project cards
│   │   ├── Achievements.jsx       # Milestones with animated counter
│   │   ├── Education.jsx          # Academic timeline
│   │   ├── Testimonials.jsx       # Peer quotes
│   │   ├── Contact.jsx            # Form & copy-email toast
│   │   ├── Footer.jsx             # Copyright & back-to-top
│   │   ├── Toast.jsx              # Notification toast
│   │   ├── AnimatedCounter.jsx    # Count-up statistics component
│   │   └── Icons.jsx              # Pixel-perfect SVG brand icons
│   ├── data/
│   │   └── portfolioData.js       # ⭐️ Centralized dataset for all content
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Intersection observer hook
│   ├── App.jsx                    # Root component layout
│   ├── index.css                  # Global Tailwind v4 theme variables
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛠️ How to Customize

### 1. Update Content (Projects, Skills, Bio, Contact)
All text, links, and content are stored in **`src/data/portfolioData.js`**.
Simply edit the exported objects:
- `personalInfo`: Name, email, phone, bio, and social links.
- `skillsData`: Add or remove skills and tooltips.
- `projectsData`: Add new projects with title, tech stack, description, and links.
- `educationData`: Update degrees, scores, or coursework.

### 2. Replace Profile Photo
Place your image at `public/assets/profile.jpg`. The Hero component will automatically load it (with fallback to `profile.svg`).

### 3. Replace Resume PDF
Place your updated resume file at `public/assets/resume.pdf`.

### 4. Connect Contact Form to Backend
In `src/components/Contact.jsx`, replace the placeholder submit handler with your service of choice (e.g. [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or your own backend API).

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```
