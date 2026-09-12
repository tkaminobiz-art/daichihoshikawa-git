"use client";

import Link from "next/link";
import { MessageCircle, Instagram, Facebook, Home, UserRound } from "lucide-react";

export default function SupportSidebar() {
    return (
        <aside className="space-y-8 sticky top-24">

            {/* Back to Official Site */}
            <Link href="/" className="block bg-white border-2 border-[#0A1A3A] text-[#0A1A3A] p-4 rounded text-center font-bold hover:bg-[#0A1A3A] hover:text-white transition-colors flex items-center justify-center gap-2 group">
                <Home size={20} className="group-hover:scale-110 transition-transform" />
                公式サイトへ戻る
            </Link>

            <Link href="/profile" className="flex items-center justify-center gap-2 rounded border border-gray-200 bg-white p-4 text-center font-bold text-[#0A1A3A] transition-colors hover:border-[#008c4b] hover:text-[#008c4b]">
                <UserRound size={20} />
                プロフィールを見る
            </Link>

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
        </aside>
    );
}
