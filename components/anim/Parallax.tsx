"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export const Parallax = ({ children, offset = 50, className }: { children: React.ReactNode; offset?: number; className?: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div ref={ref} className={`${className} relative overflow-hidden`}>
            <motion.div style={{ y: smoothY }} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
};
