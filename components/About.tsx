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
    I am a <span className="font-medium">Mid-level Full-Stack Software Engineer</span> with strong C/C++ foundations and expertise in 
    <span className="font-medium"> React/Next.js and Python Flask</span>. I have a track record of delivering 
    <span className="font-medium"> AI-powered document workflows and RAG pipelines</span> (using Azure OpenAI, Claude). 
    <span className="italic"> I am now seeking new opportunities</span> to leverage my skills in building high-performance applications and intelligent agents.
    </p>
        </motion.section>
    )
}

export default About