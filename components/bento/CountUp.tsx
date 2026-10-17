"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// Counts up to `value` the first time it's visible. Shows the real value before JS runs.
export default function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduce = useReducedMotion();
    // Real value until JS runs, so the strip never shows zeros without animation.
    const [n, setN] = useState(value);
    const [armed, setArmed] = useState(false);

    useEffect(() => {
        if (reduce) return;
        setN(0);
        setArmed(true);
    }, [reduce]);

    useEffect(() => {
        if (!armed || !inView) return;
        const controls = animate(0, value, {
            duration: value > 10 ? 1.4 : 0.9,
            ease: "easeOut",
            onUpdate: (v) => setN(Math.round(v)),
        });
        return () => controls.stop();
    }, [armed, inView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {n}
            {suffix}
        </span>
    );
}
