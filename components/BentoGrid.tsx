"use client";

export default function BentoGrid() {
    return (
        <section className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                {/* Card 1 — DFKI Research */}
                <div
                    className="rounded-2xl p-6 flex flex-col justify-between bg-white"
                    style={{ border: "0.5px solid #e0dfd8" }}
                >
                    <div className="space-y-3">
                        <p className="text-xs text-[#8a8a82]">Research · DFKI Germany · Aug 2023 – Apr 2024</p>
                        <h3 className="text-base font-semibold text-[#1a1a18]">Smart contract security</h3>
                        <p className="text-sm text-[#5a5a52] leading-relaxed">
                            Information Flow Guided Grey-Box Fuzzing for smart contract vulnerability detection. Improved detection accuracy with 25% resource reduction.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {["Solidity", "Fuzzing", "Python", "Slither"].map(t => (
                                <span key={t} className="inline-block text-xs px-2.5 py-1 rounded-full text-[#5a5a52]" style={{ background: "#f4f4f0", border: "0.5px solid #e0dfd8" }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card 2 — Core Stack */}
                <div
                    className="rounded-2xl p-6 bg-white"
                    style={{ border: "0.5px solid #e0dfd8" }}
                >
                    <h3 className="text-base font-semibold text-[#1a1a18] mb-4">Technical expertise</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {["Pydantic AI", "RAG / Pinecone", "FastAPI", "Next.js", "PostgreSQL", "Logfire", "OpenAI", "MCP"].map(t => (
                            <span
                                key={t}
                                className="text-xs text-[#3a3a32] px-3 py-2 rounded-lg text-center"
                                style={{ background: "#f4f4f0", border: "0.5px solid #e0dfd8" }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Card 3 — Availability */}
                <div
                    className="rounded-2xl p-6 flex flex-col justify-between bg-white"
                    style={{ border: "0.5px solid #e0dfd8" }}
                >
                    <div className="space-y-3">
                        <p className="text-xs text-[#8a8a82]">Currently available</p>
                        <h3 className="text-base font-semibold text-[#1a1a18]">Open to remote roles</h3>
                        <p className="text-sm text-[#5a5a52] leading-relaxed">
                            Seeking AI Engineer and Full-Stack AI positions globally. BS Computer Science, FAST-NUCES — Dean's List ×2.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["AI Engineer", "Remote", "Full-Stack AI"].map(t => (
                            <span key={t} className="inline-block text-xs px-2.5 py-1 rounded-full text-[#5a5a52]" style={{ background: "#f4f4f0", border: "0.5px solid #e0dfd8" }}>{t}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
