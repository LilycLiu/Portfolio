"use client"

import Image from 'next/image'
import LilyPic from '../images/Lily.png'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight} from "react-icons/bs"

export default function Introduction() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <motion.p className='mt-4 px-4 text-sm font-medium !leading-[1.5] sm:text-2xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1 , y: 0 }}
        >
          <span className='font-bold'>Lily Liu, </span>
          <span className='font-bold'>Front-end developer</span> and <span className='font-bold'>Afternoon tea </span>lover, 
          <span className='font-bold'> <br/>10 </span>years work experience. <br/>I specialised in <br/> 
          <span className= 'font-bold underline'>React,Tailwind CSS,SCSS.</span><br/>
            Enjoy building and playing with <span className='italic'>websites and apps.</span>
        </motion.p>     
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
        
        <div>
            <Link href='#contact'>Contact me
            <BsArrowRight /></Link>
        </div>
        
    </section>
  )
}
