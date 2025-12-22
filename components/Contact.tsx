"use client";
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import React, { ChangeEvent, useState } from 'react'
import SectionHeading from './SectionHeading';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';
import { BsLinkedin, BsEnvelope, BsTelephone } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

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
            className="mb-20 sm:mb-28 w-[min(100%,42rem)]"
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
            
            <div className="glass-card p-8">
                {/* Quick Contact Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <a 
                        href="mailto:eliasrenawi23@gmail.com"
                        className="flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-gradient-to-r from-indigo-500/10 to-purple-500/10
                            border border-indigo-200/50 dark:border-indigo-500/30
                            text-indigo-700 dark:text-indigo-300
                            hover:from-indigo-500/20 hover:to-purple-500/20
                            hover:scale-105 transition-all duration-300"
                    >
                        <BsEnvelope className="text-lg" />
                        <span className="text-sm font-medium">eliasrenawi23@gmail.com</span>
                    </a>
                    
                    <a 
                        href="tel:0528423617"
                        className="flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-gradient-to-r from-emerald-500/10 to-teal-500/10
                            border border-emerald-200/50 dark:border-emerald-500/30
                            text-emerald-700 dark:text-emerald-300
                            hover:from-emerald-500/20 hover:to-teal-500/20
                            hover:scale-105 transition-all duration-300"
                    >
                        <BsTelephone className="text-lg" />
                        <span className="text-sm font-medium">052-842-3617</span>
                    </a>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-8">
                    <a
                        className="p-3 rounded-full 
                            bg-gradient-to-r from-blue-500/10 to-blue-600/10
                            border border-blue-200/50 dark:border-blue-500/30
                            text-blue-600 dark:text-blue-400
                            hover:from-blue-500/20 hover:to-blue-600/20
                            hover:scale-110 transition-all duration-300"
                        href="https://www.linkedin.com/in/elias-renawi-056732190/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <BsLinkedin className="text-xl" />
                    </a>
                    <a
                        className="p-3 rounded-full 
                            bg-gradient-to-r from-gray-500/10 to-gray-600/10
                            border border-gray-200/50 dark:border-gray-500/30
                            text-gray-700 dark:text-gray-300
                            hover:from-gray-500/20 hover:to-gray-600/20
                            hover:scale-110 transition-all duration-300"
                        href="https://github.com/eliasrenawi23"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <FaGithubSquare className="text-xl" />
                    </a>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white/60 dark:bg-white/5 text-gray-500 dark:text-gray-400 rounded-full">
                            or send a message
                        </span>
                    </div>
                </div>
                
                {/* Contact Form */}
                <form
                    className="flex flex-col gap-4"
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
                    <div className="relative">
                        <input
                            className="w-full h-14 px-4 pt-4 rounded-xl 
                                bg-white/80 dark:bg-white/5 
                                border border-gray-200 dark:border-white/10
                                focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400
                                focus:ring-4 focus:ring-indigo-500/10
                                transition-all duration-300
                                peer"
                            name='senderEmail'
                            type='email'
                            required
                            onChange={handleChange}
                            value={formData.senderEmail}
                            maxLength={500}
                            placeholder=" "
                            id="email-input"
                        />
                        <label 
                            htmlFor="email-input"
                            className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 pointer-events-none
                                transition-all duration-200
                                peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:px-2 
                                peer-focus:bg-white dark:peer-focus:bg-zinc-900 
                                peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400
                                peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 
                                peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:px-2
                                peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-zinc-900"
                        >
                            Your Email
                        </label>
                    </div>
                    
                    <div className="relative">
                        <textarea
                            className="w-full h-52 px-4 pt-6 rounded-xl 
                                bg-white/80 dark:bg-white/5 
                                border border-gray-200 dark:border-white/10
                                focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400
                                focus:ring-4 focus:ring-indigo-500/10
                                transition-all duration-300 resize-none
                                peer"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            maxLength={5000}
                            id="message-input"
                        />
                        <label 
                            htmlFor="message-input"
                            className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 pointer-events-none
                                transition-all duration-200
                                peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:px-2 
                                peer-focus:bg-white dark:peer-focus:bg-zinc-900 
                                peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400
                                peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 
                                peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:px-2
                                peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-zinc-900"
                        >
                            Your Message
                        </label>
                    </div>
                    
                    <SubmitBtn />
                </form>
            </div>
        </motion.section>
    );
}

export default Contact