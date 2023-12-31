import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lily | Personal Portfolio',
  description: 'Lily, a front-end developer and afternoon tea lover.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}
       bg-pink-50 text-pink-950 relative pt-28 sm:pt-36 dark:bg-[#301934] dark:text-white`}
       >
        <div className="bg-blue-400 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-blue-950"></div>
        <div className="bg-purple-400 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-purple-950"></div>
            <ThemeContextProvider>
            <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
            <ThemeSwitch />
            </ActiveSectionContextProvider>
            </ThemeContextProvider>
      </body>
            
    </html>
  )
}
