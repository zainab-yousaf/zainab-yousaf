import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/content";

// The four strongest projects. Each line is a fact from lib/content.ts.
const SELECTED_WORK = [
    { name: "DreamDesk AI", line: "Hotel AI agents across voice, WhatsApp, email and web chat", href: "#dreamdesk" },
    { name: "AutoMato AI", line: "GenAI Amazon listings for 50+ companies", href: "#project-automato-ai" },
    { name: "PDF Converter", line: "iOS and macOS app, rated 5.0 on the App Store", href: "#project-pdf-converter-ios-macos" },
    { name: "Smart Contract Security", line: "Fuzzing research with DFKI Germany", href: "#project-smart-contract-security" },
];

// First screen: who I am and what I build on the left, one visual of my strongest project on the right.
// Desktop fills the viewport below the 64px nav; smaller screens stack and scroll.
export default function Hero() {
    return (
        <section id="overview" aria-labelledby="hero-name" className="container-page">
            <div className="grid items-center gap-14 lg:gap-14 xl:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] pt-14 pb-20 sm:pt-20 sm:pb-24 lg:py-16 lg:min-h-[calc(100svh-64px)]">
                {/* Text */}
                <div className="max-w-[600px]">
                    <p className="eyebrow rise-in flex items-center gap-3">
                        <span className="h-px w-8 bg-gold" aria-hidden="true" />
                        AI Engineer · Full-Stack Developer
                    </p>

                    <h1
                        id="hero-name"
                        className="rise-in font-display font-normal text-espresso tracking-[-0.025em] leading-[0.95] mt-6 text-[clamp(3.25rem,1.8rem+4.6vw,5.75rem)]"
                        style={{ "--delay": "60ms" } as React.CSSProperties}
                    >
                        Zainab <em className="italic">Yousaf</em>
                    </h1>

                    <p
                        className="rise-in mt-7 text-lg sm:text-xl leading-relaxed text-muted max-w-[34rem]"
                        style={{ "--delay": "120ms" } as React.CSSProperties}
                    >
                        I build <span className="text-espresso">AI-powered applications, intelligent agents</span> and the{" "}
                        <span className="text-espresso">full-stack products</span> around them. As founding engineer at DreamDesk
                        AI, my agents answer hotel guests across voice, WhatsApp, email and web chat.
                    </p>

                    <div
                        className="rise-in mt-10 grid grid-cols-1 sm:flex sm:flex-wrap sm:items-center gap-3"
                        style={{ "--delay": "180ms" } as React.CSSProperties}
                    >
                        <a href="#work" className="btn btn-primary">
                            Explore My Work
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Let&apos;s Connect
                        </a>
                    </div>

                    <p
                        className="rise-in mt-8 flex items-center gap-2.5 text-sm text-muted"
                        style={{ "--delay": "240ms" } as React.CSSProperties}
                    >
                        <span className="w-2 h-2 rounded-full bg-amber shrink-0" aria-hidden="true" />
                        {contact.availability}
                    </p>
                </div>

                {/* Selected work: a short index of the strongest projects, each linking to its details */}
                <nav
                    aria-label="Selected work"
                    className="rise-in w-full max-w-[540px] lg:justify-self-end"
                    style={{ "--delay": "140ms" } as React.CSSProperties}
                >
                    <p className="eyebrow mb-5">Selected work</p>
                    <ol className="border-b border-line">
                        {SELECTED_WORK.map((w, i) => (
                            <li key={w.name} className="border-t border-line">
                                <a href={w.href} className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 py-5 sm:py-6">
                                    <span className="text-[13px] font-medium tabular-nums text-muted">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block font-display text-[1.6rem] sm:text-[1.875rem] leading-tight text-espresso group-hover:text-terracotta-ink transition-colors">
                                            {w.name}
                                        </span>
                                        <span className="block mt-1 text-[15px] text-muted leading-snug">{w.line}</span>
                                    </span>
                                    <ArrowRight
                                        className="w-5 h-5 self-center text-taupe group-hover:text-terracotta-ink group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 transition-[color,translate]"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </section>
    );
}
