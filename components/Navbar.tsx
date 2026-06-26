"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white" style={{ borderBottom: "0.5px solid #e0dfd8" }}>
            <div className="flex items-center justify-between px-6 py-4">
                <span className="font-semibold text-sm text-[#1a1a18]">Zainab Yousaf</span>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-6">
                    {["About", "Projects", "Skills", "Contact"].map((label) => (
                        <button
                            key={label}
                            onClick={() => scroll(label.toLowerCase())}
                            className="text-sm text-[#5a5a52] hover:text-[#1a1a18] transition-colors"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Desktop right buttons */}
                <div className="hidden md:flex items-center gap-2">
                    <a
                        href="https://raw.githubusercontent.com/zainab-yousaf/zainabyousaf/main/zainabyousaf.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#1a1a18] px-4 py-2 rounded-full hover:bg-[#f0efe8] transition-colors"
                        style={{ border: "0.5px solid #d3d1c7" }}
                    >
                        Download CV
                    </a>
                    <button
                        onClick={() => scroll("contact")}
                        className="text-sm font-medium text-white bg-[#1a1a18] px-4 py-2 rounded-full hover:bg-[#333330] transition-colors"
                    >
                        Get in touch
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-[#1a1a18] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-[#1a1a18] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-[#1a1a18] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white px-6 pb-5 flex flex-col gap-4" style={{ borderTop: "0.5px solid #e0dfd8" }}>
                    {["About", "Projects", "Skills", "Contact"].map((label) => (
                        <button
                            key={label}
                            onClick={() => scroll(label.toLowerCase())}
                            className="text-sm text-[#5a5a52] hover:text-[#1a1a18] transition-colors text-left py-1"
                        >
                            {label}
                        </button>
                    ))}
                    <div className="flex gap-2 pt-2" style={{ borderTop: "0.5px solid #e0dfd8" }}>
                        <a
                            href="https://raw.githubusercontent.com/zainab-yousaf/zainabyousaf/main/zainabyousaf.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center text-sm font-medium text-[#1a1a18] px-4 py-2 rounded-full hover:bg-[#f0efe8] transition-colors"
                            style={{ border: "0.5px solid #d3d1c7" }}
                        >
                            Download CV
                        </a>
                        <button
                            onClick={() => scroll("contact")}
                            className="flex-1 text-sm font-medium text-white bg-[#1a1a18] px-4 py-2 rounded-full hover:bg-[#333330] transition-colors"
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
