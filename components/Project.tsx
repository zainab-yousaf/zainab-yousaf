"use client";

const projects = [
    {
        title: "AutoMato AI – E-commerce Optimization Platform",
        period: "Aug 2025 – Present",
        org: "Automato AI",
        description:
            "As a Full-Stack Developer, I built this AI-driven SaaS platform to optimize Amazon product listings. The main challenge was integrating multiple AI models (OpenAI, Claude, Gemini) while maintaining performance and cost efficiency. I solved this by implementing a smart routing system with Redis caching and BullMQ for async processing. The result: businesses using our platform see up to 45% increase in search visibility and 30% boost in conversions. I designed the scalable backend with NestJS, MongoDB, MySQL, and created responsive dashboards with React 18 + Redux Toolkit + MUI.",
        role: "Full-Stack Developer",
        challenges: "Multi-AI integration, performance optimization, cost management",
        impact: "45% increase in search visibility, 30% boost in conversions",
        skills: [
            "React.js",
            "NestJS",
            "MongoDB",
            "MySQL",
            "Redis",
            "AI Integration",
            "Amazon SP-API",
        ],
        github: "https://github.com/zainabyousaf/automato-ai",
        demo: "https://www.automatoai.com/",
    },
    {
        title: "BG Zoom Mac – Video Calling Platform",
        period: "Mar 2025 – Jun 2025",
        org: "KATco",
        description:
            "I developed this cross-platform video-calling app supporting Google Meet & Skype with background effects. The biggest challenge was achieving smooth video/audio streaming across different platforms while maintaining low latency. I solved this by implementing Swift Concurrency for async operations and optimizing AVFoundation integration. The app now provides seamless video calling experiences with real-time background effects, improving user engagement significantly.",
        role: "iOS/macOS Developer",
        challenges: "Cross-platform streaming, low latency, real-time effects",
        impact: "Seamless video calling with real-time background effects",
        skills: [
            "Swift",
            "SwiftUI",
            "AppKit",
            "Video/Audio Streaming",
            "Cross-Platform Integration",
        ],
        github: "https://github.com/zainabyousaf/bg-zoom",
        demo: "https://apps.apple.com/app/bg-zoom",
    },
    {
        title: "PDF Converter iOS/macOS",
        period: "Nov 2024 – Jun 2025",
        org: "KATco",
        description:
            "I built this high-performance PDF/image converter where the main challenge was slow processing times affecting user experience. I tackled this by implementing Swift Concurrency for parallel processing and optimizing the conversion algorithms. The result: I improved processing speed by 30% and reduced system workload by 40%, making the app significantly faster and more efficient. Built with Swift Concurrency, UIKit, and Cloud Converter API.",
        role: "iOS/macOS Developer",
        challenges: "Slow processing times, high system workload",
        impact: "30% faster processing, 40% reduced workload",
        skills: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "Cloud Converter API",
            "Swift Concurrency",
        ],
        github: "https://github.com/zainabyousaf/pdf-converter",
        demo: "https://apps.apple.com/lv/app/pdf-converter-photo-to-pdf/id6472884610",
    },
    {
        title: "Smart Contract Security – Grey-Box Fuzzing",
        period: "Aug 2023 – Apr 2024",
        org: "FAST-NUCES",
        description:
            "As a Research Developer, I developed an Information Flow Guided Grey-Box Fuzzing technique for smart contract security. The challenge was improving vulnerability detection accuracy while reducing computational resource usage. I solved this by creating a novel information flow analysis approach that guides the fuzzing process more efficiently. The technique improved vulnerability detection rates while reducing resource usage by 25%, making it more practical for real-world security audits. Collaborated with international researchers to validate the approach.",
        role: "Research Developer",
        challenges: "Balancing detection accuracy with resource efficiency",
        impact: "Improved detection rates, 25% reduction in resource usage",
        skills: [
            "Python",
            "Solidity",
            "Slither",
            "Fuzzing",
            "Static Analysis",
            "Tkinter",
        ],
        github: "https://github.com/zainabyousaf/smart-contract-fuzzer",
        demo: null,
    },
    {
        title: "Travel Website",
        period: "Nov 2022 – Jan 2023",
        org: "FAST-NUCES",
        description:
            "I built this responsive travel web app as a full-stack project. The main challenge was creating an intuitive user interface while handling complex server-side data processing. I solved this by implementing a clean REST API architecture with Node.js and using Bootstrap for responsive design. I added comprehensive Jest testing to ensure stability and reliability. The app successfully handles travel bookings with smooth user experience across all devices.",
        role: "Full-Stack Developer",
        challenges: "Complex data processing, responsive design, stability",
        impact: "Reliable travel booking system with comprehensive testing",
        skills: ["Node.js", "HTML", "CSS", "Bootstrap", "SQL", "JSON", "Jest"],
        github: "https://github.com/zainabyousaf/travel-website",
        demo: null,
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-base text-gray-600 max-w-3xl mx-auto">
                        A showcase of my recent work spanning web applications,
                        mobile development, and AI-powered solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Project Header */}
                            <div className="relative p-6 pb-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-xs text-gray-500 mb-3">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mr-3">
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
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                                                title="View Demo"
                                            >
                                                <span className="text-sm">
                                                    🔗
                                                </span>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
                                                title="View GitHub"
                                            >
                                                <span className="text-sm">
                                                    📱
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                
                                {/* Role, Challenges, Impact */}
                                {project.role && (
                                    <div className="mb-4 space-y-2">
                                        <div className="flex items-start">
                                            <span className="text-xs font-semibold text-gray-600 w-20">Role:</span>
                                            <span className="text-xs text-gray-700 flex-1">{project.role}</span>
                                        </div>
                                        {project.challenges && (
                                            <div className="flex items-start">
                                                <span className="text-xs font-semibold text-gray-600 w-20">Challenges:</span>
                                                <span className="text-xs text-gray-700 flex-1">{project.challenges}</span>
                                            </div>
                                        )}
                                        {project.impact && (
                                            <div className="flex items-start">
                                                <span className="text-xs font-semibold text-gray-600 w-20">Impact:</span>
                                                <span className="text-xs text-green-700 font-medium flex-1">{project.impact}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Skills Section */}
                            <div className="px-6 pb-6">
                                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 hover:from-blue-100 hover:to-purple-100 hover:border-blue-300 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Footer */}
                            <div className="px-6 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            Completed
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                            Production Ready
                                        </div>
                                    </div>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 inline-block"
                                        >
                                            View on GitHub
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-8 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Interested in Working Together?
                        </h3>
                        <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and
                            create innovative solutions. Let's discuss your next
                            project!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Start a Project
                            </a>
                            <a
                                href="#about"
                                className="px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
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
