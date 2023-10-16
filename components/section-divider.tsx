"use client"

import React from 'react'
import { motion } from 'framer-motion'
import BubbleTea from '../public/bubbleTea.png'
import Image from 'next/image'

export default function SectionDivider() {
  return (
    
    <motion.div className='transparant mt-10 mb-28 h-20 w-[10rem] sm:block'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
      <Image
             src={BubbleTea} 
             alt="bubble tea picture"  
             quality='95' 
             priority={true}
             className='h-25 w-25 rounded-full object-cover shadow-xl dark:bg-white/10'
             />
    </motion.div>
  );
}
