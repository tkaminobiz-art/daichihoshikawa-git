"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
                    <h3 className="jp-heading text-lg font-bold text-[#0A1A3A] leading-snug group-hover:underline decoration-2 underline-offset-4 decoration-[#008c4b]/30">
                        {item.title}
                    </h3>
                    <ExternalLink size={16} className="text-gray-400 shrink-0 mt-1" />
                </a>
            </div>

            {/* Body: Specifics */}
            <div className="px-5 py-2 flex-1">
                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-600 text-sm leading-relaxed">
                    {item.description.split("。").filter(Boolean).map((text, i) => (
                        <li key={i} className="jp-copy">{text}。</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 border-t border-gray-100 bg-[#f9f9f9] p-4">
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0A1A3A] underline decoration-[#008c4b]/40 decoration-2 underline-offset-4 hover:text-[#008c4b]"
                >
                    公式情報を見る
                    <ExternalLink size={14} aria-hidden="true" />
                </a>
            </div>
        </motion.div>
    );
}
