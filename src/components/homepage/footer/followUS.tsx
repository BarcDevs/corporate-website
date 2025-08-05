import { footerData } from '@/data/footer'

const FollowUs = ({}) => {
    const { socialLinks } = footerData

    return (
        <div>
            <h4 className="text-lg font-semibold mb-4">
                Follow Us
            </h4>

            <div className="flex space-x-4">
                {socialLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        className="text-gray-300 hover:text-white transition-all duration-400 transform hover:scale-105 hover:-translate-y-0.5"
                    >
                        {link.platform}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FollowUs
