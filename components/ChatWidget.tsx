"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";

import { OPEN_CHAT_EVENT } from "@/lib/chat-events";

// "Ask my AI" chat panel. It is opened with openChat() from lib/chat-events (bento tile, sticky nav).

type Message = { role: "user" | "assistant"; content: string };

const MAX_CHARS = 1000;
const EMAIL = "zainab.yousaf161@gmail.com";
const WELCOME =
    "Hi! I'm Zainab's AI assistant. Ask me about her experience, projects, skills or availability.";
const SUGGESTIONS = [
    "What does Zainab do at DreamDesk?",
    "Is she open to part-time or contract work?",
    "What's her experience with voice AI?",
    "How can I contact her?",
];

// Turns emails and URLs in a reply into links; everything else stays plain text.
function Linkified({ text }: { text: string }) {
    const parts = text.split(/(\S+@\S+\.\w+|https?:\/\/[^\s)]+)/g);
    return (
        <>
            {parts.map((part, i) => {
                const clean = part.replace(/[.,;:!?]+$/, "");
                const tail = part.slice(clean.length);
                if (/^https?:\/\//.test(clean))
                    return (
                        <span key={i}>
                            <a href={clean} target="_blank" rel="noopener noreferrer" className="underline">
                                {clean}
                            </a>
                            {tail}
                        </span>
                    );
                if (/^\S+@\S+\.\w+$/.test(clean))
                    return (
                        <span key={i}>
                            <a href={`mailto:${clean}`} className="underline">
                                {clean}
                            </a>
                            {tail}
                        </span>
                    );
                return <span key={i}>{part}</span>;
            })}
        </>
    );
}

export default function ChatWidget({ initialOpen = false }: { initialOpen?: boolean }) {
    const [open, setOpen] = useState(initialOpen);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const onOpen = () => setOpen(true);
        window.addEventListener(OPEN_CHAT_EVENT, onOpen);
        return () => window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
    }, []);

    useEffect(() => {
        if (!open) return;
        inputRef.current?.focus();
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages, loading, open]);

    const send = async (text: string) => {
        const content = text.trim().slice(0, MAX_CHARS);
        if (!content || loading) return;

        const next: Message[] = [...messages, { role: "user", content }];
        setMessages(next);
        setInput("");
        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next.slice(-10) }),
            });
            const data = (await res.json().catch(() => ({}))) as { reply?: string; detail?: string };
            setMessages((m) => [
                ...m,
                {
                    role: "assistant",
                    content:
                        res.ok && data.reply
                            ? data.reply
                            : `Sorry, I can't answer right now. You can email Zainab directly at ${EMAIL}.` +
                              (data.detail ? `

[Dev only] ${data.detail}` : ""),
                },
            ]);
        } catch {
            setMessages((m) => [
                ...m,
                { role: "assistant", content: `Sorry, something went wrong. You can email Zainab at ${EMAIL}.` },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {open && (
                <div
                    role="dialog"
                    aria-label="Ask my AI"
                    className="fixed z-[60] bottom-4 right-4 left-4 sm:left-auto sm:w-[380px] h-[min(560px,calc(100dvh-2rem))] bg-surface border border-line rounded-2xl flex flex-col overflow-hidden shadow-[0_24px_60px_-24px_rgba(48,35,30,0.35)]"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-line">
                        <div>
                            <p className="text-base font-semibold text-fg">✨ Ask my AI</p>
                            <p className="text-xs text-subtle">Answers about Zainab, from her portfolio</p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            className="w-8 h-8 flex items-center justify-center rounded-full text-muted hover:bg-surface-2 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
                        <div className="flex">
                            <div className="max-w-[85%] text-base text-fg leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-tl-md bg-surface-2">
                                {WELCOME}
                            </div>
                        </div>

                        {messages.length === 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                                {SUGGESTIONS.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => send(q)}
                                        className="text-sm text-fg text-left px-3 py-1.5 rounded-full border border-line hover:border-espresso transition-colors"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : ""}`}>
                                <div
                                    className={`max-w-[85%] text-base leading-relaxed px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap break-words ${
                                        m.role === "user"
                                            ? "text-ivory bg-espresso rounded-tr-md"
                                            : "text-fg bg-surface-2 rounded-tl-md"
                                    }`}
                                >
                                    {m.role === "assistant" ? <Linkified text={m.content} /> : m.content}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex" aria-label="Assistant is typing">
                                <div className="flex gap-1 px-3.5 py-3 rounded-2xl rounded-tl-md bg-surface-2">
                                    {[0, 150, 300].map((d) => (
                                        <span
                                            key={d}
                                            className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce"
                                            style={{ animationDelay: `${d}ms` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <div ref={endRef} />
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            send(input);
                        }}
                        className="flex items-center gap-2 p-3 border-t border-line"
                    >
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            maxLength={MAX_CHARS}
                            placeholder="Ask about Zainab…"
                            aria-label="Your question"
                            className="flex-1 min-w-0 px-4 py-2.5 text-base text-fg bg-bg border border-line rounded-xl placeholder:text-subtle focus:outline-none focus-visible:outline-none focus:border-espresso focus:ring-2 focus:ring-amber/40"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            aria-label="Send"
                            className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl text-white bg-cta transition-colors hover:bg-cta-hover disabled:opacity-40"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}

        </>
    );
}
