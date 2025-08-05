import { Testimonial } from '@/types/testimonial'

export const testimonialsData: {
    title: string;
    testimonials: Testimonial[];
} = {
    title: 'What Our Customers Say',
    testimonials: [
        {
            quote:
                'Outstanding work on our kitchen renovation. The team was professional, punctual, and the results exceeded our expectations.',
            name: 'Sarah Johnson',
            location: 'Downtown'
        },
        {
            quote:
                'Fast and reliable electrical service. They upgraded our entire panel and added new outlets throughout the house.',
            name: 'Michael Chen',
            location: 'Westside'
        },
        {
            quote: 'Transformed our outdated bathroom into a modern spa-like retreat. Highly recommend their services!',
            name: 'Rachel Martinez',
            location: 'Northbrook'
        }
    ]
}
