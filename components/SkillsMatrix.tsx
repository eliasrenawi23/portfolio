"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsMatrixData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const SkillsMatrix = () => {
    const { ref } = useSectionInView("Skills", 0.5);

    return (
        <section ref={ref} id="skills" className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 py-12 scroll-mt-20">
            <SectionHeading>Capabilities</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* AI Systems */}
                <motion.div
                    className="border border-border bg-bg-soft rounded-lg p-6 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <div className="flex items-center gap-2 border-b border-border pb-3 mb-4 text-accent font-bold uppercase tracking-wider font-mono text-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                            {skillsMatrixData.aiSystems.label}
                        </div>
                        <ul className="space-y-4">
                            {skillsMatrixData.aiSystems.skills.map((skill) => (
                                <li key={skill.name} className="flex flex-col">
                                    <span className="font-sans font-bold text-sm text-text">
                                        {skill.name}
                                    </span>
                                    <span className="font-sans text-xs text-muted leading-tight mt-0.5">
                                        {skill.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Product Engineering */}
                <motion.div
                    className="border border-border bg-bg-soft rounded-lg p-6 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <div className="flex items-center gap-2 border-b border-border pb-3 mb-4 text-accent-2 font-bold uppercase tracking-wider font-mono text-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-2" />
                            {skillsMatrixData.productEngineering.label}
                        </div>
                        <ul className="space-y-4">
                            {skillsMatrixData.productEngineering.skills.map((skill) => (
                                <li key={skill.name} className="flex flex-col">
                                    <span className="font-sans font-bold text-sm text-text">
                                        {skill.name}
                                    </span>
                                    <span className="font-sans text-xs text-muted leading-tight mt-0.5">
                                        {skill.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Delivery */}
                <motion.div
                    className="border border-border bg-bg-soft rounded-lg p-6 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <div className="flex items-center gap-2 border-b border-border pb-3 mb-4 text-accent-3 font-bold uppercase tracking-wider font-mono text-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-3" />
                            {skillsMatrixData.delivery.label}
                        </div>
                        <ul className="space-y-4">
                            {skillsMatrixData.delivery.skills.map((skill) => (
                                <li key={skill.name} className="flex flex-col">
                                    <span className="font-sans font-bold text-sm text-text">
                                        {skill.name}
                                    </span>
                                    <span className="font-sans text-xs text-muted leading-tight mt-0.5">
                                        {skill.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
