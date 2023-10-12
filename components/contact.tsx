'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/library/hooks';
import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    
  return (
    <motion.section 
        id='contact' 
        ref={ref}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-purple-700 -mt-6'>
            Contact me directly at {' '}
            <a className='underline' href='mailto:lilycliu@outlook.com'>lilycliu@outlook.com</a>
            {' '} 
            or fill the form below.
        </p>

        <form 
        className='mt-10 flex flex-col' 
        action={async (formData) => {
            await sendEmail(formData);
        }}
        >
            <input 
                className='h-14 px-4 rounded-lg borderBlack' 
                name='senderEmail'
                type='email' 
                required 
                maxLength={200} 
                placeholder='Your email address' />
            <textarea 
                className='h-52 my-3 rounded-lg borerBlack p-4' 
                name='message'
                required 
                maxLength={2000} 
                placeholder='Message'/>
            <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-purple-900 text-purple-50 outline-none transition-all rounded-lg focus:scale-110 hover:scale-110 hover:bg-pink-500 active:scale-105'>
                Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
            </button>
        </form>
    </motion.section>
  )
}
