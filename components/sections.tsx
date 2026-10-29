import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import DreamDeskDiagram from "./DreamDeskDiagram";
import ContactForm from "./ContactForm";
import AskAiButton from "./AskAiButton";
import FadeIn from "./ui/FadeIn";
import { Tags } from "./ui/Tag";
import {
    contact,
    dreamDeskResults,
    education,
    experience,
    focusAreas,
    projects,
    skills,
    type Entry,
    type Project,
} from "@/lib/content";

// Scrolling sections below the hero. Everything is visible; nothing is hidden behind clicks.

const dreamdesk = projects.find((p) => p.caseStudy)!;
const otherProjects = projects.filter((p) => !p.caseStudy);
const dreamdeskJob = experience[0];

// Case study "what I built": the DreamDesk bullets, minus the ones that describe internal
// architecture (kept private).
const PRIVATE = ["Designed a 4-stage", "Built the knowledge-base ingestion", "Connected agents to Gmail"];
const dreamdeskBuilt = (dreamdeskJob.bullets ?? []).filter((b) => !PRIVATE.some((p) => b.startsWith(p)));

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

export const CONTACT_LINKS = [
    { href: `mailto:${contact.email}`, label: contact.email, Icon: Mail, external: false },
    { href: contact.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: contact.github, label: "GitHub", Icon: Github, external: true },
    { href: contact.cv, label: "Résumé (PDF)", Icon: FileText, external: true },
];

/* ---------- Shared building blocks ---------- */

