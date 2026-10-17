import CaseStudyToggle from "./CaseStudyToggle";
import DreamDeskDiagram from "./DreamDeskDiagram";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { Tags } from "./ui/Tag";

type Project = {
    title: string;
    period: string;
    org: string;
    role: string;
    description: string;
    impact: string;
    skills: string[];
    github: string | null;
    demo: { href: string; label: string } | null;
    caseStudy?: boolean;
};

const projects: Project[] = [
    {
        title: "DreamDesk: Hotel AI Agent Platform",
        period: "Jan 2026 – Present",
        org: "DreamDesk AI · UK (Remote)",
        role: "Founding Engineer (Full-Stack AI)",
        description:
            "Multi-channel AI agents that answer guests on every channel from one platform, look up live reservations, and escalate to staff when they're not confident. Works across voice calls, WhatsApp, email and web chat.",
        impact: "Live across 3 hotels, ~1.6s voice agent response time",
        skills: ["Python", "FastAPI", "Pydantic AI", "VAPI", "Retell", "MCP", "Pinecone", "PostgreSQL", "Next.js", "GCP Cloud Run", "Logfire", "PostHog"],
        github: null,
        demo: null,
        caseStudy: true,
    },
    {
        title: "AutoMato AI: E-commerce Optimization Platform",
        period: "Jul 2025 – Dec 2025",
        org: "AutoMato AI",
        role: "Software Engineer",
        description:
            "GenAI pipeline that automated Amazon product listings for 50+ companies and sellers. Pulls live competitor data through the Amazon Seller API to extract high-ranking keywords, then uses OpenAI to generate SEO-optimized listing content. Built on NestJS microservices with PostgreSQL and a React dashboard for listing review, editing and publishing.",
        impact: "50+ companies served, 40–60% less manual effort",
        skills: ["NestJS", "React", "TypeScript", "PostgreSQL", "OpenAI API", "Amazon Seller API"],
        github: null,
        demo: null,
    },
    {
        title: "Smart Contract Security: Grey-Box Fuzzing",
        period: "Aug 2023 – Apr 2024",
        org: "DFKI Germany × FAST-NUCES",
        role: "Research Collaborator",
        description:
            "Information Flow Guided Grey-Box Fuzzing for smart contract vulnerability detection. Combines static analysis with grey-box fuzzing: information-flow analysis guides the fuzzer toward high-risk code paths, so it improves vulnerability detection while cutting resource usage by 25%. Validated with researchers from DFKI Germany and FAST-NUCES.",
        impact: "Improves vulnerability detection while cutting resource usage by 25%",
        skills: ["Python", "Solidity", "Slither", "Echidna", "Foundry", "Static Analysis"],
        github: null,
        demo: null,
    },
    {
        title: "BGZoom: macOS Video Calling App",
        period: "Mar 2025 – Jun 2025",
        org: "KATco",
        role: "Software Engineer (iOS/macOS)",
        description:
            "macOS video-calling app with real-time background effects for Zoom, Google Meet, Teams and Skype. Implemented Swift Concurrency for async streaming and optimized AVFoundation integration for low-latency video and audio.",
        impact: "Shipped for macOS with real-time background effects",
        skills: ["Swift", "SwiftUI", "AppKit", "AVFoundation", "Swift Concurrency"],
        github: null,
        demo: null,
    },
    {
        title: "PDF Converter iOS / macOS",
        period: "Nov 2024 – Jun 2025",
        org: "KATco",
        role: "Software Engineer (iOS/macOS)",
        description:
            "PDF and image converter built end to end: image-to-PDF conversion, PDF rotation, and image resize, crop and watermarking. Live on the App Store with a 5.0 rating. Swift Concurrency improved processing speed by 30%, and Cloud Converter API integration cut manual processing effort by 40%.",
        impact: "Live on the App Store with a 5.0 rating",
        skills: ["Swift", "SwiftUI", "UIKit", "Cloud Converter API", "Swift Concurrency"],
        github: null,
        demo: { href: "https://apps.apple.com/lv/app/pdf-converter-photo-to-pdf/id6472884610", label: "App Store ↗" },
    },
];

const dreamDeskResults = [
    { value: "3 hotels", label: "live in production" },
    { value: "~1.6s", label: "voice agent response time" },
    { value: "4 weeks", label: "to deliver the POC" },
];

