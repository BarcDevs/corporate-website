import { aboutData } from '@/data/about'

export const AboutSection = () => {
    const { title, description } = aboutData

    return (
        <section className="py-16 px-4 bg-white scroll-animate fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 scroll-animate fade-in-up delay-100">
                    {title}
                </h2>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed scroll-animate fade-in-up delay-200">
                    {description}
                </p>
            </div>
        </section>
    )
}
