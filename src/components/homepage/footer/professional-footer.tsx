import { footerData } from '@/data/footer'

const ProfessionalFooter = ({}) => {
    const { businessName } = footerData

    return (
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
                &copy; 2024 {businessName}. All rights reserved. Licensed & Insured.
            </p>
            <p className="text-xs mt-2 text-gray-400">
                This website was developed by Bardevs. Contact:&nbsp;
                <a href="mailto:barcprodevelopments@gmail.com" className="underline">
                    barcprodevelopments@gmail.com
                </a>
            </p>
        </div>
    )
}

export default ProfessionalFooter
