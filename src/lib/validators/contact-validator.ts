import { ContactFormData } from '@/types/contact-form-data'

export const validateContactForm = (
    data: Partial<ContactFormData>
): string | null => {
    const { name, phone, email, message } = data

    if ( !name || !phone || !email || !message )
        return 'Missing fields'

    const emailRegex =
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/

    const phoneRegex =
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?[\d\-.\s]{5,15}$/

    if ( !emailRegex.test(email) )
        return 'Invalid email format'

    if ( !phoneRegex.test(phone) )
        return 'Invalid phone number'

    return null
}
