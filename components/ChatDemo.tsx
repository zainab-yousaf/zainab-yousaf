"use client";

import { useEffect, useState } from "react";

// Scripted example conversation (an illustration, not real guest data). It shows the two
// behaviours from the DreamDesk case study: live reservation lookup and escalation to staff.
type Message = { from: "guest" | "agent"; text: string; escalated?: boolean };

const script: Message[] = [
    { from: "guest", text: "Hi! Can I get a late checkout tomorrow? 🙏" },
    { from: "agent", text: "Hi! I found your reservation. Late checkout until 1pm is available. Shall I add it?" },
    { from: "guest", text: "Yes please!" },
    { from: "agent", text: "Done ✅ Your checkout is now 1pm. Anything else I can help with?" },
    { from: "guest", text: "Could you plan a birthday surprise for my partner?" },
    {
        from: "agent",
        text: "What a lovely idea! I'm passing this to our front desk team so they can plan it with you personally.",
        escalated: true,
    },
];

const GUEST_DELAY = 1100;
const TYPING_TIME = 1400;
const RESTART_DELAY = 5000;

export default function ChatDemo() {
    const [shown, setShown] = useState(0);
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setShown(script.length);
            return;
        }

        const timers: ReturnType<typeof setTimeout>[] = [];
        const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

        const play = (i: number) => {
            if (i >= script.length) {
                later(() => {
                    setShown(0);
                    play(0);
                }, RESTART_DELAY);
                return;
            }
            if (script[i].from === "agent") {
                later(() => setTyping(true), 400);
                later(() => {
                    setTyping(false);
                    setShown(i + 1);
                    play(i + 1);
                }, 400 + TYPING_TIME);
            } else {
                later(() => {
                    setShown(i + 1);
                    play(i + 1);
                }, GUEST_DELAY);
            }
        };
        play(0);

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <figure className="w-full max-w-[300px] mx-auto">
            <figcaption className="sr-only">
                Illustration: an example WhatsApp conversation where an AI hotel agent arranges a late checkout and
                hands a birthday-surprise request over to hotel staff.
            </figcaption>

            <div
                aria-hidden="true"
                className="rounded-[2rem] p-2 shadow-sm"
                style={{ background: "#1a1a18" }}
            >
                <div className="rounded-[1.6rem] overflow-hidden" style={{ background: "#efeae2" }}>
                    {/* Chat header */}
                    <div className="flex items-center gap-2.5 px-4 py-3" style={{ background: "#2a2a27" }}>
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                            style={{ background: "rgba(255,255,255,0.12)" }}
                        >
                            🏨
                        </div>
                        <div className="leading-tight">
                            <p className="text-xs font-semibold text-white">Hotel AI agent</p>
                            <p className="text-[10px] text-[#9fd9b4]">{typing ? "typing…" : "online"}</p>
                        </div>
                        <span
                            className="ml-auto text-[10px] px-2 py-0.5 rounded-full text-[#e5e5e3]"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                            WhatsApp
                        </span>
                    </div>

                    {/* Messages: newest at the bottom, older ones scroll out of view */}
                    <div className="h-[340px] px-3 py-3 flex flex-col justify-end gap-2 overflow-hidden">
                        {script.slice(0, shown).map((m, i) => (
                            <div
                                key={i}
                                className={`chat-msg-in flex flex-col ${m.from === "guest" ? "items-end" : "items-start"}`}
                            >
                                <div
                                    className="max-w-[85%] text-[12px] leading-snug text-[#1a1a18] px-3 py-2 rounded-2xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                                    style={{
                                        background: m.from === "guest" ? "#d9fdd3" : "#ffffff",
                                        borderTopRightRadius: m.from === "guest" ? 6 : undefined,
                                        borderTopLeftRadius: m.from === "agent" ? 6 : undefined,
                                    }}
                                >
                                    {m.text}
                                </div>
                                {m.escalated && (
                                    <span
                                        className="chat-msg-in mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full"
                                        style={{ background: "#fdf3dc", color: "#8a6417", border: "0.5px solid #ecd9a8" }}
                                    >
                                        ↗ Escalated to hotel staff
                                    </span>
                                )}
                            </div>
                        ))}
                        {typing && (
                            <div className="chat-msg-in flex items-start">
                                <div className="flex gap-1 px-3 py-2.5 rounded-2xl bg-white" style={{ borderTopLeftRadius: 6 }}>
                                    <span className="typing-dot" />
                                    <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
                                    <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-[11px] text-[#8a8a82] text-center mt-2.5">
                Example conversation · voice, email and web chat work the same way
            </p>
        </figure>
    );
}
