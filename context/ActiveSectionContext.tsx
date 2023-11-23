"use client";
import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data'


type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)
const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProps) => {

    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection
        }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}
export default ActiveSectionContextProvider

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}