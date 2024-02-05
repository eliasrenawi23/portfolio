"use client";
import React, { useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/Active-section-context'


const Projects = () => {

    const { ref, inView } = useInView({
        threshold: 0.5

    }); const { setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext();
    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection, timeOfLastClick, setTimeOfLastClick])

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Projects