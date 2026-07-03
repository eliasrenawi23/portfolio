import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import chessGame from "@/public/chessGame.png";
import ragChatbotHebrew from "@/public/ragChatbotHebrew.png";
import textSearch from "@/public/textSearch.png";
import employeeSystem from "@/public/employeeSystem.png";
import secureEmail from "@/public/secureEmail.png";
import restaurantMenus from "@/public/restaurantMenus.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Work",
        hash: "#work",
    },
    {
        name: "Systems",
        hash: "#systems",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full-Stack & AI Agent Engineer",
        location: "Galil Software, Nazareth, IL",
        description:
            "Build high-performance React/Next.js interfaces, design REST APIs with Python Flask, and deploy AI agents/chatbots using Azure OpenAI & Claude. Developed OCR RAG pipelines with Azure Document Intelligence.",
        icon: React.createElement(CgWorkAlt),
        date: "April 2023 – Present",
        isPrimary: true
    },
    {
        title: "B.Sc. Software Engineering",
        location: "ORT Braude College of Engineering",
        description:
            "Graduated with GPA 83. Key grades: Computer Networks 98, OOP 96, Architecture 88. Final Project: Similar Text Search Technology.",
        icon: React.createElement(LuGraduationCap),
        date: "2017 – 2022",
        isPrimary: true
    },
    {
        title: "Full Stack Engineer Training",
        location: "Bootcamp",
        description:
            "Completed a 225-hour course covering HTML/CSS/JS, MongoDB, Express, React, and Node.js.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
        isPrimary: false
    },
    {
        title: "Math Tutor",
        location: "ORT Braude College",
        description:
            "Tutored first-year students in mathematics courses.",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - 2022",
        isPrimary: false
    },
] as const;

// 3 Selected Main Case Studies with rich outcome-focused dossier content
export const caseStudiesData = [
    {
        id: "01",
        title: "Hebrew RAG Document Chatbot",
        tag: "RAG / Search / LLM",
        description: "Q&A over uploaded Hebrew documents using embeddings, retrieval, and LLM response generation.",
        bullets: [
            "Chunking and retrieval pipeline optimized for Hebrew morphological structures",
            "Natural-language search over large PDF files",
            "Streamlit/Web UI interface with source citation",
            "LangChain / ChromaDB / Python"
        ],
        tags: ["Python", "LangChain", "ChromaDB", "RAG", "Streamlit", "OpenAI"],
        imageUrl: ragChatbotHebrew,
        githubUrl: "https://github.com/eliasrenawi23",
        liveUrl: null,
        problem: "Retrieving specific guidelines and legal facts from dense Hebrew documents is complex due to language syntax rules and terminology variations.",
        built: "A localized RAG engine using semantic chunking, custom embeddings, vector storage in ChromaDB, and LangChain agents to extract contextual citations.",
        impact: "Allowed queries in natural language, retrieving corresponding page sources with 90%+ precision, simplifying legal research."
    },
    {
        id: "02",
        title: "Local Business Menu Platform",
        tag: "Next.js / Web Design / Real Users",
        description: "Built online restaurant menu websites used by real local businesses.",
        bullets: [
            "Mobile-first responsive UX with instant load speeds",
            "Lightweight, scannable layout designed for high conversion",
            "Business-friendly administration/updating interface",
            "Production-ready deployment serving real users"
        ],
        tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        imageUrl: restaurantMenus,
        githubUrl: "https://github.com/eliasrenawi23",
        liveUrl: null,
        problem: "Small local restaurants lack clean, mobile-first, and SEO-friendly menu sites, forcing clients to load slow, zoom-unfriendly PDFs.",
        built: "A modern Next.js static site generator menu platform that loads instantly on mobile networks, optimized for scannability and direct local ordering.",
        impact: "Adopted by local restaurants, driving direct digital orders and eliminating friction for mobile restaurant customers."
    },
    {
        id: "03",
        title: "Production Document Automation Platform",
        tag: "Professional work at Galil Software · Maintainer / Feature Developer",
        description: "Maintained and extended a production AI-powered document automation platform for invoices and business documents. Focused on scaling system capacity, shipping new features, debugging production issues, improving OCR/LLM extraction flows, adding validation logic, and supporting client-specific ERP integrations.",
        bullets: [
            "Maintained and improved document extraction flows for messy PDFs and Hebrew invoices",
            "Shipped new features across React dashboards and Python Flask APIs",
            "Debugged production issues across OCR, LLM extraction, validation, and ERP insertion",
            "Added customer-specific rules, supplier matching logic, and workflow fixes",
            "Improved status tracking, error visibility, and admin/support workflows",
            "Worked with Azure Document Intelligence, Claude/OpenAI, MongoDB/Cosmos, and ERP APIs"
        ],
        tags: ["React", "Python Flask", "Azure Document Intelligence", "Claude/OpenAI", "MongoDB/Cosmos", "ERP APIs"],
        imageUrl: null, // Private company work - no screenshot
        useSchematic: true,
        githubUrl: null,
        liveUrl: null,
        problemLabel: "THE CONTEXT",
        problem: "Supporting and scaling a production-level document extraction pipeline. Focused on expanding pipeline capabilities, optimizing extraction accuracy, and integrating custom business rules as the customer base scaled.",
        builtLabel: "MY CONTRIBUTION",
        built: "I worked on React dashboards, Python Flask backend services, OCR/LLM extraction flows, validation logic, error handling, customer-specific rules, admin workflows, and ERP integrations.",
        impactLabel: "PRODUCTION IMPACT",
        impact: "Contributed to a live system that grew to 15+ active customers processing between 1,000 to 10,000+ invoices monthly per client, helping reduce manual entry, improve extraction reliability, and lower ERP insertion errors through better validation and support tooling.",
        honestyNote: "Company-owned production software. Contributed as a core maintainer and feature developer, focusing on production systems optimization, backend services, and client workflows."
    }
] as const;

