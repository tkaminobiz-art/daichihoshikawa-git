'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function MobileHeader() {
    // Force rebuild v0.1.1
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="lg:hidden fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo / Name */}
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-500 tracking-widest">奈良県議会議員</span>
                    <h1 className="text-xl font-serif font-bold text-gray-900">星川 大地</h1>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-6 px-6 flex flex-col gap-6">
                    <nav className="flex flex-col gap-4">
                        {['VISION', 'POLICY', 'RESULTS', 'ASSEMBLY', 'SUPPORT', 'ROADMAP', 'ACTIVITY', 'PROFILE'].map((item) => (
                            <a
                                key={item}
                                href={item === 'SUPPORT' ? '/support' : `#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-bold tracking-wider border-b border-gray-100 pb-2 active:text-red-600 ${item === 'SUPPORT' ? 'text-[#008c4b]' : 'text-gray-800'}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="https://lin.ee/ph46c1T"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-[#FF1A1A] text-white text-center font-bold rounded-sm shadow-md active:scale-95 transition-transform"
                    >
                        LINE 登録
                    </a>
                </div>
            )}
        </header>
    )
}
