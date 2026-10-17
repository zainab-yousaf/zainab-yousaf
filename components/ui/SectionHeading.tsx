// Section title with a small monospace eyebrow label, e.g. "// 02 · experience".
export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div className="mb-8">
            <p className="font-mono text-xs text-accent mb-2">{eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-fg">{title}</h2>
        </div>
    );
}
