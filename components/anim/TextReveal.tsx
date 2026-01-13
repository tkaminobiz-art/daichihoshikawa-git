"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TextReveal = ({ children, className }: { children: string; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <h2 ref={ref} className={className}>
            <span className="sr-only">{children}</span>
            <span aria-hidden="true" className="block overflow-hidden">
                {children.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.03,
                            ease: [0.33, 1, 0.68, 1],
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </span>
        </h2>
    );
};
