import React from "react";

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="text-3xl font-bold capitalize mb-8 text-center">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                {children}
            </span>
            <div className="w-16 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </h2>
    );
}