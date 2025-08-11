import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chessGame from "@/public/chessGame.png";
import travelApp from "@/public/travelApp.jpg";
import ragChatbotHebrew from "@/public/ragChatbotHebrew.png";

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
        "Design and deliver high-performance React/Next.js interfaces, Python Flask APIs, and AI-powered document workflows. Experienced with RAG pipelines, OCR using Azure Document Intelligence, and deploying production chatbots with Azure OpenAI and Claude.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2023 - Present",
    },
    {
        title: "Graduated Course ",
        location: "Fursa Full-stack development bootcamp ",
        description:
            "Course of 225 hours for Full stack Engineers",
        icon: React.createElement(FaReact),
        date: "2022",
    },
    {
        title: "Math Tutor",
        location: "ORT Braude College of Engineering",
        description:
            "Tutor for first year students in math courses",
        icon: React.createElement(CgWorkAlt),
        date: "2021-2022",
    },
    {
        title: "B.Sc.Software Engineering Graduate",
        location: "ORT Braude College of Engineering",
        description:
            "Graduated with a B.Sc. in Software Engineering from ORT Braude College of Engineering ",
        icon: React.createElement(LuGraduationCap),
        date: "2017-2022",
    },


] as const;

export const projectsData = [
    {
        title: "TravelApp",
        description:
            "one of my First personal project 'The Travel App' for planning a Trip Abroad",
        tags: ["React", "node.js", "MongoDB",],
        imageUrl: travelApp,
    },
    {
        title: "Chess Game",
        description:
            "Dive into a captivating chess experience crafted in C++ using the SDL API. Challenge your strategic prowess against friends or AI opponents in this immersive game",
        tags: ["C++", "SDL2"],
        imageUrl: chessGame,
    },
    {
        title: "RAG Chatbot",
        description:
            "Hebrew document Q&A chatbot using Retrieval-Augmented Generation (RAG) with embeddings + vector search to ground answers in your own PDFs and text.",
        tags: ["Python", "LangChain", "ChromaDB", "RAG", "Streamlit"],
        imageUrl: ragChatbotHebrew,
   },
] as const;

export const skillsData = [
  // Frontend
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  
  // Backend & APIs
  "Node.js",
  "Express",
  "Python Flask",
  "REST API Design",
  
  // Databases
  "SQL",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  
  // AI & Data Processing
  "Azure OpenAI",
  "Claude AI",
  "RAG Pipelines",
  "LangChain",
  "OCR (Azure Document Intelligence)",
  
  // DevOps & Tools
  "Git",
  "Docker",
  "CI/CD (GitHub Actions)",
  
  // Low-level & Other Languages
  "C",
  "C++",
  "Java",
  "C# .NET",
  "MATLAB",
  
  // Frameworks & Libraries
  "SDL2/SDL3",
  "JavaFX",
  "JDBC",
  
  // Security & Cryptography
  "Data Security",
  "Cryptology",
  
  // Soft Skills
  "Teamwork",
  "Advanced Problem-Solving",
  "Project Organization"
] as const;