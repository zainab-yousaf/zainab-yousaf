"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// Animated "black box" diagram: a message travels from a guest channel into DreamDesk and out as a
// reply (or, every few messages, an escalation to staff). The internal agent design stays private.

type Box = { x: number; y: number; w: number; h: number };
type Layout = {
    viewBox: string;
    channels: Box[];
    core: Box;
    outputs: [Box, Box]; // reply, escalate
    // Where the dot enters/leaves each shape
    chOut: (b: Box) => [number, number];
    coreIn: [number, number];
    coreOut: [number, number];
    outIn: (b: Box) => [number, number];
    // Label sizes (viewBox units): the wide layout is drawn smaller on screen, so its text is larger
    text: { label: number; core: number; note: number };
};

const CHANNELS = ["Voice", "WhatsApp", "Email", "Web chat"];

// Wide screens: channels on the left, black box in the middle, outcomes on the right.
const WIDE: Layout = {
    viewBox: "0 0 500 242",
    channels: [0, 1, 2, 3].map((i) => ({ x: 1, y: 1 + i * 64, w: 108, h: 44 })),
    core: { x: 176, y: 63, w: 138, h: 116 },
    outputs: [
        { x: 347, y: 46, w: 152, h: 50 },
        { x: 347, y: 140, w: 152, h: 62 },
    ],
    chOut: (b) => [b.x + b.w, b.y + b.h / 2],
    coreIn: [176, 121],
    coreOut: [314, 121],
    outIn: (b) => [b.x, b.y + b.h / 2],
    text: { label: 15, core: 16.5, note: 12.5 },
};

// Phones: channels across the top, black box, outcomes underneath.
const TALL: Layout = {
    viewBox: "0 0 320 336",
    channels: [0, 1, 2, 3].map((i) => ({ x: 2 + i * 79.5, y: 4, w: 77, h: 36 })),
    core: { x: 88, y: 112, w: 144, h: 96 },
    outputs: [
        { x: 2, y: 272, w: 150, h: 44 },
        { x: 168, y: 268, w: 150, h: 54 },
    ],
    chOut: (b) => [b.x + b.w / 2, b.y + b.h],
    coreIn: [160, 112],
    coreOut: [160, 208],
    outIn: (b) => [b.x + b.w / 2, b.y],
    text: { label: 13.5, core: 15, note: 12 },
};

