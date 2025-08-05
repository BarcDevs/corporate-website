import { ScrollAnimations } from '@/components/homepage/scrollAnimations'
import { AboutSection } from '@/components/homepage/sections/about'
import { HeroSection } from '@/components/homepage/sections/hero'
import { ServicesSection } from '@/components/homepage/sections/services'

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <ScrollAnimations/>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            {/*<TestimonialsSection {...testimonialsData} />*/}
            {/*<ContactSection {...contactData} />*/}
            {/*<Footer {...footerData} />*/}
        </div>
    )
}

export default Home
