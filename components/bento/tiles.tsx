import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import DreamDeskDiagram from "../DreamDeskDiagram";
import { Tags } from "../ui/Tag";
import CountUp from "./CountUp";
import ContactForm from "./ContactForm";
import { contact, dreamDeskResults, education, experience, projects, skills, type Project } from "@/lib/content";

// Bento tile previews and their expanded detail views. All server-rendered.

const dreamdesk = projects.find((p) => p.caseStudy)!;
const otherProjects = projects.filter((p) => !p.caseStudy);

/* ---------- shared bits ---------- */

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <p className={`font-mono text-[11px] uppercase tracking-[0.08em] text-accent-ink ${className}`}>{children}</p>;
}

function OpenHint({ children = "open" }: { children?: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-subtle">
            {children}
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
    );
}

function TileHead({ label, hint }: { label: string; hint?: string }) {
    return (
        <div className="flex items-center justify-between gap-3">
            <Eyebrow>{label}</Eyebrow>
            <OpenHint>{hint}</OpenHint>
        </div>
    );
}

function DetailHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: React.ReactNode }) {
    return (
        <header className="mb-8">
            <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] text-fg">{title}</h2>
            {sub && <div className="mt-3 text-[15px] text-muted leading-relaxed">{sub}</div>}
        </header>
    );
}

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="space-y-1.5">
            {items.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="mt-[0.55em] w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                </li>
            ))}
        </ul>
    );
}

const shortTitle = (p: Project) => p.title.split(":")[0];

/* ---------- 1. Intro ---------- */

