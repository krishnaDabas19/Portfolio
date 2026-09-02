/**
 * =========================================================================
 * KRISHNA DABAS - PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * This file contains all personal information, bio, skills, projects,
 * education, and achievements. Update this file to customize or add content!
 */

export const personalInfo = {
  name: 'Krishna Dabas',
  initials: 'KD',
  role: 'B.Tech CSE (AI & ML) Student & Developer',
  tagline:
    'B.Tech CSE (AI & ML) student at Lovely Professional University, passionate about full-stack development and building intelligent web applications.',
  shortBio:
    'Passionate about building full-stack web applications and exploring AI/ML, always learning and shipping clean, robust projects.',
  email: 'krishnadabas19@gmail.com',
  phone: '+91-8512004546',
  location: 'Phagwara, Punjab',
  university: 'Lovely Professional University',
  profileImage: '/assets/profile.jpg', // Place your picture in public/assets/profile.jpg
  resumeUrl: '/assets/resume.pdf', // Place your resume in public/assets/resume.pdf
  socials: {
    github: 'https://github.com/dabaskrishna',
    linkedin: 'https://www.linkedin.com/in/krishna-dabas/',
    email: 'mailto:krishnadabas19@gmail.com',
  },
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const nowBuilding = [
  'Full-Stack Intelligent Web Applications',
  'Deep Learning & NLP Implementations',
  'Algorithmic Problem Solving in C++',
  'Modern Responsive UI Components in React',
];

export const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Time Management',
  'Adaptability',
];

export const skillsData = [
  {
    category: 'Languages',
    tag: '// core-languages',
    items: [
      { name: 'C', level: 'Intermediate', tooltip: 'Pointers, Memory Management, File IO' },
      { name: 'C++', level: 'Intermediate / Advanced', tooltip: 'OOP, STL, Data Structures & Algorithms' },
      { name: 'Python', level: 'Intermediate', tooltip: 'AI/ML scripting, automation, scripting' },
      { name: 'JavaScript', level: 'Advanced', tooltip: 'ES6+, Asynchronous JS, DOM manipulation' },
    ],
  },
  {
    category: 'Web Technologies',
    tag: '// frontend-backend',
    items: [
      { name: 'HTML', level: 'Advanced', tooltip: 'Semantic HTML5, Accessibility, SEO' },
      { name: 'CSS', level: 'Advanced', tooltip: 'Responsive Design, Flexbox, Grid, Tailwind' },
      { name: 'JavaScript', level: 'Advanced', tooltip: 'Modern JS, Event Loop, Modular Code' },
      { name: 'React.js', level: 'Advanced', tooltip: 'Hooks, State Management, Component Architecture' },
      { name: 'Node.js', level: 'Intermediate', tooltip: 'Express.js, REST APIs, Backend Logic' },
    ],
  },
  {
    category: 'Databases & Tools',
    tag: '// tools-storage',
    items: [
      { name: 'MySQL', level: 'Intermediate', tooltip: 'Relational DB Design, SQL Queries, Joins' },
      { name: 'MongoDB', level: 'Intermediate', tooltip: 'NoSQL Schema Design, Aggregation' },
      { name: 'Git', level: 'Advanced', tooltip: 'Version Control, Branching, Pull Requests' },
      { name: 'GitHub', level: 'Advanced', tooltip: 'CI/CD, Open Source, Collaboration' },
      { name: 'Figma', level: 'Familiar', tooltip: 'UI Wireframing, Prototypes, Design Systems' },
    ],
  },
  {
    category: 'Soft Skills',
    tag: '// professional-traits',
    items: [
      { name: 'Problem Solving', level: 'High', tooltip: 'Analytical thinking & structured debugging' },
      { name: 'Team Collaboration', level: 'High', tooltip: 'Pair programming, communication & git workflows' },
      { name: 'Communication', level: 'High', tooltip: 'Technical documentation & clear presentations' },
      { name: 'Time Management', level: 'High', tooltip: 'Prioritizing features & agile delivery' },
      { name: 'Adaptability', level: 'High', tooltip: 'Quick learner for new frameworks & stacks' },
    ],
  },
];

