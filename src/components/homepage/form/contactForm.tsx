'use client'

import FormInput from '@/components/homepage/form/formInput'
import FormLabel from '@/components/homepage/form/formLabel'
import {
    ChangeEvent,
    FormEvent,
    useState
} from 'react'

export const ContactForm = ({}) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // todo: Handle form submission
        console.log('Form submitted:', formData)

        alert('Thank you for your message! We will contact you soon.')

        setFormData({
            name: '',
            phone: '',
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical transition-all duration-400 hover:border-blue-300 placeholder-gray-400"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-98"
            >
                Send Message
            </button>
        </form>
    )
}
