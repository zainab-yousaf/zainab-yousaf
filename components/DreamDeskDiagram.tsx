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
};

const CHANNELS = ["Voice", "WhatsApp", "Email", "Web chat"];

// Wide screens: channels on the left, black box in the middle, outcomes on the right.
const WIDE: Layout = {
    viewBox: "0 0 520 216",
    channels: [0, 1, 2, 3].map((i) => ({ x: 4, y: 8 + i * 52, w: 112, h: 34 })),
    core: { x: 196, y: 58, w: 128, h: 100 },
    outputs: [
        { x: 388, y: 40, w: 128, h: 40 },
        { x: 388, y: 132, w: 128, h: 48 },
    ],
    chOut: (b) => [b.x + b.w, b.y + b.h / 2],
    coreIn: [196, 108],
    coreOut: [324, 108],
    outIn: (b) => [b.x, b.y + b.h / 2],
};

// Phones: channels across the top, black box, outcomes underneath.
const TALL: Layout = {
    viewBox: "0 0 320 330",
    channels: [0, 1, 2, 3].map((i) => ({ x: 4 + i * 79, y: 6, w: 75, h: 32 })),
    core: { x: 90, y: 112, w: 140, h: 92 },
    outputs: [
        { x: 8, y: 272, w: 140, h: 40 },
        { x: 172, y: 268, w: 140, h: 48 },
    ],
    chOut: (b) => [b.x + b.w / 2, b.y + b.h],
    coreIn: [160, 112],
    coreOut: [160, 204],
    outIn: (b) => [b.x + b.w / 2, b.y],
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
    const { core } = layout;

    return (
        <svg ref={ref} viewBox={layout.viewBox} className={className} role="presentation" aria-hidden="true">
            {/* Connectors */}
            <g stroke="var(--color-line)" strokeWidth="1.5" fill="none">
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
                        rx="8"
                        fill="var(--color-surface-2)"
                        stroke={animating && i === ch ? "var(--color-accent)" : "var(--color-line)"}
                        style={{ transition: "stroke 0.3s" }}
                    />
                    <text
                        x={b.x + b.w / 2}
                        y={b.y + b.h / 2 + 4}
                        textAnchor="middle"
                        fill="var(--color-fg)"
                        fontSize="12"
                        className="font-mono"
                    >
                        {CHANNELS[i]}
                    </text>
                </g>
            ))}

            {/* The black box */}
            <rect x={core.x} y={core.y} width={core.w} height={core.h} rx="12" fill="#050506" stroke="var(--color-line)" />
            <g transform={`translate(${core.x + core.w / 2 - 7}, ${core.y + 18})`} stroke="var(--color-accent)" strokeWidth="1.5" fill="none">
                <rect x="0.75" y="7" width="12.5" height="9" rx="2" />
                <path d="M3.5 7V5a3.5 3.5 0 0 1 7 0v2" strokeLinecap="round" />
            </g>
            <text x={core.x + core.w / 2} y={core.y + core.h / 2 + 10} textAnchor="middle" fill="var(--color-fg)" fontSize="13" fontWeight="600">
                DreamDesk AI
            </text>
            <text x={core.x + core.w / 2} y={core.y + core.h / 2 + 26} textAnchor="middle" fill="var(--color-subtle)" fontSize="10" className="font-mono">
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
                        rx="8"
                        fill="var(--color-surface-2)"
                        stroke={i === 0 ? "var(--color-ok)" : "var(--color-warn)"}
                        strokeDasharray={i === 1 ? "4 3" : undefined}
                        strokeOpacity={animating && i === out ? 1 : 0.5}
                        style={{ transition: "stroke-opacity 0.3s" }}
                    />
                    <text x={b.x + b.w / 2} y={b.y + (i === 0 ? 24 : 21)} textAnchor="middle" fill="var(--color-fg)" fontSize="12" fontWeight="600">
                        {i === 0 ? "Reply to guest" : "Escalate to staff"}
                    </text>
                    {i === 1 && (
                        <text x={b.x + b.w / 2} y={b.y + 37} textAnchor="middle" fill="var(--color-muted)" fontSize="10">
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
                    fill="var(--color-accent)"
                    style={{ filter: "drop-shadow(0 0 6px var(--color-accent))" }}
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

export default function DreamDeskDiagram() {
    return (
        <figure
            className="rounded-xl border border-line bg-bg/60 p-3 sm:p-5"
            aria-label="DreamDesk overview: guest messages from voice, WhatsApp, email and web chat go into the DreamDesk AI platform, which replies to the guest or escalates to hotel staff when confidence is low."
        >
            <Diagram layout={WIDE} className="hidden sm:block w-full max-w-[560px] mx-auto h-auto" />
            <Diagram layout={TALL} className="sm:hidden w-full max-w-[340px] mx-auto h-auto" />
        </figure>
    );
}
