"use client";

import { motion } from "framer-motion";

export default function SupportHero() {
    return (
        <section className="relative h-[65vh] min-h-[600px] w-full overflow-hidden bg-gray-900">
            {/* Background Image - Placeholder for Nara Scenery */}
            <div className="absolute inset-0">
                {/* Use a high-quality placeholder or specific asset if available. 
                     For now, using a gradient/solid color to represent the image area 
                     until an actual image is provided/decided. 
                     Ideally: <img src="/images/nara_scenery.jpg" ... /> 
                  */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent z-0"></div>
                <img
                    src="/images/hero_consulting.jpg" // Using an existing accessible image or placeholder
                    alt="Nara Scenery"
                    className="w-full h-full object-cover opacity-60"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?q=80&w=2070&auto=format&fit=crop";
                    }}
                />
            </div>

            {/* Hoshikawa Portrait */}
            <motion.img
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="/images/hoshikawa_hero_portrait.png"
                alt="星川だいち"
                className="absolute bottom-0 right-[-10%] md:right-0 w-[90%] md:w-[50%] lg:w-[45%] max-w-[700px] object-contain object-bottom z-10 drop-shadow-2xl pointer-events-none"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />

            {/* Overlay Card */}
            <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center md:items-center justify-center md:justify-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-sm p-6 md:p-12 max-w-lg shadow-2xl border-l-8 border-[#008c4b] relative mb-12 md:mb-0 mr-auto md:mr-0"
                >
                    <div className="flex flex-col gap-4">
                        <span className="inline-block bg-[#008c4b] text-white text-xs font-bold px-3 py-1 w-fit mb-2">
                            公式ウェブサイト
                        </span>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1A3A] tracking-wider leading-tight">
                            奈良県議会議員<br />星川 だいち
                        </h1>
                        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
                        <p className="text-gray-700 font-medium leading-relaxed mb-4 text-sm md:text-base">
                            ここに、県民の皆様のお声を直接集める<br />
                            <span className="font-bold text-[#0A1A3A] bg-yellow-100 px-1">奈良の議員で初めての試み</span>を初めています。<br />
                            ぜひ、公聴専用の公式LINEを活用してください。
                        </p>

                        <div className="mt-2 md:mt-4 flex flex-col gap-3">
                            <a
                                href="https://lin.ee/n4zXBZ7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#06C755] text-white text-center py-3 md:py-4 font-bold rounded-lg shadow-lg hover:bg-[#05b34c] hover:scale-[1.02] transition-all flex justify-center items-center gap-2 group animate-pulse hover:animate-none"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.92 2 10.75c0 2.8 1.5 5.28 3.86 6.88 1.48 1.01-.2 3.32-.4 3.79-.17.38.35.79.79.44 3.4-2.69 4.39-3.04 4.88-3.13.29.02.58.04.87.04 5.52 0 10-3.92 10-8.75S17.52 2 12 2z" /></svg>
                                <span className="text-sm md:text-base">公聴専用・公式LINEで声を届ける</span>
                            </a>
                            <p className="text-[10px] md:text-xs text-center text-gray-500">※お寄せいただいた声は、政策立案の参考にさせていただきます。</p>
                        </div>
                    </div>
                </motion.div>

                {/* Vertical Text Slogan on the Right (Optical Balance) - Visible mostly on wide screens */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block writing-vertical-rl text-white font-serif font-bold text-5xl tracking-[0.3em] drop-shadow-lg opacity-90 h-[80%] border-r-2 border-white/30 pr-8 z-0">
                    未来を拓く。<br />伝統を守り
                </div>
            </div>
        </section>
    );
}
