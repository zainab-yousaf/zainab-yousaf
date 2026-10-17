import TimelineRail from "./ui/TimelineRail";
import FadeIn from "./ui/FadeIn";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import { Tags } from "./ui/Tag";

type SubRole = {
    title: string;
    meta?: string;
    bullets: string[];
};

type Entry = {
    title: string;
    company?: string;
    location: string;
    period: string;
    summary?: string;
    bullets?: string[];
    note?: string;
    subRoles?: SubRole[];
    tech?: string[];
};

const experience: Entry[] = [
    {
        title: "Founding Engineer (Full-Stack AI)",
        company: "DreamDesk AI",
        location: "United Kingdom (Remote)",
        period: "Jan 2026 – Present",
        summary: "Hospitality AI platform that answers hotel guest queries across every channel from one place.",
        bullets: [
            "Took ownership of the architecture and feature scoping, working directly with the product owner on features and R&D.",
            "Delivered the POC in 4 weeks, owning it end to end: requirements, feature design, build and testing.",
            "Built multi-channel AI agents across voice calls, WhatsApp, email and web chat, now live across 3 hotels.",
            "Built voice agents on VAPI and Retell, optimizing tool calls and MCP integrations to cut end-to-end response time to ~1.6s, including knowledge-base retrieval and live reservation lookups.",
            "Integrated Mews PMS so reservations stay in sync in real time.",
            "Designed a 4-stage Pydantic AI agent graph (understand → plan → execute → commit) with zero-LLM-cost routing and a single database write at the commit stage for data consistency.",
            "Added confidence-based auto-escalation so low-confidence replies go to hotel staff instead of guests.",
            "Built the knowledge-base ingestion pipeline (Firecrawl, PyMuPDF → Pinecone) with a conflict-detection agent that flags contradicting information across hotel documents.",
            "Connected agents to Gmail, Microsoft Graph and Google Maps through MCP tool calling.",
            "Built analytics tracking AI cost per response, latency and agent performance, with Logfire tracing and PostHog product analytics.",
            "Built a multi-tenant Next.js dashboard with a React Flow workflow builder and Clerk authentication.",
        ],
        tech: ["Python", "FastAPI", "Pydantic AI", "VAPI", "Retell", "MCP", "Pinecone", "PostgreSQL", "Next.js", "React Flow", "GCP Cloud Run", "GitHub Actions", "Logfire", "PostHog"],
    },
    {
        title: "Software Engineer",
        company: "AutoMato AI",
        location: "Lahore, Pakistan",
        period: "Jul 2025 – Dec 2025",
        bullets: [
            "Built a GenAI pipeline that automated Amazon product listings for 50+ companies and sellers, cutting manual effort by 40–60%.",
            "Integrated Amazon Seller API to pull live competitor data and extract high-ranking keywords.",
            "Used OpenAI to generate SEO-optimized listing content automatically.",
            "Built NestJS microservices with PostgreSQL.",
            "Built a React dashboard for end-to-end listing review, editing and publishing.",
            "Maintained CI/CD pipelines and code quality through structured code reviews; debugged and resolved production issues.",
        ],
        tech: ["NestJS", "TypeScript", "React", "PostgreSQL", "OpenAI API", "Amazon Seller API"],
    },
    {
        title: "Software Engineer (iOS/macOS)",
        company: "KATco",
        location: "Faisalabad, Pakistan",
        period: "Jan 2025 – Jul 2025",
        bullets: [
            "Built PDF Converter (iOS/macOS) end to end: image-to-PDF conversion, PDF rotation, and image resize, crop and watermarking. Live in production on the App Store with a 5.0 rating.",
            "Cut manual processing effort by 40% through Cloud Converter API integration.",
            "Improved processing speed by 30% with Swift Concurrency.",
            "Shipped BGZoom, a macOS video-calling app with real-time background effects for Zoom, Google Meet, Teams and Skype.",
        ],
        tech: ["Swift", "SwiftUI", "UIKit", "AppKit", "Swift Concurrency", "Cloud Converter API"],
        subRoles: [
            {
                title: "Associate Software Engineer",
                meta: "Jul 2024 – Dec 2024",
                bullets: [
                    "Built iOS/macOS features in Swift and SwiftUI for production apps; promoted to Software Engineer.",
                ],
            },
        ],
    },
    {
        title: "Research Collaborator",
        company: "DFKI Germany × FAST-NUCES",
        location: "",
        period: "Aug 2023 – Apr 2024",
        summary: "Information Flow Guided Grey-Box Fuzzing",
        bullets: [
            "Designed an algorithm combining static analysis with grey-box fuzzing to improve smart contract vulnerability detection while cutting resource usage by 25%.",
            "Information-flow analysis guides the fuzzer toward high-risk code paths, so it finds more vulnerabilities with less computation.",
            "Validated results with researchers from DFKI Germany and FAST-NUCES and presented findings at both institutions.",
        ],
        note: "Collaborators: Dr. Muhammad Hassan (DFKI, Germany), Dr. Affan Rauf (NUCES, Pakistan), Muhammad N Jalil (Truscova, Abu Dhabi).",
        tech: ["Python", "Solidity", "Echidna", "Foundry", "Slither"],
    },
    {
        title: "Teaching & Mentoring",
        location: "Faisalabad, Pakistan",
        period: "2021 – 2024",
        subRoles: [
            {
                title: "Programming Mentor, WEEPRO CODERS",
                meta: "Jun 2023 – Jul 2024",
                bullets: [
                    "Mentored students on AI concepts and hands-on projects; co-designed curriculum-aligned tasks with faculty.",
                ],
            },
            {
                title: "Teaching Assistant, Artificial Intelligence, FAST-NUCES",
                meta: "Aug 2023 – Jan 2024",
                bullets: ["Designed assignments, graded work and ran practical sessions."],
            },
            {
                title: "Teaching Assistant, Physics, FAST-NUCES",
                meta: "Sep 2021 – Jan 2022",
                bullets: ["Created assignments, graded work and conducted oral exams."],
            },
        ],
    },
];

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="space-y-1.5">
            {items.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="text-accent/70 shrink-0 font-mono" aria-hidden="true">
                        ›
                    </span>
                    <span>{b}</span>
                </li>
            ))}
        </ul>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="defer-render max-w-[1100px] mx-auto px-4 sm:px-6 pt-24">
            <SectionHeading eyebrow="// experience" title="Where I've worked" />
            <div className="relative">
                <TimelineRail />
                <ol className="space-y-5">
                    {experience.map((job, idx) => (
                        <li key={job.title} className="relative pl-8 sm:pl-10">
                            <span
                                className={`absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2 border-accent ${
                                    idx === 0 ? "bg-accent shadow-[0_0_12px_var(--color-accent)]" : "bg-bg"
                                }`}
                                aria-hidden="true"
                            />
                            <FadeIn fromRight>
                            <SpotlightCard lift={false} className="p-5 sm:p-6 space-y-3">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4">
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-fg leading-snug">{job.title}</h3>
                                        <p className="text-sm text-fg/80 mt-0.5">
                                            {[job.company, job.location].filter(Boolean).join(" · ")}
                                        </p>
                                    </div>
                                    <p className="font-mono text-xs text-accent md:pt-1 shrink-0">{job.period}</p>
                                </div>

                                {job.summary && <p className="text-sm text-fg/80 italic">{job.summary}</p>}
                                {job.bullets && <Bullets items={job.bullets} />}
                                {job.note && <p className="text-xs text-subtle leading-relaxed">{job.note}</p>}

                                {job.subRoles && (
                                    <div className="space-y-3 pt-1">
                                        {job.subRoles.map((sub) => (
                                            <div key={sub.title} className="pl-4 border-l-2 border-line">
                                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-0.5 md:gap-4 mb-1">
                                                    <p className="text-sm font-medium text-fg">{sub.title}</p>
                                                    {sub.meta && <p className="font-mono text-xs text-subtle shrink-0">{sub.meta}</p>}
                                                </div>
                                                <Bullets items={sub.bullets} />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {job.tech && (
                                    <div className="pt-2">
                                        <Tags items={job.tech} />
                                    </div>
                                )}
                            </SpotlightCard>
                            </FadeIn>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
