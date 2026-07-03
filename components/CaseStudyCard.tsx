"use client";
import React from "react";
import Image from "next/image";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

type CaseStudyProps = {
    id: string;
    title: string;
    tag: string;
    description: string;
    bullets?: readonly string[] | string[];
    tags: readonly string[] | string[];
    imageUrl?: any;
    githubUrl?: string | null;
    liveUrl?: string | null;
    problemLabel?: string;
    problem?: string;
    builtLabel?: string;
    built?: string;
    impactLabel?: string;
    impact?: string | null;
    honestyNote?: string;
    useSchematic?: boolean;
};

const CaseStudyCard = ({
    id,
    title,
    tag,
    description,
    bullets,
    tags,
    imageUrl,
    githubUrl,
    liveUrl,
    problemLabel = "THE PROBLEM",
    problem,
    builtLabel = "WHAT WAS BUILT",
    built,
    impactLabel = "SYSTEM IMPACT",
    impact,
    honestyNote,
    useSchematic = false
}: CaseStudyProps) => {
    return (
        <div className="border border-border bg-bg-soft rounded-lg overflow-hidden p-6 sm:p-10 mb-8 w-full transition-shadow hover:shadow-md relative">
            {/* Top Tag and Number Row */}
            <div className="flex justify-between items-start border-b border-border pb-4 mb-6">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold px-2 py-0.5 bg-accent/10 rounded">
                        {tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-text mt-2">
                        {title}
                    </h3>
                </div>
                <span className="font-serif text-5xl sm:text-6xl text-border leading-none font-bold select-none">
                    {id}
                </span>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                    {/* Outcome description */}
                    <p className="text-base text-text leading-relaxed font-sans">
                        {description}
                    </p>

                    {/* Detailed Columns: Context/Problem / Built / Impact */}
                    {problem && built && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-border/60">
                            <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-wider text-accent-2 font-bold mb-1">{problemLabel}</h4>
                                <p className="text-xs text-muted leading-relaxed">{problem}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold mb-1">{builtLabel}</h4>
                                <p className="text-xs text-muted leading-relaxed">{built}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-wider text-accent-3 font-bold mb-1">{impactLabel}</h4>
                                <p className="text-xs text-muted leading-relaxed">{impact}</p>
                            </div>
                        </div>
                    )}

                    {/* Technical Bullets */}
                    {bullets && bullets.length > 0 && (
                        <ul className="space-y-2 pt-2">
                            {bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-text leading-snug">
                                    <span className="text-accent font-mono mt-0.5">&middot;</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Tech Stacks */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tech) => (
                            <span key={tech} className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded bg-bg">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Project Links */}
                    {(githubUrl || liveUrl) && (
                        <div className="flex gap-3 pt-4">
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded border border-border bg-bg hover:bg-border transition-colors duration-150"
                                >
                                    <FaGithubSquare className="text-sm" />
                                    GitHub Repo
                                </a>
                            )}
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded border border-accent bg-accent text-bg hover:bg-accent-3 hover:text-white transition-colors duration-150"
                                >
                                    <FaExternalLinkAlt className="text-xs" />
                                    Live Demonstration
                                </a>
                            )}
                        </div>
                    )}

                    {/* Honesty Note */}
                    {honestyNote && (
                        <div className="border-t border-border/40 pt-4 text-[11px] text-muted font-sans italic flex gap-1.5 items-start">
                            <span className="text-accent font-bold not-italic">ℹ</span>
                            <span>{honestyNote}</span>
                        </div>
                    )}
                </div>

                {/* Right: Framed Schematic / Blueprint Style Image or SVG Schematic */}
                <div className="lg:col-span-5 w-full flex justify-center">
                    <div className="border border-border p-2 bg-bg rounded-lg shadow-sm w-full relative">
                        {/* Dossier tag indicator */}
                        <div className="absolute top-4 left-4 z-10 font-mono text-[8px] bg-bg-soft/90 px-1.5 py-0.5 border border-border rounded shadow-xs text-muted">
                            DOCUMENT FILE REF: CS-{id}
                        </div>
                        
                        <div className="relative w-full h-[220px] rounded overflow-hidden border border-border/40 flex items-center justify-center bg-bg-soft">
                            {useSchematic ? (
                                /* Anonymized Abstract Pipeline Schematic */
                                <div className="w-full h-full p-4 flex flex-col justify-around items-center font-mono text-[10px] engineering-grid">
                                    <div className="w-full flex justify-between items-center px-4 mt-4">
                                        <div className="border border-accent px-2 py-1 rounded bg-bg text-accent font-bold">PDF</div>
                                        <span className="text-muted">&rarr;</span>
                                        <div className="border border-accent-2 px-2 py-1 rounded bg-bg text-accent-2 font-bold">OCR</div>
                                        <span className="text-muted">&rarr;</span>
                                        <div className="border border-accent-3 px-2 py-1 rounded bg-bg text-accent-3 font-bold">LLM</div>
                                    </div>
                                    
                                    <div className="w-full flex justify-center py-1">
                                        <span className="text-muted rotate-90 my-1">&rarr;</span>
                                    </div>
                                    
                                    <div className="w-full flex justify-around items-center px-8 mb-4">
                                        <div className="border border-border px-2 py-1 rounded bg-bg text-text font-bold">VALIDATION</div>
                                        <span className="text-muted">&rarr;</span>
                                        <div className="border border-accent px-2 py-1 rounded bg-bg text-accent font-bold">ERP API</div>
                                    </div>
                                </div>
                            ) : (
                                imageUrl && (
                                    <Image
                                        src={imageUrl}
                                        alt={`${title} screenshot`}
                                        fill
                                        className="object-cover object-top"
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCard;
