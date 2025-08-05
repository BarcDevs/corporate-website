import axios from 'axios'
import { ContactFormData } from '@/types/contact-form-data'

export const submitContactForm = async (formData: ContactFormData) => {
    let errorMessage
    try {
        const res = await
            axios.post('/api/contact', formData)

        return {
            success: true,
            data: res.data
        }
    } catch ( err: unknown ) {
        errorMessage =
            err && typeof err === 'object' && 'response' in err
                ? // @ts-expect-error - optional chaining to get nested error message
                err.response?.data?.error || 'Unexpected error'
                : err instanceof Error
                    ? err.message
                    : 'Unexpected error'
    }

    return {
        success: false,
        error: errorMessage
    }
}

