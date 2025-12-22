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
                bg-gradient-to-r from-indigo-600 to-purple-600 
                text-white rounded-xl 
                outline-none 
                transition-all duration-300
                hover:shadow-lg hover:shadow-indigo-500/25
                focus:scale-[1.02] hover:scale-[1.02] active:scale-100 
                disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    <span className="font-medium">Send Message</span>
                    <FaPaperPlane className="text-sm opacity-80 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
            )}
            
            {/* Glow Effect */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300 -z-10" />
        </button>
    );
}