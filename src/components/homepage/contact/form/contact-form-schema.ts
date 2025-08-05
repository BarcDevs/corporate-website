import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z.string()
        .min(
            2,
            'Name must be at least 2 characters'
        ),
    email: z
        .email('Invalid email address'),
    phone: z
        .string()
        .refine(
            val => !val || /^[0-9+\-\s()]{7,15}$/.test(val),
            'Invalid phone number format'
        ),
    message: z
        .string()
        .min(
            10,
            'Message must be at least 10 characters'
        )
})

export type ContactFormData = z.infer<typeof contactFormSchema>
