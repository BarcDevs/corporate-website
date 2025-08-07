import { SocialLink } from '@/types/social-link'

type FooterLinks =  {
    businessName: string
    address: string
    socialLinks: SocialLink[]
}

export const footerData: FooterLinks = {
    businessName: 'אבי שירותי חשמל ושיפוצים',
    address: 'דרך השלום 45, תל אביב, 6789100, ישראל',
    socialLinks: [
        { platform: 'Facebook', url: '#' },
        { platform: 'Instagram', url: '#' },
        { platform: 'LinkedIn', url: '#' }
    ]
}
