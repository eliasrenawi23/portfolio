"use client";
import React, { useRef } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data';

import Project from './Project';


const Projects = () => {

    //const { ref } = useSectionInView("Projects", 0.5);
    const ref = useRef(null)
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