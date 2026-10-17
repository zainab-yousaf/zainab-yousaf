import { ImageResponse } from "next/og";

// Link-preview image (LinkedIn, Slack, X, WhatsApp...). Next.js generates it at build time.
export const alt = "Zainab Yousaf – Founding AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    background: "#f5f1ea",
                    color: "#1c1915",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: "#5c554b" }}>
                    <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#2f8a4c" }} />
                    Open to remote roles
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>Zainab Yousaf</div>
                    <div style={{ fontSize: 40, color: "#a93c13" }}>
                        Founding AI Engineer · AI Agents · Voice AI · RAG
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 26,
                        color: "#6f675c",
                        borderTop: "2px solid #e3dacb",
                        paddingTop: 28,
                    }}
                >
                    <div style={{ display: "flex" }}>AI agents live across 3 hotels · ~1.6s voice response</div>
                    <div style={{ display: "flex", color: "#1c1915" }}>zainab-yousaf.vercel.app</div>
                </div>
            </div>
        ),
        size
    );
}
