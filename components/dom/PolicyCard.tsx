'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface PolicyCardProps {
    index: string
    title: string
    description: string
    icon?: string
}

export default function PolicyCard({ index, title, description, icon }: PolicyCardProps) {
    return (
        <motion.div
            className="group relative w-full p-8 border border-slate-200 bg-white hover:bg-slate-900 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl"
            whileHover={{ scale: 1.02, y: -8 }}
        >
            {/* Glitch Overlay Elements */}
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 pointer-events-none mix-blend-color-burn" />

            {/* Index number with glitch potential */}
            <div className="text-sm font-bold text-slate-400 group-hover:text-red-500 mb-4 font-mono tracking-widest">
                POLICY {index}
            </div>

            <h3 className="relative text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors z-10">
                {title}
                {/* RGB Split Pseudo-element simulation */}
                <span className="absolute top-0 left-0 -ml-0.5 opacity-0 group-hover:opacity-100 text-red-500 mix-blend-screen animate-pulse">
                    {title}
                </span>
                <span className="absolute top-0 left-0 -mr-0.5 opacity-0 group-hover:opacity-100 text-blue-500 mix-blend-screen animate-pulse delay-75">
                    {title}
                </span>
            </h3>

            <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed relative z-10">
                {description}
            </p>

            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-out" />

            {/* Noise/Glitch decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 border-t-2 border-r-2 border-red-500/50" />
            </div>
        </motion.div>
    )
}
