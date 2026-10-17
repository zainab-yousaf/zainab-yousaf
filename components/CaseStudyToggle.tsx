"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// "Read case study" button that expands/collapses the server-rendered case study content.
export default function CaseStudyToggle({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-controls="dreamdesk-case-study"
                    className="font-mono text-xs text-fg px-4 py-2 rounded-full border border-line hover:border-accent/60 transition-colors"
                >
                    {open ? "hide case study ↑" : "read case study ↓"}
                </button>
            </div>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id="dreamdesk-case-study"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
