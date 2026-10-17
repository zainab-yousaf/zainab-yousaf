"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

const STATS = [
    { value: 50, suffix: "+", label: "companies served" },
    { value: 4, suffix: "", label: "channels: voice, WhatsApp, email, web chat" },
    { value: 2, suffix: "", label: "native apps shipped" },
    { value: 2, suffix: "+", label: "years building production software" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
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

export default function StatsStrip() {
    return (
        <section aria-label="Key numbers" className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-line bg-surface overflow-hidden">
                {STATS.map(({ value, suffix, label }, i) => (
                    <div
                        key={label}
                        className={`p-5 md:p-6 border-line ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${
                            i === 1 ? "md:border-r" : ""
                        }`}
                    >
                        <div className="font-display text-3xl md:text-4xl font-bold text-fg">
                            <CountUp value={value} suffix={suffix} />
                        </div>
                        <div className="font-mono text-[11px] text-muted mt-1.5 leading-snug">{label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
