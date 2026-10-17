"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Thin accent bar at the very top that fills as the page is scrolled.
export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
    return (
        <motion.div
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 h-0.5 bg-accent origin-left z-[70]"
            style={{ scaleX }}
        />
    );
}
