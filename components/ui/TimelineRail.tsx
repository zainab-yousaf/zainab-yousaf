"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

// Timeline line that "draws" itself (grows downward) as the timeline scrolls through the viewport.
// Place inside a relatively positioned list container.
export default function TimelineRail() {
    const ref = useRef<HTMLSpanElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
    const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <>
            <span ref={ref} className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
            <motion.span
                className="absolute left-[7px] top-2 bottom-2 w-px bg-accent origin-top shadow-[0_0_8px_var(--color-accent)]"
                style={{ scaleY: reduce ? 1 : scaleY }}
                aria-hidden="true"
            />
        </>
    );
}
