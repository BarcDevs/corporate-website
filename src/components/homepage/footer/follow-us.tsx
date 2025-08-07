import Image from 'next/image'
import Link from 'next/link'
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
                    <Link
                        key={i}
                        href={link.url}
                        className="text-gray-300 hover:text-white transition-all duration-400 transform hover:scale-105 hover:-translate-y-0.5"
                    >
                        <Image
                            src={`/logos/${link.platform.toLowerCase()}.svg`}
                            alt={link.platform}
                            width={24}
                            height={24}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FollowUs
