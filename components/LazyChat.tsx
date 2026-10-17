"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { OPEN_CHAT_EVENT } from "@/lib/chat-events";
import { useAfterLoad } from "./ui/useAfterLoad";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

// Loads the chat widget after the page has finished loading (or straight away if someone asks to
// open it first), so it doesn't slow down the first paint.
export default function LazyChat() {
    const afterLoad = useAfterLoad(1500);
    const [requested, setRequested] = useState(false);

    useEffect(() => {
        const onOpen = () => setRequested(true);
        window.addEventListener(OPEN_CHAT_EVENT, onOpen);
        return () => window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
    }, []);

    if (!afterLoad && !requested) return null;
    return <ChatWidget initialOpen={requested} />;
}
