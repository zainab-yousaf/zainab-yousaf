"use client";

export default function About() {
    return (
        <div className="min-h-screen flex items-start justify-center px-8 pt-32 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl w-full">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Introduction Card */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-xl">
                                        ZY
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Zainab Yousaf
                                    </h3>
                                    <p className="text-blue-600 font-medium">
                                        Full-Stack Software Engineer
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                I'm a{" "}
                                <span className="font-semibold text-blue-600">
                                    Full-Stack Software Engineer
                                </span>{" "}
                                with a{" "}
                                <span className="font-semibold text-purple-600">
                                    BS in Computer Science from FAST-NUCES,
                                    Pakistan
                                </span>
                                . I am passionate about building{" "}
                                <span className="font-semibold text-green-600">
                                    innovative, scalable, and high-performance
                                    applications
                                </span>{" "}
                                that solve real-world problems and deliver
                                exceptional user experiences.
                            </p>
                        </div>

                        {/* Experience Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white text-xl">
                                        💼
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Professional Experience
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h4 className="font-bold text-gray-900">
                                        Automato AI
                                    </h4>
                                    <p className="text-blue-600 font-medium">
                                        Full-Stack Developer
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        AI-integrated solutions and e-commerce
                                        platforms
                                    </p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h4 className="font-bold text-gray-900">
                                        Mobile Development
                                    </h4>
                                    <p className="text-purple-600 font-medium">
                                        iOS/macOS Apps
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        BGZoom, PDF Converter with advanced
                                        features
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Skills & Values */}
                    <div className="space-y-8">
                        {/* Skills Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white text-xl">
                                        ⚡
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Technical Expertise
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-800">
                                        Frontend
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                            React
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                            TypeScript
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                            SwiftUI
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-800">
                                        Backend
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                            NestJS
                                        </span>
                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                            PostgreSQL
                                        </span>
                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                            MongoDB
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Values Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white text-xl">
                                        🎯
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Core Values
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700">
                                        Clean code and maintainable architecture
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700">
                                        Continuous learning and innovation
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700">
                                        Collaborative team environments
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700">
                                        Efficient, scalable, and impactful
                                        solutions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Full Width */}
                <div className="mt-16">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                            My Mission
                        </h3>
                        <p className="text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
                            I am eager to contribute my skills to challenging
                            projects where{" "}
                            <span className="font-semibold text-blue-600">
                                innovation, ownership, and growth
                            </span>{" "}
                            are encouraged, and I look forward to creating
                            software solutions that make a meaningful impact for
                            users and businesses alike.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
