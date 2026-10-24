// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file, not the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kesavan R',
  title: 'Full Stack Developer | React.js | Next.js | Express.js | AWS',
  location: 'Chennai, India',
  email: 'rkesav786@gmail.com',
  phone: '+91 83009 76629',
  phoneHref: 'tel:+918300976629',
  linkedin: 'https://www.linkedin.com/in/kesavan-r-12bb9a221/',
  github: 'https://github.com/rkesav786',
  resume: '/Kesavan_R_Resume.pdf',
  photo: '/profile.jpg', // file lives in /public
  headline: ['Full Stack Developer building', 'responsive, high-performance apps.'],
  summary:
    'Full Stack Developer with around 2 years of experience engineering responsive, high-performance web applications, admin portals, and desktop tools using React.js, Next.js, Express.js, and AWS. Experienced in building modular user interfaces, developing backend REST APIs with MongoDB, configuring role-based access control, and integrating D3.js analytics and secure payment gateways. Skilled in microfrontend architecture, video streaming, and cloud deployments with Docker.',
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
  { name: 'React.js', icon: 'react/react-original', pos: 'left-0 top-6 sm:-left-4', delay: 0 },
  { name: 'Next.js', icon: 'nextjs/nextjs-original', tone: 'invert', pos: 'right-0 top-6 sm:-right-4', delay: 0.4 },
  { name: 'Electron.js', icon: 'electron/electron-original', tone: 'invert', pos: 'left-0 bottom-24 sm:-left-4', delay: 0.8 },
  { name: 'Express.js', icon: 'express/express-original', tone: 'mono', pos: 'right-0 bottom-24 sm:-right-4', delay: 1.2 },
  { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original', tone: 'mono', pos: 'left-0 top-1/2 -translate-y-1/2 sm:-left-4', delay: 1.6 },
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
    label: 'State & Data Fetching',
    blurb: 'State management and data fetching tools listed on my resume.',
    icon: 'DatabaseZap',
    skills: [
      { name: 'Redux Toolkit', icon: 'redux/redux-original', glow: '#764abc', note: 'Global state management' },
      { name: 'TanStack Query', icon: 'lucide:RefreshCw', glow: '#ff4154', note: 'Data fetching and caching' },
    ],
  },
  {
    id: 'api',
    label: 'Backend & APIs',
    blurb: 'Backend technologies and API tools from my resume.',
    icon: 'Plug',
    skills: [
      { name: 'Express.js', icon: 'express/express-original', tone: 'mono', glow: '#e4e4e7', note: 'Backend REST APIs' },
      { name: 'REST APIs', icon: 'lucide:Webhook', glow: '#22d3ee', note: 'API development and integration' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original', glow: '#5fa04e', note: 'Backend runtime' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original', glow: '#47a248', note: 'Database' },
      { name: 'Postman', icon: 'postman/postman-original', glow: '#ff6c37', note: 'API testing' },
    ],
  },
  {
    id: 'payments',
    label: 'Payment Gateways',
    blurb: 'Payment integrations included in my project and internship experience.',
    icon: 'Plug',
    skills: [
      { name: 'Razorpay', icon: 'lucide:Webhook', glow: '#2b83ea', note: 'Secure billing workflows' },
      { name: 'Stripe', icon: 'lucide:Webhook', glow: '#635bff', note: 'Sandbox checkout integration' },
    ],
  },
  {
    id: 'devops',
    label: 'Cloud & Hosting',
    blurb: 'Cloud, deployment, and hosting technologies from my resume.',
    icon: 'Cloud',
    skills: [
      { name: 'Docker', icon: 'docker/docker-original', glow: '#2496ed', note: 'Containerization' },
      { name: 'GitHub Actions', icon: 'githubactions/githubactions-original', tone: 'mono', glow: '#2088ff', note: 'CI/CD basics' },
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark', tone: 'mono', glow: '#ff9900', note: 'ECR, Lambda, CloudFront, Route 53, S3, ACM' },
      { name: 'Vercel', icon: 'vercel/vercel-original', tone: 'mono', glow: '#e4e4e7', note: 'Hosting' },
      { name: 'Hostinger', icon: 'lucide:Webhook', glow: '#673de6', note: 'Custom domain nameservers' },
    ],
  },
  {
    id: 'media',
    label: 'Architecture & Media',
    blurb: 'Desktop development, frontend architecture, and media technologies.',
    icon: 'Blocks',
    skills: [
      { name: 'Electron.js', icon: 'electron/electron-original', tone: 'invert', glow: '#9feaf9', note: 'Desktop applications' },
      { name: 'Microfrontend Architecture', icon: 'lucide:Blocks', glow: '#818cf8', note: 'Modular frontend applications' },
      { name: 'Webpack Module Federation', icon: 'webpack/webpack-original', glow: '#8dd6f9', note: 'Independent modules and shared dependencies' },
      { name: 'HLS.js', icon: 'lucide:Radio', glow: '#22d3ee', note: 'Adaptive streaming' },
      { name: 'D3.js', icon: 'd3js/d3js-original', glow: '#f9a03c', note: 'Data visualization' },
      { name: 'Git', icon: 'git/git-original', glow: '#f05032', note: 'Version control' },
      { name: 'GitHub', icon: 'github/github-original', tone: 'mono', glow: '#e4e4e7', note: 'Collaboration' },
      { name: 'Vite', icon: 'vite/vite-original', glow: '#a78bfa', note: 'Build tooling' },
      { name: 'Figma', icon: 'figma/figma-original', glow: '#f24e1e', note: 'Design handoff' },
    ],
  },
]

