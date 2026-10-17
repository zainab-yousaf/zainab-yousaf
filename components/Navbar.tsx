"use client";

import { useEffect, useState } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    const glassy = scrolled || menuOpen;

    return (
        <nav
            className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
                glassy ? "bg-bg/70 backdrop-blur-md border-line" : "bg-transparent border-transparent"
            }`}
        >
            <div className="max-w-[1100px] mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
                <button onClick={() => scroll("about")} className="font-display font-bold text-fg tracking-tight">
                    Zainab Yousaf<span className="text-accent">.</span>
                </button>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-7">
                    {links.map((label) => (
                        <button
                            key={label}
                            onClick={() => scroll(label.toLowerCase())}
                            className="text-sm text-muted hover:text-fg transition-colors"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <a
                        href="/Zainab_Yousaf_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-fg px-4 py-2 rounded-full border border-line hover:border-accent/60 transition-colors"
                    >
                        Download CV
                    </a>
                    <button
                        onClick={() => scroll("contact")}
                        className="text-sm font-medium text-bg bg-accent px-4 py-2 rounded-full hover:shadow-[0_0_24px_-4px_var(--color-accent)] transition-shadow"
                    >
                        Get in touch
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`block w-5 h-0.5 bg-fg transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-fg transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-fg transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-5 flex flex-col gap-1 border-t border-line">
                    {links.map((label) => (
                        <button
                            key={label}
                            onClick={() => scroll(label.toLowerCase())}
                            className="text-sm text-muted hover:text-fg transition-colors text-left py-2.5"
                        >
                            {label}
                        </button>
                    ))}
                    <div className="flex gap-2 pt-3 border-t border-line">
                        <a
                            href="/Zainab_Yousaf_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center text-sm font-medium text-fg px-4 py-2.5 rounded-full border border-line"
                        >
                            Download CV
                        </a>
                        <button
                            onClick={() => scroll("contact")}
                            className="flex-1 text-sm font-medium text-bg bg-accent px-4 py-2.5 rounded-full"
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
