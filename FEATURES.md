# Portfolio Features & Components Documentation

## 🎯 Overview

This portfolio website is a comprehensive showcase of Krishna Dabas's skills, projects, and achievements. It features a modern dark-themed design with electric blue accents and smooth, interactive animations throughout.

---

## 📦 Component Breakdown

### 1. **Navbar** (`Navbar.jsx`)
**Features:**
- Fixed positioning with smooth scroll-lock enhancement
- Active section highlighting based on scroll position
- Smooth navigation with scroll-to-section functionality
- Glass-morphism effect that enhances on scroll
- Animated pulsing dot in logo
- Fully responsive dropdown-ready structure

**Key Elements:**
- Logo with animated accent dot
- Navigation menu with 7 main sections
- Active state underline animation
- Transforms on scroll (backdrop blur, border color)

**Responsive:**
- Desktop: Full horizontal menu
- Mobile: Menu items stack responsively

---

### 2. **Hero Section** (`Hero.jsx`)
**Features:**
- Full viewport height landing section
- Animated typing effect for dynamic role text
- Gradient blob background animations
- Grid pattern overlay
- Smooth scroll reveal animation
- Multiple CTA buttons with different styles
- Direct contact links
- Scroll indicator animation

**Key Animations:**
- Blob float animation (perpetual movement)
- Text typing/deleting effect with automatic rotation
- Cursor blinking animation
- Scroll wheel animation
- Staggered element animations (slide-down)

**Interactive Elements:**
- "View Projects" button (gradient, shadow effects)
- "Contact Me" button (transparent with border)
- Email and phone quick links
- Scroll indicator with wheel animation

---

### 3. **About Section** (`About.jsx`)
**Features:**
- Scroll-reveal animation using custom hook
- Professional bio with highlighted keywords
- Soft skills badges with hover effects
- Organized layout with semantic structure
- Decorative background elements

**Key Elements:**
- Section title with animated underline
- Multiline bio with text emphasis
- 5 soft skills (Problem Solving, Team Collaboration, Communication, Time Management, Adaptability)
- Checkmark icons on skill badges

**Animations:**
- Fade-in and slide-up on scroll
- Hover scale and glow effects on skill badges
- Color transitions on hover

---

### 4. **Skills Section** (`Skills.jsx`)
**Features:**
- Category-based skill organization (3 categories)
- Animated skill progress bars
- Icon representation for each category
- Hover effects on skill cards
- Smooth bar fill animation

**Skills Organized By:**
1. **Languages**: C, C++, Python, JavaScript
2. **Web Technologies**: HTML, CSS, JavaScript, React.js, Node.js
3. **Databases & Tools**: MySQL, MongoDB, Git, GitHub, Figma, VS Code

**Animations:**
- Progress bar fill animation (staggered)
- Card lift on hover
- Border and background color transitions
- Icon emoji display

---

### 5. **Projects Section** (`Projects.jsx`)
**Features:**
- Card-based grid layout with 2 featured projects
- Hover effects with gradient shimmer
- Tech stack tags for each project
- Project period badges
- Dual color schemes (blue and purple accents)
- Direct GitHub and Demo links
- Project metadata display

**Projects Showcase:**
1. **Orvexon Studio** - Creative Portfolio Platform
   - Tech: React.js, HTML, CSS, JavaScript, Figma
   - Period: Jan–Feb 2026

2. **Student Record Management System** - CRUD Application
   - Tech: C++, Data Structures, File Handling, OOP
   - Period: Mar–Apr 2026

**Animations:**
- Hover lift with enhanced shadow
- Shimmer effect on hover
- Tech badge hover effects
- Link hover states with icon movement

---

### 6. **Achievements Section** (`Achievements.jsx`)
**Features:**
- Achievement cards with icon display
- Milestone statistics grid
- Staggered animation on scroll
- Hover bounce animation
- Achievement line animation

**Achievements Listed:**
1. Technical Events participation
2. 50+ programming problems solved
3. AI/ML & Web Development exploration

**Statistics:**
- 2 Projects Completed
- 50+ DSA Problems
- 3 Tech Categories

**Animations:**
- Slide-in-up on scroll (staggered)
- Icon bounce animation
- Hover lift and glow
- Animated line reveal on hover

---

### 7. **Education Section** (`Education.jsx`)
**Features:**
- Timeline vertical layout
- Timeline marker icons with gradient
- Animated connector line
- Education cards with details
- Score/CGPA display

**Education Entries:**
1. **B.Tech CSE (AI & ML)** - Lovely Professional University
   - CGPA: 6.23/10
   - Period: Aug 2025 – Present

2. **Higher Secondary (12th)** - DAV Public School, Delhi
   - Score: 86%
   - Period: 2024–2025

3. **Secondary (10th)** - DAV Public School, Delhi
   - Score: 89%
   - Period: 2022–2023

**Animations:**
- Slide-in-left on scroll
- Timeline marker icons with gradient backgrounds
- Card hover lift effects

---

### 8. **Contact Section** (`Contact.jsx`)
**Features:**
- Contact information quick links (4 channels)
- Functional contact form
- Form submission feedback
- Icon-based social links
- Responsive form layout