function Section({
    id,
    children,
    className = "",
    divider = true,
}: {
    id: string;
    children: React.ReactNode;
    className?: string;
    divider?: boolean;
}) {
    return (
        <section id={id} className={`container-page ${className}`}>
            <div className={`py-20 sm:py-28 ${divider ? "border-t border-line" : ""}`}>{children}</div>
        </section>
    );
}

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode }) {
    return (
        <FadeIn>
            <header className="mb-12 sm:mb-16 max-w-3xl">
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="font-display font-normal text-espresso tracking-[-0.02em] leading-[1.05] mt-4 text-[clamp(2.25rem,1.6rem+2.4vw,3.5rem)]">
                    {title}
                </h2>
                {intro && <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">{intro}</p>}
            </header>
        </FadeIn>
    );
}

function Bullets({ items, className = "" }: { items: string[]; className?: string }) {
    return (
        <ul className={`space-y-3 ${className}`}>
            {items.map((b) => (
                <li key={b} className="flex gap-4 text-base text-muted leading-relaxed break-inside-avoid">
                    <span className="mt-[0.8em] h-px w-3 bg-gold shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                </li>
            ))}
        </ul>
    );
}

// Small label used inside the case study and project cards
function Label({ children }: { children: React.ReactNode }) {
    return <h3 className="eyebrow mb-3">{children}</h3>;
}

/* ---------- About ---------- */

export function AboutSection() {
    return (
        <Section id="about" divider={false}>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <FadeIn className="lg:col-span-4">
                    <p className="eyebrow">About</p>
                    <Image
                        src="/profileImage.jpg"
                        alt="Portrait of Zainab Yousaf"
                        width={480}
                        height={600}
                        sizes="(min-width: 1024px) 300px, 220px"
                        className="mt-6 w-[220px] lg:w-full lg:max-w-[300px] aspect-[4/5] object-cover rounded-[20px]"
                    />
                </FadeIn>

                <div className="lg:col-span-8">
                    <FadeIn>
                        <h2 className="font-display font-normal text-espresso tracking-[-0.02em] leading-[1.1] text-[clamp(2rem,1.5rem+2vw,3rem)] max-w-[22ch]">
                            I take AI products from unclear requirements to production.
                        </h2>
                        <div className="mt-8 space-y-5 text-lg text-muted leading-relaxed max-w-[62ch]">
                            <p>
                                I own the whole path: scoping features with the product owner, designing the architecture,
                                building the AI and the product around it, and keeping it running. I&apos;m comfortable
                                working independently across time zones.
                            </p>
                            <p>
                                Before DreamDesk, I built a GenAI pipeline at AutoMato AI serving 50+ companies, shipped PDF
                                Converter (live on the App Store, 5.0 rating) and BGZoom for macOS at KATco, and collaborated
                                with DFKI Germany on smart contract security research.
                            </p>
                        </div>
                    </FadeIn>

                    <ul className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
                        {focusAreas.map((f, i) => (
                            <li key={f.title}>
                                <FadeIn delay={i * 0.06} className="border-t border-gold pt-5">
                                    <h3 className="font-display text-xl text-espresso leading-snug">{f.title}</h3>
                                    <p className="mt-2 text-[15px] text-muted leading-relaxed">{f.text}</p>
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

/* ---------- DreamDesk case study ---------- */

function DemoMedia() {
    if (demoFile) {
        const src = `/${demoFile}`;
        return (
            <figure>
                <div className="overflow-hidden rounded-2xl border border-line bg-ivory">
                    {demoFile.endsWith(".gif") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={src} alt={DEMO_CAPTION} className="w-full h-auto" loading="lazy" />
                    ) : (
                        <video src={src} className="w-full h-auto" autoPlay muted loop playsInline preload="metadata" aria-label={DEMO_CAPTION} />
                    )}
                </div>
                <figcaption className="text-sm text-muted mt-3 text-center">{DEMO_CAPTION}</figcaption>
            </figure>
        );
    }
    // No file yet: show a placeholder only while developing locally, never on the live site.
    if (process.env.NODE_ENV === "production") return null;
    return (
        <figure>
            <div className="aspect-video rounded-2xl border-2 border-dashed border-line bg-ivory flex flex-col items-center justify-center gap-2 text-center p-6">
                <p className="eyebrow">dev only · demo placeholder</p>
                <p className="text-base text-muted">
                    Add <code className="font-mono">public/dreamdesk-demo.mp4</code> (or .webm / .gif) and it appears here.
                </p>
            </div>
            <figcaption className="text-sm text-muted mt-3 text-center">{DEMO_CAPTION}</figcaption>
        </figure>
    );
}

export function DreamDeskSection() {
    const hasDemo = Boolean(demoFile) || process.env.NODE_ENV !== "production";
    return (
        <Section id="dreamdesk">
            <FadeIn>
                <header className="max-w-3xl">
                    <p className="eyebrow">Featured project</p>
                    <h2 className="font-display font-normal text-espresso tracking-[-0.025em] leading-none mt-4 text-[clamp(2.75rem,1.8rem+3.6vw,4.75rem)]">
                        DreamDesk AI
                    </h2>
                    <p className="mt-6 text-xl text-espresso/90 leading-relaxed">{dreamdeskJob.summary}</p>
                </header>
                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[15px]">
                    {[
                        ["Role", dreamdesk.role],
                        ["Timeline", dreamdesk.period],
                        ["Company", dreamdesk.org],
                    ].map(([k, v]) => (
                        <div key={k}>
                            <dt className="eyebrow !text-[11px]">{k}</dt>
                            <dd className="mt-1 text-espresso">{v}</dd>
                        </div>
                    ))}
                </dl>
            </FadeIn>

            {hasDemo && (
                <FadeIn className="mt-12">
                    <div className="surface p-4 sm:p-8">
                        <DemoMedia />
                    </div>
                </FadeIn>
            )}

            <FadeIn className="mt-12">
                <figure className="surface px-4 py-8 sm:p-10 lg:p-14">
                    <figcaption className="eyebrow mb-8 sm:mb-10 text-center">How a guest message flows</figcaption>
                    <DreamDeskDiagram large />
                </figure>
            </FadeIn>

            <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
                <FadeIn>
                    <Label>The problem</Label>
                    <p className="text-base text-muted leading-relaxed">
                        Hotels handle guest messages across voice, WhatsApp, email and web chat, often with separate staff for
                        each channel. Guests wait, answers are inconsistent, and reservation changes get lost between systems.
                    </p>
                </FadeIn>
                <FadeIn delay={0.06}>
                    <Label>The solution</Label>
                    <p className="text-base text-muted leading-relaxed">{dreamdesk.description}</p>
                </FadeIn>
                <FadeIn delay={0.12}>
                    <Label>Results</Label>
                    <dl className="space-y-4">
                        {dreamDeskResults.map((r) => (
                            <div key={r.value} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line pb-4 last:border-0 last:pb-0">
                                <dt className="font-display text-3xl text-espresso leading-none whitespace-nowrap min-w-[4.5ch]">{r.value}</dt>
                                <dd className="text-[15px] text-muted">{r.label}</dd>
                            </div>
                        ))}
                    </dl>
                </FadeIn>
            </div>

            <div className="mt-16 pt-12 border-t border-line grid gap-10 lg:grid-cols-12 lg:gap-16">
                <FadeIn className="lg:col-span-4">
                    <h3 className="font-display text-3xl text-espresso leading-tight">What I built</h3>
                    <p className="mt-3 text-base text-muted leading-relaxed">
                        As founding engineer I owned the platform end to end, from the first POC to agents running in live
                        hotels. AI cost per response, latency and agent performance are tracked in analytics.
                    </p>
                </FadeIn>
                <FadeIn delay={0.06} className="lg:col-span-8">
                    <Bullets items={dreamdeskBuilt} />
                    <div className="mt-10">
                        <Label>Technologies</Label>
                        <Tags items={dreamdesk.skills} />
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}

/* ---------- Projects ---------- */

// "AutoMato AI: E-commerce Optimization Platform" → name + kind
function splitTitle(p: Project) {
    const [name, kind] = p.title.split(": ");
    return { name, kind: kind ?? p.org };
}

function ProjectCard({ p }: { p: Project }) {
    const { name, kind } = splitTitle(p);
    return (
        <article className="surface h-full p-7 sm:p-9 flex flex-col">
            <p className="text-[13px] text-muted">
                {kind} · {p.period}
            </p>
            <h3 className="mt-2 font-display text-[2rem] leading-tight text-espresso">{name}</h3>
            <p className="mt-3 text-[17px] text-espresso/90 leading-relaxed">{p.tagline}</p>

            <div className="mt-6">
                <p className="eyebrow !text-[11px] mb-1.5">My contribution · {p.role}</p>
                <p className="text-[15px] text-muted leading-relaxed">{p.contribution}</p>
            </div>

            <p className="mt-6 pl-4 border-l-2 border-amber text-[15px] font-medium text-espresso leading-relaxed">{p.impact}</p>

            <div className="mt-auto pt-7 flex flex-wrap items-end justify-between gap-4">
                <p className="text-[13px] text-muted leading-relaxed max-w-[42ch]">{p.skills.join(" · ")}</p>
                {p.demo && (
                    <a href={p.demo.href} target="_blank" rel="noopener noreferrer" className="link text-sm inline-flex items-center gap-1 shrink-0">
                        {p.demo.label.replace(" ↗", "")}
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                )}
            </div>
        </article>
    );
}

export function ProjectsSection() {
    return (
        <Section id="projects">
            <SectionHeader
                eyebrow="Selected projects"
                title="More work, from GenAI pipelines to native apps"
                intro="E-commerce AI, security research and production apps on the App Store."
            />
            <div className="grid gap-5 md:grid-cols-2">
                {otherProjects.map((p, i) => (
                    <FadeIn key={p.title} delay={(i % 2) * 0.06} className="h-full">
                        <ProjectCard p={p} />
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}

/* ---------- Experience ---------- */

function TimelineRow({ when, where, current, children }: { when: string; where?: string; current?: boolean; children: React.ReactNode }) {
    return (
        <li className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-12 py-10 border-t border-line first:border-t-0 first:pt-0">
            <div>
                <p className="text-[15px] font-medium text-espresso">{when}</p>
                {where && <p className="text-sm text-muted mt-0.5">{where}</p>}
                {current && (
                    <p className="mt-3 inline-flex items-center gap-2 text-[13px] text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden="true" />
                        Current role
                    </p>
                )}
            </div>
            <div className="min-w-0 max-w-3xl">{children}</div>
        </li>
    );
}

function RoleTitle({ job }: { job: Entry }) {
    return (
        <>
            <h3 className="font-display text-[1.75rem] leading-tight text-espresso">{job.title}</h3>
            {job.company && <p className="mt-1 text-base font-semibold text-terracotta-ink">{job.company}</p>}
        </>
    );
}

export function ExperienceSection() {
    const [current, ...rest] = experience;
    const roles = rest.filter((j) => j.bullets);
    const teaching = rest.find((j) => !j.bullets && j.subRoles);

    return (
        <Section id="experience">
            <SectionHeader eyebrow="Experience" title="Where I’ve built" />
            <ol>
                {/* Current role: kept short; the details live in the case study. */}
                <TimelineRow when={current.period} where={current.location} current>
                    <FadeIn>
                        <RoleTitle job={current} />
                        {current.summary && <p className="mt-4 text-base text-muted leading-relaxed">{current.summary}</p>}
                        <Bullets
                            className="mt-4"
                            items={(current.bullets ?? []).filter((b) =>
                                ["Delivered the POC", "Built multi-channel", "Built voice agents"].some((p) => b.startsWith(p))
                            )}
                        />
                        <a href="#dreamdesk" className="link mt-5 inline-flex items-center gap-1.5 text-[15px]">
                            Read the DreamDesk case study <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </FadeIn>
                </TimelineRow>

                {roles.map((job) => (
                    <TimelineRow key={job.title} when={job.period} where={job.location || undefined}>
                        <FadeIn>
                            <RoleTitle job={job} />
                            {job.summary && <p className="mt-2 text-base italic text-muted">{job.summary}</p>}
                            <Bullets className="mt-5" items={highlights(job)} />
                            {job.note && <p className="mt-4 text-sm text-muted leading-relaxed">{job.note}</p>}
                            {job.subRoles?.map((sub) => (
                                <p key={sub.title} className="mt-5 text-[15px] text-muted leading-relaxed">
                                    <span className="font-medium text-espresso">Earlier: {sub.title}</span>
                                    {sub.meta && <span> ({sub.meta})</span>}. {sub.bullets.join(" ")}
                                </p>
                            ))}
                            {job.tech && <p className="mt-5 text-[13px] text-muted">{job.tech.join(" · ")}</p>}
                        </FadeIn>
                    </TimelineRow>
                ))}

                {teaching && (
                    <TimelineRow when={teaching.period} where={teaching.location}>
                        <FadeIn>
                            <RoleTitle job={teaching} />
                            <ul className="mt-4 divide-y divide-line">
                                {teaching.subRoles!.map((sub) => (
                                    <li key={sub.title} className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-6">
                                        <span className="text-base text-espresso">{sub.title}</span>
                                        <span className="text-[13px] text-muted shrink-0">{sub.meta}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </TimelineRow>
                )}

                <TimelineRow when={education.period} where="Education">
                    <FadeIn>
                        <h3 className="font-display text-[1.75rem] leading-tight text-espresso">{education.degree}</h3>
                        <p className="mt-1 text-base font-semibold text-terracotta-ink">{education.school}</p>
                        <p className="mt-2 text-[15px] text-muted">{education.honours}</p>
                    </FadeIn>
                </TimelineRow>
            </ol>
        </Section>
    );
}

/* ---------- Skills ---------- */

export function SkillsSection() {
    return (
        <Section id="skills">
            <SectionHeader eyebrow="Technical skills" title="Tools I build with" />
            <dl>
                {Object.entries(skills).map(([group, items]) => (
                    <FadeIn key={group} className="grid gap-3 md:grid-cols-[260px_1fr] md:gap-12 py-6 border-t border-line">
                        <dt className="font-display text-xl text-espresso leading-snug">{group}</dt>
                        <dd>
                            <Tags items={items} />
                        </dd>
                    </FadeIn>
                ))}
            </dl>
        </Section>
    );
}

/* ---------- Contact ---------- */

export function ContactSection() {
    return (
        <section id="contact" className="bg-espresso text-ivory">
            <div className="container-page py-20 sm:py-28 grid gap-14 lg:grid-cols-12 lg:gap-16">
                <FadeIn className="lg:col-span-6">
                    <p className="eyebrow !text-gold">Contact</p>
                    <h2 className="font-display font-normal tracking-[-0.02em] leading-[1.05] mt-4 text-[clamp(2.5rem,1.7rem+3vw,4rem)]">
                        Let&apos;s build something useful.
                    </h2>
                    <p className="mt-6 text-lg text-ivory/80 leading-relaxed max-w-[44ch]">
                        I&apos;m open to remote AI Engineer, AI Automation and full-stack roles: full-time, part-time or
                        contract. The quickest way to reach me is email.
                    </p>
                    <a href={`mailto:${contact.email}`} className="btn btn-primary mt-9">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        Email me
                    </a>

                    <ul className="mt-12 border-t border-ivory/15">
                        {CONTACT_LINKS.map(({ href, label, Icon, external }) => (
                            <li key={label} className="border-b border-ivory/15">
                                <a
                                    href={href}
                                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="group flex items-center gap-4 py-4 text-base text-ivory hover:text-amber transition-colors break-all"
                                >
                                    <Icon className="w-4 h-4 shrink-0 text-gold" aria-hidden="true" />
                                    <span className="flex-1">{label}</span>
                                    <ArrowUpRight className="w-4 h-4 shrink-0 text-ivory/50 group-hover:text-amber transition-colors" aria-hidden="true" />
                                    {external && <span className="sr-only">(opens in a new tab)</span>}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-[15px] text-ivory/70">
                        Prefer a quick answer? <AskAiButton className="font-semibold text-ivory underline underline-offset-4 decoration-ivory/40 hover:decoration-ivory" />
                    </p>
                </FadeIn>

                <FadeIn delay={0.06} className="lg:col-span-6">
                    <div className="rounded-[20px] bg-cream text-espresso p-6 sm:p-9">
                        <h3 className="font-display text-2xl leading-tight">Send a message</h3>
                        <p className="mt-1 mb-6 text-[15px] text-muted">It goes straight to my inbox.</p>
                        <ContactForm />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* ---------- Footer ---------- */

export function SiteFooter() {
    return (
        <footer className="bg-espresso text-ivory/70">
            <div className="container-page">
                <div className="py-8 border-t border-ivory/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-center sm:text-left">
                    <p className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-display text-lg text-ivory">Zainab Yousaf</span>
                        <span>© {new Date().getFullYear()} · AI Engineer · Full-Stack Developer</span>
                    </p>
                    <a href="#overview" className="hover:text-ivory transition-colors">
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}
