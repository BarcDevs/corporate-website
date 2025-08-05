import { sendOwnerEmail, sendUserConfirmationEmail } from '@/lib/actions/contactMail/sendContactMail'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const POST = async (req: Request) => {
    try {
        const { name, phone, email, message } = await req.json()

        if ( !name || !phone || !email || !message )
            return NextResponse.json(
                { error: 'Missing fields' },
                { status: 400 }
            )

        await prisma.contactSubmission.create({
            data: {
                name,
                phone,
                email,
                message
            }
        })

            await sendOwnerEmail({ name, phone, email, message })
            await sendUserConfirmationEmail({ name, phone, email, message })

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
