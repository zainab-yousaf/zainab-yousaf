"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { openChat } from "@/lib/chat-events";

export type TileSpec = {
    id: string;
    /** Accessible name for the tile's expand button, e.g. "Open projects". */
    label: string;
    /** Grid placement classes. */
    className: string;
    preview: React.ReactNode;
    /** Full view shown when the tile is expanded. Tiles without one run `action` instead. */
    detail?: React.ReactNode;
    detailTitle?: string;
    action?: "chat";
    tone?: "accent";
};

const RADIUS = 24;

// The bento dashboard: tiles expand into a full detail view with a shared-layout animation.
// The open tile is mirrored in the URL hash (#projects, #dreamdesk…) so views can be shared
// and the browser back button closes them.
export default function BentoApp({ tiles }: { tiles: TileSpec[] }) {
    const [openId, setOpenId] = useState<string | null>(null);
    const openRef = useRef<string | null>(null);
    const pushedRef = useRef(false);
    const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const closeRef = useRef<HTMLButtonElement>(null);
    const detailIds = tiles.filter((t) => t.detail).map((t) => t.id);
    const detailKey = detailIds.join(",");

    // URL hash → open view (initial load, back/forward)
    useEffect(() => {
        const ids = detailKey.split(",");
        const sync = () => {
            const h = decodeURIComponent(window.location.hash.slice(1));
            const next = ids.includes(h) ? h : null;
            const prev = openRef.current;
            openRef.current = next;
            setOpenId(next);
            if (!next) pushedRef.current = false;
            // Closed via the back button: put focus back on the tile that was open.
            if (prev && !next) requestAnimationFrame(() => triggerRefs.current[prev]?.focus({ preventScroll: true }));
        };
        sync();
        window.addEventListener("popstate", sync);
        window.addEventListener("hashchange", sync);
        return () => {
            window.removeEventListener("popstate", sync);
            window.removeEventListener("hashchange", sync);
        };
    }, [detailKey]);

    const open = (tile: TileSpec) => {
        if (tile.action === "chat") return openChat();
        if (window.location.hash !== `#${tile.id}`) {
            window.history.pushState(null, "", `#${tile.id}`);
            pushedRef.current = true;
        }
        openRef.current = tile.id;
        setOpenId(tile.id);
    };

    const close = useCallback(() => {
        const id = openId;
        if (pushedRef.current) {
            pushedRef.current = false;
            window.history.back(); // popstate clears openId
        } else {
            window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
        openRef.current = null;
        setOpenId(null);
        if (id) requestAnimationFrame(() => triggerRefs.current[id]?.focus({ preventScroll: true }));
    }, [openId]);

    // While open: Esc closes, page behind doesn't scroll, focus moves into the dialog.
    useEffect(() => {
        if (!openId) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus({ preventScroll: true });
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [openId, close]);

    const openTile = tiles.find((t) => t.id === openId);

    return (
        <>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[1.05fr_0.95fr_1fr] short:grid-rows-[0.98fr_0.86fr_1.16fr] short:gap-3 lg:h-full">
                {tiles.map((tile, i) => (
                    <div
                        key={tile.id}
                        className={`tile-in min-w-0 ${tile.className}`}
                        style={{ "--delay": `${i * 55}ms` } as React.CSSProperties}
                    >
                        <motion.div
                            layoutId={`tile-${tile.id}`}
                            style={{ borderRadius: RADIUS }}
                            className={`tile relative h-full overflow-hidden ${tile.tone === "accent" ? "!bg-accent !border-accent" : ""}`}
                        >
                            {/* Whole-tile button underneath; links inside the preview sit above it (z-10). */}
                            <button
                                ref={(el) => {
                                    triggerRefs.current[tile.id] = el;
                                }}
                                type="button"
                                onClick={() => open(tile)}
                                aria-label={tile.label}
                                aria-haspopup={tile.detail ? "dialog" : undefined}
                                className="absolute inset-0 z-0 w-full h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent-ink"
                                style={{ borderRadius: RADIUS }}
                            />
                            <div className="relative h-full pointer-events-none [&_a]:pointer-events-auto [&_a]:relative [&_a]:z-10">
                                {tile.preview}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Closed detail views stay in the HTML (like closed tabs) so search engines can read them. */}
            {tiles
                .filter((t) => t.detail && t.id !== openId)
                .map((t) => (
                    <section key={t.id} hidden aria-label={t.detailTitle}>
                        {t.detail}
                    </section>
                ))}

            <AnimatePresence>
                {openTile && (
                    <div key={openTile.id} className="fixed inset-0 z-50 flex items-stretch sm:items-center justify-center sm:p-6">
                        <motion.div
                            className="absolute inset-0 bg-fg/25 backdrop-blur-[2px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={close}
                            aria-hidden="true"
                        />
                        <motion.div
                            layoutId={`tile-${openTile.id}`}
                            role="dialog"
                            aria-modal="true"
                            aria-label={openTile.detailTitle}
                            style={{ borderRadius: RADIUS }}
                            transition={{ type: "spring", stiffness: 260, damping: 30 }}
                            className="tile !translate-none relative w-full sm:max-w-3xl h-full sm:h-[min(88vh,920px)] overflow-hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between gap-3 px-5 sm:px-8 pt-5 sm:pt-6 pb-3 border-b border-line bg-surface">
                                <p className="font-mono text-xs text-accent-ink">{`#${openTile.id}`}</p>
                                <button
                                    ref={closeRef}
                                    type="button"
                                    onClick={close}
                                    aria-label="Close"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-line text-muted hover:text-fg hover:border-accent transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <motion.div
                                className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8 py-6 sm:py-8"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.12, duration: 0.3 } }}
                                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            >
                                {openTile.detail}
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