// ─── Experience ──────────────────────────────────────────────
// Wrap a phrase in **double asterisks** to highlight it.
export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Sumisa Technologies',
    place: 'Perambalur, Tamil Nadu',
    period: 'March 2025 – Present',
    current: true,
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Razorpay', 'TanStack Query', 'Redux Toolkit', 'Electron.js'],
    points: [
      'Built responsive client-facing interfaces for a Real Estate Property Platform using Next.js and Tailwind CSS to streamline property discovery and tenant onboarding.',
      'Developed an administrative management portal in React.js, implementing Express.js RESTful CRUD endpoints and MongoDB to manage property records and user tiers.',
      'Engineered a Student Management System desktop application using Electron.js and React.js to streamline local administrative records and student tracking.',
      'Integrated Razorpay payment workflows on the Sumisa Technologies corporate platform to handle secure customer billing, while optimizing client caching using TanStack Query and Redux Toolkit.',
    ],
  },
  {
    role: 'React Developer Intern',
    company: 'HandBuiltApps',
    place: 'Sivakasi, Tamil Nadu',
    period: 'August 2024 – December 2024',
    current: false,
    stack: ['React.js', 'Tailwind CSS', 'React Hooks', 'Stripe', 'Core Web Vitals'],
    points: [
      'Built interactive, responsive UI components for the Konekt business networking platform and admin portal using React.js and Tailwind CSS.',
      'Integrated Stripe payment checkout workflows in sandbox test environments for the Chalke Festival event ticketing web platform to validate transaction flows.',
      'Created modular, reusable UI components with React Hooks, resolved cross-browser rendering bugs, and improved Core Web Vitals across client web pages.',
    ],
  },
]

// ─── Projects ────────────────────────────────────────────────
// Add your real links. An empty string shows a disabled "coming soon" button.
export const projects = [
  {
    id: 'cloud-portfolio',
    visual: 'infrastructure',
    kind: 'Cloud infrastructure',
    title: 'Cloud-Native Portfolio Infrastructure',
    summary:
      'A React.js portfolio containerized with Docker and deployed on AWS with serverless hosting, global CDN delivery, and a custom domain.',
    metrics: ['Docker + Amazon ECR', 'AWS Lambda + CloudFront', 'Custom domain + SSL'],
    details: [
      'Built the portfolio in React.js, containerized it with Docker, and registered the image in Amazon ECR.',
      'Deployed the frontend on AWS Lambda with Function URLs and distributed it globally through CloudFront, with custom SSL configured through ACM.',
      'Configured DNS routing with Route 53 hosted zones and custom nameservers on Hostinger.',
    ],
    tags: ['React.js', 'Docker', 'AWS ECR', 'AWS Lambda', 'CloudFront', 'Route 53', 'ACM', 'Hostinger'],
    demo: 'https://www.kesavan.website/',
    repo: 'https://github.com/rkesav786',
  },
  {
    id: 'streaming',
    visual: 'streaming',
    kind: 'Streaming application',
    title: 'Adaptive Video Streaming Platform',
    summary:
      'A Next.js video player that uses HLS.js for adaptive bitrate playback, with media delivered through AWS S3 and CloudFront.',
    metrics: ['Adaptive bitrate playback', 'Low-latency edge delivery'],
    details: [
      'Built a video player application in Next.js using HLS.js for seamless adaptive bitrate media playback.',
      'Integrated custom playback controls and dynamic buffer management.',
      'Configured AWS S3 storage and CloudFront CDN delivery for low-latency media distribution.',
    ],
    tags: ['Next.js', 'React.js', 'HLS.js', 'AWS S3', 'CloudFront'],
    demo: '',
    repo: 'https://github.com/rkesav786',
  },
  {
    id: 'microfrontend',
    visual: 'microfrontend',
    kind: 'Architecture proof of concept',
    title: 'Enterprise Microfrontend Architecture',
    summary:
      'A React microfrontend architecture using Webpack Module Federation for independently developed and deployed modules.',
    metrics: ['Independent module deployments', 'Shared dependency caching'],
    details: [
      'Implemented decoupled microfrontends with Webpack Module Federation to allow independent module development and deployments.',
      'Configured shared dependency caching across remote containers to minimize duplicate asset bundle payloads.',
    ],
    tags: ['React.js', 'Webpack Module Federation', 'Tailwind CSS'],
    demo: '',
    repo: 'https://github.com/rkesav786',
  },
  {
    id: 'student-management',
    visual: 'desktop',
    kind: 'Desktop application',
    title: 'Student Management System',
    summary:
      'An Electron.js and React.js desktop application engineered to streamline local administrative records and student tracking.',
    metrics: ['Desktop application', 'Local administrative records'],
    details: [
      'Engineered a Student Management System desktop application using Electron.js and React.js to streamline local administrative records and student tracking.',
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
