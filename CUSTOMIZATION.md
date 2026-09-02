# Customization Guide

Complete guide to personalizing and updating the **Krishna Dabas Editorial Developer Portfolio**.

---

## 🎯 Centralized Data Customization

All personal information, bio, skills, projects, achievements, education history, and social links are centralized in **`src/data/portfolioData.js`**.

### 1. Personal Information & Bio
In `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  name: 'Krishna Dabas',
  initials: 'KD',
  role: 'B.Tech CSE (AI & ML) Student & Developer',
  tagline: 'B.Tech CSE (AI & ML) student at Lovely Professional University...',
  email: 'krishnadabas19@gmail.com',
  phone: '+91-8512004546',
  location: 'Phagwara, Punjab',
  university: 'Lovely Professional University',
  socials: {
    github: 'https://github.com/dabaskrishna',
    linkedin: 'https://www.linkedin.com/in/krishna-dabas/',
    email: 'mailto:krishnadabas19@gmail.com',
  },
};
```

### 2. Updating Skills (4 Categories)
In `src/data/portfolioData.js`:
```javascript
export const skillsData = [
  {
    category: 'Languages',
    tag: '// core-languages',
    items: [
      { name: 'C', level: 'Intermediate', tooltip: 'Pointers, Memory Management, File IO' },
      { name: 'C++', level: 'Proficient', tooltip: 'OOP, STL, Data Structures & Algorithms' },
      { name: 'Python', level: 'Intermediate', tooltip: 'AI/ML scripting, automation' },
      { name: 'JavaScript', level: 'Advanced', tooltip: 'ES6+, Asynchronous JS, DOM' },
    ],
  },
  // Web Technologies, Databases & Tools, Soft Skills...
];
```

### 3. Adding / Updating Projects
In `src/data/portfolioData.js`:
```javascript
export const projectsData = [
  {
    id: 'your-project-id',
    title: 'Your Project Title',
    subtitle: 'Short one-line descriptor',
    category: 'Web Dev', // 'Web Dev' or 'C++/DSA'
    categoryBadge: 'Web Project',
    period: 'Jan 2026 – Feb 2026',
    summary: 'High-level description of what the project does.',
    features: [
      'Key architectural accomplishment #1',
      'Key architectural accomplishment #2',
    ],
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/yourusername/repo',
      demo: 'https://your-demo-url.com',
    },
  },
];
```

### 4. Updating Education & Milestones
Edit `educationData` or `achievementsData` in `src/data/portfolioData.js` to change CGPA, marks, institution names, or counter targets.

---

## 🎨 Design & Palette Customization

The color scheme uses CSS variables defined in **`src/index.css`**:

```css
:root {
  /* Dark Editorial Palette */
  --bg: #0A0A0F;
  --bg-card: #12121A;
  --border: rgba(255, 255, 255, 0.08);

  /* ONE Restrained Accent: Electric Teal */
  --accent: #14B8A6;
  --accent-hover: #2DD4BF;

  /* Typography */
  --font-heading: 'Space Grotesk', sans-serif;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 🚀 Deployment

To deploy updates to GitHub Pages:
```bash
# 1. Commit and push your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# 2. Deploy to GitHub Pages
npm run deploy
```
