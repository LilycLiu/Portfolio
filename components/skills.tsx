"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/library/data'
import { useSectionInView } from '@/library/hooks';
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  }),
}

export default function Skills() {

  const {ref} = useSectionInView('Skills');
  return (
    <section 
    id='skills'
    ref={ref}
    className='md-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-purple-900'>
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                    className='bg-pink-200 border borderBlack rounded-xl px-5 py-3'
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                    >
                      {skill}</motion.li>
                ))}
        </ul>
    </section>
  )
}