// Bento placement on desktop: DreamDesk is the big 2×2 tile; PDF Converter spans two columns.
const span: Record<string, string> = {
    "PDF Converter iOS / macOS": "md:col-span-2",
};

function Meta({ project }: { project: Project }) {
    return (
        <div className="space-y-1 font-mono text-[11px]">
            <div className="flex gap-3">
                <span className="text-subtle w-14 shrink-0">role</span>
                <span className="text-fg/85">{project.role}</span>
            </div>
            <div className="flex gap-3">
                <span className="text-subtle w-14 shrink-0">impact</span>
                <span className="text-fg/85">{project.impact}</span>
            </div>
        </div>
    );
}

function Header({ project, big }: { project: Project; big?: boolean }) {
    return (
        <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
                <p className="font-mono text-[11px] text-subtle mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.caseStudy && (
                        <span className="text-[10px] font-semibold text-bg bg-accent px-2 py-0.5 rounded-full">current role</span>
                    )}
                    <span>
                        {project.org} · {project.period}
                    </span>
                </p>
                <h3 className={`font-display font-bold text-fg leading-snug ${big ? "text-2xl md:text-3xl" : "text-lg"}`}>
                    {project.title}
                </h3>
            </div>
            {project.demo && (
                <a
                    href={project.demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[11px] text-accent px-3 py-1.5 rounded-full border border-accent/40 hover:bg-accent/10 transition-colors"
                >
                    {project.demo.label}
                </a>
            )}
        </div>
    );
}

function DreamDeskTile({ project }: { project: Project }) {
    return (
        <SpotlightCard lift={false} className="h-full p-5 sm:p-7 flex flex-col gap-5">
            <Header project={project} big />
            <p className="text-[15px] text-muted leading-relaxed">{project.description}</p>

            <DreamDeskDiagram />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {dreamDeskResults.map((r) => (
                    <div
                        key={r.value}
                        className="rounded-xl border border-line bg-surface-2 px-4 py-3 sm:p-4 flex items-baseline gap-3 sm:block"
                    >
                        <div className="font-display text-xl sm:text-2xl font-bold text-accent whitespace-nowrap">{r.value}</div>
                        <div className="font-mono text-[11px] text-muted sm:mt-1 leading-snug">{r.label}</div>
                    </div>
                ))}
            </div>

            <Meta project={project} />

            <CaseStudyToggle>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="rounded-xl border border-line bg-surface-2 p-4">
                                <h4 className="font-mono text-[11px] text-accent mb-2">problem</h4>
                                <p className="text-sm text-fg/85 leading-relaxed">
                                    Hotels handle guest messages across voice, WhatsApp, email and web chat, often with
                                    separate staff for each channel. Guests wait, answers are inconsistent, and
                                    reservation changes get lost between systems.
                                </p>
                            </div>
                            <div className="rounded-xl border border-line bg-surface-2 p-4">
                                <h4 className="font-mono text-[11px] text-accent mb-2">what I built</h4>
                                <p className="text-sm text-fg/85 leading-relaxed">
                                    Multi-channel AI agents that answer guests on every channel from one platform, look
                                    up live reservations, and escalate to staff when they&apos;re not confident.
                                </p>
                            </div>
                        </div>
                        <p className="font-mono text-[11px] text-muted mt-3">
                            ✓ AI cost per response, latency and agent performance tracked in analytics
                        </p>
            </CaseStudyToggle>

            <div className="mt-auto pt-1">
                <Tags items={project.skills} />
            </div>
        </SpotlightCard>
    );
}

function ProjectTile({ project }: { project: Project }) {
    return (
        <SpotlightCard className="h-full p-5 sm:p-6 flex flex-col gap-4">
            <Header project={project} />
            <p className="text-sm text-muted leading-relaxed">{project.description}</p>
            <Meta project={project} />
            <div className="mt-auto pt-1">
                <Tags items={project.skills} />
            </div>
        </SpotlightCard>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="defer-render max-w-[1100px] mx-auto px-4 sm:px-6 pt-24">
            <SectionHeading eyebrow="// projects" title="Selected work" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                    <FadeIn
                        key={project.title}
                        delay={Math.min(i, 3) * 0.06}
                        className={project.caseStudy ? "md:col-span-2 md:row-span-2" : span[project.title] ?? ""}
                    >
                        {project.caseStudy ? <DreamDeskTile project={project} /> : <ProjectTile project={project} />}
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
