"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { supportData } from "@/data/supportData";
import SupportCard from "@/components/support/SupportCard";
import SupportHero from "@/components/support/SupportHero";
import SupportSidebar from "@/components/support/SupportSidebar";

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
        <main className="min-h-screen bg-white font-sans text-[#333]">
            {/* NEW HERO */}
            <SupportHero />

            {/* MAIN CONTENT LAYOUT (2 Columns) */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN (Main Content) */}
                    <div className="lg:col-span-9 space-y-12">

                        {/* 1. Manifesto (Compact / Clean) */}
                        <section className="bg-[#f8f9fa] p-8 rounded-lg border-l-4 border-[#0A1A3A]">
                            <h2 className="text-2xl font-serif font-bold text-[#0A1A3A] mb-4">
                                「現場の声」こそが、政治の原点です。
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                                <p>
                                    元警察官として20年以上、奈良の街を走り続けてきました。<br />
                                    そこで目にしたのは、行政の壁に突き当たり困っている方々の姿です。
                                </p>
                                <p>
                                    このポータルは、そんな「困った」を「安心」に変えるために作りました。<br />
                                    奈良市の成功事例を県全体へ広げ、あなたと大切な家族を守る『お守り』のような存在を目指します。
                                </p>
                            </div>
                        </section>

                        {/* 2. Tools (Search & Filter) */}
                        <div className="bg-white sticky top-0 z-30 pt-4 pb-4 -mt-4 border-b border-gray-100">
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="キーワード検索（例：パスポート、補助金）"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-[#008c4b] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
                                        className={`px-3 py-1.5 rounded text-xs font-bold transition-all flex items-center gap-1 border ${activeFilter === filter.id
                                                ? 'bg-[#008c4b] text-white border-[#008c4b]'
                                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span>{filter.icon}</span>
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. Category List */}
                        <div className="space-y-16">
                            {filteredData.length > 0 ? (
                                filteredData.map((category) => (
                                    <section key={category.id} id={category.id} className="scroll-mt-32">
                                        <div className="flex items-center gap-3 mb-6 border-b-2 border-[#008c4b] pb-2">
                                            <span className="text-2xl">{category.icon}</span>
                                            <h2 className="text-xl md:text-2xl font-bold text-[#0A1A3A]">
                                                {category.title}
                                            </h2>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {category.items.map((item, idx) => (
                                                <SupportCard key={`${category.id}-${idx}`} item={item} index={idx} />
                                            ))}
                                        </div>
                                    </section>
                                ))
                            ) : (
                                <div className="text-center py-20 bg-gray-50 rounded">
                                    <p className="text-gray-500">該当する情報が見つかりませんでした。</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Sidebar) */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <SupportSidebar />
                    </div>
                </div>
            </div>

        </main>
    );
}
