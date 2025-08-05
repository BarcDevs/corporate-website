'use client'

import { useEffect } from 'react'

export const ScrollAnimations = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if ( entry.isIntersecting ) {
                    entry.target.classList.add('animate-in')
                    entry.target.classList.remove('animate-out')
                }
            })
        }, observerOptions)

        const animateElements =
            document.querySelectorAll('.scroll-animate')
        animateElements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return null
}
