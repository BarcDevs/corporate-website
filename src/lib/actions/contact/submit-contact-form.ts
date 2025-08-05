import axios from 'axios'
import { ContactFormData } from '@/types/contact-form-data'

export const submitContactForm = async (formData: ContactFormData) => {
    try {
        const res = await
            axios.post('/api/contact', formData)

        return {
            success: true,
            data: res.data
        }
    } catch ( err: any ) {
        const errorMessage =
            err?.response?.data?.error ||
            err.message ||
            'Unexpected error'

        return {
            success: false,
            error: errorMessage
        }
    }
}
