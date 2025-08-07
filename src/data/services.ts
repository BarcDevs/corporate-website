import { Service } from '@/types/service'

export const servicesData: {
    title: string,
    services: Service[]
} = {
    title: 'השירותים שלנו',
    services: [
        {
            icon: '🔧',
            title: 'שיפוץ הבית',
            description:
                'שיפוצים מלאים למטבח וחדרי אמבט, התקנת ריצופים, צביעה ועבודות נגרות מותאמות.'
        },
        {
            icon: '⚡',
            title: 'שירותי חשמל',
            description:
                'התקנת חיווט, שדרוג לוחות חשמל, התקנת שקעים, גופי תאורה ותיקוני חשמל.'
        },
        {
            icon: '🏠',
            title: 'עיצוב פנים',
            description:
                'תכנון חללים, ייעוץ צבעים, בחירת גופי תאורה ושיפוץ כולל לעיצוב הבית.'
        },
        {
            icon: '🛠️',
            title: 'תחזוקה ותיקונים',
            description:
                'שירותי תחזוקה שוטפת, תיקונים דחופים וטיפול מונע למערכות הבית.'
        }
    ]
}
