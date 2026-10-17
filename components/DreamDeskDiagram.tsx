// Architecture diagram for the DreamDesk case study, built from HTML boxes and inline SVG arrows
// so the labels stay readable at any width.

function ArrowDown({ label }: { label?: string }) {
    return (
        <div className="flex flex-col items-center py-1.5" aria-hidden="true">
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none">
                <path d="M6 0v19M1.5 15 6 20.5 10.5 15" stroke="#a8a79f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {label && <span className="text-[11px] text-[#8a8a82] mt-0.5">{label}</span>}
        </div>
    );
}

function ArrowBoth() {
    return (
        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" aria-hidden="true">
            <path
                d="M6 2v20M1.5 6.5 6 1.5l4.5 5M1.5 17.5 6 22.5l4.5-5"
                stroke="#a8a79f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ArrowRight() {
    return (
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true" className="shrink-0">
            <path d="M0 6h13.5M9.5 1.5 14 6l-4.5 4.5" stroke="#6a6a62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const channels = ["Voice", "WhatsApp", "Email", "Web chat"];
const stages = ["Understand", "Plan", "Execute", "Commit"];
const integrations = [
    { name: "Knowledge base", detail: "Pinecone" },
    { name: "Mews PMS", detail: "Live reservations" },
    { name: "MCP tools", detail: "Gmail, Microsoft Graph, Google Maps" },
];

export default function DreamDeskDiagram() {
    return (
        <figure
            className="rounded-xl p-4 md:p-6"
            style={{ background: "#f8f8f6", border: "0.5px solid #e8e7e0" }}
            aria-label="DreamDesk architecture: guest messages flow into a four-stage agent graph that uses the knowledge base, Mews PMS and MCP tools, then replies to the guest or escalates to hotel staff when confidence is low."
        >
            <div className="flex flex-col items-stretch max-w-[640px] mx-auto">
                {/* Guest channels */}
                <div className="bg-white rounded-xl p-4 text-center" style={{ border: "0.5px solid #d3d1c7" }}>
                    <p className="text-xs font-semibold text-[#1a1a18] mb-2">Guest</p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                        {channels.map((c) => (
                            <span
                                key={c}
                                className="text-xs text-[#3a3a32] px-2.5 py-1 rounded-full"
                                style={{ background: "#f4f4f0", border: "0.5px solid #e0dfd8" }}
                            >
                                {c}
                            </span>
                        ))}
                    </div>
                </div>

                <ArrowDown />

                {/* Agent graph */}
                <div className="rounded-xl p-4" style={{ background: "#1a1a18" }}>
                    <p className="text-xs font-semibold text-white text-center mb-3">Agent graph</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
                        {stages.map((s, i) => (
                            <div key={s} className="flex items-center gap-1.5">
                                <span
                                    className="text-xs text-[#e5e5e3] px-3 py-1.5 rounded-lg"
                                    style={{ background: "rgba(255,255,255,0.1)" }}
                                >
                                    {s}
                                </span>
                                {i < stages.length - 1 && <ArrowRight />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Integrations (two-way). On narrow screens one arrow feeds a grouped box so the
                    stacked items don't read as a chain. */}
                <div className="flex justify-center py-1 sm:hidden">
                    <ArrowBoth />
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 sm:p-0 rounded-xl sm:rounded-none border border-dashed border-[#d3d1c7] sm:border-0"
                >
                    {integrations.map(({ name, detail }) => (
                        <div key={name} className="flex flex-col items-center">
                            <div className="py-1 hidden sm:block">
                                <ArrowBoth />
                            </div>
                            <div
                                className="w-full bg-white rounded-xl px-3 py-2.5 text-center"
                                style={{ border: "0.5px solid #d3d1c7" }}
                            >
                                <p className="text-xs font-semibold text-[#1a1a18]">{name}</p>
                                <p className="text-[11px] text-[#5a5a52] mt-0.5 leading-snug">{detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <ArrowDown />

                {/* Outcomes */}
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-2">
                    <div className="bg-white rounded-xl px-3 py-3 text-center" style={{ border: "1px solid #22a06b" }}>
                        <p className="text-xs font-semibold text-[#1a1a18]">Reply to guest</p>
                    </div>
                    <span className="text-[11px] uppercase tracking-wide text-[#8a8a82] text-center">or</span>
                    <div className="bg-white rounded-xl px-3 py-3 text-center" style={{ border: "1px dashed #b08a2e" }}>
                        <p className="text-xs font-semibold text-[#1a1a18]">Escalate to hotel staff</p>
                        <p className="text-[11px] text-[#5a5a52] mt-0.5">when confidence is low</p>
                    </div>
                </div>
            </div>
        </figure>
    );
}
