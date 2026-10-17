"use client";

import { useEffect, useState } from "react";

// True a moment after the page has fully loaded, so decorative animations don't compete with the
// first paint on slow phones.
export function useAfterLoad(extraDelay = 600) {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        let t: ReturnType<typeof setTimeout>;
        const go = () => (t = setTimeout(() => setReady(true), extraDelay));
        if (document.readyState === "complete") go();
        else window.addEventListener("load", go, { once: true });
        return () => {
            clearTimeout(t);
            window.removeEventListener("load", go);
        };
    }, [extraDelay]);
    return ready;
}
