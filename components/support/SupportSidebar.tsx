"use client";

import { MessageCircle, Phone, MapPin, ExternalLink, Twitter, Instagram, Facebook } from "lucide-react";

export default function SupportSidebar() {
    return (
        <aside className="space-y-8 sticky top-24">

            {/* SNS Official Accounts */}
            <div className="bg-[#0A1A3A] text-white p-2 text-center font-bold text-sm tracking-widest">
                SNS 公式アカウント
            </div>
            <div className="space-y-3">
                <a href="https://lin.ee/n4zXBZ7" target="_blank" rel="noopener noreferrer" className="block bg-[#06C755] text-white p-3 rounded shadow hover:opacity-90 transition-opacity flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded">
                        <MessageCircle size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold opacity-80">公式LINE</p>
                        <p className="text-sm font-bold">友だち追加はこちら</p>
                    </div>
                </a>

                <a href="https://twitter.com/daichi_star/" target="_blank" rel="noopener noreferrer" className="block bg-black text-white p-3 rounded shadow hover:opacity-90 transition-opacity flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold opacity-80">Twitter(X)</p>
                        <p className="text-sm font-bold">最新情報を発信中</p>
                    </div>
                </a>

                <a href="https://www.instagram.com/daichi_star12/" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-3 rounded shadow hover:opacity-90 transition-opacity flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded">
                        <Instagram size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold opacity-80">Instagram</p>
                        <p className="text-sm font-bold">活動の様子を紹介</p>
                    </div>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100089702911147" target="_blank" rel="noopener noreferrer" className="block bg-[#1877F2] text-white p-3 rounded shadow hover:opacity-90 transition-opacity flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded">
                        <Facebook size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold opacity-80">Facebook</p>
                        <p className="text-sm font-bold">活動アルバム</p>
                    </div>
                </a>
            </div>

            {/* Support Club / Koh-enkai */}
            <div className="bg-[#C5A065] p-6 rounded text-center shadow-lg hover:bg-[#b08d55] transition-colors cursor-pointer group">
                <div className="flex justify-center mb-2 text-white">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-1">星川だいち 後援会</h3>
                <p className="text-white/80 text-xs">会員募集中・入会案内はこちら</p>
            </div>

            {/* Office Info */}
            <div className="bg-[#f4f4f4] p-5 border-l-4 border-[#0A1A3A] shadow-sm">
                <h4 className="font-bold text-[#0A1A3A] flex items-center gap-2 mb-3">
                    <span className="w-1 h-4 bg-[#0A1A3A]"></span>
                    事務所のご案内
                </h4>
                <div className="text-sm text-gray-700 space-y-2">
                    <p className="font-bold">星川だいち 選挙事務所</p>
                    <p className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
                        <span>
                            〒630-8501<br />
                            奈良県奈良市登大路町30
                        </span>
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-300">
                        <p className="flex items-center gap-2 font-bold text-lg text-[#0A1A3A]">
                            <Phone size={18} />
                            0742-27-xxxx
                        </p>
                        <p className="text-xs text-gray-500 pl-6">(平日 9:00 - 17:00)</p>
                    </div>
                </div>
            </div>

            {/* Calendar Widget Placeholder */}
            <div className="bg-white p-4 border border-gray-200 shadow-sm">
                <h4 className="text-xs font-bold border-b pb-2 mb-2 flex justify-between">
                    <span>2026年 2月</span>
                    <span className="text-[#008c4b] cursor-pointer">前月 &gt;</span>
                </h4>
                <div className="grid grid-cols-7 text-center text-xs gap-y-2">
                    <span className="text-red-500">日</span>
                    <span>月</span>
                    <span>火</span>
                    <span>水</span>
                    <span>木</span>
                    <span>金</span>
                    <span className="text-blue-500">土</span>

                    {/* Dummy Calendar Data */}
                    <span className="text-gray-300">26</span>
                    <span className="text-gray-300">27</span>
                    <span className="text-gray-300">28</span>
                    <span className="text-gray-300">29</span>
                    <span className="text-gray-300">30</span>
                    <span className="text-gray-300">31</span>
                    <span className="text-blue-500">1</span>

                    <span className="text-red-500">2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span className="text-blue-500">8</span>

                    {/* ... truncated for simplicity ... */}
                </div>
            </div>

        </aside>
    );
}
