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
  github: "https://github.com/Jaouadi2004-Fedi",
  linkedin: "https://www.linkedin.com/in/fedi-jaouadi-4511b9296/",
  degree: "Licence en Technologies Informatiques",
  mention: "Mention Très Bien",
};

export const skills = [
  { name: "React.js", level: 90, category: "Frontend", icon: "SiReact" },
  { name: "JavaScript", level: 83, category: "Frontend", icon: "SiJavascript" },
  { name: "HTML5", level: 95, category: "Frontend", icon: "SiHtml5" },
  { name: "CSS3", level: 90, category: "Frontend", icon: "SiCss" },
  { name: "Tailwind CSS", level: 85, category: "Frontend", icon: "SiTailwindcss" },
  { name: "Java", level: 85, category: "Backend", icon: "FaJava" },
  { name: "Spring Boot", level: 70, category: "Backend", icon: "SiSpringboot" },
  { name: "Symfony", level: 70, category: "Backend", icon: "SiSymfony" },
  { name: "MySQL", level: 82, category: "Database", icon: "SiMysql" },
  { name: "Firebase", level: 76, category: "Database", icon: "SiFirebase" },
  { name: "Git & GitHub", level: 85, category: "Tools", icon: "SiGit" },
  { name: "UI/UX Design", level: 78, category: "Design", icon: "SiFigma" },
  { name: "Photoshop", level: 78, category: "Design", icon: "SiPhotoshop" },
  { name: "Illustrator", level: 68, category: "Design", icon: "SiIllustrator" },
];

export const experiences = [
  {
    id: 1,
    company: "DevNet",
    role: {
      en: "Final Year Project Intern — AI E-Learning Platform",
      fr: "Stagiaire PFE — Plateforme E-Learning IA",
    },
    period: "02/2026 – 06/2026",
    type: {
      en: "Final Year Project (PFE)",
      fr: "Projet de Fin d'Études (PFE)",
    },
    description: {
      en: "Designed and developed a full-featured AI-powered e-learning platform as part of the final year project. Built role-based authentication (Student, Teacher, Admin), personalized AI course recommendations and learning-path predictions, a conversational chatbot tutor, role-specific dashboards, an internal messaging system, and an admin panel for managing user accounts and roles — all backed by Firebase and powered by the Gemini API.",
      fr: "Conception et développement d'une plateforme e-learning complète alimentée par l'IA dans le cadre du projet de fin d'études. Mise en place d'une authentification basée sur les rôles (Étudiant, Enseignant, Admin), de recommandations de cours personnalisées et de prédictions de parcours d'apprentissage, d'un chatbot conversationnel, de tableaux de bord spécifiques aux rôles, d'un système de messagerie interne et d'un panneau d'administration pour la gestion des comptes utilisateurs — le tout propulsé par Firebase et l'API Gemini.",
    },
    technologies: ["React.js", "Firebase", "Firestore", "Firebase Auth", "Gemini API", "Tailwind CSS", "Framer Motion"],
    highlight: true,
  },
  {
    id: 2,
    company: "S2IT Innovation Service",
    role: {
      en: "Software Development Intern",
      fr: "Stagiaire en Développement Logiciel",
    },
    period: "2025",
    type: {
      en: "Internship",
      fr: "Stage",
    },
    description: {
      en: "Developed and maintained software applications using modern web technologies. Contributed to the design and implementation of scalable backend services and RESTful APIs.",
      fr: "Développement et maintenance d'applications logicielles utilisant des technologies web modernes. Contribution à la conception et à la mise en œuvre de services backend évolutifs et d'API RESTful.",
    },
    technologies: ["Java", "Spring Boot", "MySQL", "React.js"],
    highlight: true,
  },
  {
    id: 3,
    company: "Radio Nationale Tunisienne",
    role: {
      en: "IT Systems & Technical Support Intern",
      fr: "Stagiaire en Systèmes Informatiques & Support Technique",
    },
    period: "2024",
    type: {
      en: "Internship",
      fr: "Stage",
    },
    description: {
      en: "Managed IT infrastructure and provided technical support for broadcast systems. Ensured network stability and resolved hardware/software issues in a fast-paced environment.",
      fr: "Gestion de l'infrastructure informatique et support technique pour les systèmes de diffusion. Assurance de la stabilité du réseau et résolution des problèmes matériels/logiciels dans un environnement dynamique.",
    },
    technologies: ["Networking", "IT Support", "System Admin", "Windows Server"],
    highlight: false,
  },
];

