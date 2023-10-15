import React from 'react'
import { experimental_useFormStatus as useFormStatus} from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button 
        type='submit' 
        className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-purple-900 text-purple-50 outline-none transition-all rounded-lg focus:scale-110 hover:scale-110 hover:bg-pink-500 active:scale-105 dark:bg-pink-200 dark:opacity-80 dark:text-pink-900 disabled:scale-100 disabled:bg-opacity-65'
        disabled={pending}
        >
            {pending ? (
                <div className='h-5 w-5 animate-spin rounded-lg border-b-2 border-white'></div> 
            ) : (
                <>
                Submit{' '}
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
                </>
            )}
        </button>
    );
}
