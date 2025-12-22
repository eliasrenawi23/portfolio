"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const Experience = () => {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-[50rem]">
            <SectionHeading>My experience</SectionHeading>
            
            <div className="relative">
                {/* Gradient Timeline Line */}
                <div 
                    className="absolute left-8 top-0 bottom-0 w-[2px] rounded-full hidden sm:block"
                    style={{
                        background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #d946ef, #ec4899)',
                    }}
                />
                
                {/* Experience Items */}
                <div className="space-y-8">
                    {experiencesData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-0 sm:pl-20"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {/* Timeline Icon */}
                            <div className="absolute left-4 top-6 hidden sm:flex w-8 h-8 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 shadow-lg z-10">
                                <span className="text-indigo-600 dark:text-indigo-400 text-lg">
                                    {item.icon}
                                </span>
                            </div>
                            
                            {/* Content Card */}
                            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 group">
                                {/* Date Badge */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-500/30">
                                        {item.date}
                                    </span>
                                </div>
                                
                                {/* Location */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {item.location}
                                </p>
                                
                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience