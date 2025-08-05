import { footerData } from '@/data/footer'

const ContactDetails = () => {
    const {
        businessName,
        address,
        phone,
        email
    } = footerData

    return (
        <div>
            <h3 className="text-xl font-bold mb-4">
                {businessName}
            </h3>

            <p className="text-gray-300 mb-2">
                {address}
            </p>

            <p className="text-gray-300 mb-2">
                <a
                    href={`tel:${phone}`}
                    className="hover:text-white transition-colors"
                >
                    {phone}
                </a>
            </p>

            <p className="text-gray-300">
                <a
                    href={`mailto:${email}`}
                    className="hover:text-white transition-colors"
                >
                    {email}
                </a>
            </p>
        </div>
    )
}

export default ContactDetails
