import React from "react";

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12 tracking-tight text-text relative">
            <span className="relative z-10">{children}</span>
            <div className="w-12 h-[2px] mx-auto mt-3 bg-accent-2"></div>
        </h2>
    );
}