export function IntroPreview() {
    return (
        <div className="h-full p-6 sm:p-8 short:p-5 flex flex-col justify-between gap-6 short:gap-4">
            <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] text-fg/85 px-3 py-1.5 rounded-full border border-line bg-bg">
                    <span className="relative flex w-2 h-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-ok" />
                    </span>
                    Available for remote roles
                </span>
                <OpenHint>about</OpenHint>
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

export function AboutDetail() {
    return (
        <div>
            <DetailHeader eyebrow="about" title="Zainab Yousaf" sub="Founding AI Engineer · AI Agents · Voice AI · RAG · AI Automation" />
            <div className="flex flex-col sm:flex-row gap-6">
                <Image
                    src="/profileImage.jpg"
                    alt=""
                    width={160}
                    height={160}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border border-line shrink-0"
                />
                <div className="space-y-4 text-[15px] text-muted leading-relaxed">
                    <p>
                        I build AI agents that handle real customer communication in production. I take ownership from
                        unclear requirements to a working product, and I&apos;m comfortable working independently across
                        time zones.
                    </p>
                    <p>
                        At DreamDesk AI, I build multi-channel AI agents across voice calls, WhatsApp, email and web chat,
                        now live across 3 hotels. Before that, I built a GenAI pipeline at AutoMato AI serving 50+
                        companies, shipped PDF Converter (live on the App Store, 5.0 rating) and BGZoom for macOS at KATco,
                        and collaborated with DFKI Germany on smart contract security research.
                    </p>
                    <p className="text-fg font-medium">Open to all remote roles: full-time, part-time or contract.</p>
                </div>
            </div>
        </div>
    );
}

/* ---------- 2. DreamDesk ---------- */

export function DreamDeskPreview() {
    return (
        <div className="h-full p-6 sm:p-7 short:p-5 flex flex-col gap-4 short:gap-3">
            <TileHead label="flagship · current role" hint="case study" />
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

export function DreamDeskDetail() {
    return (
        <article>
            <DetailHeader
                eyebrow={`${dreamdesk.org} · ${dreamdesk.period}`}
                title={dreamdesk.title}
                sub={dreamdesk.description}
            />
            <DreamDeskDiagram />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                {dreamDeskResults.map((r) => (
                    <div key={r.value} className="rounded-2xl border border-line bg-bg p-4">
                        <div className="font-display text-3xl text-accent-ink">{r.value}</div>
                        <div className="font-mono text-[11px] text-subtle mt-1">{r.label}</div>
                    </div>
                ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <div className="rounded-2xl border border-line bg-bg p-5">
                    <Eyebrow className="mb-2">problem</Eyebrow>
                    <p className="text-sm text-fg/85 leading-relaxed">
                        Hotels handle guest messages across voice, WhatsApp, email and web chat, often with separate staff
                        for each channel. Guests wait, answers are inconsistent, and reservation changes get lost between
                        systems.
                    </p>
                </div>
                <div className="rounded-2xl border border-line bg-bg p-5">
                    <Eyebrow className="mb-2">what I built</Eyebrow>
                    <p className="text-sm text-fg/85 leading-relaxed">
                        Multi-channel AI agents that answer guests on every channel from one platform, look up live
                        reservations, and escalate to staff when they&apos;re not confident.
                    </p>
                </div>
            </div>
            <dl className="mt-6 space-y-1.5 text-sm">
                <div className="flex gap-3">
                    <dt className="font-mono text-xs text-subtle w-16 pt-0.5 shrink-0">role</dt>
                    <dd className="text-fg/85">{dreamdesk.role}</dd>
                </div>
                <div className="flex gap-3">
                    <dt className="font-mono text-xs text-subtle w-16 pt-0.5 shrink-0">impact</dt>
                    <dd className="text-fg/85">{dreamdesk.impact}</dd>
                </div>
                <div className="flex gap-3">
                    <dt className="font-mono text-xs text-subtle w-16 pt-0.5 shrink-0">tracking</dt>
                    <dd className="text-fg/85">AI cost per response, latency and agent performance tracked in analytics</dd>
                </div>
            </dl>
            <div className="mt-6">
                <Tags items={dreamdesk.skills} />
            </div>
        </article>
    );
}

/* ---------- 3. Ask my AI (opens the chat; no detail view) ---------- */

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

/* ---------- 4. Projects ---------- */

export function ProjectsPreview() {
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-4 short:gap-3">
            <TileHead label="projects" />
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

export function ProjectsDetail() {
    return (
        <div>
            <DetailHeader eyebrow="projects" title="Selected work" sub="Beyond DreamDesk: e-commerce AI, native apps and security research." />
            <div className="space-y-4">
                {otherProjects.map((p) => (
                    <article key={p.title} className="rounded-2xl border border-line bg-bg p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <p className="font-mono text-[11px] text-subtle mb-1">
                                    {p.org} · {p.period}
                                </p>
                                <h3 className="font-display text-2xl sm:text-3xl leading-tight text-fg">{p.title}</h3>
                            </div>
                            {p.demo && (
                                <a
                                    href={p.demo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 font-mono text-[11px] text-accent-ink px-3 py-1.5 rounded-full border border-accent/50 hover:bg-accent/10 transition-colors"
                                >
                                    {p.demo.label}
                                </a>
                            )}
                        </div>
                        <p className="text-sm text-muted leading-relaxed mt-3">{p.description}</p>
                        <dl className="mt-3 space-y-1 text-xs">
                            <div className="flex gap-3">
                                <dt className="font-mono text-subtle w-14 shrink-0">role</dt>
                                <dd className="text-fg/85">{p.role}</dd>
                            </div>
                            <div className="flex gap-3">
                                <dt className="font-mono text-subtle w-14 shrink-0">impact</dt>
                                <dd className="text-fg/85">{p.impact}</dd>
                            </div>
                        </dl>
                        <div className="mt-4">
                            <Tags items={p.skills} />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

/* ---------- 5. Experience ---------- */

export function ExperiencePreview() {
    const items = experience.slice(0, 4);
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-4 short:gap-3">
            <TileHead label="experience" />
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

export function ExperienceDetail() {
    return (
        <div>
            <DetailHeader eyebrow="experience" title="Where I’ve worked" />
            <ol className="relative space-y-6 pl-7">
                <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
                {experience.map((job, idx) => (
                    <li key={job.title} className="relative">
                        <span
                            className={`absolute -left-7 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent ${idx === 0 ? "bg-accent" : "bg-surface"}`}
                            aria-hidden="true"
                        />
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                            <h3 className="font-display text-2xl leading-tight text-fg">{job.title}</h3>
                            <p className="font-mono text-xs text-accent-ink shrink-0">{job.period}</p>
                        </div>
                        <p className="text-sm text-fg/80 mt-0.5">{[job.company, job.location].filter(Boolean).join(" · ")}</p>
                        {job.summary && <p className="text-sm text-fg/80 italic mt-2">{job.summary}</p>}
                        {job.bullets && (
                            <div className="mt-3">
                                <Bullets items={job.bullets} />
                            </div>
                        )}
                        {job.note && <p className="text-xs text-subtle leading-relaxed mt-2">{job.note}</p>}
                        {job.subRoles && (
                            <div className="space-y-3 mt-3">
                                {job.subRoles.map((sub) => (
                                    <div key={sub.title} className="pl-4 border-l-2 border-line">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 mb-1">
                                            <p className="text-sm font-medium text-fg">{sub.title}</p>
                                            {sub.meta && <p className="font-mono text-xs text-subtle shrink-0">{sub.meta}</p>}
                                        </div>
                                        <Bullets items={sub.bullets} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {job.tech && (
                            <div className="mt-3">
                                <Tags items={job.tech} />
                            </div>
                        )}
                    </li>
                ))}
            </ol>

            <section className="mt-10 rounded-2xl border border-line bg-bg p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <Eyebrow className="mb-2">education</Eyebrow>
                    <p className="font-display text-2xl text-fg">{education.degree}</p>
                    <p className="text-sm text-muted mt-1">
                        {education.school} · <span className="font-mono text-accent-ink">{education.period}</span>
                    </p>
                </div>
                <span className="self-start sm:self-auto font-mono text-xs px-3 py-1.5 rounded-full text-fg/85 border border-line bg-surface">
                    {education.honours}
                </span>
            </section>
        </div>
    );
}

/* ---------- 6. Skills ---------- */

export function SkillsPreview() {
    const groups = Object.entries(skills).slice(0, 4);
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-4 short:gap-3">
            <TileHead label="skills" />
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

export function SkillsDetail() {
    return (
        <div>
            <DetailHeader eyebrow="skills" title="Tools I build with" />
            <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(skills).map(([group, items]) => (
                    <div key={group} className="rounded-2xl border border-line bg-bg p-5">
                        <h3 className="font-display text-xl text-fg mb-3">{group}</h3>
                        <Tags items={items} />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------- 7. Stats ---------- */

const STATS = [
    { value: 50, suffix: "+", label: "companies served" },
    { value: 2, suffix: "", label: "native apps shipped" },
    { value: 2, suffix: "+", label: "years in production" },
];

export function StatsPreview() {
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-3">
            <TileHead label="numbers" />
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

const ALL_NUMBERS = [
    { value: "3 hotels", label: "with DreamDesk AI agents live in production" },
    { value: "~1.6s", label: "end-to-end voice agent response time" },
    { value: "4 weeks", label: "to deliver the DreamDesk POC end to end" },
    { value: "4 channels", label: "voice calls, WhatsApp, email and web chat" },
    { value: "50+", label: "companies and sellers served by the AutoMato AI GenAI pipeline" },
    { value: "40–60%", label: "less manual effort on Amazon listings at AutoMato AI" },
    { value: "2 apps", label: "shipped at KATco: PDF Converter (iOS/macOS) and BGZoom (macOS)" },
    { value: "5.0 ★", label: "App Store rating for PDF Converter" },
    { value: "25%", label: "less resource usage from the grey-box fuzzing research" },
    { value: "2+ years", label: "building production software, since Jul 2024" },
];

export function StatsDetail() {
    return (
        <div>
            <DetailHeader eyebrow="numbers" title="By the numbers" />
            <dl className="grid sm:grid-cols-2 gap-3">
                {ALL_NUMBERS.map((n) => (
                    <div key={n.label} className="rounded-2xl border border-line bg-bg p-5">
                        <dt className="font-display text-3xl text-accent-ink">{n.value}</dt>
                        <dd className="text-sm text-muted mt-1 leading-snug">{n.label}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

/* ---------- 8. Contact ---------- */

const LINKS = [
    { href: `mailto:${contact.email}`, label: contact.email, short: "Email", Icon: Mail, external: false },
    { href: contact.linkedin, label: "LinkedIn", short: "LinkedIn", Icon: Linkedin, external: true },
    { href: contact.github, label: "GitHub", short: "GitHub", Icon: Github, external: true },
    { href: contact.cv, label: "Download CV", short: "Download CV", Icon: Download, external: true },
];

export function ContactPreview() {
    return (
        <div className="h-full p-6 short:p-5 flex flex-col gap-3 short:gap-2">
            <TileHead label="contact" />
            <p className="font-display text-3xl short:text-2xl leading-none text-fg">Let’s talk.</p>
            <ul className="mt-auto space-y-1 short:space-y-0">
                {LINKS.map(({ href, short, Icon, external }) => (
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

export function ContactDetail() {
    return (
        <div>
            <DetailHeader
                eyebrow="contact"
                title="Let’s build something"
                sub="Open to all remote AI Engineer and AI Automation roles: full-time, part-time or contract."
            />
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {LINKS.map(({ href, label, Icon, external }) => (
                    <a
                        key={label}
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-bg px-4 py-3.5 text-sm text-fg hover:border-accent transition-colors break-all"
                    >
                        <Icon className="w-4 h-4 text-accent-ink shrink-0" aria-hidden="true" />
                        {label}
                    </a>
                ))}
            </div>
            <div className="rounded-2xl border border-line bg-bg p-5 sm:p-6">
                <Eyebrow className="mb-4">send a message</Eyebrow>
                <ContactForm />
            </div>
        </div>
    );
}
