"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40' 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.19 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After many years in {" "}
        <span className="font-medium">admin industry</span>, I decided to pursue my
        dream in programming. I enrolled in a coding bootcamp and learnt{" "}
        <span className="font-medium">web development</span>.{" "}
        <span className="italic">My favourite part of programming</span> is the
        interactive way of building responsive web pages. I enjoy giving people a nice experience when browering my websites.
         I specialised 
        at{" "}
        <span className="font-medium">
          React, Next.js, Sass, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy trying different afternoon tea
        , watching movies, and travelling. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
