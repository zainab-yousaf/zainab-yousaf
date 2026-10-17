"use client";

import { useEffect, useState } from "react";
import { openChat } from "@/lib/chat-events";

const LINKS = [
    { id: "dreamdesk", label: "DreamDesk" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

// Small top nav that slides in once the bento overview (#overview) has scrolled out of view,
// and highlights the section currently being read.
export default function StickyNav() {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        const overview = document.getElementById("overview");
        if (!overview) return;
        const showObs = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting), { rootMargin: "-64px 0px 0px 0px" });
        showObs.observe(overview);

        const sectionObs = new IntersectionObserver(
            (entries) => {
                for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        for (const { id } of LINKS) {
            const el = document.getElementById(id);
            if (el) sectionObs.observe(el);
        }
        return () => {
            showObs.disconnect();
            sectionObs.disconnect();
        };
    }, []);

    return (
        <nav
            aria-label="Sections"
            inert={!visible}
            className={`fixed top-0 inset-x-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md transition-[transform,opacity] duration-300 motion-reduce:transition-none ${
                visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
        >
            <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-2.5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <a href="#overview" className="font-display text-xl text-fg leading-none">
                    Zainab <em className="text-accent-ink">Yousaf</em>
                </a>
                <button
                    type="button"
                    onClick={openChat}
                    className="sm:order-last ml-auto text-xs font-semibold text-fg bg-accent px-3.5 py-2 rounded-full transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-[0_8px_20px_-10px_var(--color-accent)]"
                >
                    ✨ Ask my AI
                </button>
                <ul className="w-full sm:w-auto flex gap-3.5 sm:gap-5 overflow-x-auto [scrollbar-width:none] -mx-1 px-1">
                    {LINKS.map(({ id, label }) => (
                        <li key={id} className="shrink-0">
                            <a
                                href={`#${id}`}
                                aria-current={active === id ? "true" : undefined}
                                className={`text-[13px] sm:text-sm transition-colors ${
                                    active === id ? "text-accent-ink font-medium" : "text-muted hover:text-fg"
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
