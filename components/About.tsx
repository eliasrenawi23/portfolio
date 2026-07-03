"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
    const { ref } = useSectionInView('About', 0.5);

    return (
        <motion.section
            ref={ref}
            className="w-full max-w-[50rem] mx-auto px-4 sm:px-6 py-12 scroll-mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>

            <div className="border border-border bg-bg-soft rounded-lg p-6 sm:p-10 text-left relative overflow-hidden">
                {/* File Reference Label */}
                <div className="absolute top-4 right-4 font-mono text-[8px] text-muted">
                    ENGINEER PROFILE REF: ER-83
                </div>

                <div className="space-y-6 max-w-[42rem]">
                    <p className="text-lg font-serif font-semibold text-text leading-relaxed italic border-l-2 border-accent pl-4">
                        “I’m a full-stack engineer who likes turning unclear business processes into reliable software. My strongest work sits between frontend product UI, backend APIs, and AI document automation.”
                    </p>

                    <div className="text-sm text-text leading-relaxed space-y-4">
                        <p>
                            My coding foundations began in deep C/C++ engineering, which trained me to design structured, memory-efficient systems and understand lower-level protocols. Today, I apply that rigor to modern full-stack application development and enterprise AI agent orchestration.
                        </p>
                        
                        <p>
                            On the frontend, I design responsive, client-centered UI with <span className="font-semibold text-accent">React and Next.js</span>. On the backend, I create scalable web servers using <span className="font-semibold text-accent-2">Python Flask</span>, routing intelligence to <span className="font-semibold text-accent-3">Azure AI Document Intelligence, Claude, and OpenAI APIs</span>. I store data in MongoDB/Cosmos or SQL relational schemas.
                        </p>

                        <p>
                            Outside of writing application code, I specialize in building, optimizing, and maintaining localized business pipelines (e.g., Hebrew document OCR engines, vector database semantic retrievals, validation systems), making sure AI agents perform reliably in high-volume, real-world business databases.
                        </p>
                    </div>

                    {/* Technical dossiers labels footer */}
                    <div className="border-t border-border/80 pt-6 mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] text-muted uppercase">
                        <div>
                            <span className="font-bold text-accent">CORE LANGUAGE:</span> ENGLISH, HEBREW, ARABIC
                        </div>
                        <div>
                            <span className="font-bold text-accent-2">B.SC. GPA:</span> 83 (ORT BRAUDE)
                        </div>
                        <div>
                            <span className="font-bold text-accent-3">STATUS:</span> OPEN FOR NEW OPPORTUNITIES
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About