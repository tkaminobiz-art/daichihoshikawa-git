'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Mail, Twitter, Instagram, Facebook } from 'lucide-react'

export function ProfileSection() {
    return (
        <section id="profile" className="bg-gray-50 px-10 py-24 -mx-10">
            <div className="flex items-center gap-4 mb-12">
                <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">PROFILE</h3>
            </div>

            <div className="bg-white p-12 shadow-sm border-t-4 border-[#0A1A3A]">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* 1. SINGLE LARGE PHOTO (No Karate, No Police) */}
                    <div className="w-full md:w-[40%] aspect-[3/4] bg-gray-100 relative overflow-hidden shrink-0">
                        <img
                            src="/images/left-column.png"
                            alt="Daichi Hoshikawa"
                            className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* 2. TEXT INFO */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <h4 className="text-4xl font-serif font-bold text-[#0A1A3A] mb-2">星川 だいち</h4>
                            <p className="text-gray-500 font-sans">1993年12月16日生まれ（32歳）</p>
                        </div>

                        <p className="text-[#FF1A1A] font-bold text-lg border-b border-gray-100 pb-4">
                            奈良県議会議員（奈良市・山辺郡 選出）
                        </p>

                        <dl className="grid grid-cols-[100px_1fr] gap-y-4 text-sm leading-relaxed text-gray-700">
                            <dt className="font-bold text-[#0A1A3A]">経歴</dt>
                            <dd>関西大学 商学部 卒 <br /> 大阪府警 → 千葉県警 → 大阪府警</dd>

                            <dt className="font-bold text-[#0A1A3A]">所属</dt>
                            <dd>総務警察委員会 副委員長 / 総合防災対策特別委員会</dd>

                            <dt className="font-bold text-[#0A1A3A]">武道</dt>
                            <dd>空手 公認3段（世界大会優勝）/ 警察庁長官賞 受賞</dd>
                        </dl>

                        {/* Quote */}
                        <div className="mt-8 p-6 bg-gray-50 border-l-4 border-[#FF1A1A]">
                            <p className="text-[#0A1A3A] font-serif font-bold text-lg">
                                「元警察官として、現場で守ってきた。<br />次は制度で守る。」
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="pt-24 pb-12 border-t border-slate-200 text-slate-600 lg:hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                            奈良県議会議員<br />
                            <span className="text-4xl mt-2 inline-block">星川 大地</span>
                        </h2>
                        <p className="text-slate-500 mb-8 max-w-md">
                            県民の皆様と共に、新しい奈良の未来を。お困りごとやご意見、お気軽にお寄せください。
                        </p>

                        <div className="flex gap-6 justify-start mt-6">
                            {/* X (Twitter) */}
                            {/* Note: Client provided Instagram URL for X. Please update if correct URL is provided later. */}
                            <a
                                href="https://www.instagram.com/daichi_star12/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-[#FF1A1A] hover:scale-110 transition-all duration-300"
                                aria-label="X (Twitter)"
                            >
                                <Twitter size={24} />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/daichi_star12/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-[#FF1A1A] hover:scale-110 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/people/%E6%98%9F%E5%B7%9D%E3%81%A0%E3%81%84%E3%81%A1%E5%BF%9C%E6%8F%B4%E5%9B%A3/100089702911147/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-[#FF1A1A] hover:scale-110 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-xs text-gray-400 opacity-60 space-y-2 text-center mt-12 pt-12 border-t border-slate-100">
                    <p className="font-bold">日本維新の会 奈良県総支部</p>
                    <p>〒631-0841 奈良市青野町1-4</p>
                    <p className="pt-4">© Daichi Hoshikawa</p>
                </div>
            </div>
        </footer>
    )
}
