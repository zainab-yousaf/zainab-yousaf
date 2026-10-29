// All portfolio content in one place, shared by the bento tiles and their detail views.
// Keep in sync with lib/about-me.ts (what the "Ask my AI" chat knows).

export type SubRole = {
    title: string;
    meta?: string;
    bullets: string[];
};

export type Entry = {
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

export const experience: Entry[] = [
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

export type Project = {
    title: string;
    /** One-line value proposition shown on the project card */
    tagline: string;
    /** What Zainab personally built, in one or two sentences */
    contribution: string;
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

export const projects: Project[] = [
    {
        title: "DreamDesk: Hotel AI Agent Platform",
        tagline: "One AI platform that answers hotel guests on every channel.",
        contribution: "Owned the architecture and delivered the POC in 4 weeks, then built the agents, voice pipeline, integrations and dashboard.",
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
        tagline: "A GenAI pipeline that writes SEO-optimized Amazon listings from live competitor data.",
        contribution:
            "Built the pipeline: Amazon Seller API keyword extraction, OpenAI content generation, NestJS microservices on PostgreSQL and a React dashboard to review, edit and publish listings.",
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
        tagline: "Information-flow analysis that steers a fuzzer toward the riskiest smart-contract code.",
        contribution:
            "Designed the algorithm combining static analysis with grey-box fuzzing, and validated it with researchers from DFKI Germany and FAST-NUCES.",
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
        tagline: "Real-time background effects for Zoom, Google Meet, Teams and Skype on macOS.",
        contribution:
            "Built async video streaming with Swift Concurrency and optimized the AVFoundation integration for low-latency video and audio.",
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
        tagline: "Photo-to-PDF conversion and editing for iOS and macOS.",
        contribution:
            "Built it end to end: image-to-PDF, PDF rotation, resize, crop and watermarking. Swift Concurrency made processing 30% faster; the Cloud Converter API cut manual effort by 40%.",
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

// Grouped for the Skills section. Every tool listed here has been used in the work above.
export const skills: Record<string, string[]> = {
    "AI Engineering & LLMs": [
        "Pydantic AI",
        "LangChain",
        "LangGraph",
        "RAG",
        "MCP",
        "Tool Calling",
        "Multi-Agent Systems",
        "Prompt Engineering",
        "OpenAI",
        "Gemini",
        "Pinecone",
    ],
    "Voice AI": ["VAPI", "Retell", "Text-to-Speech", "Voice Cloning"],
    "Frontend Development": ["Next.js", "React", "TypeScript", "React Flow", "Tailwind CSS"],
    "Backend Development": ["Python", "FastAPI", "Node.js", "NestJS", "REST APIs", "Microservices"],
    "Databases & Infrastructure": ["PostgreSQL", "MongoDB", "Redis", "Docker", "GCP Cloud Run", "GitHub Actions"],
    "Integrations & Automation": [
        "Webhooks",
        "Mews PMS",
        "Microsoft Graph",
        "Gmail",
        "Amazon Seller API",
        "Firecrawl",
        "Logfire",
        "PostHog",
    ],
    "Native Apps": ["Swift", "SwiftUI", "UIKit", "AppKit", "Swift Concurrency"],
    "Research & Security": ["Static Analysis", "Grey-Box Fuzzing", "Solidity", "Slither", "Echidna", "Foundry"],
};

// The three areas the About section leads with
export const focusAreas = [
    {
        title: "AI agents & voice AI",
        text: "Multi-channel agents, voice agents on VAPI and Retell, RAG pipelines and MCP tool calling, with confidence-based escalation to humans.",
    },
    {
        title: "Full-stack products",
        text: "FastAPI and NestJS services, Next.js and React dashboards, PostgreSQL, from a 4-week POC to production.",
    },
    {
        title: "Integrations & automation",
        text: "Hotel PMS, Gmail, Microsoft Graph and Amazon Seller API integrations, plus cost, latency and performance tracking.",
    },
];

export const dreamDeskResults = [
    { value: "3 hotels", label: "live in production" },
    { value: "~1.6s", label: "voice agent response time" },
    { value: "4 weeks", label: "to deliver the POC" },
];

export const education = {
    degree: "BS Computer Science",
    school: "FAST-NUCES, Faisalabad",
    period: "2020 – 2024",
    honours: "Dean's List (2x)",
};

export const contact = {
    email: "zainab.yousaf161@gmail.com",
    linkedin: "https://www.linkedin.com/in/zainabyousaf/",
    github: "https://github.com/zainab-yousaf",
    cv: "/Zainab_Yousaf_Resume.pdf",
    availability: "Open to remote roles: full-time, part-time or contract",
};
