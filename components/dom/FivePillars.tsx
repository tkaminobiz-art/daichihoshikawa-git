'use client'

import { CheckCircle2 } from 'lucide-react'

const PILLARS = [
    {
        title: '子ども・女性が安全・安心に暮らせる奈良へ',
        subtitle: '守りの穴を、仕組みで塞ぐ。',
        problem: '防犯・見守りのカメラ設置が不足／子育て世代の離職、産後の職場復帰の壁／児童相談の現場での情報分断',
        solutions: [
            '見守りカメラ・防犯灯の設置助成を大幅拡充（上限50万円へ増額／通学路以外も対象化へ）',
            '児相・警察・行政・関係機関での情報共有（画像共有含む）システム提言',
            'ベビーシッター助成（県の補助制度）の前進',
            '不妊治療支援の拡充（制度導入・対象拡大）'
        ]
    },
    {
        title: '交通事故・渋滞ゼロをめざす／移動の足を守る',
        subtitle: '移動のストレスを減らし、暮らしを快適に。',
        problem: '踏切・渋滞など、生活の危険と時間ロス／過疎地域で高齢者等の移動手段が不足',
        solutions: [
            '公共ライドシェアの積極導入を提言（過疎地域の移動手段確保）',
            '踏切課題：近鉄・県・市などの三者協議を進行（第3回まで実施）',
            '道路環境の改善（“ピカピカ大作戦”等）'
        ]
    },
    {
        title: '「お金が落ちる奈良」——観光・食・エンタメを産業に',
        subtitle: '奈良は「来て終わり」じゃなく、「泊まって、食べて、楽しむ」へ。',
        problem: '行政主導の観光施策の限界／宿泊・夜の滞在不足',
        solutions: [
            '企業の知見を活かした新しい観光イベント（奈良公園周辺）',
            '平城宮跡南側に「食のハブ拠点」（飲食・宿泊誘致）',
            '日本酒・清酒発祥の地としてのブランド戦略（酒米「奈良露」の海外展開）',
            'ふるさと納税：返礼品を“コト消費”へ（南部12村の体験型パッケージ等）'
        ]
    },
    {
        title: '介護・保育・教育・治安——“現場の人材不足”を解決する',
        subtitle: '現場で働く人を、全力で支える。',
        problem: '保育・介護の処遇・報酬制度の課題／教職員・警察官の採用難',
        solutions: [
            '介護・保育の処遇改善（報酬制度の見直し）',
            '教職員／警察官採用のターゲット広報（民間活力・SNS活用、ナポリス等）',
            '県の情報発信力強化（SNS統合・戦略策定）'
        ]
    },
    {
        title: '防災——奈良は「後回し」を前提に、守れる体制へ',
        subtitle: '備えは“買える”ように、“見に行ける”ように。',
        problem: '災害対応が後手になりやすい／ドローン導入の遅れ',
        solutions: [
            '災害時のドローン活用：契約・運用・訓練の実効性強化',
            '消防学校（五條市移転予定）：防災拠点として県民が親しめる施設に'
        ]
    }
]

export default function FivePillars() {
    return (
        <section className="py-32 bg-transparent text-slate-900 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        現場の声から生まれた、<br />
                        <span className="text-red-600">5つの重点政策。</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {PILLARS.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-200 pt-12"
                        >
                            <div className="lg:col-span-4 relative">
                                <div className="absolute -top-10 -left-10 text-[180px] font-black text-[#E5E5E5] font-serif leading-none z-0 pointer-events-none select-none">
                                    0{idx + 1}
                                </div>
                                <div className="relative z-10 pt-24 pl-8">
                                    <h3 className="text-3xl font-serif font-bold mb-6 leading-relaxed tracking-wide text-slate-900">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xl font-bold text-red-600 mb-6 font-sans tracking-wider border-l-4 border-red-600 pl-4">
                                        {pillar.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-8">
                                <div className="bg-slate-50 p-8 rounded-sm mb-8">
                                    <h4 className="font-bold text-slate-500 mb-2 text-sm uppercase tracking-wider">課題認識</h4>
                                    <p className="text-slate-700 font-medium">
                                        {pillar.problem}
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-red-600">
                                    <h4 className="font-bold text-slate-900 mb-6 text-lg">具体的な解決策・提言</h4>
                                    <ul className="space-y-4">
                                        {pillar.solutions.map((sol, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                                <span className="text-slate-700 leading-relaxed">{sol}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
