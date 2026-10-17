import Image from "next/image";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import DreamDeskDiagram from "../DreamDeskDiagram";
import { contact, dreamDeskResults, projects } from "@/lib/content";

// First-screen tiles. Full content lives in the sections below (components/sections.tsx).

const dreamdesk = projects.find((p) => p.caseStudy)!;

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <p className={`font-mono text-xs uppercase tracking-[0.08em] text-accent-ink ${className}`}>{children}</p>;
}

/* ---------- Intro (the focal point) ---------- */

export function IntroTile() {
    return (
        <div className="h-full p-7 sm:p-10 lg:p-12 short:p-8 flex flex-col justify-center gap-7 short:gap-5">
            <div>
                <span className="inline-flex items-center gap-2 font-mono text-xs text-fg px-3 py-1.5 rounded-full border border-line bg-bg">
                    <span className="relative flex w-2 h-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-ok" />
                    </span>
                    Available for remote roles
                </span>
            </div>

            <div className="flex items-center gap-5 sm:gap-7">
                <Image
                    src="/profileImage.jpg"
                    alt="Zainab Yousaf"
                    width={128}
                    height={128}
                    priority
                    className="w-20 h-20 sm:w-28 sm:h-28 short:w-24 short:h-24 rounded-3xl object-cover border border-line shrink-0"
                />
                <div className="min-w-0">
                    <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl short:text-7xl leading-[0.9] tracking-tight text-fg">
                        Zainab <em className="text-accent-ink">Yousaf</em>
                    </h1>
                    <p className="font-mono text-[13px] sm:text-sm text-muted mt-3">AI Engineer · Multi-Agent Systems · RAG</p>
                </div>
            </div>

            <div className="space-y-3 max-w-xl">
                <p className="text-lg sm:text-xl text-fg/90 leading-relaxed">
                    I build production AI agents that handle real customer conversations — currently founding engineer at
                    DreamDesk.
                </p>
                <p className="font-mono text-[13px] text-subtle">50+ companies served · 2 native apps shipped · 2+ years in production</p>
            </div>

            <div className="flex flex-wrap gap-3">
                <a
                    href={contact.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold text-fg bg-accent px-6 py-3 rounded-full transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-[0_12px_28px_-14px_var(--color-accent)]"
                >
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    View resume
                </a>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-base font-semibold text-fg px-6 py-3 rounded-full border border-line bg-surface hover:border-accent transition-colors"
                >
                    Contact me
                </a>
            </div>
        </div>
    );
}

/* ---------- DreamDesk ---------- */

export function DreamDeskTile() {
    return (
        <div className="h-full p-6 sm:p-8 short:p-6 flex flex-col gap-5 short:gap-4">
            <Eyebrow>flagship · current role</Eyebrow>
            <div>
                <h2 className="font-display text-4xl sm:text-5xl leading-none text-fg">DreamDesk</h2>
                <p className="text-base text-muted mt-2 leading-relaxed">Hotel AI agent platform · {dreamdesk.org}</p>
            </div>
            <DreamDeskDiagram fit className="flex-1 min-h-[150px] flex items-center" />
            <div className="grid grid-cols-3 gap-2">
                {dreamDeskResults.map((r) => (
                    <div key={r.value} className="rounded-xl border border-line bg-bg px-3 py-2.5">
                        <div className="font-display text-xl sm:text-2xl leading-none text-accent-ink whitespace-nowrap">{r.value}</div>
                        <div className="font-mono text-[11px] text-subtle mt-1 leading-snug">{r.label}</div>
                    </div>
                ))}
            </div>
            <a
                href="#dreamdesk"
                className="self-start inline-flex items-center gap-1.5 text-base font-medium text-accent-ink hover:gap-2.5 transition-[gap]"
            >
                Read case study <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </a>
        </div>
    );
}

/* ---------- Ask my AI (compact) ---------- */

export function AskTile() {
    return (
        <div className="h-full px-6 py-4 flex items-center gap-4 text-fg">
            <span className="w-10 h-10 rounded-full bg-surface/90 flex items-center justify-center shrink-0" aria-hidden="true">
                ✨
            </span>
            <div className="min-w-0">
                <p className="font-display text-2xl leading-none">Don’t want to read?</p>
                <p className="text-base mt-1">Ask my AI about my work</p>
            </div>
            <span className="ml-auto text-xl" aria-hidden="true">
                →
            </span>
        </div>
    );
}

/* ---------- Shared contact links ---------- */

export const CONTACT_LINKS = [
    { href: `mailto:${contact.email}`, label: contact.email, short: "Email", Icon: Mail, external: false },
    { href: contact.linkedin, label: "LinkedIn", short: "LinkedIn", Icon: Linkedin, external: true },
    { href: contact.github, label: "GitHub", short: "GitHub", Icon: Github, external: true },
    { href: contact.cv, label: "View resume", short: "View resume", Icon: FileText, external: true },
];
