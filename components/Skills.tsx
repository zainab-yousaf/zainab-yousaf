// components/Skills.tsx
import React from "react";

const skills = {
    "Frontend Development": [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Bootstrap",
        "Responsive Design",
    ],
    "Backend Development": [
        "Node.js",
        "NestJS",
        "Express.js",
        "REST APIs",
        "Microservices Architecture",
    ],
    Databases: ["PostgreSQL", "MongoDB", "MySQL"],
    "Mobile & Desktop Development": [
        "Swift",
        "SwiftUI",
        "UIKit",
        "AppKit (macOS)",
        "VisionKit",
        "Swift Concurrency (async/await)",
        "AVFoundation (video/audio streaming)",
    ],
    "AI & Cloud": [
        "OpenAI API",
        "Amazon Seller API",
        "AI Integration for e-commerce",
        "Cloud Converter API",
        "AWS",
        "Docker",
        "CI/CD pipelines",
    ],
    "Data Science & Analysis": [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "OpenCV",
        "Matplotlib",
        "Seaborn",
        "Tableau",
        "Data Mining",
        "Exploratory Data Analysis (EDA)",
    ],
    "Smart Contract Security": [
        "Solidity",
        "Foundry",
        "Echidna",
        "Slither",
        "Fuzzing",
        "Property-Based Testing",
        "Static Analysis",
    ],
    "Other Tools": ["Git & GitHub", "Jira", "Postman", "Jest", "Ubuntu/Linux"],
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A comprehensive overview of my technical expertise
                        across multiple domains
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {Object.entries(skills).map(
                        ([category, items], categoryIndex) => (
                            <div
                                key={category}
                                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                            >
                                {/* Category Header */}
                                <div className="flex items-center mb-4">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                                            categoryIndex % 4 === 0
                                                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                                                : categoryIndex % 4 === 1
                                                ? "bg-gradient-to-r from-green-500 to-blue-500"
                                                : categoryIndex % 4 === 2
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                                : "bg-gradient-to-r from-orange-500 to-red-500"
                                        }`}
                                    >
                                        <span className="text-white text-lg">
                                            {categoryIndex % 4 === 0
                                                ? "💻"
                                                : categoryIndex % 4 === 1
                                                ? "⚡"
                                                : categoryIndex % 4 === 2
                                                ? "🚀"
                                                : "🛠️"}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {category}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {items.length} technologies
                                        </p>
                                    </div>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    {items.map((skill, skillIndex) => (
                                        <div
                                            key={skill}
                                            className="group relative"
                                        >
                                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 text-center hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-200 hover:border-blue-300">
                                                <span className="text-gray-700 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
                                                    {skill}
                                                </span>
                                            </div>

                                            {/* Hover Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-600">
                                            Proficiency
                                        </span>
                                        <span className="text-sm font-bold text-blue-600">
                                            {categoryIndex % 3 === 0
                                                ? "95%"
                                                : categoryIndex % 3 === 1
                                                ? "90%"
                                                : "85%"}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                                                categoryIndex % 3 === 0
                                                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                                                    : categoryIndex % 3 === 1
                                                    ? "bg-gradient-to-r from-green-500 to-blue-500"
                                                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                                            }`}
                                            style={{
                                                width:
                                                    categoryIndex % 3 === 0
                                                        ? "95%"
                                                        : categoryIndex % 3 ===
                                                          1
                                                        ? "90%"
                                                        : "85%",
                                                animationDelay: `${
                                                    categoryIndex * 0.2
                                                }s`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* Bottom Stats Section */}
                <div className="mt-8">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-100">
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div className="group">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    {Object.values(skills).flat().length}+
                                </div>
                                <p className="text-gray-600 font-medium">
                                    Technologies
                                </p>
                            </div>
                            <div className="group">
                                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                                    {Object.keys(skills).length}
                                </div>
                                <p className="text-gray-600 font-medium">
                                    Categories
                                </p>
                            </div>
                            <div className="group">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                    5+
                                </div>
                                <p className="text-gray-600 font-medium">
                                    Years Experience
                                </p>
                            </div>
                            <div className="group">
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                                    100%
                                </div>
                                <p className="text-gray-600 font-medium">
                                    Dedication
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
