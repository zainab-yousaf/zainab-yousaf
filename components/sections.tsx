import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import DreamDeskDiagram from "./DreamDeskDiagram";
import FadeIn from "./ui/FadeIn";
import { Tags } from "./ui/Tag";
import ContactForm from "./bento/ContactForm";
import { CONTACT_LINKS, Eyebrow } from "./bento/tiles";
import { dreamDeskResults, education, experience, projects, skills, type Entry } from "@/lib/content";

// Scrolling sections below the first screen. Everything is visible; nothing is hidden behind clicks.

const dreamdesk = projects.find((p) => p.caseStudy)!;
const otherProjects = projects.filter((p) => !p.caseStudy);

// Case study "what I built": the DreamDesk bullets, minus the ones that describe internal
// architecture (kept private).
const PRIVATE = ["Designed a 4-stage", "Built the knowledge-base ingestion", "Connected agents to Gmail"];
const dreamdeskBuilt = (experience[0].bullets ?? []).filter((b) => !PRIVATE.some((p) => b.startsWith(p)));

// Experience shows each role's strongest 3–4 bullets (matched by how they start).
const HIGHLIGHTS: Record<string, string[]> = {
    "Software Engineer": ["Built a GenAI pipeline", "Integrated Amazon Seller API", "Used OpenAI", "Built a React dashboard"],
};
const highlights = (job: Entry) => {
    const picks = HIGHLIGHTS[job.title];
    const all = job.bullets ?? [];
    return picks ? all.filter((b) => picks.some((p) => b.startsWith(p))) : all.slice(0, 4);
};

