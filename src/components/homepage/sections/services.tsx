import { twMerge } from 'tailwind-merge'
import { servicesData } from '@/data/services'

export const ServicesSection = () => {
    const { title, services } = servicesData

    return (
        <section className="py-16 px-4 bg-gray-50 scroll-animate fade-in-up">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 scroll-animate fade-in-up">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={twMerge('bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-102 scroll-animate fade-in-up group cursor-pointer',
                                `delay-${( index + 1 ) * 100}`
                            )}
                        >
                            <div
                                className="text-4xl mb-4 text-center transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-blue-500 transition-colors duration-500">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
