export const personalInfo = {
  name: "Rizwanu Rahman",
  title: "Full Stack Developer",
  subtitle: "Frontend Specialist | Building Scalable Web Applications",
  location: "Nilambur, Kerala 679332",
  phone: "+91 7558002009",
  email: "Rizwanurahman321@gmail.com",
  linkedin: "https://linkedin.com/in/rizwanurahman",
  github: "https://github.com/Rizwanu321",
  bio: `I'm a passionate Full Stack Developer with 3+ years of experience crafting high-performance web applications. I specialize in React, Next.js, TypeScript, and Node.js — building everything from AI-powered platforms to enterprise-grade systems. I thrive on turning complex problems into elegant, scalable solutions.`,
  resumeUrl: "https://drive.google.com/file/d/1A2WaGyS31QzW4Z7RqyrPLPOps921nEsk/view?usp=drive_link",
};

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Baseel Partners",
    location: "UK (Remote)",
    period: "May 2025 – Present",
    type: "Remote",
    achievements: [
      "Led frontend development for multiple projects using Next.js, React, TypeScript, Tailwind CSS, and Shadcn — delivering responsive, scalable, high-performance web apps.",
      "Architected an AI Agent platform supporting multi-model conversations, real-time chat, and user management with intuitive UI design.",
      "Built Baseel Owl, a cybersecurity threat intelligence platform with phishing, malware, and domain tracking modules and dynamic dashboards.",
      "Developed a Digital Marketing platform featuring on-page SEO, off-page SEO, content engine, CRO optimization, and traffic forecasting tools with AI-driven insights.",
      "Built a Document Intelligence Agent allowing users to upload documents and interact via AI-powered chat for context-aware Q&A and document insights.",
      "Built a Quillbot-inspired AI Writing Tool with grammar enhancement, paraphrasing, and LLM-powered style suggestions.",
      "Managed API integrations, state management, code reviews, and version control workflows across agile sprints.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Two Monk Technologies LLP",
    location: "Kerala, India",
    period: "Nov 2023 – Apr 2025",
    type: "On-site",
    achievements: [
      "Built full-stack web applications using React.js, Next.js, Node.js, Express, and MongoDB — delivering end-to-end features from UI to database.",
      "Developed RESTful APIs, implemented authentication flows, and optimized application performance for production deployments.",
      "Collaborated with cross-functional teams to deliver scalable, maintainable code following clean architecture principles.",
      "Integrated third-party AI APIs and contributed to AI-powered feature development in client-facing applications.",
      "Maintained code quality through peer reviews, unit testing, and Git-based version control in distributed team workflows.",
    ],
    techStack: ["React.js", "Next.js", "Node.js", "Express", "MongoDB"],
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Tailwind CSS", level: 93 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Redux", level: 82 },
      { name: "Shadcn UI", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "Python", level: 70 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 75 },
      { name: "SQLite", level: 70 },
    ],
  },
  {
    title: "AI & Dev Tools",
    icon: "cpu",
    skills: [
      { name: "Cursor", level: 90 },
      { name: "Claude Code", level: 88 },
      { name: "GitHub Copilot", level: 85 },
      { name: "ChatGPT", level: 90 },
      { name: "Git", level: 90 },
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  icon: string;
  image?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "VehicleBook — ERP System",
    description:
      "Dealership and inventory management system for vehicle sales and stock tracking.",
    longDescription:
      "Comprehensive ERP system for vehicle dealerships featuring inventory management, Park & Sale consignments, investor capital tracking, sales analytics, and financial reporting. Built for scale with real-time sync.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    category: "Enterprise",
    icon: "car",
    image: "/vehiclebook.png",
    liveUrl: "https://vehiclebook-rizwanu.vercel.app/",
  },
  {
    id: 2,
    title: "Thinkery — Café & Workspace Platform",
    description:
      "A calm, aesthetic web platform for Calicut's premier café and collaborative workspace.",
    longDescription:
      "Designed and built a premium web application for Thinkery Café & Workspace in Calicut. Features interactive menu filtering, real-time venue status, space booking guides, interactive maps, and responsive aesthetic UI.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Platform",
    icon: "coffee",
    image: "/thinkery.png",
    liveUrl: "https://thinkery-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Kerala GG Taxi — Tour & Travel Platform",
    description:
      "A modern tour taxi & travel showcase platform for Golden Globe Taxi Service in Kerala with direct WhatsApp & Call booking.",
    longDescription:
      "Designed and developed a responsive frontend tour taxi platform for Golden Globe Taxi Service in Kerala. Features curated tour package showcases, airport taxi scheduling, vehicle category filters, and instant direct WhatsApp & Phone call booking integrations.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Platform",
    icon: "car",
    image: "/keralaggtaxi.png",
    liveUrl: "https://www.keralaggtaxitravel.com/",
  },
  {
    id: 4,
    title: "AI Agent Platform",
    description:
      "Multi-model conversation platform with real-time chat and user management.",
    longDescription:
      "Architected a comprehensive AI Agent platform supporting multi-model conversations, real-time chat, and user management with intuitive UI design. Features include model switching, conversation history, and intelligent response streaming.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "AI APIs"],
    category: "AI / ML",
    icon: "bot",
  },
  {
    id: 5,
    title: "Baseel Owl — Cybersecurity Platform",
    description:
      "Threat intelligence platform with phishing, malware, and domain tracking.",
    longDescription:
      "Built a comprehensive cybersecurity threat intelligence platform with phishing detection, malware analysis, and domain tracking modules. Features dynamic dashboards with real-time threat visualization and alert management.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    category: "Cybersecurity",
    icon: "shield",
  },
  {
    id: 6,
    title: "Digital Marketing Platform",
    description:
      "AI-driven SEO, CRO optimization, and traffic forecasting tools.",
    longDescription:
      "Developed a Digital Marketing platform featuring on-page SEO, off-page SEO, content engine, CRO optimization, and traffic forecasting tools with AI-driven insights. Includes comprehensive analytics dashboards and automated reporting.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
    category: "Marketing Tech",
    icon: "trending-up",
  },
  {
    id: 7,
    title: "Document Intelligence Agent",
    description:
      "AI-powered document upload and context-aware Q&A chat interface.",
    longDescription:
      "Built a Document Intelligence Agent allowing users to upload documents and interact via AI-powered chat for context-aware Q&A and document insights. Features OCR processing, semantic search, and intelligent summarization.",
    techStack: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS"],
    category: "AI / ML",
    icon: "file-text",
  },
  {
    id: 8,
    title: "AI Writing Tool",
    description:
      "Quillbot-inspired tool with grammar enhancement and LLM-powered suggestions.",
    longDescription:
      "Built a Quillbot-inspired AI Writing Tool with grammar enhancement, paraphrasing, and LLM-powered style suggestions. Supports multiple writing modes including formal, casual, creative, and academic styles.",
    techStack: ["React", "TypeScript", "LLM APIs", "Tailwind CSS"],
    category: "AI / ML",
    icon: "pen-tool",
  },
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeType: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "M.Sc. Computer Science",
    institution: "Pondicherry University",
    period: "2021 – 2023",
    grade: "8.94",
    gradeType: "CGPA",
  },
  {
    id: 2,
    degree: "B.Sc. Computer Science",
    institution: "Amal College of Advanced Studies",
    period: "2018 – 2021",
    grade: "73%",
    gradeType: "Percentage",
  },
  {
    id: 3,
    degree: "Intermediate – MPC",
    institution: "S.V.H.S.S Palemad",
    period: "2016 – 2018",
    grade: "89%",
    gradeType: "Percentage",
  },
  {
    id: 4,
    degree: "Secondary School Certificate (SSC)",
    institution: "Narokkavu Higher Secondary School",
    period: "2015 – 2016",
    grade: "93%",
    gradeType: "Percentage",
  },
];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Joy of Computing Using Python",
    issuer: "NPTEL",
    icon: "award",
  },
  {
    id: 2,
    title: "An Introduction to Programming Through C++",
    issuer: "NPTEL",
    icon: "award",
  },
];

export const stats = [
  { label: "Years Experience", value: "3+", icon: "calendar" },
  { label: "Projects Delivered", value: "20+", icon: "folder" },
  { label: "Technologies", value: "15+", icon: "code" },
  { label: "Companies", value: "2", icon: "building" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
