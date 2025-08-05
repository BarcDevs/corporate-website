import { ContactForm } from '@/components/homepage/contact/form/contact-form'
import { contactData } from '@/data/contact'

export const ContactSection = () => {
    const {
        title,
        subtitle,
        phone,
        email
    } = contactData

    return (
        <section id="contact" className="py-16 px-4 bg-gray-50 scroll-animate fade-in-up">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 scroll-animate fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>

                    <p className="text-lg text-gray-700 mb-6">
                        {subtitle}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg">
                        <a
                            href={`tel:${phone}`}
                            className="text-blue-500 hover:text-blue-600 font-semibold transform hover:scale-105 transition-all duration-400"
                        >
                            📞 {phone}
                        </a>

                        <a
                            href={`mailto:${email}`}
                            className="text-blue-500 hover:text-blue-600 font-semibold transform hover:scale-105 transition-all duration-400"
                        >
                            ✉️ {email}
                        </a>
                    </div>
                </div>

                <ContactForm/>
            </div>
        </section>
    )
}
