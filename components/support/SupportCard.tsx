"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";
import type { SupportItem } from "@/data/supportData";

export default function SupportCard({ item, index }: { item: SupportItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group relative"
        >
            {/* Colored Accent Line on Top */}
            <div className="h-1 w-full bg-[#008c4b] group-hover:h-1.5 transition-all"></div>

            {/* Header */}
            <div className="p-5 pb-2">
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-2 group-hover:text-[#008c4b] transition-colors"
                >
                    <h3 className="text-lg font-bold text-[#0A1A3A] leading-snug group-hover:underline decoration-2 underline-offset-4 decoration-[#008c4b]/30">
                        {item.title}
                    </h3>
                    <ExternalLink size={16} className="text-gray-400 shrink-0 mt-1" />
                </a>
            </div>

            {/* Body: Specifics */}
            <div className="px-5 py-2 flex-1">
                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-600 text-sm leading-relaxed">
                    {item.description.split("。").filter(Boolean).map((text, i) => (
                        <li key={i}>{text}。</li>
                    ))}
                </ul>
            </div>

            {/* Footer: Star's Perspective & Stories */}
            <div className="bg-[#f9f9f9] p-4 mt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                    <div className="bg-[#0A1A3A] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <MessageCircle size={10} />
                        Star's Voice
                    </div>
                </div>
                <p className="text-xs text-[#0A1A3A] font-medium leading-relaxed mb-3">
                    {item.comment}
                </p>

                {/* Field Story (Compact for Sidebar layout) */}
                {item.story && (
                    <div className="mt-3 pt-3 border-t border-dashed border-gray-300">
                        <div className="bg-white p-2 rounded border border-gray-200 shadow-sm">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2 items-start">
                                    <span className="text-[9px] font-bold bg-gray-500 text-white px-1 py-px rounded shrink-0 leading-none mt-0.5">現場</span>
                                    <p className="text-[10px] text-gray-500 leading-tight line-clamp-2">
                                        {item.story.before}
                                    </p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <span className="text-[9px] font-bold bg-[#FF1A1A] text-white px-1 py-px rounded shrink-0 leading-none mt-0.5">未来</span>
                                    <p className="text-[10px] text-[#0A1A3A] font-bold leading-tight line-clamp-3">
                                        {item.story.after}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Overlay */}
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={item.title}></a>
        </motion.div>
    );
}
