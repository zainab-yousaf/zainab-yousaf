// Monospace tech chip used across the site.
export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="font-mono text-[11px] text-muted px-2 py-1 rounded-md bg-surface-2 border border-line">
            {children}
        </span>
    );
}

export function Tags({ items }: { items: string[] }) {
    return (
        <div className="flex flex-wrap gap-1.5">
            {items.map((t) => (
                <Tag key={t}>{t}</Tag>
            ))}
        </div>
    );
}
