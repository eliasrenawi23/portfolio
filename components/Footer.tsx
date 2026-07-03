import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full border-t border-border mt-16 py-8 px-4 text-center font-mono text-[10px] text-muted uppercase tracking-wider">
            <div className="max-w-[70rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <span>
                    &copy; 2026 Elias Renawi. All rights reserved.
                </span>
                <span className="text-right leading-relaxed max-w-[25rem] sm:max-w-none">
                    Built with React, Next.js (App Router, Server Actions), TypeScript, Tailwind CSS, Framer Motion, Resend &amp; Vercel.
                </span>
            </div>
        </footer>
    )
}

export default Footer