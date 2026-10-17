"use client";

import { motion, useReducedMotion } from "motion/react";

// Fades and slides content up slightly the first time it scrolls into view.
// With "reduce motion" turned on, content is simply shown (no fade, no slide).
export default function FadeIn({
    children,
    delay = 0,
    className,
    fromRight = false,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    fromRight?: boolean;
}) {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduce ? false : fromRight ? { opacity: 0, x: 16 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
