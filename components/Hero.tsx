import Image from "next/image";
import HeroButtons from "./hero/HeroButtons";
import Typewriter from "./hero/Typewriter";
import AgentTerminal from "./hero/AgentTerminal";

const ROLES = ["AI Engineer", "Multi-Agent Systems", "RAG Pipelines"];

export default function Hero() {
    return (
        <section id="about" className="relative isolate overflow-hidden">
            {/* Backdrop: faint dot grid + slow drifting glow */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                <div className="absolute inset-0 dot-grid" />
                <div className="glow-blob absolute left-1/2 top-[-10%] w-[700px] h-[700px] -ml-[350px] rounded-full opacity-70" />
            </div>

            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-14 pb-16 md:pt-24 md:pb-24 grid gap-12 md:grid-cols-[1.25fr_1fr] md:items-center">
                <div className="space-y-6 min-w-0">
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-fg/90 px-3 py-1.5 rounded-full border border-line bg-surface/70">
                        <span className="relative flex w-2 h-2" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 animate-ping" />
                            <span className="relative inline-flex w-2 h-2 rounded-full bg-ok" />
                        </span>
                        Available for remote roles
                    </span>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/profileImage.jpg"
                            alt="Zainab Yousaf"
                            width={56}
                            height={56}
                            priority
                            className="rounded-full object-cover border border-line"
                        />
                        <p className="font-mono text-xs text-muted leading-relaxed">
                            Founding AI Engineer
                            <br />
                            DreamDesk AI · UK (Remote)
                        </p>
                    </div>

                    <div>
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-fg leading-[1.02]">
                            Zainab Yousaf
                        </h1>
                        <p className="font-sans text-2xl sm:text-3xl font-medium text-muted mt-3 min-h-[1.4em]">
                            <Typewriter phrases={ROLES} />
                        </p>
                    </div>

                    <div className="space-y-3 max-w-xl">
                        <p className="text-[15px] text-muted leading-relaxed">
                            I build AI agents that handle real customer communication in production. I take ownership
                            from unclear requirements to a working product, and I&apos;m comfortable working
                            independently across time zones.
                        </p>
                        <p className="text-[15px] text-muted leading-relaxed">
                            At DreamDesk AI, I build multi-channel AI agents across voice calls, WhatsApp, email and web
                            chat, now live across 3 hotels. Before that, I built a GenAI pipeline at AutoMato AI serving
                            50+ companies, shipped PDF Converter (live on the App Store, 5.0 rating) and BGZoom for macOS
                            at KATco, and collaborated with DFKI Germany on smart contract security research.
                        </p>
                        <p className="text-sm text-fg/80">
                            Open to all remote roles: full-time, part-time or contract.
                        </p>
                    </div>

                    <HeroButtons />
                </div>

                <div className="min-w-0">
                    <AgentTerminal />
                </div>
            </div>
        </section>
    );
}
