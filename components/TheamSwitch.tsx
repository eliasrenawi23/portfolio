"use client";

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs";


type Theme = "light" | "dark"

const TheamSwitch = () => {

    const [theme, setTheame] = useState<Theme>("light");


    const toggleTheme = () => {
        if(theme == "light") {
            setTheame("dark")
            window.localStorage.setItem("theme", "dark");
        } else {
            setTheame("light")
            window.localStorage.setItem("theme", "light");


        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if(localTheme) {
            setTheame(localTheme)
        } else if(window.matchMedia("(prefers-color-scheme:dark).matches")) {
            setTheame("dark")
        }
    }, [])

    return (
        <button
            className="fixed bottom-5  right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    )
}

export default TheamSwitch