"use client"

import Image from 'next/image'
import LilyPic from '../images/Lily.png'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { BsLinkedin} from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/library/hooks'
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Introduction() {
  const {ref} = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section 
      id='home'
      ref={ref} 
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[80rem]'
    >
      <div className='flex items-center justify-center pb-9'>
        <motion.h1 className='mt-4 px-4 text-sm font-medium !leading-[1.5] sm:text-2xl text-purple-100'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1 , y: 0 }}
        >
          <span className='text-3xl'>Lily Liu, </span>
          <span className='font-bold'>front-end developer</span> and <span className='font-bold'>afternoon tea lover</span>, 
          <span className='font-bold'> <br/>10 </span>years work experience. <br/>I specialise in <br/> 
          <span className= 'font-bold underline'>React,Tailwind CSS,SCSS.</span><br/>
            Enjoy building and playing with <span className='italic'>websites and apps.</span>
        </motion.h1>     
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1 , scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
          >
            <Image
             src={LilyPic} 
             alt="Lily's photo" 
             width='400' 
             height='400' 
             quality='95' 
             priority={true}
             className='h-30 w-30 rounded-full object-cover shadow-xl relative'
             />
          </motion.div>

        </div>
        
        <motion.div className='flex flex-col  sm:flex-row items-center justify-around px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ delay: 0.14 }}
        >
            <Link href='#contact' 
            className='group text-pink-200  bg-purple-900 px-7 py-3 flex items-center gap-4 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-purple-900 active:scale-105 transition'
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
            >
              Contact me{" "}
            <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' /></Link>
            <a className='group bg-pink-50 text-pink-900 px-7 py-3 flex items-center gap-4 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href="/CV.pdf" download>CV download <HiDownload className='opacity-60 group-hover:animate-bounce w-5 h-5' />
            </a>

            <a className='bg-pink-50 text-pink-800 p-4  flex items-center gap-4 rounded-lg focus:scale-[1.15] hover:scale-[1.15] hover:text-pink-500 active:scale-105 transition cursor-pointer borderBlack' href='https://www.linkedin.com/in/lily-liu-323568b2/' target='_blank'>
              <BsLinkedin />
            </a>

            <a className='bg-pink-50 text-pink-800 p-4  flex items-center gap-4 text-[1.35rem] rounded-lg focus:scale-[1.15] hover:scale-[1.15] hover:text-pink-500 active:scale-105 transition cursor-pointer borderBlack' href='https://github.com/LilycLiu' target='_blank'>
              <FaGithubSquare />
            </a>

        </motion.div>
        
    </section>
  )
}
