// Restrained technology tag: hairline outline, no fill.
export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block text-sm text-espresso px-2.5 py-1 rounded-md border border-line-strong leading-snug">
            {children}
        </span>
    );
}

export function Tags({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-wrap gap-2">
            {items.map((t) => (
                <li key={t}>
                    <Tag>{t}</Tag>
                </li>
            ))}
        </ul>
    );
}
