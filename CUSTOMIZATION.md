# Customization Guide

Complete guide to personalizing this portfolio template for your needs.

## 🎯 Quick Start Customization

### Step 1: Update Personal Information

#### In `src/components/Hero.jsx`
```javascript
// Change the typing animation words
const words = ['Your Role 1', 'Your Role 2', 'Your Role 3'];

// Update contact links
<a href="mailto:your-email@example.com">
  📧 your-email@example.com
</a>
<a href="tel:+91XXXXXXXXXX">
  📱 +91-XXXXXXXXXX
</a>
```

#### In `src/components/About.jsx`
```javascript
// Update the bio text
<p>
  I'm a [Your Degree] at [University], passionate about...
</p>

// Modify soft skills
const softSkills = [
  'Your Skill 1',
  'Your Skill 2',
  'Your Skill 3',
  // etc.
];
```

#### In `src/components/Skills.jsx`
```javascript
// Add/remove skill categories
const skillsData = [
  {
    category: 'Your Category',
    icon: '🎯',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  },
  // more categories...
];
```

#### In `src/components/Projects.jsx`
```javascript
// Add your projects
const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    subtitle: 'Short description',
    description: 'Detailed description...',
    tech: ['React', 'Node.js', 'MongoDB'],
    period: 'Month – Month Year',
    links: {
      github: 'https://github.com/yourusername/project',
      demo: 'https://project-demo.com'
    }
  },
  // more projects...
];
```

#### In `src/components/Education.jsx`
```javascript
// Update education history
const educationData = [
  {
    id: 1,
    degree: 'Your Degree',
    specialization: 'Your Specialization',
    institution: 'Your University',
    location: 'City, State',
    period: 'Month Year – Present',
    cgpa: 'Your GPA',
    icon: '🎓'
  },
  // more entries...
];
```

#### In `src/components/Contact.jsx`
```javascript
// Update contact links
const contactLinks = [
  {
    icon: '📧',
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com'
  },
  // more links...
];
```

#### In `src/components/Footer.jsx`
```javascript
// Update social links
const socialLinks = [
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/yourusername' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { icon: '📧', label: 'Email', href: 'mailto:your-email@example.com' }
];
```

---

## 🎨 Design Customization

### Color Scheme Changes

Edit `src/index.css`:

```css
:root {
  /* Change primary color (currently electric blue) */
  --primary: #0096ff;           /* Change to your accent color */
  --primary-dark: #0075cc;
  --primary-light: #00d4ff;
  
  /* Change secondary color (currently purple) */
  --secondary: #7c3aed;         /* Change to your secondary color */
  
  /* Change background colors */
  --bg-primary: #0a0f23;        /* Main background */
  --bg-secondary: #1a1f3a;      /* Secondary background */
  --bg-tertiary: #0f1428;       /* Tertiary background */
  
  /* Adjust text colors */
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-tertiary: rgba(255, 255, 255, 0.6);
}
```

### Popular Color Schemes

**Dark Mode with Cyan Accent:**
```css
--primary: #00d4ff;
--secondary: #0099ff;
--bg-primary: #0a0e27;
--bg-secondary: #1a1f3a;
```

**Dark Mode with Green Accent:**
```css
--primary: #10b981;
--secondary: #34d399;
--bg-primary: #0f172a;
--bg-secondary: #1e293b;
```

**Dark Mode with Pink Accent:**
```css
--primary: #ec4899;
--secondary: #f472b6;
--bg-primary: #0f0d1a;
--bg-secondary: #1a1425;
```

**Dark Mode with Orange Accent:**
```css
--primary: #f97316;
--secondary: #fb923c;
--bg-primary: #0f0d1a;
--bg-secondary: #1a1425;
```

---

## 🔤 Typography Changes

### Update Font Stack

Edit `src/index.css`:

```css
:root {
  /* System fonts (default - works everywhere) */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  /* For Google Fonts, add to index.html <head>: */
  /* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"> */
  
  /* Then update: */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Heading font */
  --font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Monospace font */
  --font-mono: 'Fira Code', 'Courier New', monospace;
}
```

### Popular Font Combinations

**Modern & Clean:**
```css
--font-sans: 'Inter', sans-serif;
--font-heading: 'Poppins', sans-serif;
```

**Elegant & Professional:**
```css
--font-sans: 'Lato', sans-serif;
--font-heading: 'Playfair Display', serif;
```

**Tech & Minimal:**
```css
--font-sans: 'Space Mono', monospace;
--font-heading: 'Space Grotesk', sans-serif;
```

---

## 🎭 Animation Customization

### Adjust Animation Timing

In component CSS files (e.g., `Navbar.css`):

```css
/* Change transition speed */
.nav-link::after {
  width: 100%;
  transition: width 0.3s ease;  /* Change 0.3s to your preferred duration */
}

/* Slow it down */
transition: width 0.6s ease;

/* Speed it up */
transition: width 0.15s ease;
```

