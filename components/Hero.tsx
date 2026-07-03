"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import TechnicalDiagram from "./TechnicalDiagram";

const Hero = () => {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 py-12 md:py-20 scroll-mt-[100rem]"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Positioning and Copy */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                    {/* Status Card / Uppercase TECHNICAL Label */}
                    <motion.div
                        className="mb-6 p-4 bg-bg-soft border border-border rounded-md text-xs font-mono text-muted flex flex-col gap-1 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                            <span className="font-semibold text-text">Currently: Full-Stack & AI Agent Engineer at Galil Software</span>
                        </div>
                        <p className="pl-4 text-muted">Focus: AI document workflows, OCR pipelines, internal tools</p>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-text leading-[1.1] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        I scale, optimize, and extend AI systems for <span className="italic text-accent-2">messy</span> real-world workflows.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-lg sm:text-xl text-muted font-sans max-w-[38rem] leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Full-stack engineer specializing in document automation, OCR, RAG, and production web apps.
                    </motion.p>

                    {/* Supporting tech line */}
                    <motion.div
                        className="text-xs sm:text-sm font-mono text-muted border-t border-border pt-4 w-full mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        React / Next.js &middot; Python Flask &middot; Azure AI &middot; Claude / OpenAI &middot; MongoDB
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link
                            href="#work"
                            className="flex items-center justify-center gap-2 bg-accent text-bg px-6 py-3 rounded-md text-sm font-semibold hover:bg-accent-3 hover:text-white transition-all duration-200"
                            onClick={() => {
                                setActiveSection("Work");
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            View selected work
                            <BsArrowRight className="text-base" />
                        </Link>

                        <a
                            href="CV.pdf"
                            download
                            className="flex items-center justify-center gap-2 border border-border bg-bg-soft text-text px-6 py-3 rounded-md text-sm font-semibold hover:bg-border transition-all duration-200"
                        >
                            Download CV
                            <HiDownload className="text-base" />
                        </a>

                        <Link
                            href="#contact"
                            className="text-sm font-mono font-bold text-accent-2 hover:text-accent-3 text-center sm:text-left underline underline-offset-4 py-2"
                            onClick={() => {
                                setActiveSection("Contact");
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            Contact me
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Technical schematic blueprint diagram */}
                <div className="lg:col-span-5 w-full flex justify-center items-center">
                    <TechnicalDiagram />
                </div>
            </div>
        </section>
    )
}

export default Hero
