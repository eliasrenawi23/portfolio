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
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >

            <SectionHeading>About me</SectionHeading>

<p className="mb-3">
  I'm a <span className="font-medium">Software Engineering graduate</span> and 
  <span className="font-medium"> Full-Stack & AI Agent Engineer</span> with a passion for building high-impact web applications and intelligent document workflows. 🚀 
  Skilled in <span className="font-medium">React, Next.js, TypeScript, Python Flask</span>, and modern AI tools like 
  <span className="font-medium"> Azure OpenAI, Claude, and RAG pipelines</span>, I craft seamless user experiences from pixel-perfect UIs to scalable APIs. 
  <span className="italic"> Fueled by curiosity and creativity,</span> I write clean, efficient code and design solutions that make a real difference. 
  If you’re looking for a driven developer to bring innovation to your team, let’s build something extraordinary! ✨
</p>
        </motion.section>
    )
}

export default About