export const projectCategories = ['All', 'Web Dev', 'C++/DSA'];

export const projectsData = [
  {
    id: 'orvexon-studio',
    title: 'Orvexon Studio',
    subtitle: 'Creative Portfolio Platform',
    category: 'Web Dev',
    categoryBadge: 'Web Project',
    period: 'Jan 2026 – Feb 2026',
    summary:
      'A responsive creative portfolio/agency-style platform designed to showcase projects, services, and creative narratives with high visual fidelity and modular UX.',
    features: [
      'Designed and developed a responsive website to showcase creative projects and services.',
      'Created interactive sections for projects, services, and contact information.',
      'Implemented responsive layouts and reusable UI components for different screen sizes.',
      'Focused on improving visual presentation and user experience using modern design principles.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Figma'],
    links: {
      github: 'https://github.com/dabaskrishna',
      demo: '#',
    },
  },
  {
    id: 'student-record-system',
    title: 'Student Record Management System',
    subtitle: 'CRUD Console Application',
    category: 'C++/DSA',
    categoryBadge: 'C++/DSA',
    period: 'Mar 2026 – Apr 2026',
    summary:
      'A robust C++ console-based system to add, search, update, delete, and persist student academic records using structured file handling.',
    features: [
      'Developed features to add, search, update, delete, and display student records.',
      'Implemented file handling for storing and retrieving student information reliably between sessions.',
      'Applied core C++ concepts including functions, arrays, structures, and OOP principles.',
      'Created a simple, intuitive menu-driven interface for easy record management.',
    ],
    tech: ['C++', 'Data Structures', 'File Handling', 'OOP'],
    links: {
      github: 'https://github.com/dabaskrishna',
      demo: '#',
    },
  },
];

export const achievementsData = [
  {
    id: 1,
    icon: 'Trophy',
    title: 'Technical Events & Hackathons',
    description:
      'Participated in college-level technical events and coding activities, demonstrating consistent interest in software development and team collaboration.',
    metric: 'Active',
    metricLabel: 'Participant',
  },
  {
    id: 2,
    icon: 'Code2',
    title: '50+ Problems Solved',
    description:
      'Solved 50+ programming problems across online coding platforms, sharpening algorithmic problem-solving and core data structure concepts.',
    metric: '50+',
    metricLabel: 'DSA Problems',
  },
  {
    id: 3,
    icon: 'Sparkles',
    title: 'AI & Web Exploration',
    description:
      'Actively exploring AI, web development, and startup/product development through independent projects, research, and practical builds.',
    metric: '100%',
    metricLabel: 'Hands-on Learning',
  },
];

export const educationData = [
  {
    id: 1,
    degree: 'B.Tech Computer Science and Engineering (AI & ML)',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    grade: 'CGPA: 6.23',
    period: 'Aug 2025 – Present',
    status: 'In Progress',
    details:
      'Specializing in Artificial Intelligence & Machine Learning. Coursework covering Data Structures, OOP in C++, Database Management, Computer Networks, and Full-Stack Web Development.',
  },
  {
    id: 2,
    degree: 'Higher Secondary Education (12th)',
    institution: 'DAV Public School',
    location: 'Delhi',
    grade: 'Percentage: 86%',
    period: 'Apr 2024 – Mar 2025',
    status: 'Completed',
    details:
      'Senior secondary education focusing on Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
  },
  {
    id: 3,
    degree: 'Secondary Education (10th)',
    institution: 'DAV Public School',
    location: 'Delhi',
    grade: 'Percentage: 89%',
    period: 'Apr 2022 – Mar 2023',
    status: 'Completed',
    details:
      'Strong academic foundation across Mathematics, Science, and Social Sciences under CBSE curriculum.',
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Peer Collaborator',
    role: 'Full-Stack Developer & Teammate',
    quote:
      'Krishna brings sharp attention to detail and strong ownership to frontend architectures. Always ready to debug and optimize complex workflows.',
  },
  {
    id: 2,
    name: 'Project Mentor',
    role: 'Technical Advisor',
    quote:
      'Consistently demonstrates dedication to learning modern web stacks and foundational DSA. Quick at turning concepts into clean, usable code.',
  },
];
