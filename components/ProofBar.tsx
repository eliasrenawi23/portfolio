"use client";
import React from "react";
import { motion } from "framer-motion";

const credentials = [
    { value: "3+ Years", label: "Production Engineering" },
    { value: "B.Sc.", label: "Software Engineering" },
    { value: "AI Agents", label: "OCR & RAG Workflows" },
    { value: "Full-Stack", label: "React + Python Flask" },
    { value: "Azure AI", label: "Claude / OpenAI APIs" }
];

const ProofBar = () => {
    return (
        <section className="w-full max-w-[70rem] mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
            <div className="border-y border-border py-6 grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4">
                {credentials.map((cred, index) => (
                    <motion.div
                        key={cred.label}
                        className="flex flex-col items-start text-left pl-4 md:border-l border-border md:first:border-l-0"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xl font-serif font-bold text-accent">{cred.value}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted mt-1 leading-tight">{cred.label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProofBar;
