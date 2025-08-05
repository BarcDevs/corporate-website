'use client'

import FormInput from '@/components/homepage/form/formInput'
import FormLabel from '@/components/homepage/form/formLabel'
import { submitContactForm } from '@/lib/actions/submitContactForm'
import {
    ChangeEvent,
    FormEvent,
    useState
} from 'react'

export const ContactForm = ({}) => {
    const [submitting, setSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setSubmitting(true)
        const res =
            await submitContactForm(formData)

        setSubmitting(false)
        res.error ?
            //todo: add alert component
            alert('There was an error submitting the form. Please try again.') :
            alert('Thank you for your message! We will contact you soon.')

        res.data && setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    }

    const handleChange = (e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >) => {
        setFormData({
            ...formData,
            [ e.target.name ]: e.target.value
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto scroll-animate fade-in-up delay-200 hover:shadow-xl transition-shadow duration-300"
        >
            <div className="mb-6">
                <FormLabel
                    htmlFor={'name'}
                    label={'Full Name'}
                />

                <FormInput
                    name={'name'}
                    value={formData.name}
                    placeholder={'Enter your full name'}
                    onChange={handleChange}
                    required={true}
                />
            </div>

            <div className="mb-6">
                <FormLabel
                    htmlFor={'phone'}
                    label={'Phone Number'}
                />

                <FormInput
                    type={'tel'}
                    name={'phone'}
                    value={formData.phone}
                    placeholder={'Enter your phone number'}
                    onChange={handleChange}
                    required={true}
                />
            </div>

            <div className="mb-6">
                <FormLabel
                    htmlFor={'email'}
                    label={'Your Email'}
                />

                <FormInput
                    type={'email'}
                    name={'email'}
                    value={formData.email}
                    placeholder={'Enter your email'}
                    onChange={handleChange}
                    required={true}
                />
            </div>

            <div className="mb-6">
                <FormLabel
                    htmlFor={'message'}
                    label={'Project Description'}
                />

                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical transition-all duration-400 hover:border-blue-300 text-gray-700 placeholder-gray-400"
                />
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="cursor-pointer w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-98"
            >
                {submitting ?
                    'Sending...' :
                    'Send Message'
                }
            </button>
        </form>
    )
}
