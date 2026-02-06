"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import type { SupportCategory } from "@/data/supportData";

export default function CategoryNav({ categories }: { categories: SupportCategory[] }) {
    return (
        <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex gap-4 md:justify-center min-w-max">
                {categories.map((cat) => (
                    <ScrollLink
                        key={cat.id}
                        to={cat.id}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors text-sm md:text-base font-medium text-gray-700 whitespace-nowrap group"
                        activeClass="!bg-[#008c4b] !text-white shadow-md"
                    >
                        <span className="text-xl group-[.active]:grayscale-0 grayscale transition-all text-gray-900">{cat.icon}</span>
                        <span>{cat.title.replace(/【.*?】/, "")}</span>
                    </ScrollLink>
                ))}
            </div>
        </div>
    );
}
