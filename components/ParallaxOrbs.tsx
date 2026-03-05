"use client"
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxOrbs() {
    const { scrollYProgress } = useScroll()
    
    // Parallax layers with different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]) // Moves down fast
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]) // Moves up slowly
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]) // Moves up fast

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Top Right Orb */}
            <motion.div 
                style={{ y: y1 }}
                className="bg-[#c7d2fe] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#3730a3]/30"
            />
            
            {/* Top Left Orb */}
            <motion.div 
                style={{ y: y2 }}
                className="bg-[#ddd6fe] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#581c87]/20"
            />
            
            {/* Bottom Right Accent Orb */}
            <motion.div 
                style={{ y: y3 }}
                className="bg-[#fbcfe8] absolute top-[40rem] right-[-20rem] h-[25rem] w-[40rem] rounded-full blur-[10rem] dark:bg-[#831843]/20"
            />
            
            {/* Subtle Grid Pattern (Static) */}
            <div
                aria-hidden
                className="absolute inset-0 
                    [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
                    [background-size:32px_32px]
                    dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            />
        </div>
    )
}
