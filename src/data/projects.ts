import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "apsara-home",
    title: "Apsara Home",
    image: "/images/afprof.png",
    badges: ["Next.js", "Laravel", "GraphQL"],
    summary:
      "A full-stack dropshipping and social commerce platform with a rewards-driven reseller network, real-time notifications, and an AI shopping assistant.",
    description:
      "Apsara Home is a multi-service e-commerce platform built as a monorepo spanning a customer storefront, a community/social layer, a rider delivery app, and a Laravel API. It combines a GraphQL backend, real-time order and chat updates, and an AI-assisted shopping experience with a gamified referral and rewards system for resellers.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Laravel 12",
      "GraphQL (Lighthouse)",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.IO",
      "Firebase",
      "Google Gemini AI SDK",
    ],
    features: [
      "Monorepo architecture with separate storefront, community, and rider apps",
      "Real-time order tracking, chat, and notifications via a dedicated Socket.IO service",
      "GraphQL API (Laravel Lighthouse) backed by Redis caching and Meilisearch search",
      "AI shopping assistant powered by Google Gemini",
      "Gamified reseller program with referral QR codes, PV rewards, and rank progression",
      "Rider mobile app with QR-code delivery scanning",
      "PWA support with push notifications and installable storefront",
    ],
    link: "#",
  },
  {
    id: "mis",
    title: "Management Information System",
    image: "/images/mia.png",
    badges: ["Laravel", "MySQL"],
    summary:
      "A comprehensive MIS with integration capabilities for streamlining business processes and data management.",
    description:
      "A comprehensive Management Information System designed to streamline business operations with integrated data management capabilities. This system provides real-time analytics, reporting tools, and seamless integration with existing business processes.",
    technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Real-time data processing",
      "Custom reporting dashboard",
      "Role-based access control",
      "Data import/export functionality",
      "Automated email notifications",
      "Ai integration",
      "Automated Balanace Deduction",
    ],
    link: "#",
  },
  {
    id: "ims",
    title: "Inventory Management with POS",
    image: "/images/ims.jpg",
    badges: ["PHP", "MySQL"],
    summary:
      "A complete inventory management system with integrated Point of Sale functionality for retail businesses.",
    description:
      "An all-in-one inventory management solution with integrated Point of Sale system designed for retail businesses. This system helps track inventory levels, sales, orders, and deliveries in real-time.",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    features: [
      "Barcode scanning capability",
      "Sales reporting and analytics",
      "Supplier management",
      "Low stock alerts",
      "Customer management",
    ],
    link: "#",
  },
  {
    id: "school-portal",
    title: "School Portal & Enrollment System",
    image: "/images/pds.png",
    badges: ["PHP", "Bootstrap"],
    summary:
      "A dynamic school portal with enrollment system functionality, including both frontend and backend development.",
    description:
      "A comprehensive school management portal with online enrollment capabilities. This system simplifies student registration, course management, and communication between administrators, teachers, students, and parents.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Online student registration",
      "Course management system",
      "Grade tracking",
      "Document Request",
      "Teachers portal access",
    ],
    link: "#",
  },
];