function Diagram({ layout, className }: { layout: Layout; className: string }) {
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { amount: 0.3 });
    const reduce = useReducedMotion();
    const [cycle, setCycle] = useState(0);

    const ch = cycle % CHANNELS.length;
    const out = cycle % 4 === 3 ? 1 : 0; // every 4th message escalates
    const start = layout.chOut(layout.channels[ch]);
    const end = layout.outIn(layout.outputs[out]);
    const xs = [start[0], layout.coreIn[0], layout.coreOut[0], end[0]];
    const ys = [start[1], layout.coreIn[1], layout.coreOut[1], end[1]];
    const animating = inView && !reduce;
    const { core, text: t } = layout;

    return (
        <svg ref={ref} viewBox={layout.viewBox} className={className} role="presentation" aria-hidden="true">
            {/* Connectors */}
            <g stroke="var(--color-line-strong)" strokeWidth="1.25" fill="none">
                {layout.channels.map((b, i) => {
                    const [x1, y1] = layout.chOut(b);
                    return <line key={i} x1={x1} y1={y1} x2={layout.coreIn[0]} y2={layout.coreIn[1]} />;
                })}
                {layout.outputs.map((b, i) => {
                    const [x2, y2] = layout.outIn(b);
                    return (
                        <line
                            key={i}
                            x1={layout.coreOut[0]}
                            y1={layout.coreOut[1]}
                            x2={x2}
                            y2={y2}
                            strokeDasharray={i === 1 ? "4 4" : undefined}
                        />
                    );
                })}
            </g>

            {/* Channels */}
            {layout.channels.map((b, i) => (
                <g key={CHANNELS[i]}>
                    <rect
                        x={b.x}
                        y={b.y}
                        width={b.w}
                        height={b.h}
                        rx="10"
                        fill="var(--color-ivory)"
                        stroke={animating && i === ch ? "var(--color-terracotta)" : "var(--color-line-strong)"}
                        style={{ transition: "stroke 0.3s" }}
                    />
                    <text
                        x={b.x + b.w / 2}
                        y={b.y + b.h / 2 + t.label * 0.35}
                        textAnchor="middle"
                        fill="var(--color-espresso)"
                        fontSize={t.label}
                        fontWeight="500"
                    >
                        {CHANNELS[i]}
                    </text>
                </g>
            ))}

            {/* The black box */}
            <rect x={core.x} y={core.y} width={core.w} height={core.h} rx="14" fill="var(--color-espresso)" stroke="var(--color-espresso)" />
            <g transform={`translate(${core.x + core.w / 2 - 7}, ${core.y + core.h / 2 - 34})`} stroke="var(--color-gold)" strokeWidth="1.5" fill="none">
                <rect x="0.75" y="7" width="12.5" height="9" rx="2" />
                <path d="M3.5 7V5a3.5 3.5 0 0 1 7 0v2" strokeLinecap="round" />
            </g>
            <text x={core.x + core.w / 2} y={core.y + core.h / 2 + 10} textAnchor="middle" fill="var(--color-ivory)" fontSize={t.core} fontWeight="600">
                DreamDesk AI
            </text>
            <text x={core.x + core.w / 2} y={core.y + core.h / 2 + 12 + t.note * 1.4} textAnchor="middle" fill="#cbbfae" fontSize={t.note}>
                internals private
            </text>

            {/* Outcomes */}
            {layout.outputs.map((b, i) => (
                <g key={i}>
                    <rect
                        x={b.x}
                        y={b.y}
                        width={b.w}
                        height={b.h}
                        rx="10"
                        fill="var(--color-cream)"
                        stroke={i === 0 ? "var(--color-espresso)" : "var(--color-amber)"}
                        strokeDasharray={i === 1 ? "4 3" : undefined}
                        strokeOpacity={animating && i === out ? 1 : 0.55}
                        style={{ transition: "stroke-opacity 0.3s" }}
                    />
                    <text x={b.x + b.w / 2} y={i === 0 ? b.y + b.h / 2 + t.label * 0.35 : b.y + b.h * 0.42} textAnchor="middle" fill="var(--color-espresso)" fontSize={t.label} fontWeight="600">
                        {i === 0 ? "Reply to guest" : "Escalate to staff"}
                    </text>
                    {i === 1 && (
                        <text x={b.x + b.w / 2} y={b.y + b.h * 0.42 + t.note * 1.45} textAnchor="middle" fill="var(--color-muted)" fontSize={t.note}>
                            when confidence is low
                        </text>
                    )}
                </g>
            ))}

            {/* The travelling message */}
            {animating && (
                <motion.circle
                    key={cycle}
                    r="5"
                    fill="var(--color-terracotta)"
                    initial={{ cx: xs[0], cy: ys[0], opacity: 0 }}
                    animate={{ cx: xs, cy: ys, opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: 2.4,
                        times: [0, 0.35, 0.6, 1],
                        ease: "easeInOut",
                        opacity: { duration: 2.4, times: [0, 0.08, 0.92, 1] },
                    }}
                    onAnimationComplete={() => setTimeout(() => setCycle((c) => c + 1), 450)}
                />
            )}
        </svg>
    );
}

// `large`: a bigger version for the case-study section. The caller supplies any frame around it.
export default function DreamDeskDiagram({ className = "", large = false }: { className?: string; large?: boolean }) {
    return (
        <div
            role="img"
            className={className}
            aria-label="DreamDesk overview: guest messages from voice, WhatsApp, email and web chat go into the DreamDesk AI platform, which replies to the guest or escalates to hotel staff when confidence is low."
        >
            <Diagram layout={WIDE} className={`hidden sm:block w-full mx-auto h-auto ${large ? "max-w-[720px]" : "max-w-[600px]"}`} />
            <Diagram layout={TALL} className="sm:hidden w-full max-w-[360px] mx-auto h-auto" />
        </div>
    );
}
