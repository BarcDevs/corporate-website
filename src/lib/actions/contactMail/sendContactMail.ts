import { generateOwnerEmail, generateUserConfirmationEmail } from '@/lib/actions/contactMail/mailGenerator'
import { sendEmail } from '@/lib/mail'
import { ContactFormData } from '@/types/contactFormData'
import { config } from '@/config'

export const sendOwnerEmail = async (contactFormData: ContactFormData) => {
    const {
        name,
        phone,
        email,
        message
    } = contactFormData

    const emailBody = generateOwnerEmail(
        name,
        phone,
        email,
        message
    )

    try {
        await sendEmail({
            to: config.adminEmail,
            subject: `📩 New Inquiry from ${name}`,
            message: emailBody
        })
    } catch ( e: unknown ) {
        console.error(
            'Failed to send contact email: %s',
            ( e as Error ).message
        )
    }
}

export const sendUserConfirmationEmail = async (contactFormData: ContactFormData) => {
    const {
        name,
        phone,
        email,
        message
    } = contactFormData
    console.log(email)

    const emailBody = generateUserConfirmationEmail(
        name,
        phone,
        message
    )

    try {
        await sendEmail({
            to: email,
            subject: 'We’ve received your message – thank you!',
            message: emailBody
        })
    } catch ( e: unknown ) {
        console.error(
            'Failed to send contact confirmation email: %s',
            ( e as Error ).message
        )
    }
}
