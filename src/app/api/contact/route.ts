import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactEmail } from '@/lib/mail'

export const POST = async (req: Request) => {
    try {
        const { name, phone, message } = await req.json()

        if ( !name || !phone || !message )
            return NextResponse.json(
                { error: 'Missing fields' },
                { status: 400 }
            )

        await prisma.contactSubmission.create({
            data: {
                name,
                phone,
                message
            }
        })

        try {
            await sendContactEmail({ name, phone, message })
        } catch ( e: unknown ) {
            console.error(
                'Failed to send contact email: %s',
                ( e as Error ).message
            )
        }

        return NextResponse.json({
            success: true
        })
    } catch ( error ) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
