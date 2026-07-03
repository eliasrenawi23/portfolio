"use client";
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import React, { ChangeEvent, useState } from 'react'
import SectionHeading from './SectionHeading';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

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
            className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 py-12 scroll-mt-20 mb-20 sm:mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact</SectionHeading>
            
            <div className="border border-border bg-bg-soft rounded-lg p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left: Recruiter positioning and context info */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-text leading-tight mb-4">
                                Have a role or project where AI needs to actually work in production?
                            </h3>
                            <p className="text-sm text-muted leading-relaxed mb-6 font-sans">
                                Send a message directly using the dossier form or reach out through traditional channels. I review files daily.
                            </p>
                        </div>

                        {/* List of contact reference logs */}
                        <div className="space-y-4 border-t border-border/80 pt-6 mt-4">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-accent text-sm flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-mono text-[8px] text-muted uppercase">EMAIL ADDR</span>
                                    <a href="mailto:eliasrenawi23@gmail.com" className="text-xs text-text hover:text-accent font-mono transition-colors">
                                        eliasrenawi23@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhone className="text-accent text-sm flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-mono text-[8px] text-muted uppercase">PHONE COMMS</span>
                                    <a href="tel:0528423617" className="text-xs text-text hover:text-accent font-mono transition-colors">
                                        052-842-3617
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaLinkedin className="text-accent text-sm flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-mono text-[8px] text-muted uppercase">LINKEDIN PROFILE</span>
                                    <a href="https://www.linkedin.com/in/elias-renawi-056732190/" target="_blank" rel="noopener noreferrer" className="text-xs text-text hover:text-accent font-mono transition-colors">
                                        elias-renawi-056732190
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaGithub className="text-accent text-sm flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-mono text-[8px] text-muted uppercase">GITHUB REPOS</span>
                                    <a href="https://github.com/eliasrenawi23" target="_blank" rel="noopener noreferrer" className="text-xs text-text hover:text-accent font-mono transition-colors">
                                        eliasrenawi23
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Extra Action button */}
                        <div className="pt-6">
                            <a
                                href="CV.pdf"
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 border border-accent hover:bg-accent hover:text-bg text-accent text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                            >
                                Download CV dossier <HiDownload className="text-sm" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7 border border-border/80 bg-bg p-6 rounded shadow-xs">
                        <form
                            className="flex flex-col gap-4"
                            action={async (formData) => {
                                const { data, error } = await sendEmail(formData);
                                if(error) {
                                    toast.error(error);
                                    return;
                                }
                                toast.success("Email transmitted successfully!");
                                setFormData({
                                    senderEmail: '',
                                    message: ''
                                });
                            }}
                        >
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email-input" className="font-mono text-[9px] uppercase tracking-wider text-muted font-bold">
                                    Sender Address (Email)
                                </label>
                                <input
                                    className="w-full h-11 px-3 border border-border bg-bg-soft text-text rounded focus:border-accent focus:outline-none transition-colors"
                                    name='senderEmail'
                                    type='email'
                                    required
                                    onChange={handleChange}
                                    value={formData.senderEmail}
                                    maxLength={500}
                                    placeholder="your.email@domain.com"
                                    id="email-input"
                                />
                            </div>
                            
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message-input" className="font-mono text-[9px] uppercase tracking-wider text-muted font-bold">
                                    Message Body
                                </label>
                                <textarea
                                    className="w-full h-40 px-3 py-2 border border-border bg-bg-soft text-text rounded focus:border-accent focus:outline-none resize-none transition-colors"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Specify details about your project, contract, or open position..."
                                    required
                                    maxLength={5000}
                                    id="message-input"
                                />
                            </div>
                            
                            <div className="pt-2">
                                <SubmitBtn />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact