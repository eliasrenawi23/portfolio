"use client";
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import React from 'react'
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {

    const { ref } = useSectionInView('Contact', 0.5);


    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:eliasrenawi23@gmail.com">
                    eliasrenawi23@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name='senderEmail'
                    type='email'
                    required
                    maxLength={500}
                    placeholder='Your Email'
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <button
                    className='group flex items-center justify-center  gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none
                    focus:scale-110 hover:scale-110  hover:bg-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                    type='submit'>
                    Submit
                    <FaPaperPlane className="text-xs 
                    opacity-70
                    transition-all 
                    group-hover:translate-x-1
                    group-hover:-translate-y-1" />{""}
                </button>

            </form>


        </motion.section>
    );
}

export default Contact