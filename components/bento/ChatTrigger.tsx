"use client";

import { openChat } from "@/lib/chat-events";

// Invisible full-tile button that opens the "Ask my AI" chat.
export default function ChatTrigger({ label, className }: { label: string; className?: string }) {
    return <button type="button" onClick={openChat} aria-label={label} className={className} />;
}
