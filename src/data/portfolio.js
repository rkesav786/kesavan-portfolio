// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file, not the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kesavan R',
  title: 'Frontend Developer (React.js | Next.js)',
  location: 'Chennai, India',
  email: 'rkesav786@gmail.com',
  phone: '+91 83009 76629',
  phoneHref: 'tel:+918300976629',
  linkedin: 'https://www.linkedin.com/in/kesavan-r-12bb9a221/',
  github: 'https://github.com/rkesav786',
  resume: '/Resume_Kesavan.docx', // file lives in /public
  photo: '/profile.png', // file lives in /public
  headline: ['Frontend developer building', 'fast, scalable web apps.'],
  summary:
    'I have 1.6+ years of experience engineering high-performance React.js and Next.js applications, from role-based dashboards and payment workflows to adaptive video streaming. I care about modular UIs, secure API integration and pages that feel instant.',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

// Floating badges around the hero photo
export const heroBadges = [
  { name: 'React', icon: 'react/react-original', pos: 'left-0 top-6 sm:-left-4', delay: 0 },
  { name: 'Next.js', icon: 'nextjs/nextjs-original', tone: 'invert', pos: 'right-0 top-0 sm:-right-4', delay: 0.6 },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original', pos: 'right-2 bottom-24 sm:-right-8', delay: 1.1 },
  { name: 'Redux', icon: 'redux/redux-original', pos: 'left-2 bottom-16 sm:-left-8', delay: 1.6 },
]

// ─── Skills ──────────────────────────────────────────────────
// icon: "<folder>/<file>" from Devicon CDN, or "lucide:<IconName>" (see TechIcon.jsx)
// tone: "mono" turns a dark logo white, "invert" flips a black logo for dark backgrounds
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend Core',
    blurb: 'The foundation I ship every interface on.',
    icon: 'LayoutTemplate',
    skills: [
      { name: 'React.js', icon: 'react/react-original', glow: '#61dafb', note: 'Hooks, Context, reusable components' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original', tone: 'invert', glow: '#e4e4e7', note: 'SSR and SSG' },
      { name: 'JavaScript', icon: 'javascript/javascript-original', glow: '#f7df1e', note: 'ES6+' },
      { name: 'HTML5', icon: 'html5/html5-original', glow: '#e34f26', note: 'Semantic markup' },
      { name: 'CSS3', icon: 'css3/css3-original', glow: '#1572b6', note: 'Responsive layouts' },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original', glow: '#38bdf8', note: 'Utility-first styling' },
      { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original', glow: '#7952b3', note: 'Grid and components' },
    ],
  },
  {
    id: 'state',
    label: 'State & Data',
    blurb: 'Predictable state and fewer network calls.',
    icon: 'DatabaseZap',
    skills: [
      { name: 'Redux Toolkit', icon: 'redux/redux-original', glow: '#764abc', note: 'Global state management' },
      { name: 'React Query', icon: 'lucide:RefreshCw', glow: '#ff4154', note: 'TanStack Query caching' },
    ],
  },
  {
    id: 'api',
    label: 'API & Backend Integration',
    blurb: 'Connecting interfaces to secure services.',
    icon: 'Plug',
    skills: [
      { name: 'REST APIs', icon: 'lucide:Webhook', glow: '#22d3ee', note: 'Secure integration' },
      { name: 'Postman', icon: 'postman/postman-original', glow: '#ff6c37', note: 'API testing' },
      { name: 'Express.js', icon: 'express/express-original', tone: 'mono', glow: '#e4e4e7', note: 'Basic routing' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original', glow: '#5fa04e', note: 'Basics' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    blurb: 'Containers, pipelines and hosting.',
    icon: 'Cloud',
    skills: [
      { name: 'Docker', icon: 'docker/docker-original', glow: '#2496ed', note: 'Dockerfiles' },
      { name: 'GitHub Actions', icon: 'githubactions/githubactions-original', tone: 'mono', glow: '#2088ff', note: 'CI/CD basics' },
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark', tone: 'mono', glow: '#ff9900', note: 'ECR, Lambda, S3' },
      { name: 'Vercel', icon: 'vercel/vercel-original', tone: 'mono', glow: '#e4e4e7', note: 'Deployments' },
    ],
  },
  {
    id: 'media',
    label: 'Media & Architecture',
    blurb: 'Streaming, charts and scalable structure.',
    icon: 'Blocks',
    skills: [
      { name: 'HLS.js', icon: 'lucide:Radio', glow: '#22d3ee', note: 'Adaptive streaming' },
      { name: 'D3.js', icon: 'd3js/d3js-original', glow: '#f9a03c', note: 'Data visualization basics' },
      { name: 'Microfrontends', icon: 'lucide:Blocks', glow: '#818cf8', note: 'Independent team remotes' },
      { name: 'Module Federation', icon: 'webpack/webpack-original', glow: '#8dd6f9', note: 'Webpack 5' },
      { name: 'Git', icon: 'git/git-original', glow: '#f05032', note: 'Version control' },
      { name: 'GitHub', icon: 'github/github-original', tone: 'mono', glow: '#e4e4e7', note: 'Collaboration' },
      { name: 'Vite', icon: 'vite/vite-original', glow: '#a78bfa', note: 'Fast tooling' },
      { name: 'Figma', icon: 'figma/figma-original', glow: '#f24e1e', note: 'Design handoff' },
    ],
  },
]

// ─── Experience ──────────────────────────────────────────────
// Wrap a phrase in **double asterisks** to highlight it.
export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Sumisa Technologies',
    place: 'Perambalur, Tamil Nadu',
    period: 'March 2025 – Present',
    current: true,
    stack: ['Next.js', 'React.js', 'Redux Toolkit', 'React Query', 'D3.js', 'Razorpay'],
    points: [
      'Engineered a responsive Next.js client app and a React.js Admin Portal for an end-to-end Property Management Platform, improving portal responsiveness by **40%**.',
      'Built role-based access control (RBAC) with JWT authentication across multi-tier dashboards, securing access for **3 distinct user tiers**.',
      'Created interactive D3.js dashboards that track **500+ active property listings**, conversions and operational metrics.',
      'Integrated Razorpay workflows that securely process **1,000+ monthly transactions**, tenant subscriptions and billing cycles.',
      'Streamlined data fetching and caching with Redux Toolkit and React Query, cutting API latency by **35%** and removing redundant network calls.',
      'Led the corporate web portal overhaul in Next.js, reaching **100% mobile fidelity** across devices.',
    ],
  },
  {
    role: 'React Developer Intern',
    company: 'HandBuiltApps',
    place: 'Sivakasi, Tamil Nadu',
    period: 'August 2024 – December 2024',
    current: false,
    stack: ['React.js', 'Tailwind CSS', 'Context API', 'Lighthouse'],
    points: [
      'Built responsive interfaces with HTML5, CSS3, Tailwind CSS and React.js for **5+ client engagements**.',
      'Created modular, reusable components with React Hooks and Context API, cutting UI boilerplate and code redundancy by **20%**.',
      'Fixed cross-browser rendering bugs and optimized DOM rendering, lifting Lighthouse performance scores by **18+ points** across 10+ pages.',
    ],
  },
]

