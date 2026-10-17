import Image from "next/image";
import DreamDeskDiagram from "./DreamDeskDiagram";
import FadeIn from "./ui/FadeIn";
import { Tags } from "./ui/Tag";
import ContactForm from "./bento/ContactForm";
import { CONTACT_LINKS, Eyebrow } from "./bento/tiles";
import { dreamDeskResults, education, experience, projects, skills } from "@/lib/content";

// Scrolling sections below the bento overview. Everything is visible; nothing is hidden behind clicks.

const dreamdesk = projects.find((p) => p.caseStudy)!;
const otherProjects = projects.filter((p) => !p.caseStudy);

// Case study "what I built": DreamDesk bullets from the experience entry, minus the ones that
// describe internal architecture (kept private on the case study).
const PRIVATE = ["Designed a 4-stage", "Built the knowledge-base ingestion", "Connected agents to Gmail"];
const dreamdeskBuilt = (experience[0].bullets ?? []).filter((b) => !PRIVATE.some((p) => b.startsWith(p)));

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
    return (
        <section id={id} className={`mx-auto max-w-[1100px] px-4 sm:px-6 py-16 sm:py-24 ${className}`}>
            {children}
        </section>
    );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: React.ReactNode }) {
    return (
        <FadeIn>
            <header className="mb-10 sm:mb-12 max-w-3xl">
                <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
                <h2 className="font-display text-4xl sm:text-6xl leading-[1] tracking-tight text-fg">{title}</h2>
                {sub && <div className="mt-4 text-[15px] sm:text-base text-muted leading-relaxed">{sub}</div>}
            </header>
        </FadeIn>
    );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`rounded-3xl border border-line bg-surface shadow-[0_1px_2px_rgba(28,25,21,0.04),0_8px_24px_-16px_rgba(28,25,21,0.18)] ${className}`}>{children}</div>;
}

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2">
            {items.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-muted leading-relaxed">
                    <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                </li>
            ))}
        </ul>
    );
}

/* ---------- About ---------- */

export function AboutSection() {
    return (
        <Section id="about" className="!pb-4 sm:!pb-8">
            <FadeIn>
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
                    <div>
                        <Eyebrow className="mb-3">about</Eyebrow>
                        <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] tracking-tight text-fg">
                            Founding AI Engineer
                        </h2>
                        <p className="font-mono text-[12px] text-muted mt-3">AI Agents · Voice AI · RAG · AI Automation</p>
                    </div>
                    <div className="space-y-4 text-base sm:text-[17px] text-muted leading-relaxed">
                        <p>
                            I build AI agents that handle real customer communication in production. I take ownership from
                            unclear requirements to a working product, and I&apos;m comfortable working independently
                            across time zones.
                        </p>
                        <p>
                            At DreamDesk AI, I build multi-channel AI agents across voice calls, WhatsApp, email and web
                            chat, now live across 3 hotels. Before that, I built a GenAI pipeline at AutoMato AI serving 50+
                            companies, shipped PDF Converter (live on the App Store, 5.0 rating) and BGZoom for macOS at
                            KATco, and collaborated with DFKI Germany on smart contract security research.
                        </p>
                        <p className="text-fg font-medium">Open to all remote roles: full-time, part-time or contract.</p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}

/* ---------- DreamDesk case study ---------- */

