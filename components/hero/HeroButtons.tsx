"use client";

import { openChat } from "@/lib/chat-events";

export default function HeroButtons() {
    return (
        <div className="flex gap-3 flex-wrap pt-1">
            <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="text-sm font-semibold text-bg bg-accent px-6 py-3 rounded-full transition-[transform,box-shadow] duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_-6px_var(--color-accent)]"
            >
                View projects
            </button>
            <button
                onClick={openChat}
                className="text-sm font-semibold text-fg px-6 py-3 rounded-full border border-line bg-surface/60 transition-[transform,box-shadow,border-color] duration-200 hover:scale-[1.03] hover:border-accent/60 hover:shadow-[0_0_28px_-8px_var(--color-accent)]"
            >
                ✨ Ask my AI
            </button>
        </div>
    );
}
