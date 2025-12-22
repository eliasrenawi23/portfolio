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

const categoryColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
    frontend: { 
        bg: "from-blue-500/10 to-blue-500/5", 
        border: "border-blue-500/30",
        text: "text-blue-600 dark:text-blue-400",
        icon: "text-blue-500",
    },
    backend: { 
        bg: "from-emerald-500/10 to-emerald-500/5", 
        border: "border-emerald-500/30",
        text: "text-emerald-600 dark:text-emerald-400",
        icon: "text-emerald-500",
    },
    ai: { 
        bg: "from-purple-500/10 to-purple-500/5", 
        border: "border-purple-500/30",
        text: "text-purple-600 dark:text-purple-400",
        icon: "text-purple-500",
    },
    languages: { 
        bg: "from-amber-500/10 to-amber-500/5", 
        border: "border-amber-500/30",
        text: "text-amber-600 dark:text-amber-400",
        icon: "text-amber-500",
    },
    tools: { 
        bg: "from-pink-500/10 to-pink-500/5", 
        border: "border-pink-500/30",
        text: "text-pink-600 dark:text-pink-400",
        icon: "text-pink-500",
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
            className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillsCategories).map(([key, category], categoryIndex) => {
                    const colors = categoryColors[key];
                    
                    return (
                        <motion.div
                            key={key}
                            className={`glass-card p-5 rounded-2xl border ${colors.border}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {/* Category Header */}
                            <h3 className={`text-lg font-semibold mb-4 ${colors.text} flex items-center gap-2`}>
                                <span className={`w-2 h-2 rounded-full bg-current`}></span>
                                {category.label}
                            </h3>
                            
                            {/* Skills Grid */}
                            <ul className="flex flex-wrap gap-2">
                                {category.skills.map((skill, index) => (
                                    <motion.li
                                        key={skill}
                                        className={`
                                            flex items-center gap-1.5 px-3 py-1.5 
                                            text-sm rounded-lg
                                            bg-gradient-to-r ${colors.bg}
                                            border ${colors.border}
                                            ${colors.text}
                                            hover:scale-105 hover:shadow-md
                                            transition-all duration-200 cursor-default
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