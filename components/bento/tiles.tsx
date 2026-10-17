import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import DreamDeskDiagram from "../DreamDeskDiagram";
import CountUp from "./CountUp";
import { contact, dreamDeskResults, experience, projects, skills, type Project } from "@/lib/content";

// Bento tile previews (the first-screen overview). Full content lives in components/sections.tsx.

const dreamdesk = projects.find((p) => p.caseStudy)!;
const otherProjects = projects.filter((p) => !p.caseStudy);
const shortTitle = (p: Project) => p.title.split(":")[0];

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <p className={`font-mono text-[11px] uppercase tracking-[0.08em] text-accent-ink ${className}`}>{children}</p>;
}

/* ---------- Intro ---------- */

export function IntroPreview() {
    return (
        <div className="h-full p-6 sm:p-8 short:p-5 flex flex-col justify-between gap-6 short:gap-4">
            <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] text-fg/85 px-3 py-1.5 rounded-full border border-line bg-bg">
                    <span className="relative flex w-2 h-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-ok" />
                    </span>
                    Available for remote roles
                </span>
            </div>
            <div className="flex items-end gap-4 sm:gap-6">
                <Image
                    src="/profileImage.jpg"
                    alt="Zainab Yousaf"
                    width={96}
                    height={96}
                    priority
                    className="w-16 h-16 sm:w-24 sm:h-24 short:w-20 short:h-20 rounded-2xl object-cover border border-line shrink-0"
                />
                <div className="min-w-0">
                    <h1 className="font-display text-[44px] sm:text-6xl xl:text-7xl short:text-6xl leading-[0.92] tracking-tight text-fg">
                        Zainab <em className="text-accent-ink">Yousaf</em>
                    </h1>
                    <p className="font-mono text-[12px] sm:text-[13px] text-muted mt-3">AI Engineer · Multi-Agent Systems · RAG</p>
                </div>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-lg short:hidden">
                Founding AI Engineer at DreamDesk AI (UK, remote). I build AI agents that handle real customer
                communication in production.
            </p>
        </div>
    );
}

/* ---------- DreamDesk ---------- */