// Demo media for the case study: drop one of these into /public and it appears automatically.
const DEMO_FILES = ["dreamdesk-demo.mp4", "dreamdesk-demo.webm", "dreamdesk-demo.gif"];
const demoFile = DEMO_FILES.find((f) => fs.existsSync(path.join(process.cwd(), "public", f)));
const DEMO_CAPTION = "DreamDesk handling a guest conversation";

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
                {sub && <div className="mt-4 text-base sm:text-lg text-muted leading-relaxed">{sub}</div>}
            </header>
        </FadeIn>
    );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`rounded-3xl border border-line bg-surface shadow-[0_1px_2px_rgba(28,25,21,0.04),0_8px_24px_-16px_rgba(28,25,21,0.18)] ${className}`}
        >
            {children}
        </div>
    );
}

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2">
            {items.map((b) => (
                <li key={b} className="flex gap-3 text-base text-muted leading-relaxed">
                    <span className="mt-[0.65em] w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
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
                            How I work
                        </h2>
                        <p className="font-mono text-[13px] text-muted mt-3">AI Agents · Voice AI · RAG · AI Automation</p>
                    </div>
                    <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                        <p>
                            I take ownership from unclear requirements to a working product, and I&apos;m comfortable
                            working independently across time zones.
                        </p>
                        <p>
                            Before DreamDesk, I built a GenAI pipeline at AutoMato AI serving 50+ companies, shipped PDF
                            Converter (live on the App Store, 5.0 rating) and BGZoom for macOS at KATco, and collaborated
                            with DFKI Germany on smart contract security research.
                        </p>
                        <p className="text-fg font-medium">Open to all remote roles: full-time, part-time or contract.</p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}

/* ---------- DreamDesk case study ---------- */

function DemoMedia() {
    if (demoFile) {
        const src = `/${demoFile}`;
        return (
            <figure>
                <div className="overflow-hidden rounded-2xl border border-line bg-bg">
                    {demoFile.endsWith(".gif") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={src} alt={DEMO_CAPTION} className="w-full h-auto" loading="lazy" />
                    ) : (
                        <video src={src} className="w-full h-auto" autoPlay muted loop playsInline preload="metadata" aria-label={DEMO_CAPTION} />
                    )}
                </div>
                <figcaption className="text-base text-muted mt-3 text-center">{DEMO_CAPTION}</figcaption>
            </figure>
        );
    }
    // No file yet: show a placeholder only while developing locally, never on the live site.
    if (process.env.NODE_ENV === "production") return null;
    return (
        <figure>
            <div className="aspect-video rounded-2xl border-2 border-dashed border-line bg-bg flex flex-col items-center justify-center gap-2 text-center p-6">
                <p className="font-mono text-xs text-accent-ink">dev only · demo placeholder</p>
                <p className="text-base text-muted">
                    Add <code className="font-mono">public/dreamdesk-demo.mp4</code> (or .webm / .gif) and it appears here.
                </p>
            </div>
            <figcaption className="text-base text-muted mt-3 text-center">{DEMO_CAPTION}</figcaption>
        </figure>
    );
}

export function DreamDeskSection() {
    const hasDemo = Boolean(demoFile) || process.env.NODE_ENV !== "production";
    return (
        <Section id="dreamdesk">
            <SectionHeader
                eyebrow={`case study · ${dreamdesk.org} · ${dreamdesk.period}`}
                title={dreamdesk.title}
                sub={<span className="font-mono text-sm">{dreamdesk.role}</span>}
            />

            <FadeIn className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 sm:p-8">
                    <Eyebrow className="mb-3">the problem</Eyebrow>
                    <p className="text-lg text-fg/85 leading-relaxed">
                        Hotels handle guest messages across voice, WhatsApp, email and web chat, often with separate staff
                        for each channel. Guests wait, answers are inconsistent, and reservation changes get lost between
                        systems.
                    </p>
                </Card>
                <Card className="p-6 sm:p-8">
                    <Eyebrow className="mb-3">the solution</Eyebrow>
                    <p className="text-lg text-fg/85 leading-relaxed">{dreamdesk.description}</p>
                </Card>
            </FadeIn>

            {hasDemo && (
                <FadeIn className="mt-4">
                    <Card className="p-4 sm:p-8">
                        <Eyebrow className="mb-4 px-2 sm:px-0">demo</Eyebrow>
                        <DemoMedia />
                    </Card>
                </FadeIn>
            )}

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
                                    <dd className="font-mono text-xs text-subtle mt-2 leading-snug">{r.label}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-base text-muted mt-4 leading-relaxed">
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
        <Section id="projects" className="!pt-4 sm:!pt-8">
            <SectionHeader eyebrow="projects" title="Selected work" sub="E-commerce AI, security research and native apps." />
            <div className="grid md:grid-cols-2 gap-4">
                {otherProjects.map((p, i) => (
                    <FadeIn key={p.title} delay={(i % 2) * 0.08}>
                        <Card className="p-6 sm:p-8 h-full flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="font-mono text-xs text-subtle mb-2">
                                        {p.org} · {p.period}
                                    </p>
                                    <h3 className="font-display text-3xl leading-[1.05] text-fg">{p.title}</h3>
                                </div>
                                {p.demo && (
                                    <a
                                        href={p.demo.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 font-mono text-xs text-accent-ink px-3 py-1.5 rounded-full border border-accent/60 hover:bg-accent/10 transition-colors"
                                    >
                                        {p.demo.label}
                                    </a>
                                )}
                            </div>
                            <p className="text-base text-muted leading-relaxed">{p.description}</p>
                            <p className="text-base text-fg border-l-2 border-accent pl-3">
                                <span className="font-mono text-xs text-accent-ink mr-2">impact</span>
                                {p.impact}
                            </p>
                            <p className="font-mono text-xs text-subtle">{p.role}</p>
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

function TimelineDot({ first }: { first?: boolean }) {
    return (
        <span
            className={`absolute -left-8 sm:-left-10 top-2 w-[15px] h-[15px] rounded-full border-2 border-accent ${first ? "bg-accent" : "bg-bg"}`}
            aria-hidden="true"
        />
    );
}

function RoleHeader({ job }: { job: Entry }) {
    return (
        <>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <h3 className="font-display text-2xl sm:text-3xl leading-tight text-fg">{job.title}</h3>
                <p className="font-mono text-xs text-accent-ink shrink-0">{job.period}</p>
            </div>
            <p className="text-base text-fg/80 mt-1">{[job.company, job.location].filter(Boolean).join(" · ")}</p>
        </>
    );
}

export function ExperienceSection() {
    const [current, ...rest] = experience;
    const roles = rest.filter((j) => j.bullets);
    const teaching = rest.find((j) => !j.bullets && j.subRoles);

    return (
        <Section id="experience">
            <SectionHeader eyebrow="experience" title="Where I’ve worked" />
            <ol className="relative max-w-4xl space-y-6 pl-8 sm:pl-10">
                <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />

                {/* Current role: kept short; the details live in the case study. */}
                <li className="relative">
                    <TimelineDot first />
                    <FadeIn>
                        <Card className="p-6 sm:p-8">
                            <RoleHeader job={current} />
                            {current.summary && <p className="text-base text-fg/80 mt-3">{current.summary}</p>}
                            <a
                                href="#dreamdesk"
                                className="mt-4 inline-flex items-center gap-1.5 text-base font-medium text-accent-ink hover:gap-2.5 transition-[gap]"
                            >
                                Read the DreamDesk case study <ArrowDown className="w-4 h-4 -rotate-90" aria-hidden="true" />
                            </a>
                        </Card>
                    </FadeIn>
                </li>

                {roles.map((job) => (
                    <li key={job.title} className="relative">
                        <TimelineDot />
                        <FadeIn>
                            <Card className="p-6 sm:p-8">
                                <RoleHeader job={job} />
                                <div className="mt-4">
                                    <Bullets items={highlights(job)} />
                                </div>
                                {job.note && <p className="text-base text-muted leading-relaxed mt-3">{job.note}</p>}
                                {job.subRoles?.map((sub) => (
                                    <div key={sub.title} className="mt-4 pl-4 border-l-2 border-line">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 mb-1">
                                            <p className="text-base font-medium text-fg">{sub.title}</p>
                                            {sub.meta && <p className="font-mono text-xs text-subtle shrink-0">{sub.meta}</p>}
                                        </div>
                                        <p className="text-base text-muted leading-relaxed">{sub.bullets.join(" ")}</p>
                                    </div>
                                ))}
                                {job.tech && (
                                    <div className="mt-5">
                                        <Tags items={job.tech} />
                                    </div>
                                )}
                            </Card>
                        </FadeIn>
                    </li>
                ))}

                {/* Teaching & mentoring: one compact block */}
                {teaching && (
                    <li className="relative">
                        <TimelineDot />
                        <FadeIn>
                            <Card className="p-6 sm:p-8">
                                <RoleHeader job={teaching} />
                                <ul className="mt-4 divide-y divide-line">
                                    {teaching.subRoles!.map((sub) => (
                                        <li key={sub.title} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                                            <span className="text-base text-fg">{sub.title}</span>
                                            <span className="font-mono text-xs text-subtle shrink-0">{sub.meta}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </FadeIn>
                    </li>
                )}
            </ol>

            <FadeIn className="mt-10 max-w-4xl">
                <Card className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <Eyebrow className="mb-2">education</Eyebrow>
                        <p className="font-display text-3xl text-fg">{education.degree}</p>
                        <p className="text-base text-muted mt-1">
                            {education.school} · <span className="font-mono text-accent-ink">{education.period}</span>
                        </p>
                    </div>
                    <span className="self-start sm:self-auto font-mono text-xs px-3 py-1.5 rounded-full text-fg border border-line bg-bg">
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
                            className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 text-base text-fg hover:border-accent transition-colors break-all"
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
            <p className="font-mono text-xs text-subtle">© {new Date().getFullYear()} · AI Engineer · Multi-Agent Systems · RAG</p>
        </footer>
    );
}
