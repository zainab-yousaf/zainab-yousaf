import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import FadeIn from "./ui/FadeIn";
import { Tags } from "./ui/Tag";

const skills: Record<string, string[]> = {
    "AI & Agents": [
        "Pydantic AI",
        "LangChain",
        "LangGraph",
        "RAG",
        "MCP",
        "Tool Calling",
        "Prompt Engineering",
        "OpenAI",
        "Gemini",
        "Multi-Agent Systems",
    ],
    "Voice AI": ["VAPI", "Retell", "Text-to-Speech", "Voice Cloning"],
    Backend: [
        "Python",
        "FastAPI",
        "Node.js",
        "NestJS",
        "TypeScript",
        "REST APIs",
        "Webhooks",
        "Microservices",
    ],
    Data: ["PostgreSQL", "MongoDB", "Redis", "Pinecone"],
    "Infra & Observability": ["Docker", "GCP Cloud Run", "GitHub Actions", "Logfire", "PostHog"],
    Frontend: ["Next.js", "React", "React Flow", "Tailwind CSS"],
    Mobile: ["Swift", "SwiftUI", "UIKit", "AppKit", "Swift Concurrency"],
    "Research & Security": [
        "Static Analysis",
        "Grey-Box Fuzzing",
        "Solidity",
        "Slither",
        "Echidna",
        "Foundry",
    ],
};

// Headline tools for the marquee (all from the groups below).
const MARQUEE = [
    "Pydantic AI", "LangGraph", "RAG", "MCP", "VAPI", "Retell", "Python", "FastAPI", "Next.js",
    "TypeScript", "PostgreSQL", "Pinecone", "GCP Cloud Run", "Logfire", "Swift",
];

export default function Skills() {
    return (
        <section id="skills" className="defer-render max-w-[1100px] mx-auto px-4 sm:px-6 pt-24">
            <SectionHeading eyebrow="// skills" title="Tools I build with" />

            <div className="marquee-mask overflow-hidden mb-8" aria-hidden="true">
                <div className="marquee-track flex w-max gap-3">
                    {[...MARQUEE, ...MARQUEE].map((t, i) => (
                        <span
                            key={i}
                            className="font-mono text-sm text-fg/80 px-4 py-2 rounded-full border border-line bg-surface whitespace-nowrap"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.entries(skills).map(([category, items], i) => (
                    <FadeIn key={category} delay={(i % 4) * 0.05} className="h-full">
                        <SpotlightCard className="h-full p-5">
                            <h3 className="font-mono text-xs text-accent mb-3">{category}</h3>
                            <Tags items={items} />
                        </SpotlightCard>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
