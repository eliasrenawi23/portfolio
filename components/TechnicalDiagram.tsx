"use client";
import React from "react";
import { motion } from "framer-motion";

const TechnicalDiagram = () => {
    return (
        <div className="w-full max-w-[450px] border border-border bg-bg-soft rounded-lg p-6 relative overflow-hidden shadow-sm aspect-[4/3] flex flex-col justify-between engineering-grid">
            {/* Header label */}
            <div className="flex justify-between items-center border-b border-border pb-3 mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                <span>DOC-TO-DATA-V1.0</span>
            </div>

            {/* Diagram SVG Grid & Flow */}
            <div className="relative flex-1 w-full flex flex-col justify-around py-2">
                {/* SVG Connecting Flow Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                    {/* Path 1: PDF -> OCR */}
                    <motion.path 
                        d="M 60 40 L 140 40" 
                        stroke="var(--border)" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                    />
                    
                    {/* Path 2: OCR -> Validation */}
                    <motion.path 
                        d="M 210 40 L 290 40" 
                        stroke="var(--border)" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 0.3 }}
                    />

                    {/* Path 3: Validation -> RAG */}
                    <motion.path 
                        d="M 330 75 L 330 115" 
                        stroke="var(--border)" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 0.6 }}
                    />

                    {/* Path 4: RAG -> ERP */}
                    <motion.path 
                        d="M 290 140 L 120 140" 
                        stroke="var(--border)" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 0.9 }}
                    />
                </svg>

                {/* Nodes row 1 */}
                <div className="flex justify-between items-center z-10 relative">
                    {/* Node 1: PDF Document */}
                    <motion.div 
                        className="bg-bg border border-border rounded p-2.5 flex flex-col items-center w-[75px]"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-5 h-6 border-r-4 border-t-4 border-accent-2/20 bg-accent-2/5 border border-accent-2/40 flex items-center justify-center rounded-sm mb-1">
                            <span className="font-mono text-[8px] text-accent-2 font-bold">PDF</span>
                        </div>
                        <span className="font-mono text-[9px] text-text font-bold">Invoice</span>
                    </motion.div>

                    {/* Node 2: OCR Extraction */}
                    <motion.div 
                        className="bg-bg border border-border rounded p-2.5 flex flex-col items-center w-[85px]"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="font-mono text-[10px] text-accent font-bold mb-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Azure
                        </div>
                        <span className="font-mono text-[8px] text-muted text-center leading-none">Doc Intelligence</span>
                        <div className="w-full h-1 bg-border rounded-full mt-1.5 overflow-hidden">
                            <motion.div 
                                className="h-full bg-accent" 
                                animate={{ width: ["0%", "100%", "0%"] }} 
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>

                    {/* Node 3: LLM Validation */}
                    <motion.div 
                        className="bg-bg border border-border rounded p-2.5 flex flex-col items-center w-[85px]"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="font-mono text-[10px] text-accent-3 font-bold mb-1">Claude/GPT</div>
                        <span className="font-mono text-[8px] text-accent-2 font-bold px-1.5 py-0.5 bg-accent-2/10 rounded">JSON Output</span>
                    </motion.div>
                </div>

                {/* Nodes row 2 */}
                <div className="flex justify-between items-center z-10 relative mt-4">
                    {/* Node 5: Destination API */}
                    <motion.div 
                        className="bg-bg border border-border rounded p-2.5 flex flex-col items-start w-[140px]"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="font-mono text-[8px] text-muted mb-1">ERP / API INTEGRATION</span>
                        <div className="w-full bg-code-bg text-code-text p-1.5 rounded font-mono text-[8px] border border-border">
                            <span className="text-accent-2">POST</span> /invoice/sync <br />
                            <span className="text-accent">status: 200</span>
                        </div>
                    </motion.div>

                    {/* Node 4: RAG Store */}
                    <motion.div 
                        className="bg-bg border border-border rounded p-2.5 flex flex-col items-center w-[85px] self-end"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="font-mono text-[10px] text-text font-bold mb-1">RAG Store</div>
                        <span className="font-mono text-[8px] text-muted text-center">ChromaDB Vector</span>
                        <div className="flex gap-1 mt-1.5">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span className="w-1.5 h-1.5 bg-accent-2 rounded-full" />
                            <span className="w-1.5 h-1.5 bg-accent-3 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer label */}
            <div className="border-t border-border pt-2.5 mt-2 flex justify-between items-center font-mono text-[8px] text-muted">
                <span>[PROCESS COMPLETED IN 480MS]</span>
                <span>SECURE SSL</span>
            </div>
        </div>
    );
};

export default TechnicalDiagram;
