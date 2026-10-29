import { ImageResponse } from "next/og";

// Link-preview image (LinkedIn, Slack, X, WhatsApp...). Next.js generates it at build time.
export const alt = "Zainab Yousaf – AI Engineer & Full-Stack Developer";
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
                    background: "#f7f3eb",
                    color: "#30231e",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: "#65574c" }}>
                    <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#d99a45" }} />
                    Open to remote roles
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>Zainab Yousaf</div>
                    <div style={{ fontSize: 40, color: "#a8431f" }}>
                        AI Engineer · Full-Stack Developer
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 26,
                        color: "#65574c",
                        borderTop: "2px solid #e6ddcf",
                        paddingTop: 28,
                    }}
                >
                    <div style={{ display: "flex" }}>AI agents live across 3 hotels · ~1.6s voice response</div>
                    <div style={{ display: "flex", color: "#30231e" }}>zainab-yousaf.vercel.app</div>
                </div>
            </div>
        ),
        size
    );
}
