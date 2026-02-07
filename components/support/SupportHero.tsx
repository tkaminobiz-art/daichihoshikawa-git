"use client";

import { motion } from "framer-motion";

export default function SupportHero() {
    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
            {/* Background Image - Placeholder for Nara Scenery */}
            <div className="absolute inset-0">
                {/* Use a high-quality placeholder or specific asset if available. 
                     For now, using a gradient/solid color to represent the image area 
                     until an actual image is provided/decided. 
                     Ideally: <img src="/images/nara_scenery.jpg" ... /> 
                  */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>
                <img
                    src="/images/hero_consulting.jpg" // Using an existing accessible image or placeholder
                    alt="Nara Scenery"
                    className="w-full h-full object-cover opacity-60"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?q=80&w=2070&auto=format&fit=crop";
                    }}
                />
            </div>

            {/* Overlay Card */}
            <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-sm p-8 md:p-12 max-w-lg shadow-2xl border-l-8 border-[#008c4b]"
                >
                    <div className="flex flex-col gap-4">
                        <span className="inline-block bg-[#008c4b] text-white text-xs font-bold px-3 py-1 w-fit mb-2">
                            公式ウェブサイト
                        </span>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1A3A] tracking-wider leading-tight">
                            奈良県議会議員<br />星川 だいち
                        </h1>
                        <div className="h-[1px] w-full bg-gray-200 my-2"></div>
                        <p className="text-gray-700 font-medium leading-relaxed">
                            皆様の声を県政に届け、安心で活力ある地域づくりに邁進いたします。
                        </p>

                        <div className="mt-6 flex flex-col gap-3">
                            <a href="#latest-policy" className="bg-[#0A1A3A] text-white text-center py-3 font-bold hover:bg-[#008c4b] transition-colors flex justify-between px-6 items-center group">
                                <span>政策を見る</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a href="#contact" className="border border-gray-300 text-gray-700 text-center py-3 font-medium hover:bg-gray-50 transition-colors">
                                後援会のご案内
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Vertical Text Slogan on the Right (Optical Balance) */}
                <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden lg:block writing-vertical-rl text-white font-serif font-bold text-5xl tracking-[0.3em] drop-shadow-lg opacity-90 h-[80%] border-r-2 border-white/30 pr-8">
                    未来を拓く。<br />伝統を守り
                </div>
            </div>
        </section>
    );
}
