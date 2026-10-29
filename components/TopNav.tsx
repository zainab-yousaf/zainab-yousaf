"use client";

import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { openChat } from "@/lib/chat-events";
import { contact } from "@/lib/content";

const LINKS = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

// Sticky top nav. Highlights the section being read; collapses into a menu on small screens.
export default function TopNav() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        const obs = new IntersectionObserver(
            (entries) => {
                for (const e of entries) if (e.isIntersecting) setActive(e.target.id === "overview" ? null : e.target.id);
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        for (const id of ["overview", ...LINKS.map((l) => l.id)]) {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        }

        return () => {
            window.removeEventListener("scroll", onScroll);
            obs.disconnect();
        };
    }, []);

    // Close the mobile menu with Escape or when the screen grows past the breakpoint
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
        const mq = window.matchMedia("(min-width: 768px)");
        const onMq = () => mq.matches && setMenuOpen(false);
        window.addEventListener("keydown", onKey);
        mq.addEventListener("change", onMq);
        return () => {
            window.removeEventListener("keydown", onKey);
            mq.removeEventListener("change", onMq);
        };
    }, [menuOpen]);

    const askAi = () => {
        setMenuOpen(false);
        openChat();
    };

    return (
        <header
            className={`sticky top-0 z-40 border-b transition-[background-color,border-color] duration-300 ${
                scrolled || menuOpen ? "bg-ivory/90 backdrop-blur-md border-line" : "bg-ivory border-transparent"
            }`}
        >
            <nav aria-label="Main" className="container-page h-16 flex items-center gap-6">
                <a href="#overview" className="font-display text-[1.375rem] leading-none text-espresso mr-auto">
                    Zainab Yousaf
                </a>

                <ul className="hidden md:flex items-center gap-7">
                    {LINKS.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                aria-current={active === id ? "true" : undefined}
                                className={`relative py-2 text-[15px] transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-colors ${
                                    active === id
                                        ? "text-espresso font-medium after:bg-amber"
                                        : "text-muted hover:text-espresso after:bg-transparent"
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-2 pl-6 border-l border-line">
                    <a href={contact.cv} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted hover:text-espresso px-2 py-2 transition-colors">
                        Résumé
                    </a>
                    <button
                        type="button"
                        onClick={askAi}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-espresso px-4 py-2 rounded-full border border-line-strong hover:border-espresso transition-colors"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-terracotta-ink" aria-hidden="true" />
                        Ask my AI
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden -mr-2 w-11 h-11 inline-flex items-center justify-center rounded-full text-espresso"
                >
                    {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                </button>
            </nav>

            {menuOpen && (
                <div id="mobile-menu" className="md:hidden container-page pb-6">
                    <ul className="border-t border-line">
                        {LINKS.map(({ id, label }) => (
                            <li key={id} className="border-b border-line">
                                <a
                                    href={`#${id}`}
                                    onClick={() => setMenuOpen(false)}
                                    aria-current={active === id ? "true" : undefined}
                                    className="block py-3.5 font-display text-2xl text-espresso"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-3 mt-5">
                        <a href={contact.cv} target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex-1">
                            Résumé
                        </a>
                        <button type="button" onClick={askAi} className="btn btn-secondary flex-1">
                            <Sparkles className="w-4 h-4 text-terracotta-ink" aria-hidden="true" />
                            Ask my AI
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
