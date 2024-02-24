import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chessGame from "@/public/chessGame.png";
import travelApp from "@/public/travelApp.jpg";

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
        title: "Software Engineer",
        location: "Galil Software, Nazareth, IL ",
        description:
            "Software Engineer at Galil Software with over 1 year of experience, specializing in React, Typescript, Next.js, and Python Flask",
        icon: React.createElement(CgWorkAlt),
        date: "2023-present",
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
        title: "chess Game",
        description:
            "Dive into a captivating chess experience crafted in C++ using the SDL API. Challenge your strategic prowess against friends or AI opponents in this immersive game",
        tags: ["C++", "SDL2"],
        imageUrl: chessGame,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "SQL",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Python Flask",
    "C",
    "C++",
    "C# .Net"
] as const;