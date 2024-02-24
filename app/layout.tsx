import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import TheamSwitch from '@/components/TheamSwitch';
import ThemeContextProvider from '@/context/ThemeContext';
import HeadrePage from '@/components/HeadrePage';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elias Renawi | Personal Protfolio ',
  description: 'Full Stack Developer',
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
        bg-gray-50
        text-gray-950 
        relative pt-28 
        sm:pt-36 dark:bg-gray-900
        dark:text-gray-50 
        dark:text-opacity-90`}
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
