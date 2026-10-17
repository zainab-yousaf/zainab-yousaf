"use client";

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

export default function Skills() {
    return (
        <section id="skills" className="py-10">
            <h2 className="text-xl font-semibold text-[#1a1a18] mb-6">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                    <div
                        key={category}
                        className="lift bg-white rounded-2xl p-6"
                        style={{ border: "1px solid #e0dfd8" }}
                    >
                        <h3 className="text-sm font-semibold text-[#1a1a18] mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
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
                    </div>
                ))}
            </div>
        </section>
    );
}
