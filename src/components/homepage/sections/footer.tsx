import ContactDetails from '@/components/homepage/footer/contactDetails'
import FollowUs from '@/components/homepage/footer/followUS'
import Services from '@/components/homepage/footer/services'
import { footerData } from '@/data/footer'

export const Footer = () => {
    const { businessName } = footerData

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 scroll-animate fade-in-up">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ContactDetails/>
                    <Services/>
                    <FollowUs/>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>
                        &copy; 2024 {businessName}. All rights reserved. Licensed & Insured.
                    </p>
                </div>
            </div>
        </footer>
    )
}
