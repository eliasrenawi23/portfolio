"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsCategories } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import { 
    FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaJava,
    FaDatabase, FaCode
} from "react-icons/fa";
import { 
    SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss,
    SiMongodb, SiPostgresql, SiMysql, SiCplusplus,
    SiOpenai, SiFlask
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsRobot, BsGearFill } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";

// Icon mapping for skills
const skillIcons: Record<string, React.ReactNode> = {
    "React": <FaReact />,
    "Next.js": <SiNextdotjs />,
    "TypeScript": <SiTypescript />,
    "JavaScript": <SiJavascript />,
    "HTML": <FaCode />,
    "CSS": <FaCode />,
    "Tailwind": <SiTailwindcss />,
    "Python Flask": <SiFlask />,
    "Node.js": <FaNodeJs />,
    "MongoDB": <SiMongodb />,
    "PostgreSQL": <SiPostgresql />,
    "MySQL": <SiMysql />,
    "C": <FaCode />,
    "C++": <SiCplusplus />,
    "C#": <TbBrandCSharp />,
    ".NET": <TbBrandCSharp />,
    "Java": <FaJava />,
    "MATLAB": <FaCode />,
    "Azure OpenAI": <SiOpenai />,
    "Claude AI": <BsRobot />,
    "RAG Pipelines": <HiOutlineSparkles />,
    "LangChain": <BsRobot />,
    "Docker": <FaDocker />,
    "GitHub Actions": <FaGitAlt />,
    "Git": <FaGitAlt />,
    "SDL2": <BsGearFill />,
    "JavaFX": <FaJava />,
    "Data Security": <BsGearFill />,
    "Cryptology": <BsGearFill />,
};

const categoryColors: Record<string, { bg: string; border: string; text: string; icon: string; hoverShadow: string }> = {
    frontend: { 
        bg: "from-blue-500/10 to-blue-500/5", 
        border: "border-blue-500/30",
        text: "text-blue-600 dark:text-blue-400",
        icon: "text-blue-500",
        hoverShadow: "hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:border-blue-500/60",
    },
    backend: { 
        bg: "from-emerald-500/10 to-emerald-500/5", 
        border: "border-emerald-500/30",
        text: "text-emerald-600 dark:text-emerald-400",
        icon: "text-emerald-500",
        hoverShadow: "hover:shadow-[0_0_12px_rgba(16,185,129,0.6)] hover:border-emerald-500/60",
    },
    ai: { 
        bg: "from-purple-500/10 to-purple-500/5", 
        border: "border-purple-500/30",
        text: "text-purple-600 dark:text-purple-400",
        icon: "text-purple-500",
        hoverShadow: "hover:shadow-[0_0_12px_rgba(168,85,247,0.6)] hover:border-purple-500/60",
    },
    languages: { 
        bg: "from-amber-500/10 to-amber-500/5", 
        border: "border-amber-500/30",
        text: "text-amber-600 dark:text-amber-400",
        icon: "text-amber-500",
        hoverShadow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.6)] hover:border-amber-500/60",
    },
    tools: { 
        bg: "from-pink-500/10 to-pink-500/5", 
        border: "border-pink-500/30",
        text: "text-pink-600 dark:text-pink-400",
        icon: "text-pink-500",
        hoverShadow: "hover:shadow-[0_0_12px_rgba(236,72,153,0.6)] hover:border-pink-500/60",
    },
};

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.03 * index,
            duration: 0.3,
        },
    }),
};

const Skills = () => {
    const { ref } = useSectionInView('Skills');

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-40 px-4 sm:px-0"
        >
            <SectionHeading>My skills</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillsCategories).map(([key, category], categoryIndex) => {
                    const colors = categoryColors[key];
                    
                    return (
                        <motion.div
                            key={key}
                            className={`glass-card p-5 rounded-2xl border ${colors.border} card-3d bg-white/40 dark:bg-white/5 backdrop-blur-xl relative overflow-hidden group`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {/* Subtle background glow on card hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            {/* Category Header */}
                            <h3 className={`text-lg font-semibold mb-4 ${colors.text} flex items-center gap-2 relative z-10`}>
                                <span className={`w-2 h-2 rounded-full bg-current shadow-[0_0_8px_currentColor]`}></span>
                                {category.label}
                            </h3>
                            
                            {/* Skills Grid */}
                            <ul className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill, index) => (
                                    <motion.li
                                        key={skill}
                                        className={`
                                            flex items-center gap-1.5 px-3 py-1.5 
                                            text-sm rounded-lg
                                            bg-gradient-to-r ${colors.bg}
                                            border ${colors.border}
                                            ${colors.text}
                                            hover:scale-105 ${colors.hoverShadow}
                                            transition-all duration-300 cursor-default
                                        `}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true }}
                                        custom={categoryIndex * 5 + index}
                                    >
                                        <span className={`text-base ${colors.icon}`}>
                                            {skillIcons[skill] || <FaCode />}
                                        </span>
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills