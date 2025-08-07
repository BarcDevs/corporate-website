import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z.string()
        .min(
            2,
            'השם חייב להכיל לפחות 2 תווים'
        ),
    email: z
        .string()
        .email('כתובת האימייל אינה תקינה'),
    phone: z
        .string()
        .refine(
            val => !val || /^[0-9+\-\s()]{7,15}$/.test(val),
            'מספר הטלפון אינו בפורמט תקין'
        ),
    message: z
        .string()
        .min(
            10,
            'ההודעה חייבת להכיל לפחות 10 תווים'
        )
})

export type ContactFormData = z.infer<typeof contactFormSchema>
