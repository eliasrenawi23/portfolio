"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const HeadrePage = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="z-[999] relative">
            {/* Desktop Navigation */}
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/30 bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-lg sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950/70 dark:border-white/10 hidden sm:block"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                style={{
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                }}
            ></motion.div>

            {/* Desktop Nav Links */}
            <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2 h-[initial] py-0">
                <ul className="flex w-[initial] flex-nowrap items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-all duration-300 dark:text-gray-400 dark:hover:text-gray-200",
                                    {
                                        "text-gray-950 dark:text-white":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="absolute inset-0 -z-10 rounded-full"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))',
                                        }}
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <div className="sm:hidden fixed top-4 right-4">
                {/* Hamburger Button */}
                <motion.button
                    className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/30 dark:border-white/10 shadow-lg flex items-center justify-center z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex flex-col gap-1.5 w-5">
                        <motion.span 
                            className="h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                            animate={{ 
                                rotate: isMenuOpen ? 45 : 0,
                                y: isMenuOpen ? 6 : 0,
                            }}
                        />
                        <motion.span 
                            className="h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                        />
                        <motion.span 
                            className="h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                            animate={{ 
                                rotate: isMenuOpen ? -45 : 0,
                                y: isMenuOpen ? -6 : 0,
                            }}
                        />
                    </div>
                </motion.button>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="fixed top-20 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ul className="py-2">
                                {links.map((link, index) => (
                                    <motion.li
                                        key={link.hash}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            className={clsx(
                                                "block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors",
                                                {
                                                    "text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20":
                                                        activeSection === link.name,
                                                }
                                            )}
                                            href={link.hash}
                                            onClick={() => {
                                                setActiveSection(link.name);
                                                setTimeOfLastClick(Date.now());
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

export default HeadrePage