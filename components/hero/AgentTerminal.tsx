"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useAfterLoad } from "../ui/useAfterLoad";

// Illustrative "live" log. It only shows behaviour that's public (channels, live reservation
// lookups, ~1.6s replies, escalation to staff) and keeps DreamDesk's internal design private.
type Line = { text: string; tone?: "ok" | "warn" };

const LOG: Line[] = [
    { text: "guest_message received (WhatsApp)" },
    { text: "checking live reservation…" },
    { text: "reply sent in ~1.6s", tone: "ok" },
    { text: "guest_message received (voice call)" },
    { text: "searching hotel knowledge base…" },
    { text: "reply sent in ~1.6s", tone: "ok" },
    { text: "guest_message received (email)" },
    { text: "low confidence → escalated to staff", tone: "warn" },
];

const CHAR_MS = 28;
const LINE_PAUSE = 700;
const LOOP_PAUSE = 3500;
const VISIBLE = 7;

function LogLine({ line, partial }: { line: Line; partial?: string }) {
    const text = partial ?? line.text;
    const done = partial === undefined;
    return (
        <div className="flex gap-2 leading-relaxed">
            <span className="text-accent shrink-0">&gt;</span>
            <span className={done && line.tone === "warn" ? "text-warn" : "text-fg/85"}>
                {text}
                {done && line.tone === "ok" && <span className="text-ok"> ✓</span>}
                {done && line.tone === "warn" && " ↗"}
            </span>
        </div>
    );
}

export default function AgentTerminal() {
    const reduce = useReducedMotion();
    const ready = useAfterLoad(300);
    const [done, setDone] = useState<Line[]>([]);
    const [lineIdx, setLineIdx] = useState(0);
    const [chars, setChars] = useState(0);

    useEffect(() => {
        if (reduce || !ready) return;
        const line = LOG[lineIdx];
        let t: ReturnType<typeof setTimeout>;
        if (chars < line.text.length) {
            t = setTimeout(() => setChars((c) => c + 1), CHAR_MS);
        } else {
            const last = lineIdx === LOG.length - 1;
            t = setTimeout(() => {
                setDone((d) => (last ? [] : [...d, line].slice(-(VISIBLE - 1))));
                setLineIdx((i) => (last ? 0 : i + 1));
                setChars(0);
            }, last ? LOOP_PAUSE : LINE_PAUSE);
        }
        return () => clearTimeout(t);
    }, [chars, lineIdx, reduce, ready]);

    return (
        <figure className="w-full rounded-2xl border border-line bg-surface shadow-[0_0_60px_-20px_var(--color-accent)] overflow-hidden">
            <figcaption className="sr-only">
                Illustrative log of an AI hotel agent: guest messages arrive on WhatsApp, voice and email; replies go out in
                about 1.6 seconds, and low-confidence requests are escalated to staff.
            </figcaption>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-subtle">agent.log</span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-ok">
                    <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" /> live
                </span>
            </div>
            <div aria-hidden="true" className="font-mono text-[12px] p-4 h-[212px] flex flex-col justify-end gap-0.5">
                {reduce ? (
                    LOG.slice(0, VISIBLE).map((l, i) => <LogLine key={i} line={l} />)
                ) : (
                    <>
                        {done.map((l, i) => (
                            <LogLine key={`${lineIdx}-${i}`} line={l} />
                        ))}
                        <div className="flex gap-2 leading-relaxed">
                            <span className="text-accent shrink-0">&gt;</span>
                            <span className="text-fg/85">
                                {LOG[lineIdx].text.slice(0, chars)}
                                <span className="caret text-accent">▍</span>
                            </span>
                        </div>
                    </>
                )}
            </div>
            <p className="px-4 pb-3 font-mono text-[10px] text-subtle">illustrative log · example events</p>
        </figure>
    );
}