export const projects = [
  {
    id: 1,
    title: {
      en: "AI E-Learning Platform",
      fr: "Plateforme E-Learning IA",
    },
    subtitle: {
      en: "React.js · Firebase · Artificial Intelligence",
      fr: "React.js · Firebase · Intelligence Artificielle",
    },
    description: {
      en: "A full-featured e-learning platform powered by AI, offering personalized course recommendations, predictive analytics, an integrated chatbot tutor, role-based dashboards, and internal messaging — all managed through Firebase.",
      fr: "Une plateforme e-learning complète propulsée par l'IA, offrant des recommandations de cours personnalisées, des analyses prédictives, un chatbot tutoriel intégré, des tableaux de bord basés sur les rôles et une messagerie interne — le tout géré via Firebase.",
    },
    longDescription: {
      en: "Designed and developed a comprehensive e-learning ecosystem from the ground up. The platform leverages Firebase for real-time data, authentication, and cloud storage, while an AI engine drives smart content recommendations, learning-path predictions, and a conversational chatbot assistant. A rich role-based access system separates the experiences of Students, Instructors, and Admins, each with tailored dashboards. An internal messaging system allows direct communication between users. Admins can manage every account — assigning roles, activating or deactivating accounts, and overseeing the full user lifecycle.",
      fr: "Conception et développement d'un écosystème e-learning complet à partir de zéro. La plateforme utilise Firebase pour les données en temps réel, l'authentification et le stockage cloud, tandis qu'un moteur d'IA pilote les recommandations de contenu intelligentes, les prédictions de parcours d'apprentissage et un assistant chatbot conversationnel. Un système d'accès basé sur les rôles sépare les expériences des étudiants, des instructeurs et des administrateurs, chacun avec des tableaux de bord adaptés. Un système de messagerie interne permet la communication directe entre les utilisateurs. Les administrateurs peuvent gérer chaque compte — attribution des rôles, activation ou désactivation des comptes, et supervision du cycle de vie complet des utilisateurs.",
    },
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
      { en: "Role-Based Authentication (Student · Instructor · Admin)", fr: "Authentification basée sur les rôles (Étudiant · Instructeur · Admin)" },
      { en: "AI-Powered Course Recommendations & Learning Predictions", fr: "Recommandations de cours et prédictions d'apprentissage par IA" },
      { en: "Conversational Chatbot Tutor (Gemini API)", fr: "Chatbot tutoriel conversationnel (API Gemini)" },
      { en: "Role-Specific Dashboards with Real-Time Analytics", fr: "Tableaux de bord spécifiques aux rôles avec analyses en temps réel" },
      { en: "Internal Messaging System between Users", fr: "Système de messagerie interne entre utilisateurs" },
      { en: "Admin Panel — User Role Management, Account Activation / Deletion", fr: "Panneau d'administration — Gestion des rôles, activation/suppression de comptes" },
      { en: "Course & Lesson Management with Progress Tracking", fr: "Gestion des cours et leçons avec suivi de progression" },
      { en: "Firestore Real-Time Database", fr: "Base de données en temps réel Firestore" },
    ],
    color: "#15ff00ff",
    gradient: "from-orange-500 to-yellow-500",
    icon: "🎓",
    status: { en: "Completed", fr: "Terminé" },
    category: { en: "Full-Stack · AI", fr: "Full-Stack · IA" },
  },
  {
    id: 2,
    title: {
      en: "Football Academy Management System",
      fr: "Système de Gestion d'Académie de Football",
    },
    subtitle: {
      en: "Full-Stack Web Platform",
      fr: "Plateforme Web Full-Stack",
    },
    description: {
      en: "A comprehensive role-based web platform for managing a football academy. Features multi-dashboard architecture for coaches, technical directors, and treasurers with real-time data management.",
      fr: "Une plateforme web complète basée sur les rôles pour gérer une académie de football. Architecture multi-tableaux de bord pour les entraîneurs, directeurs techniques et trésoriers avec gestion des données en temps réel.",
    },
    longDescription: {
      en: "Built a multi-role management platform that streamlines football academy operations. Includes player management, training session scheduling, financial tracking with detailed reports, and secure role-based access control (RBAC).",
      fr: "Construction d'une plateforme de gestion multi-rôles qui rationalise les opérations de l'académie de football. Inclut la gestion des joueurs, la planification des séances d'entraînement, le suivi financier avec des rapports détaillés et un contrôle d'accès basé sur les rôles (RBAC).",
    },
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Tailwind CSS"],
    features: [
      { en: "Role-Based Access Control (Coach, Technical Director, Treasurer)", fr: "Contrôle d'accès basé sur les rôles (Entraîneur, Directeur Technique, Trésorier)" },
      { en: "Player Management & Statistics", fr: "Gestion des joueurs et statistiques" },
      { en: "Training Session Scheduling", fr: "Planification des séances d'entraînement" },
      { en: "Financial Tracking & Reports", fr: "Suivi financier et rapports" },
      { en: "Interactive Admin Dashboards", fr: "Tableaux de bord interactifs" },
    ],
    color: "#00f5ff",
    gradient: "from-cyan-500 to-blue-600",
    icon: "⚽",
    status: { en: "Completed", fr: "Terminé" },
    category: { en: "Full-Stack", fr: "Full-Stack" },
  },
  {
    id: 3,
    title: {
      en: "Library Management System",
      fr: "Système de Gestion de Bibliothèque",
    },
    subtitle: {
      en: "PHP Symfony Application",
      fr: "Application PHP Symfony",
    },
    description: {
      en: "A full-featured library management web application built with Symfony and Twig. Handles book cataloguing, user accounts, and a complete borrowing workflow with admin dashboard.",
      fr: "Une application web complète de gestion de bibliothèque construite avec Symfony et Twig. Gère le catalogage des livres, les comptes utilisateurs et un flux d'emprunt complet avec tableau de bord administrateur.",
    },
    longDescription: {
      en: "Developed a complete library solution with comprehensive book inventory management, user registration and authentication, borrowing and return tracking, overdue notifications, and a rich admin panel built with Twig templates.",
      fr: "Développement d'une solution de bibliothèque complète avec gestion d'inventaire des livres, inscription et authentification des utilisateurs, suivi des emprunts et retours, notifications de retard et un panneau d'administration riche construit avec des templates Twig.",
    },
    technologies: ["PHP", "Symfony", "Twig", "MySQL", "Bootstrap"],
    features: [
      { en: "Book Catalog & Inventory Management", fr: "Catalogue de livres et gestion d'inventaire" },
      { en: "User Registration & Authentication", fr: "Inscription et authentification des utilisateurs" },
      { en: "Borrowing & Return System", fr: "Système d'emprunt et de retour" },
      { en: "Admin Dashboard", fr: "Tableau de bord administrateur" },
      { en: "Overdue Tracking & Notifications", fr: "Suivi des retards et notifications" },
    ],
    color: "#7b2fff",
    gradient: "from-purple-500 to-indigo-600",
    icon: "📚",
    status: { en: "Completed", fr: "Terminé" },
    category: { en: "Full-Stack", fr: "Full-Stack" },
  },
  {
    id: 4,
    title: {
      en: "Java MVC Person Management",
      fr: "Gestion de Personnes MVC Java",
    },
    subtitle: {
      en: "CRUD Application",
      fr: "Application CRUD",
    },
    description: {
      en: "A robust Java MVC person management system implementing full CRUD operations with JSP/Servlets, demonstrating clean architecture, data persistence, and enterprise Java patterns.",
      fr: "Un système robuste de gestion de personnes en Java MVC implémentant des opérations CRUD complètes avec JSP/Servlets, démontrant une architecture propre, la persistance des données et les patterns Java d'entreprise.",
    },
    longDescription: {
      en: "Implemented a classic MVC architecture using Java Servlets and JSP for the view layer with MySQL for persistence. The project demonstrates clean separation of concerns, DAO pattern for database access, and form validation.",
      fr: "Implémentation d'une architecture MVC classique utilisant Java Servlets et JSP pour la couche de présentation avec MySQL pour la persistance. Le projet démontre une séparation claire des responsabilités, le pattern DAO pour l'accès à la base de données et la validation de formulaires.",
    },
    technologies: ["Java", "JSP", "Servlets", "MySQL", "MVC Pattern"],
    features: [
      { en: "Full CRUD Operations", fr: "Opérations CRUD complètes" },
      { en: "MVC Architecture", fr: "Architecture MVC" },
      { en: "DAO Design Pattern", fr: "Pattern de conception DAO" },
      { en: "Form Validation", fr: "Validation de formulaires" },
      { en: "MySQL Persistence Layer", fr: "Couche de persistance MySQL" },
    ],
    color: "#ff0080",
    gradient: "from-pink-500 to-rose-600",
    icon: "👤",
    status: { en: "Completed", fr: "Terminé" },
    category: { en: "Backend", fr: "Backend" },
  },
];

export const education = [
  {
    degree: {
      en: "Bachelor's in Information Technologies",
      fr: "Licence en Technologies Informatiques",
    },
    mention: "Mention Très Bien",
    institution: "Institut Supérieur des Technologies de l'Information",
    period: "2023 – 2026",
    description: {
      en: "Three-year degree in Information Technologies covering full-stack development, software engineering, databases, networking, and system administration. Graduated with Highest Honours.",
      fr: "Diplôme de trois ans en Technologies Informatiques couvrant le développement full-stack, le génie logiciel, les bases de données, les réseaux et l'administration système. Diplômé avec les plus hautes distinctions.",
    },
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
  { id: 'projects', value: 4, suffix: "+" },
  { id: 'internships', value: 3, suffix: "" },
  { id: 'technologies', value: 14, suffix: "+" },
  { id: 'gpa', value: "TB", suffix: "", isText: true },
];
