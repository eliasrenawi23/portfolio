/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa'

const stats = [
    { icon: <FaBriefcase />, value: "2+", label: "Years Exp." },
    { icon: <FaCode />, value: "6", label: "Projects" },
    { icon: <FaGraduationCap />, value: "B.Sc.", label: "Software Eng." },
]

const About = () => {

    const { ref } = useSectionInView('About');


    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] scroll-mt-28 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>

            {/* Quick Stats Row */}
            <div className="flex justify-center gap-4 sm:gap-8 mb-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="flex flex-col items-center gap-1 glass-card px-4 py-3 sm:px-6 sm:py-4 min-w-[90px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <span className="text-indigo-500 dark:text-indigo-400 text-lg">
                            {stat.icon}
                        </span>
                        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            {stat.value}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            <div className="glass-card p-8 text-center leading-8">
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                    I am a{" "}
                    <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Full-Stack & AI Engineer
                    </span>{" "}
                    with strong C/C++ foundations and expertise in{" "}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        React/Next.js
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                        Python Flask
                    </span>.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                    I have a track record of delivering{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                        ✨ AI-powered document workflows
                    </span>{" "}
                    and{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                        🔗 RAG pipelines
                    </span>{" "}
                    using Azure OpenAI and Claude.
                </p>
                
                {/* CTA Badge instead of italic text */}
                <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                        bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                        text-indigo-700 dark:text-indigo-300
                        border border-indigo-300/40 dark:border-indigo-500/30
                        animate-pulse">
                        🟢 Open to new opportunities
                    </span>
                </div>
            </div>
        </motion.section>
    )
}

export default About