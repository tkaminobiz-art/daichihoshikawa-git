'use client'

import React from 'react'

export default function SidebarLeft() {
    return (
        <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-[25%] bg-[#F9F9F6] border-r border-gray-200 z-50">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

            <div className="relative z-10 flex flex-col h-full justify-between p-8 pt-12">
                {/* Vertical Name */}
                <div>
                    <h1 className="text-4xl font-serif text-gray-900 tracking-[0.2em] leading-relaxed" style={{ writingMode: 'vertical-rl' }}>
                        奈良県議会議員<br /><span className="mt-4 text-5xl">星川 大地</span>
                    </h1>
                </div>
                {/* Portrait Image (Fixed Bottom) */}
                <div className="relative w-full h-[55%] mt-auto bg-transparent overflow-hidden flex items-end justify-center">
                    {/* Changed object-fit to 'contain' to show the full image */}
                    <img
                        src="/images/left-column.png"
                        alt="Portrait"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain object-bottom drop-shadow-2xl"
                    />
                </div>
            </div>
        </aside>
    )
}
