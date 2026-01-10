'use client'

import PolicyCard from './PolicyCard'

const PROMISES = [
    {
        index: '01',
        title: '子どもと女性が安全・安心に暮らせる奈良',
        description: '見守りと支援の“穴”を埋める。防犯カメラ設置の助成拡充や、関係機関の情報共有システム提言により、悲しい事件を未然に防ぐ仕組みを作ります。'
    },
    {
        index: '02',
        title: '「お金が落ちる」奈良',
        description: '観光・食・エンタメを産業に。奈良は「来て終わり」ではなく、「泊まって、食べて、楽しむ」場所へ。民間活力を最大限に引き出す環境を整えます。'
    },
    {
        index: '03',
        title: '「命」と「日常」を、最前線で守り抜く奈良',
        description: '「災害」だけではありません。老朽化するインフラや緊急時の対応など、暮らしを脅かすあらゆるリスクを想定。「ドローン活用」や「消防学校の防災拠点化」など、物理とデジタルの両面から、あなたの日常を死守する体制を整えます。'
    }
]

export default function PromisesSection() {
    return (
        <section className="py-24 bg-slate-50 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        星川だいちが約束する<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">
                            「3つの奈良」
                        </span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl text-lg">
                        現場の声を形に。未来への責任を果たすための、揺るぎない約束。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROMISES.map((item) => (
                        <PolicyCard key={item.index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
