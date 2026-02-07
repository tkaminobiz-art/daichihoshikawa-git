"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { supportData } from "@/data/supportData";
import SupportCard from "@/components/support/SupportCard";
import CategoryNav from "@/components/support/CategoryNav";

export default function SupportPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filters = [
        { id: 'parent', label: '子育て世代', icon: '👶' },
        { id: 'senior', label: '高齢者・介護', icon: '👴' },
        { id: 'business', label: '事業者・経営', icon: '💼' },
        { id: 'student', label: '学生・若者', icon: '🎓' },
        { id: 'emergency', label: '緊急・困りごと', icon: '🚨' },
    ];

    // Filter logic
    const filteredData = useMemo(() => {
        const query = searchQuery.toLowerCase();

        return supportData.map(category => {
            const matchingItems = category.items.filter(item => {
                const matchesSearch = !query ||
                    item.title.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query) ||
                    item.comment.toLowerCase().includes(query);

                const matchesFilter = !activeFilter || item.tags?.includes(activeFilter);

                return matchesSearch && matchesFilter;
            });

            if (matchingItems.length > 0) {
                return { ...category, items: matchingItems };
            }
            return null;
        }).filter(Boolean) as typeof supportData;
    }, [searchQuery, activeFilter]);

    return (
        <main className="min-h-screen bg-[#f8f9fa]">
            {/* HERO HERO HERO */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A1A3A] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#008c4b_0%,_#0A1A3A_70%)] opacity-30"></div>
                {/* Subtle Particles or Pattern could go here */}

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4 inline-block bg-[#008c4b] text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full tracking-widest"
                    >
                        奈良県制度ナビ
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wider leading-tight mb-8"
                    >
                        奈良県をもっと便利に。<br className="md:hidden" />
                        星川だいちの<br />
                        『県民サポート・ポータル』
                    </motion.h1>

                    {/* My Support Finder (Attribute Filter) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-8"
                    >
                        <p className="text-white/70 text-sm mb-3 font-medium tracking-wider">▼ あなたの属性を選んでください</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${activeFilter === filter.id
                                        ? 'bg-[#FF1A1A] text-white border-[#FF1A1A] shadow-lg scale-105'
                                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                                        }`}
                                >
                                    <span>{filter.icon}</span>
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Real-time Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative max-w-lg mx-auto"
                    >
                        <input
                            type="text"
                            placeholder="キーワードで探す（例：パスポート、子育て、補助金）"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 rounded-full text-gray-800 shadow-xl focus:ring-4 focus:ring-[#008c4b]/30 outline-none text-base transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </motion.div>

                </div>
            </section>

            {/* Manifesto Message Section */}
            <section className="bg-white py-16 px-4 border-b border-gray-100">
                <div className="max-w-4xl mx-auto bg-[#F9F9F6] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#008c4b]"></div>
                    <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                        <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.8L19.5 19h-15L12 5.8z" /></svg>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1A3A] tracking-wide">
                                行政を、もっとあなたの近くへ。
                            </h2>
                            <div className="h-[2px] w-20 bg-[#FF1A1A]"></div>
                            <div className="space-y-4 text-gray-700 leading-loose font-medium text-justify">
                                <p>
                                    元警察官として20年以上、私は奈良の街を走り続けてきました。
                                    そこで目にしたのは、複雑すぎる行政の壁に突き当たり、どこに助けを求めればいいか分からず、一人で悩みを抱える方々の姿です。
                                </p>
                                <p>
                                    行政には、あなたを助けるための『力（制度）』が本当はたくさんあります。でも、届かなければ意味がない。<br />
                                    奈良市の『殺処分ゼロ』や『子育て支援』のような素晴らしい実績も、県全体に広まらなければもったいない。
                                </p>
                                <p>
                                    だから、私が現場の視点で情報を整理し、この『暮らしの道具』を作りました。<br />
                                    政治の役割は、あなたの『困った』を『安心』に変えること。<br />
                                    このポータルが、あなたと大切な家族を守る『お守り』のような存在になれば幸いです。
                                </p>
                            </div>
                            <div className="mt-6 flex justify-end items-center gap-4">
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 tracking-widest mb-1">奈良県議会議員</p>
                                    <p className="text-2xl font-serif font-bold text-[#0A1A3A]">星川 だいち</p>
                                </div>
                                {/* Placeholder for signature image if available later */}
                                {/* <img src="/images/signature.png" alt="Signature" className="h-12 opacity-80" /> */}
                            </div>
                        </div>
                        {/* Right side image - Placeholder for "Listening" photo */}
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                            <img src="/images/profile.jpg" alt="星川大地" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation */}
            <CategoryNav categories={supportData} />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-24">
                {filteredData.length > 0 ? (
                    filteredData.map((category) => (
                        <section key={category.id} id={category.id} className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-10 border-b-4 border-[#008c4b] pb-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] flex items-center gap-3">
                                    <span className="text-[#008c4b]">{category.items.length > 0 && category.title.match(/【(.*?)】/)?.[1]}</span>
                                    <span className="text-lg md:text-2xl text-gray-600">{category.title.replace(/【.*?】/, "")}</span>
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base pb-1">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((item, idx) => (
                                    <SupportCard key={`${category.id}-${idx}`} item={item} index={idx} />
                                ))}
                            </div>
                        </section>
                    ))
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-xl">該当する制度が見つかりませんでした。</p>
                        <p className="mt-2 text-sm">別のキーワードをお試しいただくか、下記よりお問い合わせください。</p>
                    </div>
                )}
            </div>

            {/* Request Info Box */}
            <section className="bg-white border-t border-gray-200 py-20 text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h3 className="text-2xl font-bold text-[#0A1A3A] mb-4">お探しの情報は見つかりましたか？</h3>
                    <p className="text-gray-600 mb-8">
                        「こんな情報も載せてほしい」「この制度についてもっと知りたい」などのご意見をお聞かせください。<br />
                        皆様の声で、このポータルサイトは進化します。
                    </p>
                    <a
                        href="mailto:contact@daichi-star.com"
                        className="inline-flex items-center gap-2 bg-[#0A1A3A] text-white font-bold py-4 px-10 rounded-full hover:bg-[#008c4b] transition-colors shadow-lg"
                    >
                        星川だいちへリクエストを送る
                    </a>
                </div>
            </section>

        </main >
    );
}
