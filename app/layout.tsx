import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import TheamSwitch from '@/components/TheamSwitch';
import ThemeContextProvider from '@/context/ThemeContext';
import HeadrePage from '@/components/HeadrePage';
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
    relative min-h-screen antialiased
    pt-28 sm:pt-36
    bg-gradient-to-b from-gray-50 via-white to-gray-50
    text-gray-950
    dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900
    dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="
        bg-[#fbe2e3] 
        absolute top-[-6rem] 
        -z-10 right-[11rem] 
        h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem]
        sm:w-[68.75rem] 
        dark:bg-[#946263]"></div>
        <div className="
        bg-[#dbd7fb] 
        absolute top-[-1rem] 
        -z-10 
        left-[-35rem] 
        h-[31.25rem] 
        w-[50rem] 
        rounded-full 
        blur-[10rem] 
        sm:w-[68.75rem] 
        md:left-[-33rem] 
        lg:left-[-28rem] 
        xl:left-[-15rem] 
        2xl:left-[-5rem] 
        dark:bg-[#676394]"></div>
          <div
    aria-hidden
    className="absolute inset-0 -z-10
      [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
      [background-size:24px_24px]
      dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"
  />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
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
