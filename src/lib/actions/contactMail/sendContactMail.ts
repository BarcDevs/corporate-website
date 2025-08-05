import { generateOwnerEmail, generateUserConfirmationEmail } from '@/lib/actions/contactMail/mailGenerator'
import { sendEmail } from '@/lib/mail'
import { ContactFormData } from '@/types/contactFormData'

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

    await sendEmail({
        to: 'owner@example.com', //todo config
        subject: `📩 New Inquiry from ${name}`,
        message: emailBody
    })
}

export const sendUserConfirmationEmail = async (contactFormData: ContactFormData) => {
    const {
        name,
        phone,
        email,
        message
    } = contactFormData

    const emailBody = generateUserConfirmationEmail(
        name,
        phone,
        message
    )

    await sendEmail({
        to: email,
        subject: 'We’ve received your message – thank you!',
        message: emailBody
    })
}
