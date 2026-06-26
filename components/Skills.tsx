"use client";

const skills: Record<string, string[]> = {
    "Agentic AI & LLMs": [
        "Pydantic AI",
        "Multi-Agent Systems",
        "RAG",
        "MCP Tool-Calling",
        "Prompt Engineering",
        "OpenAI API",
        "Google Gemini 2.5",
        "LangChain",
        "Logfire / Observability",
    ],
    "Frontend Development": [
        "React.js",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "React Flow",
    ],
    "Backend Development": [
        "FastAPI",
        "NestJS",
        "WebSockets",
        "Microservices",
        "SQLAlchemy",
        "BullMQ",
    ],
    "Databases & Storage": [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Pinecone (vector DB)",
        "Redis",
    ],
    "Mobile & Desktop": [
        "Swift",
        "SwiftUI",
        "UIKit",
        "AppKit (macOS)",
        "AVFoundation",
        "Swift Concurrency",
    ],
    "Cloud & DevOps": [
        "Docker",
        "AWS",
        "Google Cloud SQL",
        "Logfire",
        "PostHog",
    ],
    "Research & Security": [
        "Python",
        "Static Analysis",
        "Grey-Box Fuzzing",
        "Slither",
        "Solidity",
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
                        className="bg-white rounded-2xl p-6"
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
