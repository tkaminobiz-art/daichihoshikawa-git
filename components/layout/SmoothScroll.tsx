'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import { MotionConfig } from 'framer-motion'

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        const syncModalScroll = () => {
            if (document.body.style.overflow === 'hidden') lenis.stop()
            else lenis.start()
        }
        const modalObserver = new MutationObserver(syncModalScroll)
        modalObserver.observe(document.body, { attributes: true, attributeFilter: ['style'] })
        syncModalScroll()

        let frame: number
        function raf(time: number) {
            lenis.raf(time)
            frame = requestAnimationFrame(raf)
        }

        frame = requestAnimationFrame(raf)

        return () => {
            modalObserver.disconnect()
            cancelAnimationFrame(frame)
            lenis.destroy()
        }
    }, [])

    return (
        <MotionConfig reducedMotion="user"><div className="lenis-wrapper">
            {children}
        </div></MotionConfig>
    )
}