### Modify Animations

Edit `src/index.css` to customize keyframe animations:

```css
/* Make float animation more subtle */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);  /* Change -20px to -10px for less movement */
  }
}

/* Adjust fade-in timing */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);  /* Change value for different distance */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Disable Animations (for performance)

In component CSS, change animations to:
```css
.element {
  /* Remove animation: */ 
  /* animation: fadeInUp 0.8s ease; */
  
  /* Use instant transition instead: */
  opacity: 1;
  transform: translateY(0);
}
```

---

## 📐 Layout Customization

### Adjust Section Spacing

In section CSS files:
```css
/* Change padding */
.section {
  padding: 6rem 2rem;  /* Vertical - Horizontal */
  /* Reduce spacing: */
  padding: 4rem 2rem;
  /* Increase spacing: */
  padding: 8rem 2rem;
}
```

### Modify Grid Layouts

In `Projects.jsx` CSS:
```css
.projects-grid {
  display: grid;
  /* Default: 2 columns minimum */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  
  /* For 3-column layout: */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  /* For 1-column layout: */
  grid-template-columns: 1fr;
}
```

### Change Container Width

In `App.css`:
```css
.container {
  max-width: 1200px;  /* Change to your preferred max-width */
  
  /* Wider containers: */
  max-width: 1400px;
  
  /* Narrower containers: */
  max-width: 1000px;
}
```

---

## 🔗 Navigation & Links Customization

### Add New Navigation Section

1. **Update Navbar.jsx**
```javascript
const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'contact', 'blog'];
```

2. **Add new component** (e.g., `Blog.jsx`)

3. **Import in App.jsx**
```javascript
import Blog from './components/Blog'

<Blog />
```

4. **Add ID to new section**
```jsx
<section id="blog" className="blog">
  <!-- content -->
</section>
```

### Update Social Links

In `Footer.jsx`:
```javascript
const socialLinks = [
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/yourusername' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  { icon: '📧', label: 'Email', href: 'mailto:your-email@example.com' }
];
```

---

## 🎯 Content Customization Examples

### Customize Achievement Section

Edit `src/components/Achievements.jsx`:
```javascript
const achievementsData = [
  {
    id: 1,
    icon: '🏆',
    title: 'Your Achievement',
    description: 'Description of your achievement...'
  },
  // Add more achievements
];
```

### Add More Projects

In `src/components/Projects.jsx`, add to `projectsData`:
```javascript
{
  id: 3,
  title: 'Your New Project',
  subtitle: 'What you built',
  description: 'Full description of the project...',
  tech: ['Tech 1', 'Tech 2', 'Tech 3'],
  period: 'Date Range',
  links: {
    github: 'your-github-link',
    demo: 'your-demo-link'
  }
}
```

---

## 🛠️ Advanced Customization

### Add Images to Hero

In `Hero.jsx`:
```javascript
import heroImage from '../assets/your-image.png';

// In JSX:
<img src={heroImage} alt="Krishna Dabas" className="hero-image" />
```

### Add Skills with Images/Icons

Use image URLs or icon libraries:
```javascript
// Using Lucide React icons
import { Code, Database, FileCode } from 'lucide-react';

// Replace emoji with icon component
<Code size={24} />
```

### Implement Dark/Light Mode Toggle

Add to `Navbar.jsx`:
```javascript
const [isDark, setIsDark] = useState(true);

const toggleTheme = () => {
  setIsDark(!isDark);
  document.documentElement.style.colorScheme = isDark ? 'light' : 'dark';
};

// Update CSS variables based on isDark state
```

---

## ✅ Common Customization Checklist

- [ ] Updated all personal information
- [ ] Changed color scheme to match preferences
- [ ] Modified typography/fonts
- [ ] Added/removed projects
- [ ] Updated education information
- [ ] Changed social links
- [ ] Tested on mobile and desktop
- [ ] Updated contact form
- [ ] Verified all links work
- [ ] Checked animations performance
- [ ] Optimized for accessibility
- [ ] Ready for deployment

---

## 📞 Customization Tips

1. **Test Changes Locally**: Always test with `npm run dev` before deploying
2. **Use Browser DevTools**: Inspect elements to debug CSS issues
3. **Keep Backups**: Save original files before making major changes
4. **Mobile First**: Test mobile layout as you customize
5. **Performance**: Check Lighthouse scores after changes
6. **Consistency**: Maintain visual consistency across all sections
7. **Comments**: Add comments to CSS for future reference

---

## 🚀 Ready to Customize?

1. Start with personal information changes (easiest)
2. Move to color and typography (most visual impact)
3. Then customize layouts and components
4. Finally, add new features and content

**Remember**: The power of this template is its flexibility. Feel free to make it uniquely yours!

---

**Version**: 1.0.0
**Last Updated**: 2026-09-01
**Maintainer**: Krishna Dabas
