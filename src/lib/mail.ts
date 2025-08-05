import { Email } from '@/types/email'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({
    to,
    subject,
    message
}: Email) =>
    resend.emails.send({
        from: 'CorporateAppDemo@resend.dev',
        to,
        subject: subject,
        html: message
    })
