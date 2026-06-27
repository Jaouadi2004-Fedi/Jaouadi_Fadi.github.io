export const personalInfo = {
  name: "Fedi Jawedi",
  title: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React.js Developer",
    "Java & Spring Boot Developer",
    "UI / UX Designer",
  ],
  bio: `Passionate Full-Stack Developer with a Licence in Information Technologies (Mention Très Bien). 
  I specialize in building modern, scalable web applications using React.js, Java Spring Boot, and modern cloud architectures. 
  Driven by clean code, pixel-perfect UI, and solving real-world problems through technology.`,
  location: "Tunisia",
  email: "jawedifadi@gmail.com",
  github: "https://github.com/fedijawedi",
  linkedin: "https://linkedin.com/in/fedijawedi",
  degree: "Licence en Technologies Informatiques",
  mention: "Mention Très Bien",
};

export const skills = [
  // Frontend
  { name: "React.js", level: 90, category: "Frontend", icon: "SiReact" },
  { name: "JavaScript", level: 88, category: "Frontend", icon: "SiJavascript" },
  { name: "HTML5", level: 95, category: "Frontend", icon: "SiHtml5" },
  { name: "CSS3", level: 90, category: "Frontend", icon: "SiCss" },
  { name: "Tailwind CSS", level: 85, category: "Frontend", icon: "SiTailwindcss" },
  // Backend
  { name: "Java", level: 85, category: "Backend", icon: "FaJava" },
  { name: "Spring Boot", level: 80, category: "Backend", icon: "SiSpringboot" },
  { name: "JSP/Servlets", level: 75, category: "Backend", icon: "FaJava" },
  { name: "Symfony", level: 72, category: "Backend", icon: "SiSymfony" },
  // Database
  { name: "MySQL", level: 82, category: "Database", icon: "SiMysql" },
  // Tools
  { name: "Git & GitHub", level: 85, category: "Tools", icon: "SiGit" },
  { name: "UI/UX Design", level: 78, category: "Design", icon: "SiFigma" },
];

