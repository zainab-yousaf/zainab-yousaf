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
    <section id="skills" className="py-20 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-xl shadow hover:shadow-md transition text-center text-gray-700 font-medium"
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
