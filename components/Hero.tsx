import { ArrowRight } from "lucide-react";
import DreamDeskDiagram from "./DreamDeskDiagram";
import { contact } from "@/lib/content";

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

                {/* Visual: DreamDesk at a glance */}
                <figure
                    className="rise-in surface p-5 sm:p-7 w-full max-w-[640px] lg:justify-self-end"
                    style={{ "--delay": "140ms" } as React.CSSProperties}
                >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-4 sm:pb-5 border-b border-line">
                        <p className="font-display text-2xl text-espresso leading-none whitespace-nowrap">DreamDesk AI</p>
                        <p className="text-[13px] text-muted whitespace-nowrap">Founding engineer · 2026</p>
                    </div>

                    <DreamDeskDiagram className="py-6 sm:py-8" />

                    <figcaption className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 sm:pt-5 border-t border-line">
                        <span className="text-sm text-muted">Live across 3 hotels · ~1.6s voice response</span>
                        <a href="#dreamdesk" className="link text-sm inline-flex items-center gap-1.5 whitespace-nowrap">
                            Read the case study
                            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
