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
            className="min-h-screen py-16 px-8 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A showcase of my recent work spanning web applications,
                        mobile development, and AI-powered solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Project Header */}
                            <div className="relative p-8 pb-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium mr-3">
                                                {project.org}
                                            </span>
                                            <span className="text-gray-400">
                                                •
                                            </span>
                                            <span className="ml-3">
                                                {project.period}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                            <span className="text-sm">🔗</span>
                                        </button>
                                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-300">
                                            <span className="text-sm">📱</span>
                                        </button>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="px-8 pb-8">
                                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 hover:from-blue-100 hover:to-purple-100 hover:border-blue-300 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Footer */}
                            <div className="px-8 pb-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            Completed
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                            Production Ready
                                        </div>
                                    </div>
                                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Interested in Working Together?
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and
                            create innovative solutions. Let's discuss your next
                            project!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Start a Project
                            </a>
                            <a
                                href="#about"
                                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
                            >
                                Learn More About Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
