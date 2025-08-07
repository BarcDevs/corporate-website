import { testimonialsData } from '@/data/testimonials'

export const TestimonialsSection = () => {
    const { title, testimonials } = testimonialsData

    return (
        <section className="py-16 px-4 bg-white scroll-animate fade-in-up">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 scroll-animate fade-in-up">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 hover:border-blue-600 hover:shadow-md transform hover:-translate-y-1 transition-all duration-500 scroll-animate fade-in-up delay-${( index + 1 ) * 150} group cursor-pointer`}
                        >
                            <div>
                                <div
                                    className="font-semibold text-gray-900 group-hover:text-blue-500 transition-colors duration-500">
                                    {testimonial.name}
                                </div>

                                <div className="text-gray-600 text-sm">
                                    {testimonial.location}
                                </div>
                            </div>
                            <p className="text-gray-700 mt-4 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                                &quot;{testimonial.quote}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
