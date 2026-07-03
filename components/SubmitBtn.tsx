"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// @ts-expect-error - experimental hook in React 18
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group relative flex items-center justify-center gap-2 h-12 w-full 
                bg-accent text-bg hover:bg-accent-3 hover:text-white rounded
                outline-none transition-all duration-200
                focus:scale-[1.01] hover:scale-[1.01] active:scale-100 
                disabled:scale-100 disabled:opacity-65 disabled:cursor-not-allowed"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-current"></div>
            ) : (
                <>
                    <span className="font-mono text-xs uppercase tracking-wider font-bold">Transmit Message</span>
                    <FaPaperPlane className="text-xs opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
            )}
        </button>
    );
}