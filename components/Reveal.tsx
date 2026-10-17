"use client";

import { useEffect, useRef, useState } from "react";

// Fades its children in when they scroll into view. Content that is already on screen at load
// (or rendered without JS) is never hidden, and nothing animates with prefers-reduced-motion.
// A scroll check (rather than IntersectionObserver) also catches elements a fast jump skips past.
export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const inView = () => el.getBoundingClientRect().top < window.innerHeight * 0.9;
        if (inView()) return;

        setState("hidden");
        let frame = 0;
        const check = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                if (inView()) {
                    setState("shown");
                    stop();
                }
            });
        };
        const stop = () => {
            window.removeEventListener("scroll", check);
            window.removeEventListener("resize", check);
        };
        window.addEventListener("scroll", check, { passive: true });
        window.addEventListener("resize", check);
        return () => {
            cancelAnimationFrame(frame);
            stop();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={state === "idle" ? undefined : `reveal ${state === "shown" ? "reveal-shown" : ""}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
