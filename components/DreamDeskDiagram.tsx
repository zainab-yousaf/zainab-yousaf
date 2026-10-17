// "Black box" diagram for the DreamDesk case study: shows what goes in and what comes out,
// and deliberately keeps the internal agent design private.

function ArrowDown() {
    return (
        <div className="flex justify-center py-1.5" aria-hidden="true">
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none">
                <path d="M6 0v19M1.5 15 6 20.5 10.5 15" stroke="#a8a79f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

function LockIcon() {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
            <rect x="1.5" y="8.5" width="15" height="10" rx="2.5" stroke="#e5e5e3" strokeWidth="1.5" />
            <path d="M5 8.5V6a4 4 0 0 1 8 0v2.5" stroke="#e5e5e3" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="9" cy="13.5" r="1.4" fill="#e5e5e3" />
        </svg>
    );
}

const channels = ["Voice", "WhatsApp", "Email", "Web chat"];

export default function DreamDeskDiagram() {
    return (
        <figure
            className="rounded-xl p-4 md:p-6"
            style={{ background: "#f8f8f6", border: "0.5px solid #e8e7e0" }}
            aria-label="DreamDesk overview: guest messages from voice, WhatsApp, email and web chat go into the DreamDesk AI platform, which either replies to the guest or escalates to hotel staff when confidence is low."
        >
            <div className="flex flex-col items-stretch max-w-[560px] mx-auto">
                {/* In: guest channels */}
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

                {/* The black box */}
                <div
                    className="rounded-xl px-5 py-7 flex flex-col items-center text-center gap-2"
                    style={{
                        background:
                            "repeating-linear-gradient(135deg, #1a1a18 0 10px, #222220 10px 20px)",
                    }}
                >
                    <LockIcon />
                    <p className="text-sm font-semibold text-white">DreamDesk AI agents</p>
                    <p className="text-[11px] text-[#9a9a92]">Internal architecture kept private</p>
                </div>

                <ArrowDown />

                {/* Out: reply or escalate */}
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
