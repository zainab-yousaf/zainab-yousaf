"use client";

export default function BentoGrid() {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Card 1 — DreamDesk (spans 2 cols) */}
        <div
          className="col-span-1 md:col-span-2 rounded-2xl p-7 flex flex-col justify-between min-h-[280px]"
          style={{ background: "#1a1a18" }}
        >
          <div className="space-y-3">
            <p className="text-xs text-[#9a9a92]">
              Flagship project · Jan 2026 – Present
            </p>
            <h3 className="text-xl font-semibold text-white">
              DreamDesk: Hotel AI Agent Platform
            </h3>
            <p className="text-sm text-[#c0c0b8] leading-relaxed">
              Autonomous hotel guest communications platform. A 4-layer
              multi-agent graph handles bookings, FAQs, and service requests
              across email, chat, voice, and WhatsApp with zero human
              intervention required.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Pydantic AI",
                "RAG",
                "Pinecone",
                "MCP",
                "Gemini 2.5",
                "Next.js",
                "Logfire",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-block text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#e5e5e3",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-3 mt-6 pt-6"
            style={{ borderTop: "0.5px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { v: "4-layer", l: "Agent graph" },
              { v: "4-channel", l: "Email · Chat · Voice · WhatsApp" },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="text-lg font-bold text-white">{v}</div>
                <div className="text-xs text-[#9a9a92]">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 — DFKI Research */}
        <div
          className="rounded-2xl p-6 flex flex-col justify-between bg-white"
          style={{ border: "0.5px solid #e0dfd8" }}
        >
          <div className="space-y-3">
            <p className="text-xs text-[#8a8a82]">
              Research · DFKI Germany · Aug 2023 – Apr 2024
            </p>
            <h3 className="text-base font-semibold text-[#1a1a18]">
              Smart contract security
            </h3>
            <p className="text-sm text-[#5a5a52] leading-relaxed">
              Information Flow Guided Grey-Box Fuzzing for smart contract
              vulnerability detection. Improved detection accuracy with 25%
              resource reduction.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Solidity", "Fuzzing", "Python", "Slither"].map((t) => (
                <span
                  key={t}
                  className="inline-block text-xs px-2.5 py-1 rounded-full text-[#5a5a52]"
                  style={{
                    background: "#f4f4f0",
                    border: "0.5px solid #e0dfd8",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 — Core Stack (spans 2 cols) */}
        <div
          className="col-span-1 md:col-span-2 rounded-2xl p-6 bg-white"
          style={{ border: "0.5px solid #e0dfd8" }}
        >
          <h3 className="text-base font-semibold text-[#1a1a18] mb-4">
            Technical expertise
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {[
              "Pydantic AI",
              "RAG / Pinecone",
              "FastAPI",
              "Next.js",
              "PostgreSQL",
              "Logfire",
              "OpenAI",
              "MCP",
            ].map((t) => (
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

        {/* Card 4 — Availability */}
        <div
          className="rounded-2xl p-6 flex flex-col justify-between bg-white"
          style={{ border: "0.5px solid #e0dfd8" }}
        >
          <div className="space-y-3">
            <p className="text-xs text-[#8a8a82]">Currently available</p>
            <h3 className="text-base font-semibold text-[#1a1a18]">
              Open to remote roles
            </h3>
            <p className="text-sm text-[#5a5a52] leading-relaxed">
              Seeking AI Engineer and Full-Stack AI positions globally.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["AI Engineer", "Remote", "Full-Stack AI"].map((t) => (
              <span
                key={t}
                className="inline-block text-xs px-2.5 py-1 rounded-full text-[#5a5a52]"
                style={{ background: "#f4f4f0", border: "0.5px solid #e0dfd8" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
