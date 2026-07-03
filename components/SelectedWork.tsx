"use client";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { caseStudiesData, archiveProjectsData } from "@/lib/data";
import CaseStudyCard from "./CaseStudyCard";
import { useSectionInView } from "@/lib/hooks";
import { FaGithubSquare, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SelectedWork = () => {
    const { ref } = useSectionInView("Work", 0.3);
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

    return (
        <section ref={ref} id="work" className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 py-12 scroll-mt-20">
            <SectionHeading>Selected Work</SectionHeading>
            
            {/* 3 Selected Case Studies */}
            <div className="space-y-12">
                {caseStudiesData.map((project) => (
                    <CaseStudyCard key={project.id} {...project} />
                ))}
            </div>

            {/* Foundations Archive Project Section */}
            <div className="mt-16 border-t border-border pt-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-text">
                            Foundations Archive
                        </h3>
                        <p className="text-sm text-muted">
                            Academic systems, compiler tasks, and core logic projects.
                        </p>
                    </div>

                    <button
                        onClick={() => setIsArchiveOpen(!isArchiveOpen)}
                        className="flex items-center gap-2 px-4 py-2 border border-border bg-bg hover:bg-bg-soft rounded text-xs font-mono uppercase tracking-wider text-text transition-colors"
                    >
                        {isArchiveOpen ? (
                            <>
                                Collapse Archive <FaChevronUp className="text-xs" />
                            </>
                        ) : (
                            <>
                                Expand Archive ({archiveProjectsData.length}) <FaChevronDown className="text-xs" />
                            </>
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isArchiveOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                                {archiveProjectsData.map((project) => (
                                    <div 
                                        key={project.title}
                                        className="border border-border bg-bg-soft/50 rounded p-5 flex flex-col justify-between hover:border-accent/40 transition-colors"
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-base font-bold text-text font-serif">
                                                    {project.title}
                                                </h4>
                                                {project.impact && (
                                                    <span className="font-mono text-[8px] uppercase tracking-wider text-accent-2 font-bold px-1.5 py-0.5 bg-accent-2/10 rounded">
                                                        {project.impact}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-muted leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center border-t border-border/40 pt-4 mt-auto">
                                            <div className="flex flex-wrap gap-1.5 text-text">
                                                {project.tags.map((tag) => (
                                                    <span 
                                                        key={tag}
                                                        className="font-mono text-[9px] text-muted bg-bg px-1.5 py-0.5 rounded border border-border/30"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-text hover:text-accent transition-colors"
                                                    aria-label={`${project.title} GitHub repository`}
                                                >
                                                    <FaGithubSquare className="text-xl" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SelectedWork;
