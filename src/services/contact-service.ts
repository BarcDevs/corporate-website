import { connectToDatabase } from '@/lib/db'
import ContactSubmission from '@/models/contact'
import { ContactFormData } from '@/types/contact-form-data'

export const createContactEntry = async (data: ContactFormData) => {
    await connectToDatabase()

    return await ContactSubmission
        .create({ ...data })
}
