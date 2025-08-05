import { SocialLink } from '@/types/socialLink'

type FooterLinks =  {
    businessName: string
    address: string
    phone: string
    email: string
    socialLinks: SocialLink[]
}

export const footerData: FooterLinks = {
    businessName: 'RenovationPro Services',
    address: '123 Main Street, Your City, State 12345',
    phone: '(555) 123-4567',
    email: 'info@renovationpro.com',
    socialLinks: [
        { platform: 'Facebook', url: '#' },
        { platform: 'Instagram', url: '#' },
        { platform: 'LinkedIn', url: '#' }
    ]
}
