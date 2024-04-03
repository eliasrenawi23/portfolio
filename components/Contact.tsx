"use client";
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import React, { ChangeEvent, useState } from 'react'
import SectionHeading from './SectionHeading';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';

const Contact = () => {

    const { ref } = useSectionInView('Contact', 0.5);
    const [formData, setFormData] = useState<{
        senderEmail: string;
        message: string;
    }>({
        senderEmail: '',
        message: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

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
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if(error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully!");
                    setFormData({
                        senderEmail: '',
                        message: ''
                    });

                }}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name='senderEmail'
                    type='email'
                    required
                    onChange={handleChange}
                    value={formData.senderEmail}
                    maxLength={500}
                    placeholder='Your Email'
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />

            </form>


        </motion.section>
    );
}

export default Contact