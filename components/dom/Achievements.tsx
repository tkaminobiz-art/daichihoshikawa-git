'use client'

import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
    'SNS活用の推進（県政の情報発信、SNS統合）',
    '若者への県政理解促進',
    '保育の担い手確保（人材バンク、産後復帰支援）',
    'ネット上の誹謗中傷・いじめ対策の仕組み化',
    '警察職員の働き方改革（治安維持のためのワークライフバランス）',
    'ツキノワグマ対策（予算不足指摘、環境整備）',
    '公共ライドシェア導入提言',
    '観光イベント創出（奈良公園周辺）',
    '日本酒ブランディング・酒米「奈良露」支援',
    '平城宮跡南側 “食のハブ拠点” 整備要望',
    'ふるさと納税改革（コト消費・南部12村体験パッケージ）',
    '消防学校移転（防災拠点化・県民開放）',
    '教職員・警察官の採用広報強化（Vtuber、民間活用）',
    'ゾンビたばこ対策、アスリート就職マッチングなど'
]

export default function Achievements() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 opacity-50" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold mb-4">
                            議会での<br />主な提言・質疑
                        </h2>
                        <p className="text-slate-400">
                            Results & Actions
                        </p>
                    </div>
                    <div className="md:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {ACHIEVEMENTS.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-4 py-3 border-b border-slate-700"
                                >
                                    <span className="text-red-500 font-mono text-sm">Q.{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="font-medium text-slate-200">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
