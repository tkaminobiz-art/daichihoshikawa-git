'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ACTIVITIES = [
    {
        title: '国際交流',
        description: 'ウズベキスタン大使館訪問、ドルトムント東アジア責任者と意見交換（スポーツ×地域活性）',
        image: '/images/activity_01.jpg'
    },
    {
        title: '地域資源・清酒',
        description: '油長酒造訪問（清酒発祥の地）、地域ブランドの確立へ',
        image: '/images/activity_02.png'
    },
    {
        title: '学び・講演',
        description: '国際ガールズデー記念講演（シングルマザーが働きやすい社会）',
        image: '/images/activity_03.jpg'
    },
    {
        title: '現地視察',
        description: '防災関連、施設視察（消防学校候補地等）',
        image: '/images/activity_04.jpg'
    }
]

export default function ActivitySection() {
    return (
        <section className="py-24 bg-white text-slate-900">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Activity Report
                    <span className="block text-lg font-normal text-slate-500 mt-2">議会外の活動</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ACTIVITIES.map((activity, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-80 overflow-hidden rounded-sm cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/60 transition-colors z-10" />
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute bottom-0 left-0 p-6 z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {activity.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