export function DreamDeskSection() {
    return (
        <Section id="dreamdesk">
            <SectionHeader
                eyebrow={`case study · ${dreamdesk.org} · ${dreamdesk.period}`}
                title={dreamdesk.title}
                sub={<span className="font-mono text-[13px]">{dreamdesk.role}</span>}
            />

            <FadeIn className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 sm:p-8">
                    <Eyebrow className="mb-3">the problem</Eyebrow>
                    <p className="text-[17px] text-fg/85 leading-relaxed">
                        Hotels handle guest messages across voice, WhatsApp, email and web chat, often with separate staff
                        for each channel. Guests wait, answers are inconsistent, and reservation changes get lost between
                        systems.
                    </p>
                </Card>
                <Card className="p-6 sm:p-8">
                    <Eyebrow className="mb-3">the solution</Eyebrow>
                    <p className="text-[17px] text-fg/85 leading-relaxed">{dreamdesk.description}</p>
                </Card>
            </FadeIn>

            <FadeIn className="mt-4">
                <Card className="p-4 sm:p-8">
                    <Eyebrow className="mb-4 px-2 sm:px-0">how it works</Eyebrow>
                    <DreamDeskDiagram large className="!border-0 !bg-transparent !p-0" />
                </Card>
            </FadeIn>

            <div className="mt-4 grid lg:grid-cols-[1.35fr_1fr] gap-4">
                <FadeIn>
                    <Card className="p-6 sm:p-8 h-full">
                        <Eyebrow className="mb-4">what I built</Eyebrow>
                        <Bullets items={dreamdeskBuilt} />
                    </Card>
                </FadeIn>
                <FadeIn delay={0.08} className="flex flex-col gap-4">
                    <Card className="p-6 sm:p-8">
                        <Eyebrow className="mb-4">results</Eyebrow>
                        <dl className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
                            {dreamDeskResults.map((r) => (
                                <div key={r.value} className="rounded-2xl border border-line bg-bg p-4">
                                    <dt className="font-display text-3xl leading-none text-accent-ink">{r.value}</dt>
                                    <dd className="font-mono text-[11px] text-subtle mt-2 leading-snug">{r.label}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-sm text-muted mt-4 leading-relaxed">
                            AI cost per response, latency and agent performance tracked in analytics.
                        </p>
                    </Card>
                    <Card className="p-6 sm:p-8 flex-1">
                        <Eyebrow className="mb-4">tech stack</Eyebrow>
                        <Tags items={dreamdesk.skills} />
                    </Card>
                </FadeIn>
            </div>
        </Section>
    );
}

/* ---------- Projects ---------- */

export function ProjectsSection() {
    return (
        <Section id="projects">
            <SectionHeader eyebrow="projects" title="Selected work" sub="E-commerce AI, security research and native apps." />
            <div className="grid md:grid-cols-2 gap-4">
                {otherProjects.map((p, i) => (
                    <FadeIn key={p.title} delay={(i % 2) * 0.08}>
                        <Card className="p-6 sm:p-8 h-full flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="font-mono text-[11px] text-subtle mb-2">
                                        {p.org} · {p.period}
                                    </p>
                                    <h3 className="font-display text-3xl leading-[1.05] text-fg">{p.title}</h3>
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
                            <p className="text-[15px] text-muted leading-relaxed">{p.description}</p>
                            <p className="text-sm text-fg border-l-2 border-accent pl-3">
                                <span className="font-mono text-[11px] text-accent-ink mr-2">impact</span>
                                {p.impact}
                            </p>
                            <p className="font-mono text-[11px] text-subtle">{p.role}</p>
                            <div className="mt-auto pt-1">
                                <Tags items={p.skills} />
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}

/* ---------- Experience ---------- */

export function ExperienceSection() {
    return (
        <Section id="experience">
            <SectionHeader eyebrow="experience" title="Where I’ve worked" />
            <ol className="relative max-w-4xl space-y-8 pl-8 sm:pl-10">
                <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
                {experience.map((job, idx) => (
                    <li key={job.title} className="relative">
                        <span
                            className={`absolute -left-8 sm:-left-10 top-2 w-[15px] h-[15px] rounded-full border-2 border-accent ${idx === 0 ? "bg-accent" : "bg-bg"}`}
                            aria-hidden="true"
                        />
                        <FadeIn>
                            <Card className="p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                                    <h3 className="font-display text-2xl sm:text-3xl leading-tight text-fg">{job.title}</h3>
                                    <p className="font-mono text-xs text-accent-ink shrink-0">{job.period}</p>
                                </div>
                                <p className="text-sm text-fg/80 mt-1">{[job.company, job.location].filter(Boolean).join(" · ")}</p>
                                {job.summary && <p className="text-[15px] text-fg/80 italic mt-3">{job.summary}</p>}
                                {job.bullets && (
                                    <div className="mt-4">
                                        <Bullets items={job.bullets} />
                                    </div>
                                )}
                                {job.note && <p className="text-xs text-subtle leading-relaxed mt-3">{job.note}</p>}
                                {job.subRoles && (
                                    <div className="space-y-4 mt-4">
                                        {job.subRoles.map((sub) => (
                                            <div key={sub.title} className="pl-4 border-l-2 border-line">
                                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 mb-1.5">
                                                    <p className="text-[15px] font-medium text-fg">{sub.title}</p>
                                                    {sub.meta && <p className="font-mono text-xs text-subtle shrink-0">{sub.meta}</p>}
                                                </div>
                                                <Bullets items={sub.bullets} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {job.tech && (
                                    <div className="mt-5">
                                        <Tags items={job.tech} />
                                    </div>
                                )}
                            </Card>
                        </FadeIn>
                    </li>
                ))}
            </ol>

            <FadeIn className="mt-10 max-w-4xl">
                <Card className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <Eyebrow className="mb-2">education</Eyebrow>
                        <p className="font-display text-3xl text-fg">{education.degree}</p>
                        <p className="text-sm text-muted mt-1">
                            {education.school} · <span className="font-mono text-accent-ink">{education.period}</span>
                        </p>
                    </div>
                    <span className="self-start sm:self-auto font-mono text-xs px-3 py-1.5 rounded-full text-fg/85 border border-line bg-bg">
                        {education.honours}
                    </span>
                </Card>
            </FadeIn>
        </Section>
    );
}

/* ---------- Skills ---------- */

export function SkillsSection() {
    return (
        <Section id="skills">
            <SectionHeader eyebrow="skills" title="Tools I build with" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(skills).map(([group, items], i) => (
                    <FadeIn key={group} delay={(i % 4) * 0.05}>
                        <Card className="p-6 h-full">
                            <h3 className="font-display text-2xl text-fg mb-4">{group}</h3>
                            <Tags items={items} />
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}

/* ---------- Contact ---------- */

export function ContactSection() {
    return (
        <Section id="contact">
            <SectionHeader
                eyebrow="contact"
                title="Let’s build something"
                sub="Open to all remote AI Engineer and AI Automation roles: full-time, part-time or contract."
            />
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-4">
                <FadeIn className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 content-start">
                    {CONTACT_LINKS.map(({ href, label, Icon, external }) => (
                        <a
                            key={label}
                            href={href}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 text-[15px] text-fg hover:border-accent transition-colors break-all"
                        >
                            <span className="w-10 h-10 rounded-full bg-bg border border-line flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                                <Icon className="w-4 h-4 text-accent-ink" aria-hidden="true" />
                            </span>
                            {label}
                        </a>
                    ))}
                </FadeIn>
                <FadeIn delay={0.08}>
                    <Card className="p-6 sm:p-8">
                        <Eyebrow className="mb-4">send a message</Eyebrow>
                        <ContactForm />
                    </Card>
                </FadeIn>
            </div>
        </Section>
    );
}

/* ---------- Footer ---------- */

export function SiteFooter() {
    return (
        <footer className="mx-auto max-w-[1100px] px-4 sm:px-6 py-10 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
                <Image src="/profileImage.jpg" alt="" width={32} height={32} className="w-8 h-8 rounded-full object-cover border border-line" />
                <p className="font-display text-xl text-fg">
                    Zainab <em className="text-accent-ink">Yousaf</em>
                </p>
            </div>
            <p className="font-mono text-[11px] text-subtle">© {new Date().getFullYear()} · AI Engineer · Multi-Agent Systems · RAG</p>
        </footer>
    );
}
