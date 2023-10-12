'use server';

import React from 'react'
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/library/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 200)) {
        return {
            error: 'Invalid sender email',
        };
    }
    if (!validateString(message, 2000)) {
        return {
            error: 'Invalid message',
        };
    }

    throw new Error('Test error');

    try {
        await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'lilycliu@outlook.com',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        text: message as string,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
};