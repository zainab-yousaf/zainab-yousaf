"use client";

import { useEffect, useState } from "react";
import { openChat } from "@/lib/chat-events";

const LINKS = [
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

// Small top nav, always visible. Transparent over the first screen, glassy once scrolled,
// and highlights the section being read.
export default function TopNav() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        const obs = new IntersectionObserver(
            (entries) => {
                for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        for (const { id } of LINKS) {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        }
        const overview = document.getElementById("overview");
        if (overview) obs.observe(overview);

        return () => {
            window.removeEventListener("scroll", onScroll);
            obs.disconnect();
        };
    }, []);

    return (
        <nav
            aria-label="Main"
            className={`sticky top-0 z-40 h-16 border-b transition-[background-color,border-color] duration-300 ${
                scrolled ? "bg-bg/85 backdrop-blur-md border-line" : "bg-bg border-transparent"
            }`}
        >
            <div className="mx-auto max-w-[1400px] h-full px-4 sm:px-6 lg:px-8 flex items-center gap-4 sm:gap-8">
                <a href="#overview" className="hidden sm:block font-display text-2xl leading-none text-fg mr-auto">
                    Zainab <em className="text-accent-ink">Yousaf</em>
                </a>
                <ul className="flex items-center gap-4 sm:gap-7">
                    {LINKS.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                aria-current={active === id ? "true" : undefined}
                                className={`text-base transition-colors ${
                                    active === id ? "text-accent-ink font-medium" : "text-muted hover:text-fg"
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    onClick={openChat}
                    aria-label="Ask my AI"
                    className="ml-auto sm:ml-0 shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-fg bg-accent px-3 sm:px-4 py-2 rounded-full transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-[0_8px_20px_-10px_var(--color-accent)]"
                >
                    <span aria-hidden="true">✨</span>
                    <span className="hidden sm:inline">Ask my AI</span>
                </button>
            </div>
        </nav>
    );
}
