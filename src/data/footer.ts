import { SocialLink } from '@/types/social-link'

type FooterLinks =  {
    businessName: string
    address: string
    socialLinks: SocialLink[]
}

export const footerData: FooterLinks = {
    businessName: 'RenovationPro Services',
    address: '123 Main Street, Your City, State 12345',
    socialLinks: [
        { platform: 'Facebook', url: '#' },
        { platform: 'Instagram', url: '#' },
        { platform: 'LinkedIn', url: '#' }
    ]
}