export function DreamDeskPreview() {
    return (
        <div className="h-full p-6 sm:p-7 short:p-5 flex flex-col gap-4 short:gap-3">
            <Eyebrow>flagship · current role</Eyebrow>
            <div>
                <h2 className="font-display text-4xl sm:text-5xl leading-none text-fg">DreamDesk</h2>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                    Hotel AI agent platform · {dreamdesk.role} · {dreamdesk.org}
                </p>
            </div>
            <DreamDeskDiagram fit className="flex-1 min-h-[150px] flex items-center" />
            <div className="grid grid-cols-3 gap-2">
                {dreamDeskResults.map((r) => (
                    <div key={r.value} className="rounded-xl border border-line bg-bg px-3 py-2.5">
                        <div className="font-display text-xl sm:text-2xl leading-none text-accent-ink whitespace-nowrap">{r.value}</div>
                        <div className="font-mono text-[10px] text-subtle mt-1 leading-snug">{r.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------- Ask my AI ---------- */

export function AskPreview() {
    return (
        <div className="h-full p-6 short:p-5 flex flex-col justify-between gap-5 short:gap-3 text-fg">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg">✨ ask my AI</p>
            <p className="font-display text-3xl sm:text-4xl short:text-3xl leading-[1.02]">
                Don’t want to read? <em>Just ask.</em>
            </p>
            <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-[13px] text-muted shadow-sm">
                <span className="truncate">Is she open to part-time work?</span>
                <span className="ml-auto text-fg" aria-hidden="true">
                    →
                </span>
            </div>
        </div>
    );
}

/* ---------- Projects ---------- */

export function ProjectsPreview() {
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-4 short:gap-3">
            <Eyebrow>projects</Eyebrow>
            <ul className="space-y-2.5 short:space-y-1.5">
                {otherProjects.map((p) => (
                    <li key={p.title} className="flex items-baseline justify-between gap-3 border-b border-line/70 pb-2 last:border-0">
                        <span className="font-display text-xl short:text-lg leading-tight text-fg truncate">{shortTitle(p)}</span>
                        <span className="font-mono text-[10px] text-subtle shrink-0">{p.org.split(" ")[0]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ---------- Experience ---------- */

export function ExperiencePreview() {
    const items = experience.slice(0, 4);
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-4 short:gap-3">
            <Eyebrow>experience</Eyebrow>
            <ol className="relative space-y-3 short:space-y-2 pl-4">
                <span className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-line" aria-hidden="true" />
                {items.map((job, i) => (
                    <li key={job.title} className={`relative ${i === 3 ? "short:hidden" : ""}`}>
                        <span
                            className={`absolute -left-4 top-1.5 w-[7px] h-[7px] rounded-full ${i === 0 ? "bg-accent" : "bg-surface border border-subtle"}`}
                            aria-hidden="true"
                        />
                        <p className="text-sm font-medium text-fg leading-tight truncate">{(job.company ?? job.title).split(" × ")[0]}</p>
                        <p className="font-mono text-[10px] text-subtle">{job.period}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

/* ---------- Skills ---------- */

export function SkillsPreview() {
    const groups = Object.entries(skills).slice(0, 4);
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-4 short:gap-3">
            <Eyebrow>skills</Eyebrow>
            <ul className="space-y-2.5 short:space-y-2">
                {groups.map(([group, items], i) => (
                    <li key={group} className={i === 3 ? "short:hidden" : undefined}>
                        <p className="text-[13px] font-medium text-fg leading-tight">{group}</p>
                        <p className="font-mono text-[10px] text-subtle truncate">{items.slice(0, 3).join(" · ")}</p>
                    </li>
                ))}
            </ul>
            <p className="font-mono text-[10px] text-subtle mt-auto">+ more groups</p>
        </div>
    );
}

/* ---------- Numbers ---------- */

const STATS = [
    { value: 50, suffix: "+", label: "companies served" },
    { value: 2, suffix: "", label: "native apps shipped" },
    { value: 2, suffix: "+", label: "years in production" },
];

export function StatsPreview() {
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-3">
            <Eyebrow>numbers</Eyebrow>
            <ul className="flex-1 flex flex-col justify-around gap-2">
                {STATS.map((s) => (
                    <li key={s.label} className="flex items-baseline gap-3">
                        <span className="font-display text-4xl short:text-3xl leading-none text-fg w-16 shrink-0">
                            <CountUp value={s.value} suffix={s.suffix} />
                        </span>
                        <span className="font-mono text-[11px] text-subtle leading-tight">{s.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ---------- Contact ---------- */

export const CONTACT_LINKS = [
    { href: `mailto:${contact.email}`, label: contact.email, short: "Email", Icon: Mail, external: false },
    { href: contact.linkedin, label: "LinkedIn", short: "LinkedIn", Icon: Linkedin, external: true },
    { href: contact.github, label: "GitHub", short: "GitHub", Icon: Github, external: true },
    { href: contact.cv, label: "Download CV", short: "Download CV", Icon: Download, external: true },
];

export function ContactPreview() {
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-3 short:gap-2">
            <Eyebrow>contact</Eyebrow>
            <p className="font-display text-3xl short:text-2xl leading-none text-fg">Let’s talk.</p>
            <ul className="mt-auto space-y-1 short:space-y-0">
                {CONTACT_LINKS.map(({ href, short, Icon, external }) => (
                    <li key={short}>
                        <a
                            href={href}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group flex items-center gap-2.5 py-1 text-sm text-fg/85 hover:text-accent-ink transition-colors"
                        >
                            <Icon className="w-4 h-4 text-subtle group-hover:text-accent-ink shrink-0" aria-hidden="true" />
                            {short}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