**Contact Methods:**
- 📧 Email: krishnadabas19@gmail.com
- 📱 Phone: +91-8512004546
- 💼 LinkedIn: krishna-dabas
- 🐙 GitHub: @dabaskrishna

**Form Features:**
- Name, Email, Message fields
- Form validation
- Submission success feedback
- Input focus effects

**Animations:**
- Hover effects on contact links
- Form input focus glow
- Submit button hover effects
- Success message animation

---

### 9. **Footer** (`Footer.jsx`)
**Features:**
- Organized footer sections
- Social media links with hover effects
- Quick navigation links
- Copyright information
- Scroll-to-top functionality
- Decorative top border

**Footer Content:**
- Personal branding section
- Quick navigation to main sections
- Social links (GitHub, LinkedIn, Email)
- Copyright year auto-update

**Animations:**
- Social link hover effects
- Scroll-to-top button animation
- Link underline animation on hover

---

## 🎨 Design System

### Colors
```css
Primary: #0096ff (Electric Blue)
Secondary: #7c3aed (Purple)
Background: #0a0f23 - #1a1f3a (Dark Navy)
Text: #ffffff, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6)
```

### Typography
- **Headings**: Bold system fonts (1.5rem - 3.5rem)
- **Body**: Regular sans-serif (1rem - 1.1rem)
- **Line Height**: 1.6 for readability

### Spacing
- **Section Padding**: 6rem vertical, 2rem horizontal
- **Component Gaps**: 1rem - 3rem
- **Responsive**: Scales down on smaller screens

### Border Radius
- Cards: 8-12px
- Buttons: 6-8px
- Icons/Badges: 20px+ (pill-shaped)

---

## 🎭 Animation Library

### Custom Animations Used Across Components:

1. **fadeInUp** - Fade in while moving up
2. **slideInFromLeft** - Slide from left with fade
3. **slideInFromRight** - Slide from right with fade
4. **float** - Perpetual floating motion
5. **pulse** - Opacity pulse
6. **bounce** - Vertical bounce
7. **expandWidth** - Width expansion
8. **fillBar** - Progress bar fill
9. **scrollDown** - Scroll indicator movement
10. **bounceUp** - Bounce upward motion

### Intersection Observer Hook (`useScrollAnimation.js`)

```javascript
// Usage pattern:
const [ref, isVisible] = useScrollAnimation();

// Add class when visible:
<div className={`content ${isVisible ? 'visible' : ''}`} ref={ref}>
  <!-- Content -->
</div>

// CSS:
.visible {
  animation: fadeInUp 0.8s ease;
}
```

---

## 📱 Responsive Design

### Breakpoints:
- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768px - 1024px (optimized grids)
- **Mobile**: Below 768px (single column)
- **Small Mobile**: Below 480px (minimal spacing)

### Adjustments by Device:
- Font sizes scale down
- Padding/margins reduce
- Grid columns become single column
- Hero animations simplify
- Navigation becomes more compact

---

## ♿ Accessibility Features

1. **Semantic HTML** - Proper heading hierarchy (h1, h2, h3...)
2. **Focus States** - Visible outlines on all interactive elements
3. **Color Contrast** - WCAG AA compliant ratios
4. **Keyboard Navigation** - All functions accessible via keyboard
5. **ARIA Labels** - Where needed for screen readers
6. **Alt Text** - Descriptive for all images
7. **Form Labels** - Associated with inputs
8. **Link Text** - Descriptive and meaningful

---

## 🚀 Performance Optimizations

1. **Lazy Loading** - Components load as needed
2. **CSS Grid/Flexbox** - Efficient layout without extra markup
3. **GPU Acceleration** - Transforms and animations use GPU
4. **Minimal JavaScript** - CSS-based animations where possible
5. **Vite Bundling** - Optimized build process
6. **Fast Load Time** - < 2 seconds typical

---

## 🔄 Data Structure

### Project Data Format:
```javascript
{
  id: number,
  title: string,
  subtitle: string,
  description: string,
  tech: string[],
  period: string,
  links: { github: url, demo: url }
}
```

### Skill Data Format:
```javascript
{
  category: string,
  icon: emoji,
  skills: string[]
}
```

### Education Data Format:
```javascript
{
  id: number,
  degree: string,
  specialization: string,
  institution: string,
  location: string,
  period: string,
  cgpa: string,
  icon: emoji
}
```

---

## 🛠️ Customization Guide

### Add New Project:
1. Edit `src/components/Projects.jsx`
2. Add object to `projectsData` array
3. Update GitHub/Demo links

### Add New Skill:
1. Edit `src/components/Skills.jsx`
2. Add category or skill to arrays
3. Adjust icon emoji if needed

### Change Color Scheme:
1. Edit `src/index.css` CSS variables
2. Update `--primary` and `--secondary` colors
3. Adjust background gradients

### Modify Animations:
1. Edit individual component CSS files
2. Adjust `@keyframes` definitions
3. Change `animation` property values
4. Update timing in `transition` properties

---

## 📞 Contact & Support

For modifications or questions about this portfolio template:
- Email: krishnadabas19@gmail.com
- GitHub: https://github.com/dabaskrishna

---

**Last Updated**: 2026-09-01
**Version**: 1.0.0
**Status**: Production Ready ✓
