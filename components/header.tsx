"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/library/data'
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

 return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] width-full; rounded-full border-pink-50 border-opacity-40 bg-pink-800 bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-lg dark:bg-white/90 dark:border-purple-100/40'
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-0.5 text-[0.9rem] font-medium text-purple-50 sm:w-[initial] sm:flex-nowrap sm:gap-4'>
                {links.map((link) => (
                    <motion.li 
                    className='h-3/4 flex items-center justify-center relative' 
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                        <Link 
                            className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-purple-950 transition dark:text-purple-800 dark:hover:text-purple-500', {
                                'text-purple-950 dark:text-pink-200':activeSection === link.name,
                            })} 
                            href={link.hash}
                            onClick={() => {
                                setActiveSection(link.name)
                                setTimeOfLastClick(Date.now())
                            }
                        }
                        >
                        {link.name}
                            {
                                link.name === activeSection && (
                                <motion.span className='bg-pink-200 rounded-lg absolute inset-0 -z-10 dark:bg-purple-200'
                                layoutId='activeSection'
                                transition={{
                                    type: "string",
                                    stiffness: 380,
                                    damping: 30,
                                }}    
                                ></motion.span>
                                )}
                        </Link>
                    </motion.li>
                
                ))}
            </ul>
        </nav>
  </header>
  );
}
