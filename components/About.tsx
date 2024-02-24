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
                I'm Graduate {" "}
                <span className="font-medium">Software Engineering </span> and
                <span className="font-medium"> Full Stack Developer </span>, rocking the world of web and mobile applications with my mad skills{" "}
                <span className="font-medium"> in both front and back end development! 🚀</span>.{" "}
                <span className="italic">Armed with loads of passion,</span>  I whip up beautiful code and craft stunning UIs that'll make your eyes pop!
                If you're on the hunt for an incredibly passionate developer to jazz up your team, look no further! Let's make magic together! ✨"
                {" "}
            </p>
        </motion.section>
    )
}

export default About