"use client";

import { useState } from "react";
import DreamDeskDiagram from "./DreamDeskDiagram";

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
        role: "Founding Engineer",
        description:
            "Multi-channel AI agents that answer guests on every channel from one platform, look up live reservations, and escalate to staff when they're not confident. Built on a 4-stage Pydantic AI agent graph with RAG over hotel knowledge via Pinecone and MCP tool calling, across voice calls, WhatsApp, email and web chat.",
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
    "Live across 3 hotels",
    "~1.6s voice agent response time",
    "POC delivered in 4 weeks",
    "AI cost per response, latency and agent performance tracked in analytics",
];

function Tags({ items }: { items: string[] }) {
    return (
        <div className="flex flex-wrap gap-1.5">
            {items.map((skill) => (
                <span
                    key={skill}
                    className="text-xs text-[#5a5a52] px-2.5 py-1 rounded-full"
                    style={{ background: "#f4f4f0", border: "0.5px solid #e8e7e0" }}
                >
                    {skill}
                </span>
            ))}
        </div>
    );
}

function CaseStudy({ tech }: { tech: string[] }) {
    return (
        <div id="dreamdesk-case-study" className="space-y-6 pt-5 mt-2" style={{ borderTop: "0.5px solid #e0dfd8" }}>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5" style={{ background: "#f8f8f6", border: "0.5px solid #e8e7e0" }}>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[#8a8a82] mb-2">Problem</h4>
                    <p className="text-sm text-[#3a3a32] leading-relaxed">
                        Hotels handle guest messages across voice, WhatsApp, email and web chat, often with separate staff
                        for each channel. Guests wait, answers are inconsistent, and reservation changes get lost between
                        systems.
                    </p>
                </div>
                <div className="rounded-xl p-5" style={{ background: "#f8f8f6", border: "0.5px solid #e8e7e0" }}>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[#8a8a82] mb-2">What I built</h4>
                    <p className="text-sm text-[#3a3a32] leading-relaxed">
                        Multi-channel AI agents that answer guests on every channel from one platform, look up live
                        reservations, and escalate to staff when they&apos;re not confident.
                    </p>
                </div>
            </div>

            <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-[#8a8a82] mb-3">How it works</h4>
                <DreamDeskDiagram />
            </div>

            <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-[#8a8a82] mb-3">Results</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {dreamDeskResults.map((r) => (
                        <li
                            key={r}
                            className="flex gap-2 text-sm text-[#3a3a32] rounded-xl px-4 py-3"
                            style={{ border: "0.5px solid #e0dfd8" }}
                        >
                            <span className="text-[#22a06b] shrink-0" aria-hidden="true">
                                ✓
                            </span>
                            {r}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-[#8a8a82] mb-3">Tech</h4>
                <Tags items={tech} />
            </div>
        </div>
    );
}

export default function Projects() {
    const [caseStudyOpen, setCaseStudyOpen] = useState(false);

    return (
        <section id="projects" className="pt-16 pb-10">
            <h2 className="text-xl font-semibold text-[#1a1a18] mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project) => {
                    const expanded = project.caseStudy && caseStudyOpen;
                    return (
                        <div
                            key={project.title}
                            className={`bg-white rounded-2xl p-6 flex flex-col justify-between ${expanded ? "" : "lift"} ${
                                expanded ? "md:col-span-2" : ""
                            }`}
                            style={{ border: "0.5px solid #e0dfd8" }}
                        >
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-xs text-[#8a8a82] mb-1">
                                            {project.org} · {project.period}
                                        </p>
                                        <h3 className="text-base font-semibold text-[#1a1a18] leading-snug">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                        {project.demo && (
                                            <a
                                                href={project.demo.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-[#5a5a52] px-3 py-1.5 rounded-full transition-colors"
                                                style={{ border: "0.5px solid #d3d1c7" }}
                                            >
                                                {project.demo.label}
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-[#5a5a52] px-3 py-1.5 rounded-full transition-colors"
                                                style={{ border: "0.5px solid #d3d1c7" }}
                                            >
                                                GitHub ↗
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-[#5a5a52] leading-relaxed">{project.description}</p>

                                <div className="space-y-1 pt-1">
                                    <div className="flex gap-2 text-xs">
                                        <span className="text-[#8a8a82] w-16 shrink-0">Role</span>
                                        <span className="text-[#3a3a32]">{project.role}</span>
                                    </div>
                                    <div className="flex gap-2 text-xs">
                                        <span className="text-[#8a8a82] w-16 shrink-0">Impact</span>
                                        <span className="text-[#3a3a32]">{project.impact}</span>
                                    </div>
                                </div>

                                {project.caseStudy && (
                                    <button
                                        type="button"
                                        onClick={() => setCaseStudyOpen((o) => !o)}
                                        aria-expanded={caseStudyOpen}
                                        aria-controls="dreamdesk-case-study"
                                        className="text-xs font-medium text-white bg-[#1a1a18] px-4 py-2 rounded-full hover:bg-[#333330] transition-colors"
                                    >
                                        {caseStudyOpen ? "Hide case study ↑" : "Read case study ↓"}
                                    </button>
                                )}

                                {expanded && <CaseStudy tech={project.skills} />}
                            </div>

                            {!expanded && (
                                <div className="mt-4 pt-2">
                                    <Tags items={project.skills} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
