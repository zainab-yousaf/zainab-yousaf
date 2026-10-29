"use client";

import { openChat } from "@/lib/chat-events";

// Text-style button that opens the "Ask my AI" chat. Lets server components include it.
export default function AskAiButton({ className = "", children = "Ask my AI" }: { className?: string; children?: React.ReactNode }) {
    return (
        <button type="button" onClick={openChat} className={className}>
            {children}
        </button>
    );
}
