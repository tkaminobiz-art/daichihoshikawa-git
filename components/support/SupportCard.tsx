"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";
import type { SupportItem } from "@/data/supportData";

export default function SupportCard({ item, index }: { item: SupportItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group"
        >
            {/* Header: Button Style Link */}
            <div className="bg-[#008c4b] p-4 flex justify-between items-center group-hover:bg-[#00703c] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold tracking-wide flex items-center gap-2 w-full z-10"
                >
                    <span className="flex-1 line-clamp-1">{item.title}</span>
                    <ExternalLink size={18} />
                </a>
            </div>

            {/* Body: Specifics */}
            <div className="p-5 flex-1 bg-white">
                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 text-sm leading-relaxed">
                    {item.description.split("。").filter(Boolean).map((text, i) => (
                        <li key={i}>{text}。</li>
                    ))}
                </ul>
            </div>

            {/* Footer: Star's Perspective */}
            <div className="bg-[#f8f9fa] p-4 border-t border-gray-100 relative">
                <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#0A1A3A] text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <MessageCircle size={10} />
                    Star's Voice
                </div>
                <p className="text-sm text-[#0A1A3A] font-medium leading-relaxed mt-2">
                    {item.comment}
                </p>

                {/* Field Story (Police Notebook Style) */}
                {item.story && (
                    <div className="mt-4 pt-4 border-t border-dashed border-gray-300">
                        <div className="bg-[#fffdf5] p-3 rounded border border-gray-200 shadow-sm relative overflow-hidden">
                            {/* Texture overlay for "paper" feel */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

                            <div className="relative z-10 flex flex-col gap-3">
                                {/* Before */}
                                <div className="flex gap-2 items-start">
                                    <span className="text-[10px] font-bold bg-gray-600 text-white px-1.5 py-0.5 rounded shrink-0 mt-0.5">現場</span>
                                    <p className="text-xs text-gray-600 leading-tight">
                                        {item.story.before}
                                    </p>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center -my-1">
                                    <span className="text-xs text-[#008c4b]">▼</span>
                                </div>
                                {/* After */}
                                <div className="flex gap-2 items-start">
                                    <span className="text-[10px] font-bold bg-[#FF1A1A] text-white px-1.5 py-0.5 rounded shrink-0 mt-0.5">未来</span>
                                    <p className="text-xs text-[#0A1A3A] font-bold leading-tight">
                                        {item.story.after}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Overlay (Hidden by default, easier click on mobile) */}
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={item.title}></a>
        </motion.div>
    );
}
