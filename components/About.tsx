/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

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

            <div className="glass-card p-8 text-center leading-8">
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                    I am a{" "}
                    <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Mid-level Full-Stack Software Engineer
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
                
                <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
                    I am now seeking new opportunities to leverage my skills in building 
                    high-performance applications and intelligent agents.
                </p>
            </div>
        </motion.section>
    )
}

export default About