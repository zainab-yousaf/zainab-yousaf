"use client";

const projects = [
    {
        title: "DreamDesk: Hotel AI Agent Platform",
        period: "Jan 2026 – Present",
        org: "Personal / Flagship",
        role: "AI Engineer",
        description:
            "Autonomous hotel guest communications platform built on a 4-layer multi-agent graph. Handles bookings, FAQs, and service requests end-to-end with zero human intervention. RAG pipeline over hotel knowledge base via Pinecone, orchestrated with Pydantic AI and MCP tool-calling.",
        challenges: "Multi-agent orchestration, real-time RAG retrieval, reliable tool-calling",
        impact: "100% autonomous guest comms, 0 support staff required",
        skills: ["Pydantic AI", "RAG", "Pinecone", "MCP", "Gemini 2.5", "Next.js", "FastAPI", "Logfire"],
        github: null,
        demo: null,
    },
    {
        title: "AutoMato AI: E-commerce Optimization Platform",
        period: "Jul 2025 – Dec 2025",
        org: "Automato AI",
        role: "AI Engineer",
        description:
            "OpenAI GPT pipeline for automated Amazon product listing optimization. Smart routing with Redis caching and BullMQ async processing. Served 50+ companies with 40–60% reduction in manual effort and measurable gains in search visibility.",
        challenges: "Multi-AI integration, async processing at scale, cost management",
        impact: "50+ companies served, 40–60% effort reduction",
        skills: ["OpenAI", "NestJS", "MongoDB", "Redis", "BullMQ", "React", "Amazon SP-API"],
        github: null,
        demo: null,
    },
    {
        title: "Smart Contract Security: Grey-Box Fuzzing",
        period: "Aug 2023 – Apr 2024",
        org: "FAST-NUCES × DFKI Germany",
        role: "Research Developer",
        description:
            "Information Flow Guided Grey-Box Fuzzing technique for smart contract vulnerability detection. Novel information flow analysis approach that guides the fuzzer more efficiently, improving detection accuracy while reducing computational resource usage by 25%. Validated with international researchers at DFKI Germany.",
        challenges: "Balancing detection accuracy with resource efficiency",
        impact: "Improved detection rates, 25% reduction in resource usage",
        skills: ["Python", "Solidity", "Slither", "Echidna", "Fuzzing", "Static Analysis"],
        github: null,
        demo: null,
    },
    {
        title: "BG Zoom Mac: Video Calling Platform",
        period: "Mar 2025 – Jun 2025",
        org: "KATco",
        role: "iOS / macOS Developer",
        description:
            "Cross-platform video-calling app with real-time background effects supporting Google Meet and Skype. Implemented Swift Concurrency for async streaming and optimized AVFoundation integration for low-latency video/audio across platforms.",
        challenges: "Cross-platform streaming, low latency, real-time background effects",
        impact: "Seamless cross-platform video calling with real-time effects",
        skills: ["Swift", "SwiftUI", "AppKit", "AVFoundation", "Swift Concurrency"],
        github: null,
        demo: null,
    },
    {
        title: "PDF Converter iOS / macOS",
        period: "Nov 2024 – Jun 2025",
        org: "KATco",
        role: "iOS / macOS Developer",
        description:
            "High-performance PDF and image converter. Tackled slow processing times by implementing Swift Concurrency for parallel conversion and optimizing algorithms, resulting in 30% faster processing and 40% reduced system workload.",
        challenges: "Slow processing, high system workload",
        impact: "30% faster processing, 40% reduced workload",
        skills: ["Swift", "SwiftUI", "UIKit", "Cloud Converter API", "Swift Concurrency"],
        github: null,
        demo: "https://apps.apple.com/lv/app/pdf-converter-photo-to-pdf/id6472884610",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="pt-16 pb-10">
            <h2 className="text-xl font-semibold text-[#1a1a18] mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow"
                        style={{ border: "0.5px solid #e0dfd8" }}
                    >
                        <div className="space-y-3">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-xs text-[#8a8a82] mb-1">{project.org} · {project.period}</p>
                                    <h3 className="text-base font-semibold text-[#1a1a18] leading-snug">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-[#5a5a52] px-3 py-1.5 rounded-full transition-colors"
                                            style={{ border: "0.5px solid #d3d1c7" }}
                                        >
                                            Demo ↗
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
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-4 pt-2">
                            {project.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs text-[#5a5a52] px-2.5 py-1 rounded-full"
                                    style={{ background: "#f4f4f0", border: "0.5px solid #e8e7e0" }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
