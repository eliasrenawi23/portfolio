import type { Metadata } from 'next'
import Header from "@/components/header";

import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/Active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';

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
      <body className={`${inter.className}bg-gray-50 text-gray-950 h-[5000px]`}>
        <div className="bg-[#fbe2e3] absolute
          top-[-6rem] -z-10
          right-[11rem] 
          h-[31.25rem]
          w-[31.25rem] 
          rounded-full blur-[10rem] 
          sm:w-[68.75rem] 
          dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute 
        top-[-1rem] -z-10 
        left-[-35rem] 
        h-[31.25rem] 
        w-[50rem] 
        rounded-full blur-[10rem] 
        sm:w-[68.75rem] 
        md:left-[-33rem] 
        lg:left-[-28rem] 
        xl:left-[-15rem] 
        2xl:left-[-5rem] 
        dark:bg-[#676394]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
