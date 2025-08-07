import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { Toaster } from 'sonner'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Demo corporate App',
    description: 'An example corporate website and landing page',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest'
}

export default function RootLayout ({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="en"
            dir={'rtl'}
        >
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <main>
            <Toaster position={'top-center'}/>
            {children}
        </main>
        </body>
        </html>
    )
}
