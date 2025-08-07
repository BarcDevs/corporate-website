import ContactDetails from '@/components/homepage/footer/contact-details'
import FollowUs from '@/components/homepage/footer/follow-us'
import ProfessionalFooter from '@/components/homepage/footer/professional-footer'
import Services from '@/components/homepage/footer/services'
import { footerData } from '@/data/footer'

export const Footer = () =>
    (
        <footer className="bg-gray-900 text-white py-12 px-4 scroll-animate fade-in-up">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ContactDetails/>
                    <Services/>
                    <FollowUs/>
                </div>

                <ProfessionalFooter/>
            </div>
        </footer>
    )
