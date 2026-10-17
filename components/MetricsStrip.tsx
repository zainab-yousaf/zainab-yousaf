const metrics = [
  { value: "3 hotels", label: "AI agents live in production" },
  { value: "~1.6s", label: "voice agent response time" },
  { value: "50+ companies", label: "served by my GenAI pipeline at AutoMato AI" },
  { value: "5.0 ★", label: "App Store rating for PDF Converter" },
];

export default function MetricsStrip() {
  return (
    <section aria-label="Key metrics" className="pb-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {metrics.map(({ value, label }) => (
          <div
            key={value}
            className="bg-white rounded-2xl p-5"
            style={{ border: "0.5px solid #e0dfd8" }}
          >
            <div className="text-xl font-bold text-[#1a1a18]">{value}</div>
            <div className="text-xs text-[#8a8a82] mt-1 leading-snug">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
