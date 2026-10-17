"use client";

import { useRef } from "react";

// Card whose border glows where the pointer is (styles: .spotlight in globals.css).
export default function SpotlightCard({
    children,
    className = "",
    lift = true,
}: {
    children: React.ReactNode;
    className?: string;
    lift?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    return (
        <div ref={ref} onPointerMove={onPointerMove} className={`spotlight rounded-2xl ${lift ? "lift" : ""} ${className}`}>
            {children}
        </div>
    );
}
