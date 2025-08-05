import { heroData } from '@/data/hero'

export const HeroSection =
    () => {
        const {
            title,
            subtitle,
            ctaText,
            ctaHref
        } = heroData

        return (
            <section
                className="bg-gradient-to-br from-blue-500 to-teal-500 text-white py-20 px-4 scroll-animate fade-in-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {title}
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                        {subtitle}
                    </p>

                    <a
                        href={ctaHref}
                        className="inline-block bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-102 active:scale-98"
                    >
                        {ctaText}
                    </a>
                </div>
            </section>
        )
    }
