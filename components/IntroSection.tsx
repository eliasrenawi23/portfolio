/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import EliasPfp from "@/public/EliasRenawi_pfp.png";


const IntroSection = () => {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            {/* Profile Image with Animated Gradient Ring */}
            <div className='flex items-center justify-center'>
                <div className="relative">
                    {/* Gradient Ring Background */}
                    <motion.div
                        className="absolute -inset-1 rounded-full opacity-75 blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef, #6366f1)',
                            backgroundSize: '300% 300%',
                        }}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            duration: 0.5,
                        }}
                        className="relative"
                    >
                        <Image 
                            src={EliasPfp}
                            alt="Elias portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-2xl dark:border-gray-800"
                        />
                    </motion.div>
                    
                    {/* Wave Emoji */}
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            {/* Heading with Gradient Text */}
            <motion.div
                className="mb-10 mt-6 px-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h1 className="text-2xl font-medium !leading-[1.5] sm:text-4xl mb-4">
                    <span className="font-bold">Hello, I'm </span>
                    <span className="font-bold gradient-text-animated">Elias</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
                    <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Full-Stack & AI Engineer
                    </span>
                </p>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    I build{" "}
                    <span className="font-semibold underline decoration-indigo-500 underline-offset-4">AI-powered apps</span>{" "}
                    &{" "}
                    <span className="font-semibold underline decoration-purple-500 underline-offset-4">intelligent document workflows</span>
                </p>
                <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-500">
                    React · Python Flask · Azure AI — from idea to production
                </p>
            </motion.div>

            {/* CTA Buttons with Glow Effects */}
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                }}
            >
                {/* View Work - Primary CTA with Glow */}
                <Link
                    href="#projects"
                    className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition-all duration-300 shadow-lg hover:shadow-glow"
                    onClick={() => {
                        setActiveSection("Projects");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    <span className="relative z-10">View My Work</span>
                    <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition relative z-10" />
                    
                    {/* Glow Effect */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                </Link>

                {/* Contact Button - Secondary CTA */}
                <Link
                    href="#contact"
                    className="group glass glass-dark px-8 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer hover:shadow-lg dark:hover:shadow-glow-purple/20"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
                </Link>

                {/* Download CV Button */}
                <a
                    className="group glass glass-dark px-8 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer hover:shadow-lg dark:hover:shadow-glow-purple/20"
                    href="EliasRenawiCV.docx"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                {/* Social Links */}
                <div className="flex gap-2">
                    <a
                        className="glass glass-dark p-4 text-gray-700 hover:text-indigo-600 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-100 transition-all duration-300 cursor-pointer dark:text-white/70 dark:hover:text-indigo-400"
                        href="https://www.linkedin.com/in/elias-renawi-056732190/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <BsLinkedin className="text-xl" />
                    </a>

                    <a
                        className="glass glass-dark p-4 text-gray-700 hover:text-purple-600 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-100 transition-all duration-300 cursor-pointer dark:text-white/70 dark:hover:text-purple-400"
                        href="https://github.com/eliasrenawi23"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <FaGithubSquare className="text-xl" />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default IntroSection