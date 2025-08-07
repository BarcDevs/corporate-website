'use client'

import { InputField } from '@/components/common/form/input-field'
import { TextField } from '@/components/common/form/text-field'
import { submitContactForm } from '@/lib/actions/contact/submit-contact-form'
import {
    useForm,
    FormProvider
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import {
    contactFormSchema,
    ContactFormData
} from './contact-form-schema'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

export const ContactForm = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            message: ''
        }
    })

    const onSubmit = async (data: ContactFormData) => {
        const res = await submitContactForm(data)

        if (res.error)
            toast('הייתה שגיאה בשליחת הטופס.', {
                duration: 2000,
                description: 'אנא נסה/י שוב.',
                style: {
                    backgroundColor: 'oklch(63.7% 0.237 25.331)'
                }
            })
        else toast(
            'תודה על פנייתך!',
            {
                duration: 2000,
                description: 'ניצור איתך קשר בהקדם.',
                style: {
                    backgroundColor: 'oklch(87.1% 0.15 154.449)'
                }
            })

        if (res.success)
            form.reset()
    }

    return (
        <FormProvider {...form}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl"
                >
                    <InputField
                        name="name"
                        label="שם מלא"
                        placeholder='לדוגמה: "אבי לוי"'
                    />

                    <InputField
                        name="phone"
                        label="מספר טלפון"
                        placeholder="הכנס/י מספר טלפון"
                        type="tel"
                    />

                    <InputField
                        name="email"
                        label="אימייל"
                        placeholder="הכנס/י כתובת מייל"
                        type="email"
                    />

                    <TextField
                        name="message"
                        label="הודעה"
                        placeholder="פרט/י על הפרויקט או הפנייה שלך..."
                    />

                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="cursor-pointer w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-98"
                    >
                        {form.formState.isSubmitting ? 'שולח...' : 'שלח הודעה'}
                    </Button>
                </form>
            </Form>
        </FormProvider>
    )
}
