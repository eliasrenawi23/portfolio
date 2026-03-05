import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import TheamSwitch from '@/components/TheamSwitch';
import ThemeContextProvider from '@/context/ThemeContext';
import HeadrePage from '@/components/HeadrePage';
import ParticlesBackground from '@/components/ParticlesBackground';
import ScrollProgress from '@/components/ScrollProgress';
import ParallaxOrbs from '@/components/ParallaxOrbs';
import og from "@/public/EliasRenawi_pfp.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elias Renawi | Full-Stack & AI Engineer',
  description: 'I build React/Next.js apps and Python/Flask backends, with RAG and OCR (Azure).',
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
    "Azure"
  ],
  applicationName: "Elias Renawi — Portfolio",
  openGraph: {
    type: "website",
    url: "https://eliasrenawi.vercel.app",
    title: "Elias Renawi | Full-Stack & AI Engineer",
    description: "React/Next.js, Flask, RAG, OCR (Azure).",
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
       className={`${inter.className}
    relative min-h-screen antialiased overflow-x-hidden
    pt-28 sm:pt-36
    bg-gradient-to-b from-gray-50 via-white to-gray-50
    text-gray-950
    dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900
    dark:text-gray-50 dark:text-opacity-90`}
      >
        <ScrollProgress />
        <ParallaxOrbs />
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ParticlesBackground />
            <HeadrePage />
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
