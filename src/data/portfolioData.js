/**
 * =========================================================================
 * KRISHNA DABAS - PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Asymmetric Editorial Portfolio Data Store
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
  profileImage: '/assets/profile.jpg',
  resumeUrl: '/assets/resume.pdf',
  socials: {
    github: 'https://github.com/dabaskrishna',
    linkedin: 'https://www.linkedin.com/in/krishna-dabas/',
    email: 'mailto:krishnadabas19@gmail.com',
  },
};

export const tableOfContents = [
  { index: '01', id: 'about', label: 'About' },
  { index: '02', id: 'skills', label: 'Toolbox' },
  { index: '03', id: 'projects', label: 'Selected Works' },
  { index: '04', id: 'experience', label: 'Milestones & Academics' },
  { index: '05', id: 'contact', label: 'Contact' },
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
  'Technical Communication',
  'Time Management',
  'Rapid Adaptability',
];

// Editorial "Toolbox" Data with intentional visual weight hierarchy
export const toolboxCategories = [
  {
    label: '// 01. languages & core systems',
    description: 'Foundational programming languages and low-level memory/algorithmic logic.',
    skills: [
      { name: 'C++', weight: 'primary', note: 'Core DSA & OOP', experience: 'Advanced' },
      { name: 'JavaScript', weight: 'primary', note: 'ES6+, Async, Browser API', experience: 'Advanced' },
      { name: 'Python', weight: 'secondary', note: 'AI/ML scripting', experience: 'Intermediate' },
      { name: 'C', weight: 'tertiary', note: 'Pointers & Systems', experience: 'Intermediate' },
    ],
  },
  {
    label: '// 02. modern web engineering',
    description: 'Declarative component design, client-side state, and full-stack runtime.',
    skills: [
      { name: 'React.js', weight: 'primary', note: 'Component architecture, Hooks, Context', experience: 'Advanced' },
      { name: 'Node.js', weight: 'secondary', note: 'REST APIs & backend runtime', experience: 'Intermediate' },
      { name: 'HTML5 & CSS3', weight: 'secondary', note: 'Semantic structure & responsive layouts', experience: 'Advanced' },
      { name: 'Tailwind CSS', weight: 'secondary', note: 'Utility-first modern styling', experience: 'Advanced' },
    ],
  },
  {
    label: '// 03. storage, versioning & tools',
    description: 'Relational & document databases with collaborative workflow toolsets.',
    skills: [
      { name: 'MySQL', weight: 'secondary', note: 'Relational queries, Schema design', experience: 'Intermediate' },
      { name: 'MongoDB', weight: 'tertiary', note: 'NoSQL collections & schemas', experience: 'Intermediate' },
      { name: 'Git & GitHub', weight: 'secondary', note: 'Branching, PRs, Version control', experience: 'Advanced' },
    ],
  },
  {
    label: '// 04. working methodology',
    description: 'Interpersonal disciplines that elevate team execution.',
    skills: [
      { name: 'Structured Problem Solving', weight: 'secondary', note: 'Step-by-step root cause analysis', experience: 'High' },
      { name: 'Pair Collaboration', weight: 'secondary', note: 'Team alignment & code reviews', experience: 'High' },
      { name: 'Technical Documentation', weight: 'tertiary', note: 'Clean markdown & architecture specs', experience: 'High' },
    ],
  },
];

export const projectsData = [
  {
    id: 'orvexon-studio',
    number: '01',
    title: 'Orvexon Studio',
    subtitle: 'Creative Agency & Portfolio Platform',
    category: 'Web Engineering',
    categoryBadge: 'Full-Stack Web',
    period: 'Jan 2026 – Feb 2026',
    summary:
      'A bespoke portfolio & agency platform constructed to showcase creative products, services, and visual narratives with fluid interactions, reusable UI modules, and responsive design.',
    architecture:
      'Engineered with React.js and modern styling primitives, leveraging modular layout systems for dynamic content presentation and smooth viewport scaling across devices.',
    features: [
      'Designed and developed interactive showcases for projects and digital services.',
      'Constructed modular component hierarchy with responsive typography and fluid layouts.',
      'Implemented clean, reusable UI primitives for varied viewport breakpoints.',
      'Optimized asset loading and accessibility for seamless navigation.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/dabaskrishna',
      demo: 'https://krishnadabas19.github.io/Portfolio/',
    },
  },
  {
    id: 'student-record-system',
    number: '02',
    title: 'Student Record Management System',
    subtitle: 'High-Performance Persistent Console Architecture',
    category: 'C++ Systems & Algorithms',
    categoryBadge: 'Systems / C++',
    period: 'Mar 2026 – Apr 2026',
    summary:
      'A robust C++ console application designed to add, search, update, delete, and persist student academic records reliably using structured file handling and OOP patterns.',
    architecture:
      'Employs encapsulated C++ classes and binary/text file streams to guarantee data integrity across sessions without database overhead.',
    features: [
      'Engineered complete CRUD capabilities for extensive student academic profiles.',
      'Implemented persistent file streams ensuring zero data loss across restarts.',
      'Applied modular OOP principles (classes, encapsulation, data structures).',
      'Created an intuitive terminal menu system with input validation.',
    ],
    tech: ['C++', 'Data Structures', 'File Handling', 'OOP', 'Algorithms'],
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
      'Active participant in university technical hackathons and algorithmic competitions, demonstrating software craftsmanship and team collaboration under constraints.',
    metric: 'Active',
    metricLabel: 'Participant',
  },
  {
    id: 2,
    icon: 'Code2',
    title: '50+ Algorithmic Problems Solved',
    description:
      'Solved 50+ programming problems on competitive coding platforms, refining core mastery in dynamic programming, recursion, graphs, and OOP structures.',
    metric: '50+',
    metricLabel: 'Problems Solved',
  },
  {
    id: 3,
    icon: 'Sparkles',
    title: 'Full-Stack & AI Systems Exploration',
    description:
      'Hands-on development of modern web applications and foundational machine learning pipelines through continuous project experimentation.',
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
      'Specializing in Artificial Intelligence & Machine Learning. Core coursework in Data Structures, OOP in C++, Database Management Systems, and Web Engineering.',
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
      'Senior secondary curriculum focusing on Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
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
      'Strong academic record with foundational coursework across Mathematics, Science, and Social Sciences.',
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
