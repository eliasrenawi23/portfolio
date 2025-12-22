"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="glass-card glow-card relative overflow-hidden sm:pr-8 sm:h-[22rem] transition-all duration-500 hover:shadow-xl gradient-border sm:group-even:pl-8">
                <div className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    {/* Title with gradient on hover */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {title}
                    </h3>
                    
                    <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/70 text-sm">
                        {description}
                    </p>
                    
                    {/* Tech Tags with staggered animation */}
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <motion.li
                                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full font-medium
                                    bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                                    text-indigo-700 dark:text-indigo-300
                                    border border-indigo-200/50 dark:border-indigo-500/30
                                    hover:from-indigo-500/20 hover:to-purple-500/20
                                    transition-all duration-300"
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                {tag}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Project Image with enhanced effects */}
                <div className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] group-even:right-[initial] group-even:-left-40">
                    <div className="relative">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-t-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <Image
                            src={imageUrl}
                            alt={`${title} project screenshot`}
                            quality={95}
                            className="rounded-t-lg shadow-2xl
                                transition-all duration-500
                                group-hover:scale-[1.04]
                                group-hover:-translate-x-3
                                group-hover:translate-y-3
                                group-hover:-rotate-2
                                group-even:group-hover:translate-x-3
                                group-even:group-hover:translate-y-3
                                group-even:group-hover:rotate-2"
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
}