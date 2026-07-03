import type { Metadata } from 'next'
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import TheamSwitch from '@/components/TheamSwitch';
import ThemeContextProvider from '@/context/ThemeContext';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import og from "@/public/EliasRenawi_pfp.png"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Elias Renawi | Full-Stack & AI Engineer',
  description: 'Full-stack engineer building AI-powered document workflows, OCR pipelines, RAG systems, and production web apps with React, Python Flask, and Azure AI.',
  keywords: [
    "Elias Renawi",
    "Full-Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Python",
    "Flask",
    "OCR",
    "RAG",
    "Azure AI",
    "Claude",
    "OpenAI",
    "MongoDB"
  ],
  applicationName: "Elias Renawi — Portfolio",
  openGraph: {
    type: "website",
    url: "https://eliasrenawi.vercel.app",
    title: "Elias Renawi | Full-Stack & AI Engineer",
    description: "Full-stack engineer building AI-powered document workflows, OCR pipelines, and RAG systems.",
    siteName: "Elias Renawi — Portfolio",
    images: [{ url: og.src, width: 1200, height: 630, alt: "Elias Renawi Portfolio cover" }],
  },
  metadataBase: new URL("https://eliasrenawi.vercel.app"),
  alternates: { canonical: "/" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans
        relative min-h-screen antialiased overflow-x-hidden
        pt-20 sm:pt-28
        bg-bg text-text paper-texture`}
      >
        <ScrollProgress />
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <TheamSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

      </body>
    </html>
  )
}
