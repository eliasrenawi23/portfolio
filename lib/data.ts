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
            "Research-based project using Text Rank algorithm to find similarity between large texts and extract significant sentences. Built with C# .NET.",
        tags: ["C#", ".NET", "Text Rank", "Research"],
        imageUrl: textSearch,
    },
    {
        title: "Employee Management System",
        description:
            "Client-Server application for employees and students management using JavaFx, JDBC, MySQL, and OCSF.",
        tags: ["Java", "JavaFX", "MySQL", "JDBC"],
        imageUrl: employeeSystem,
    },
    {
        title: "RAG Chatbot",
        description:
            "Hebrew document Q&A chatbot using Retrieval-Augmented Generation (RAG) with embeddings + vector search.",
        tags: ["Python", "LangChain", "ChromaDB", "RAG", "Streamlit"],
        imageUrl: ragChatbotHebrew,
    },
    {
        title: "Chess Game",
        description:
            "Fully functional chess game developed in C++ using the SDL2 library.",
        tags: ["C++", "SDL2"],
        imageUrl: chessGame,
    },
    {
        title: "Secure Email Exchange",
        description:
            "Implemented secure email exchange using Serpent and OFB model with El Gamal signature in Python.",
        tags: ["Python", "Cryptography", "Serpent", "El Gamal"],
        imageUrl: secureEmail,
    },
    {
        title: "Restaurant Menus",
        description:
            "Created multiple online restaurant menus currently in use by local businesses.",
        tags: ["Next.js", "React", "Web Design"],
        imageUrl: restaurantMenus,
    },
] as const;

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