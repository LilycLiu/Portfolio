'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/library/hooks';
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit.btn';
import toast from 'react-hot-toast';

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

        <p className='text-purple-700 -mt-6 dark:text-white/80'>
            Contact me directly at {' '}
            <a className='underline' href='mailto:lilycliu@outlook.com'>lilycliu@outlook.com</a>
            {' '} 
            or fill the form below.
        </p>

        <form 
        className='mt-10 flex flex-col dark:text-purple-950' 
        action={async (formData) => {
            const { data, error} = await sendEmail(formData);
            if (error) {
                toast.error(error);
                return;
            }

            toast.success('Email sent successfully!');
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
            <SubmitBtn />
        </form>
    </motion.section>
  );
}
