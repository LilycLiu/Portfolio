"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/library/hooks';

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section 
    ref={ref}
    className='mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.16 }}
    id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-2 dark:text-purple-400'>
        After many years in {" "}
        <span className="font-medium">admin and sales industry</span>, I decided to pursue my
        dream in programming. Firstly I self-taught HTML, CSS and Javascript, then I enrolled in a coding bootcamp and learnt{" "}
        <span className="font-medium">web development</span>.{" "}
        My favourite part of programming is <span className="italic">the
        interactive way of building responsive web pages.</span> I enjoy giving people a nice experience when browering my websites.
         I specialised 
        at{" "}
        <span className="font-medium">
          React, Typescript, Sass, and MongoDB.
        </span>
        I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p className='dark:text-purple-400'>
        When I'm not coding, I enjoy going to the gym, trying different bubble tea, drawing, watching movies, and travelling. I also enjoy{" "}
        <span className="font-medium">reading new tech information</span>.
      </p>
    </motion.section>
  );
}
