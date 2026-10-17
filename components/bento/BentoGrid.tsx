import ChatTrigger from "./ChatTrigger";

export type TileSpec = {
    id: string;
    /** Grid placement classes. */
    className: string;
    preview: React.ReactNode;
    /** Section the tile scrolls to, e.g. "#projects". Tiles without href or action aren't clickable. */
    href?: string;
    /** Accessible name for the tile link/button. */
    label?: string;
    action?: "chat";
    tone?: "accent";
};

const COVER =
    "absolute inset-0 z-0 w-full h-full rounded-[24px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent-ink";

// The first-screen bento overview. Clickable tiles are links to sections below (smooth scroll via CSS),
// so the URL hash, back button and sharing all work natively.
export default function BentoGrid({ tiles }: { tiles: TileSpec[] }) {
    return (
        <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[1.05fr_0.95fr_1fr] short:grid-rows-[0.98fr_0.86fr_1.16fr] short:gap-3 lg:h-full">
            {tiles.map((tile, i) => {
                const interactive = Boolean(tile.href || tile.action);
                return (
                    <div
                        key={tile.id}
                        className={`tile-in min-w-0 ${tile.className}`}
                        style={{ "--delay": `${i * 55}ms` } as React.CSSProperties}
                    >
                        <div
                            className={`tile ${interactive ? "" : "tile-static"} relative h-full overflow-hidden rounded-[24px] ${
                                tile.tone === "accent" ? "!bg-accent !border-accent" : ""
                            }`}
                        >
                            {tile.href && <a href={tile.href} aria-label={tile.label} className={COVER} />}
                            {tile.action === "chat" && <ChatTrigger label={tile.label ?? "Open chat"} className={COVER} />}
                            <div
                                className={`relative h-full ${
                                    interactive ? "pointer-events-none [&_a]:pointer-events-auto [&_a]:relative [&_a]:z-10" : ""
                                }`}
                            >
                                {tile.preview}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
