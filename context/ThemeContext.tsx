"use client";

import React, { createContext, useContext, useEffect, useState } from 'react'
type Theme = "light" | "dark"

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {

    const [theme, setTheame] = useState<Theme>("light");
    const toggleTheme = () => {
        if(theme == "light") {
            setTheame("dark")
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheame("light")
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");

        }
    }
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if(localTheme) {
            setTheame(localTheme)
            if(localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if(window.matchMedia("(prefers-color-scheme:dark).matches")) {
            setTheame("dark")
            document.documentElement.classList.add("dark");

        }
    }, [])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider


export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}