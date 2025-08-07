import { Testimonial } from '@/types/testimonial'

export const testimonialsData: {
    title: string;
    testimonials: Testimonial[];
} = {
    title: 'מה הלקוחות שלנו אומרים',
    testimonials: [
        {
            quote:
                'עבודה מצוינת בשיפוץ המטבח שלנו. הצוות היה מקצועי, מדויק והתוצאות עלו על הציפיות.',
            name: 'יעל כהן',
            location: 'תל אביב'
        },
        {
            quote:
                'שירות חשמל מהיר ואמין. שדרגו לנו את לוח החשמל והתקינו שקעים חדשים ברחבי הבית.',
            name: 'דוד לוי',
            location: 'חיפה'
        },
        {
            quote:
                'הפכו את חדר האמבטיה הישן שלנו למקום מודרני בסגנון ספא. ממליצה בחום על השירות!',
            name: 'רותי שמש',
            location: 'ירושלים'
        }
    ]
}
