const projects = [
  {
    title: "AutoMato AI – E-commerce Optimization Platform",
    period: "Aug 2025 – Present",
    org: "Automato AI",
    description:
      "AI-driven SaaS platform to optimize Amazon product listings. Built scalable backend with NestJS, MongoDB, MySQL, Redis, BullMQ, and integrated OpenAI/Claude/Gemini for automation. Designed frontend with React 18 + Redux Toolkit + MUI for responsive dashboards.",
    skills: [
      "React.js",
      "NestJS",
      "MongoDB",
      "MySQL",
      "Redis",
      "AI Integration",
      "Amazon SP-API",
    ],
  },
  {
    title: "BG Zoom Mac – Video Calling Platform",
    period: "Mar 2025 – Jun 2025",
    org: "KATco",
    description:
      "Cross-platform professional video-calling app supporting Google Meet & Skype with background effects. Implemented smooth video/audio streaming, Swift Concurrency, and scalable UI.",
    skills: [
      "Swift",
      "SwiftUI",
      "AppKit",
      "Video/Audio Streaming",
      "Cross-Platform Integration",
    ],
  },
  {
    title: "PDF Converter iOS/macOS",
    period: "Nov 2024 – Jun 2025",
    org: "KATco",
    description:
      "High-performance PDF/image converter improving speed by 30% and reducing workload by 40%. Built with Swift Concurrency, UIKit, and Cloud Converter API.",
    skills: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Cloud Converter API",
      "Swift Concurrency",
    ],
  },
  {
    title: "Smart Contract Security – Grey-Box Fuzzing",
    period: "Aug 2023 – Apr 2024",
    org: "FAST-NUCES",
    description:
      "Developed an Information Flow Guided Grey-Box Fuzzing technique improving vulnerability detection for smart contracts while reducing resource usage. Collaborated with international researchers.",
    skills: [
      "Python",
      "Solidity",
      "Slither",
      "Fuzzing",
      "Static Analysis",
      "Tkinter",
    ],
  },
  {
    title: "Travel Website",
    period: "Nov 2022 – Jan 2023",
    org: "FAST-NUCES",
    description:
      "Responsive travel web app with Node.js, HTML, CSS, and Bootstrap. Implemented server-side features, data processing, and Jest testing for stability.",
    skills: ["Node.js", "HTML", "CSS", "Bootstrap", "SQL", "JSON", "Jest"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-6 bg-gradient-to-br to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {project.org} · {project.period}
              </p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
