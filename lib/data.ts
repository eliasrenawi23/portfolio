import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chessGame from "@/public/chessGame.png";
import travelApp from "@/public/travelApp.jpg";
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
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
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
        name: "Contact",
        hash: "#contact",
    },
    {
        name: "Fun",
        hash: "#fun",
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
    },
    {
        title: "Full Stack Engineer Training",
        location: "Bootcamp",
        description:
            "Completed a 225-hour course covering HTML/CSS/JS, MongoDB, Express, React, and Node.js.",
        icon: React.createElement(FaReact),
        date: "2022",
    },
    {
        title: "Math Tutor",
        location: "ORT Braude College",
        description:
            "Tutored first-year students in mathematics courses.",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - 2022",
    },
    {
        title: "B.Sc. Software Engineering",
        location: "ORT Braude College of Engineering",
        description:
            "Graduated with GPA 83. Key grades: Computer Networks 98, OOP 96, Architecture 88. Final Project: Similar Text Search Technology.",
        icon: React.createElement(LuGraduationCap),
        date: "2017 – 2022",
    },
] as const;

export const projectsData = [
    {
        title: "Similar Text Search",
        description:
            "Final-year research project using Text Rank algorithm to find similarity between large texts and extract significant sentences.",
        tags: ["C#", ".NET", "Text Rank", "Research"],
        imageUrl: textSearch,
        impact: "B.Sc. Final Project",
        githubUrl: "https://github.com/eliasrenawi23",
        liveUrl: null,
    },
    {
        title: "Employee Management System",
        description:
            "Full-stack client-server app for managing employees and students with real-time data sync.",
        tags: ["Java", "JavaFX", "MySQL", "JDBC"],
        imageUrl: employeeSystem,
        impact: null,
        githubUrl: "https://github.com/eliasrenawi23",
        liveUrl: null,
    },
    {
        title: "RAG Chatbot",
        description:
            "Hebrew document Q&A chatbot using Retrieval-Augmented Generation — enabling natural-language search over uploaded PDFs.",
        tags: ["Python", "LangChain", "ChromaDB", "RAG", "Streamlit"],
        imageUrl: ragChatbotHebrew,
        impact: "AI-powered Q&A",
        githubUrl: "https://github.com/eliasrenawi23",
        liveUrl: null,
    },
    {
        title: "Chess Game",
        description:
            "Fully functional chess game with move validation, check detection, and visual piece rendering.",
        tags: ["C++", "SDL2"],
        imageUrl: chessGame,
        impact: null,
        githubUrl: "https://github.com/eliasrenawi23",
        liveUrl: null,
    },
    {
        title: "Secure Email Exchange",
        description:
            "End-to-end encrypted email exchange using Serpent cipher (OFB mode) with El Gamal digital signatures.",
        tags: ["Python", "Cryptography", "Serpent", "El Gamal"],
        imageUrl: secureEmail,
        impact: null,
        githubUrl: "https://github.com/eliasrenawi23",
        liveUrl: null,
    },
    {
        title: "Restaurant Menus",
        description:
            "Multiple online restaurant menus currently serving real local businesses with live ordering support.",
        tags: ["Next.js", "React", "Web Design"],
        imageUrl: restaurantMenus,
        impact: "Used by local businesses",
        githubUrl: null,
        liveUrl: null,
    },
] as const;

// Categorized skills for the redesigned Skills section
export const skillsCategories = {
    frontend: {
        label: "Frontend",
        color: "skill-frontend",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
    },
    backend: {
        label: "Backend",
        color: "skill-backend",
        skills: ["Python Flask", "Node.js", "MongoDB", "PostgreSQL", "MySQL"],
    },
    ai: {
        label: "AI & ML",
        color: "skill-ai",
        skills: ["Azure OpenAI", "Claude AI", "RAG Pipelines", "LangChain"],
    },
    languages: {
        label: "Languages",
        color: "skill-languages",
        skills: ["C", "C++", "C#", ".NET", "Java", "MATLAB"],
    },
    tools: {
        label: "Tools",
        color: "skill-tools",
        skills: ["Docker", "GitHub Actions", "Git", "SDL2", "JavaFX", "Data Security", "Cryptology"],
    },
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