export const experiences = [
  {
    id: 1,
    company: "DevNet",
    role: "Final Year Project Intern — AI E-Learning Platform",
    period: "02/2026 – 06/2026",
    type: "Projet de Fin d'Études (PFE)",
    description:
      "Designed and developed a full-featured AI-powered e-learning platform as part of the final year project. Built role-based authentication (Student, Teacher , Admin), personalized AI course recommendations and learning-path predictions, a conversational chatbot tutor, role-specific dashboards, an internal messaging system, and an admin panel for managing user accounts and roles — all backed by Firebase and powered by the Gemini API.",
    technologies: ["React.js", "Firebase", "Firestore", "Firebase Auth", "Gemini API", "Tailwind CSS", "Framer Motion"],
    highlight: true,
  },
  {
    id: 2,
    company: "S2IT Innovation Service",
    role: "Software Development Intern",
    period: "2025",
    type: "Internship",
    description:
      "Developed and maintained software applications using modern web technologies. Contributed to the design and implementation of scalable backend services and RESTful APIs.",
    technologies: ["Java", "Spring Boot", "MySQL", "React.js"],
    highlight: true,
  },

  {
    id: 3,
    company: "Radio Nationale Tunisienne",
    role: "IT Systems & Technical Support Intern",
    period: "2024",
    type: "Internship",
    description:
      "Managed IT infrastructure and provided technical support for broadcast systems. Ensured network stability and resolved hardware/software issues in a fast-paced environment.",
    technologies: ["Networking", "IT Support", "System Admin", "Windows Server"],
    highlight: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "AI E-Learning Platform",
    subtitle: "React.js · Firebase · Artificial Intelligence",
    description:
      "A full-featured e-learning platform powered by AI, offering personalized course recommendations, predictive analytics, an integrated chatbot tutor, role-based dashboards, and internal messaging — all managed through Firebase.",
    longDescription:
      "Designed and developed a comprehensive e-learning ecosystem from the ground up. The platform leverages Firebase for real-time data, authentication, and cloud storage, while an AI engine drives smart content recommendations, learning-path predictions, and a conversational chatbot assistant. A rich role-based access system separates the experiences of Students, Instructors, and Admins, each with tailored dashboards. An internal messaging system allows direct communication between users. Admins can manage every account — assigning roles, activating or deactivating accounts, and overseeing the full user lifecycle.",
    technologies: [
      "React.js",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "AI / ML",
      "Gemini API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Role-Based Authentication (Student · Instructor · Admin)",
      "AI-Powered Course Recommendations & Learning Predictions",
      "Conversational Chatbot Tutor (Gemini API)",
      "Role-Specific Dashboards with Real-Time Analytics",
      "Internal Messaging System between Users",
      "Admin Panel — User Role Management, Account Activation / Deletion",
      "Course & Lesson Management with Progress Tracking",
      "Firestore Real-Time Database",
    ],
    color: "#15ff00ff",
    gradient: "from-orange-500 to-yellow-500",
    icon: "🎓",
    status: "Completed",
    category: "Full-Stack · AI",
  },
  {
    id: 2,
    title: "Football Academy Management System",
    subtitle: "Full-Stack Web Platform",
    description:
      "A comprehensive role-based web platform for managing a football academy. Features multi-dashboard architecture for coaches, technical directors, and treasurers with real-time data management.",
    longDescription:
      "Built a multi-role management platform that streamlines football academy operations. Includes player management, training session scheduling, financial tracking with detailed reports, and secure role-based access control (RBAC).",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Tailwind CSS"],
    features: [
      "Role-Based Access Control (Coach, Technical Director, Treasurer)",
      "Player Management & Statistics",
      "Training Session Scheduling",
      "Financial Tracking & Reports",
      "Interactive Admin Dashboards",
    ],
    color: "#00f5ff",
    gradient: "from-cyan-500 to-blue-600",
    icon: "⚽",
    status: "Completed",
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Library Management System",
    subtitle: "PHP Symfony Application",
    description:
      "A full-featured library management web application built with Symfony and Twig. Handles book cataloguing, user accounts, and a complete borrowing workflow with admin dashboard.",
    longDescription:
      "Developed a complete library solution with comprehensive book inventory management, user registration and authentication, borrowing and return tracking, overdue notifications, and a rich admin panel built with Twig templates.",
    technologies: ["PHP", "Symfony", "Twig", "MySQL", "Bootstrap"],
    features: [
      "Book Catalog & Inventory Management",
      "User Registration & Authentication",
      "Borrowing & Return System",
      "Admin Dashboard",
      "Overdue Tracking & Notifications",
    ],
    color: "#7b2fff",
    gradient: "from-purple-500 to-indigo-600",
    icon: "📚",
    status: "Completed",
    category: "Full-Stack",
  },
  {
    id: 4,
    title: "Java MVC Person Management",
    subtitle: "CRUD Application",
    description:
      "A robust Java MVC person management system implementing full CRUD operations with JSP/Servlets, demonstrating clean architecture, data persistence, and enterprise Java patterns.",
    longDescription:
      "Implemented a classic MVC architecture using Java Servlets and JSP for the view layer with MySQL for persistence. The project demonstrates clean separation of concerns, DAO pattern for database access, and form validation.",
    technologies: ["Java", "JSP", "Servlets", "MySQL", "MVC Pattern"],
    features: [
      "Full CRUD Operations",
      "MVC Architecture",
      "DAO Design Pattern",
      "Form Validation",
      "MySQL Persistence Layer",
    ],
    color: "#ff0080",
    gradient: "from-pink-500 to-rose-600",
    icon: "👤",
    status: "Completed",
    category: "Backend",
  },

];

export const education = [
  {
    degree: "Licence en Technologies Informatiques",
    mention: "Mention Très Bien",
    institution: "Institut Supérieur des Technologies de l'Information",
    period: "2023 – 2026",
    description:
      "Three-year degree in Information Technologies covering full-stack development, software engineering, databases, networking, and system administration. Graduated with Highest Honours.",
    courses: [
      "Data Structures & Algorithms",
      "Web Development (Frontend & Backend)",
      "Database Systems",
      "Software Engineering",
      "Networks & Security",
      "OOP with Java",
    ],
  },
];

export const stats = [
  { label: "Projects Built", value: 4, suffix: "+" },
  { label: "Internships", value: 3, suffix: "" },
  { label: "Technologies", value: 14, suffix: "+" },
  { label: "GPA Mention", value: "TB", suffix: "", isText: true },
];
