'use client'

import React from 'react'
import { Twitter, Instagram, Facebook } from 'lucide-react'

export default function SidebarRight() {
    return (
        <aside className="hidden lg:flex flex-col fixed top-0 right-0 h-screen w-[25%] bg-[#0A1A3A] text-white z-50 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/seigaiha.png')]"></div>

            <div className="relative z-10 flex flex-col h-full p-10 pt-20 justify-between">
                {/* Navigation */}
                <nav className="flex flex-col gap-8">
                    {['VISION', 'POLICY', 'ACHIEVEMENTS', 'PROFILE'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="group flex items-center text-lg font-bold tracking-[0.2em] transition-all hover:text-[#FF1A1A]">
                            <span className="w-0 h-[2px] bg-[#FF1A1A] mr-0 group-hover:w-8 group-hover:mr-4 transition-all duration-300"></span>
                            {item}
                        </a>
                    ))}
                </nav>

                {/* CTA & Footer Info */}
                <div className="pb-8">

                    {/* --- UPDATED SOCIAL AREA (Right Sidebar Bottom) --- */}
                    <div className="flex gap-6 justify-center mb-8">

                        {/* X (Formerly Twitter) */}
                        <a
                            href="https://twitter.com/daichi_star/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 transition-all hover:scale-110"
                            aria-label="X (Twitter)"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-[#FF1A1A] blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>

                            {/* X Logo SVG */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-white group-hover:text-[#FF1A1A] transition-colors relative z-10"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/daichi_star12/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 transition-all hover:scale-110"
                            aria-label="Instagram"
                        >
                            <div className="absolute inset-0 bg-[#FF1A1A] blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>
                            <Instagram size={24} className="text-white group-hover:text-[#FF1A1A] transition-colors relative z-10" />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/people/%E6%98%9F%E5%B7%9D%E3%81%A0%E3%81%84%E3%81%A1%E5%BF%9C%E6%8F%B4%E5%9B%A3/100089702911147/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 transition-all hover:scale-110"
                            aria-label="Facebook"
                        >
                            <div className="absolute inset-0 bg-[#FF1A1A] blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>
                            <Facebook size={24} className="text-white group-hover:text-[#FF1A1A] transition-colors relative z-10" />
                        </a>

                    </div>

                    {/* LINE Button */}
                    <a href="https://lin.ee/ph46c1T" target="_blank" className="block w-full">
                        <button className="w-full py-6 bg-[#FF1A1A] text-white font-bold text-xl tracking-widest shadow-[0_0_30px_rgba(255,26,26,0.6)] hover:scale-105 active:scale-95 transition-all mb-8 animate-pulse">
                            LINE 登録
                        </button>
                    </a>

                    <div className="text-sm text-gray-400 space-y-3 text-center opacity-80">
                        <p className="font-bold text-white tracking-widest">日本維新の会 奈良県総支部</p>
                        <p className="font-mono">〒631-0841 奈良市青野町1-4</p>
                        <p className="pt-6 text-xs opacity-50">© Daichi Hoshikawa</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
