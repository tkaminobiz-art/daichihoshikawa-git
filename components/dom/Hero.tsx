'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })
const DistortionImage = dynamic(() => import('@/components/canvas/DistortionImage'), { ssr: false })

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <Scene>
                <DistortionImage />
            </Scene>

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-start p-10 md:p-16 text-white bg-black/30 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <h2 className="text-xl md:text-3xl font-bold tracking-wider mb-4 text-red-600 uppercase">
                        Logic & Passion
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 font-sans drop-shadow-lg">
                        事件が起きてから<br />動くのではなく、<br />
                        <span className="text-[#FF1A1A]">
                            事件が起きない奈良へ。
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                        元警察官として、現場の最前線で「目の前の市民を守る」仕事に誇りを持ってきました。
                        しかし同時に、ルールや制度が変わらなければ救えない現実にも、何度も直面しました。
                        だから私は、働き方ではなく、生き方を変えました。
                        <strong className="block mt-4 text-2xl border-l-4 border-red-600 pl-4">
                            県民の「もっとこうだったら」を、仕組みとして実現する。
                        </strong>
                    </p>

                    <div className="flex gap-4 pointer-events-auto">
                        <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm transition-all transform hover:scale-105 shadow-xl">
                            星川だいちの政策を見る
                        </button>
                        <button className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-sm transition-all transform hover:scale-105 shadow-xl">
                            LINEで最新情報を受け取る
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
