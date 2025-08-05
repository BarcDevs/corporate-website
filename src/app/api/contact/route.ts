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

        const saved =
            await prisma.contactSubmission.create({
                data: {
                    name,
                    phone,
                    message
                }
            })

        await sendContactEmail({ name, phone, message })

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
