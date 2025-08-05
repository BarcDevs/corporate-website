import { handleContactForm } from '@/lib/actions/contact/handle-contact-form'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
    try {
        const data = await req.json()
        const result = await handleContactForm(data)

        return NextResponse.json(result)
    } catch (error) {
        console.error('Contact form error:', error)

        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