// Legacy / B.Sc. Foundations Archive Projects
export const archiveProjectsData = [
    {
        title: "Similar Text Search",
        description: "Final-year research project using Text Rank algorithm to find similarity between large texts and extract significant sentences.",
        tags: ["C#", ".NET", "Text Rank", "Research"],
        imageUrl: textSearch,
        impact: "B.Sc. Final Project",
        githubUrl: "https://github.com/eliasrenawi23",
    },
    {
        title: "Employee Management System",
        description: "Full-stack client-server app for managing employees and students with real-time data sync.",
        tags: ["Java", "JavaFX", "MySQL", "JDBC"],
        imageUrl: employeeSystem,
        impact: "Java Desktop App",
        githubUrl: "https://github.com/eliasrenawi23",
    },
    {
        title: "Secure Email Exchange",
        description: "End-to-end encrypted email exchange using Serpent cipher (OFB mode) with El Gamal digital signatures.",
        tags: ["Python", "Cryptography", "Serpent", "El Gamal"],
        imageUrl: secureEmail,
        impact: "Security/Crypto Project",
        githubUrl: "https://github.com/eliasrenawi23",
    },
    {
        title: "Chess Game",
        description: "Fully functional chess game with move validation, check detection, and visual piece rendering.",
        tags: ["C++", "SDL2"],
        imageUrl: chessGame,
        impact: "C++ Game Engine",
        githubUrl: "https://github.com/eliasrenawi23",
    }
] as const;

// Categorized Skills matrix matching the 3-column dossier design
export const skillsMatrixData = {
    aiSystems: {
        label: "AI Systems",
        skills: [
            { name: "OCR Pipelines", desc: "Azure Document Intelligence & custom filters" },
            { name: "Retrieval-Augmented Gen (RAG)", desc: "Semantic chunking & vector search" },
            { name: "LLM Extraction", desc: "Structured outputs with Claude & OpenAI" },
            { name: "Prompt Engineering", desc: "Few-shot templates, prompt chaining" },
            { name: "LangChain", desc: "Agent orchestration & chain workflows" },
            { name: "Azure OpenAI", desc: "Enterprise AI service configuration" }
        ]
    },
    productEngineering: {
        label: "Product Engineering",
        skills: [
            { name: "React / Next.js", desc: "App Router, SSR, Server Actions, Client hooks" },
            { name: "TypeScript / JavaScript", desc: "Type-safe product architecture" },
            { name: "Python Flask", desc: "RESTful API creation, middleware config" },
            { name: "Tailwind CSS", desc: "Minimal utility styling, responsive layout" },
            { name: "NoSQL (Mongo/Cosmos)", desc: "Flexible JSON document storage" },
            { name: "SQL (Postgres/MySQL)", desc: "Relational modeling, indexing" }
        ]
    },
    delivery: {
        label: "Delivery",
        skills: [
            { name: "System Debugging", desc: "Error logs analysis, trace profiling" },
            { name: "Git / GitHub Actions", desc: "CI/CD automated testing & deployment" },
            { name: "Docker Containers", desc: "Containerized environments" },
            { name: "Production Support", desc: "Active system maintenance & logging" },
            { name: "ERP / API Integration", desc: "Syncing internal workflows securely" },
            { name: "Technical Communication", desc: "Gathering stakeholder requirements" }
        ]
    }
} as const;

// Keep the flat array for backwards compatibility
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python Flask",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "C",
  "C++",
  "C#",
  ".NET",
  "Java",
  "MATLAB",
  "Azure OpenAI",
  "Claude AI",
  "RAG Pipelines",
  "LangChain",
  "Docker",
  "GitHub Actions",
  "SDL2",
  "JavaFX",
  "Data Security",
  "Cryptology",
] as const;