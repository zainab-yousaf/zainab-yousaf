"use client";

import { motion } from "motion/react";

// Fades content in and up slightly the first time it scrolls into view.
// "Reduce motion" is handled in CSS (.fade-in in globals.css): the server can't know the visitor's
// setting, so the content is shown by a media query rather than by JS after hydration.
export default function FadeIn({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            className={`fade-in ${className}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
