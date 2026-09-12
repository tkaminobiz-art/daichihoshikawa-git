"use client";

import { motion } from "framer-motion";

export default function SupportHero() {
    return (
        <section className="relative flex w-full flex-col overflow-hidden bg-gray-900 md:block md:h-[65vh] md:min-h-[600px]">
            {/* Background Image - Placeholder for Nara Scenery */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/60 z-0"></div>
            </div>

            {/* Hoshikawa Portrait */}
            {/* Mobile: Relative in flow. Desktop: Absolute positioned. */}
            <motion.img
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="/images/hoshikawa_hero_portrait.png"
                alt="星川だいち"
                className="
                    z-10 drop-shadow-2xl pointer-events-none
                    /* Mobile Styles */
                    relative w-full h-[45vh] object-contain object-bottom mt-8 mr-[-10%]
                    /* Desktop Styles */
                    md:absolute md:bottom-0 md:right-0 md:w-[50%] md:h-auto md:max-w-[700px] md:mt-0 md:mr-0
                "
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />

            {/* Overlay Card Container */}
            <div className="
                z-20 container mx-auto px-4 
                /* Mobile Styles */
                relative pb-12 mt-[-20px]
                /* Desktop Styles */
                md:absolute md:inset-0 md:flex md:items-center md:pb-0 md:mt-0
                justify-center md:justify-start
            ">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="
                        bg-white/95 backdrop-blur-sm shadow-2xl border-l-8 border-[#008c4b] relative 
                        /* Mobile */
                        w-full p-6
                        /* Desktop */
                        md:p-12 md:max-w-lg
                    "
                >
                    <div className="flex flex-col gap-4">
                        <span className="inline-block bg-[#008c4b] text-white text-xs font-bold px-3 py-1 w-fit mb-2">
                            制度ナビ
                        </span>
                        <h1 className="jp-heading text-3xl md:text-4xl font-serif font-bold text-[#0A1A3A] tracking-wide leading-tight">
                            奈良の制度・<br className="md:hidden" />相談窓口
                        </h1>
                        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
                        <p className="jp-copy text-gray-700 font-medium leading-relaxed mb-4 text-sm md:text-base">
                            防犯、子育て、医療、防災、仕事、住まいなど、奈良県の公的な制度と相談窓口を目的別にまとめています。
                            対象や申請方法は、リンク先の公式情報をご確認ください。
                        </p>

                        <div className="mt-2 md:mt-4 flex flex-col gap-3">
                            <a
                                href="https://lin.ee/n4zXBZ7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#06C755] text-white text-center py-3 md:py-4 font-bold rounded-lg shadow-lg hover:bg-[#05b34c] hover:scale-[1.02] transition-all flex justify-center items-center gap-2 group animate-pulse hover:animate-none"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.92 2 10.75c0 2.8 1.5 5.28 3.86 6.88 1.48 1.01-.2 3.32-.4 3.79-.17.38.35.79.79.44 3.4-2.69 4.39-3.04 4.88-3.13.29.02.58.04.87.04 5.52 0 10-3.92 10-8.75S17.52 2 12 2z" /></svg>
                                <span className="text-sm md:text-base">公式LINEで意見を送る</span>
                            </a>
                            <p className="text-[10px] md:text-xs text-center text-gray-500">お寄せいただいたご意見は、政策を検討する際の参考にします。</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
