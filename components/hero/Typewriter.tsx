"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useAfterLoad } from "../ui/useAfterLoad";

// Types each phrase letter by letter, pauses, deletes it, then moves to the next.
export default function Typewriter({ phrases }: { phrases: string[] }) {
    const reduce = useReducedMotion();
    const ready = useAfterLoad();
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(phrases[0]); // full first phrase on the server / before hydration
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (reduce || !ready) return;
        const phrase = phrases[index];
        let delay = deleting ? 45 : 85;
        if (!deleting && text === phrase) delay = 1800; // hold the finished phrase
        if (deleting && text === "") delay = 300;

        const t = setTimeout(() => {
            if (!deleting && text === phrase) setDeleting(true);
            else if (deleting && text === "") {
                setDeleting(false);
                setIndex((i) => (i + 1) % phrases.length);
            } else {
                const target = phrases[index];
                setText(deleting ? text.slice(0, -1) : target.slice(0, text.length + 1));
            }
        }, delay);
        return () => clearTimeout(t);
    }, [text, deleting, index, phrases, reduce, ready]);

    if (reduce) return <span>{phrases.join(" · ")}</span>;

    return (
        <>
            <span className="sr-only">{phrases.join(", ")}</span>
            <span aria-hidden="true">
                {text}
                <span className="caret text-accent">▍</span>
            </span>
        </>
    );
}