// ─── Projects ────────────────────────────────────────────────
// Add your real links. An empty string shows a disabled "coming soon" button.
export const projects = [
  {
    id: 'streaming',
    visual: 'streaming',
    kind: 'Proof of concept',
    title: 'Adaptive Video Streaming Platform',
    summary:
      'A Next.js streaming app with adaptive multi-bitrate playback and a custom player, served from AWS S3 and CloudFront.',
    metrics: ['Sub-second buffer time', '30% lower media latency'],
    details: [
      'Deployed adaptive playback with HLS.js, giving viewers sub-second buffer time.',
      'Designed a custom player with dynamic buffer controls, resolution toggles and responsive audio visualizers.',
      'Configured S3 storage and CloudFront edge delivery, cutting media latency by 30% and reducing stream startup delays.',
    ],
    tags: ['Next.js', 'React.js', 'HLS.js', 'AWS S3', 'CloudFront'],
    demo: '',
    repo: 'https://github.com/rkesav786',
  },
  {
    id: 'microfrontend',
    visual: 'microfrontend',
    kind: 'Proof of concept',
    title: 'Enterprise Microfrontend Architecture',
    summary:
      'A decoupled React setup where independent teams build and release their own remotes inside one shell.',
    metrics: ['2 autonomous team remotes', '28% smaller vendor bundle'],
    details: [
      'Established decoupled microfrontends with Webpack 5 Module Federation so 2 remotes can build and release on their own.',
      'Optimized shared dependencies and runtime state across micro-apps, reducing the vendor bundle by 28%.',
    ],
    tags: ['React.js', 'Webpack 5', 'Module Federation', 'Tailwind CSS'],
    demo: '',
    repo: 'hhttps://github.com/rkesav786',
  },
  {
    id: 'student',
    visual: 'desktop',
    kind: 'Desktop application',
    title: 'Student Management Desktop App',
    summary:
      'A lightweight Electron.js and React.js tool for administering student records without a server.',
    metrics: ['1,000+ records managed', '~4 admin hours saved weekly'],
    details: [
      'Streamlined record management across 1,000+ entries, saving roughly 4 administrative hours every week.',
      'Automated record filtering and bulk exports with persistent local storage, speeding up data lookup by 50%.',
    ],
    tags: ['Electron.js', 'React.js', 'Local Storage'],
    demo: '',
    repo: 'https://github.com/rkesav786',
  },
]

// ─── Education ───────────────────────────────────────────────
export const education = {
  degree: {
    title: 'Bachelor of Engineering, Computer Science and Engineering',
    school: 'SA College of Engineering, Chennai, Tamil Nadu',
    period: '2019 – 2023',
    score: 'CGPA 8.0 / 10.0',
  },
  certification: {
    title: 'MERN Stack Development Certification',
    school: 'Live Wire Institute',
    period: '2023 – 2024',
  },
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'Tamil', level: 'Native' },
  ],
}
