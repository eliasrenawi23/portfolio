"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const ExperienceTimeline = () => {
    const { ref } = useSectionInView("Experience", 0.4);

    const primaryExperiences = experiencesData.filter(exp => exp.isPrimary);
    const secondaryExperiences = experiencesData.filter(exp => !exp.isPrimary);

    return (
        <section ref={ref} id="experience" className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 py-12 scroll-mt-20">
            <SectionHeading>Shipping Log & Credentials</SectionHeading>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Core Timeline */}
                <div className="lg:col-span-8 space-y-8 relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
                    {primaryExperiences.map((exp, index) => (
                        <motion.div 
                            key={exp.title}
                            className="relative space-y-2 group"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Bullet node on timeline */}
                            <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full border border-accent bg-bg group-hover:bg-accent transition-colors" />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-text">
                                        {exp.title}
                                    </h3>
                                    <span className="font-mono text-xs text-accent font-bold">
                                        {exp.location}
                                    </span>
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-muted py-1">
                                    {exp.date}
                                </span>
                            </div>
                            <p className="text-sm text-muted leading-relaxed font-sans">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right: Technical Foundations Archive Log */}
                <div className="lg:col-span-4 space-y-6 bg-bg-soft/40 border border-border/80 rounded-lg p-6 h-fit">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text border-b border-border pb-3 mb-4">
                        Historical Log
                    </h3>
                    <div className="space-y-6">
                        {secondaryExperiences.map((exp, index) => (
                            <motion.div 
                                key={exp.title} 
                                className="space-y-1.5"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-start gap-2">
                                    <h4 className="text-xs font-bold text-text">
                                        {exp.title}
                                    </h4>
                                    <span className="font-mono text-[8px] text-muted whitespace-nowrap">
                                        {exp.date}
                                    </span>
                                </div>
                                <p className="font-mono text-[9px] uppercase text-accent-2 font-bold tracking-wider leading-none">
                                    {exp.location}
                                </p>
                                <p className="text-xs text-muted leading-snug">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
