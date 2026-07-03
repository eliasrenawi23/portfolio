"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { HiDownload } from "react-icons/hi";

const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-[999] border-b border-border bg-bg/90 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-[70rem] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo / Title */}
                <Link 
                    href="#home" 
                    className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-text hover:text-accent transition-colors"
                    onClick={() => {
                        setActiveSection("Home");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Elias Renawi
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    <ul className="flex items-center gap-5 lg:gap-6 text-sm font-medium text-muted">
                        {links.filter(l => l.name !== "Home").map((link) => (
                            <li key={link.hash} className="relative py-1">
                                <Link
                                    className={clsx(
                                        "hover:text-text transition-colors duration-200",
                                        activeSection === link.name && "text-accent font-semibold"
                                    )}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {link.name}
                                </Link>
                                {link.name === activeSection && (
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                        layoutId="activeSectionIndicator"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Compact Download CV Button */}
                    <a
                        href="CV.pdf"
                        download
                        className="flex items-center gap-1.5 px-4 py-2 border border-accent hover:bg-accent hover:text-bg text-accent text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-300"
                    >
                        CV <HiDownload className="text-sm" />
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <a
                        href="CV.pdf"
                        download
                        className="flex items-center gap-1 px-3 py-1.5 border border-accent text-accent text-[0.7rem] font-bold uppercase tracking-wider rounded-md"
                        aria-label="Download CV"
                    >
                        CV <HiDownload className="text-xs" />
                    </a>
                    
                    <button
                        className="w-10 h-10 border border-border rounded-md flex items-center justify-center text-text hover:bg-bg-soft transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="flex flex-col gap-1.5 w-5">
                            <motion.span 
                                className="h-0.5 bg-text rounded-full"
                                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span 
                                className="h-0.5 bg-text rounded-full"
                                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span 
                                className="h-0.5 bg-text rounded-full"
                                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -5 : 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden border-b border-border bg-bg/95 backdrop-blur-lg overflow-hidden absolute top-16 left-0 w-full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <ul className="px-4 py-4 space-y-3">
                            {links.map((link) => (
                                <li key={link.hash}>
                                    <Link
                                        className={clsx(
                                            "block py-2 px-3 text-base rounded-md transition-colors",
                                            activeSection === link.name 
                                                ? "bg-accent/10 text-accent font-semibold"
                                                : "text-muted hover:bg-bg-soft hover:text-text"
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
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
