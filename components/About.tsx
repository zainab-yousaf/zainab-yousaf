"use client";

export default function About() {
  return (
    <div className="h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl space-y-1 text-lg leading-relaxed text-gray-900">
        <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          About Me
        </h2>
        <p>
          I’m <span className="font-semibold">Zainab Yousaf</span>, a{" "}
          <span className="font-semibold">Software Engineer</span> with a{" "}
          <span className="font-semibold">
            BS in Computer Science from FAST-NUCES, Pakistan
          </span>
          , passionate about building{" "}
          <span className="font-semibold">
            scalable, intelligent, and user-centered software
          </span>
          . My expertise spans{" "}
          <span className="font-semibold">full-stack web development</span>{" "}
          (React, NestJS, PostgreSQL, MongoDB, React Native, Redux, OpenAI
          integrations) and{" "}
          <span className="font-semibold">iOS/macOS development</span> (Swift,
          SwiftUI, UIKit), enabling me to deliver versatile, production-ready
          solutions across platforms.
        </p>

        <p>
          Currently, I work as a{" "}
          <span className="font-semibold">
            Full-Stack Engineer at Automato AI
          </span>
          , where I’ve been entrusted with key ownership of core product
          features in an enterprise-grade SaaS platform. My contributions have:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            Delivered{" "}
            <span className="font-semibold">AI-powered automation</span> by
            integrating OpenAI, Anthropic Claude, Google Gemini, and Grok models
            for content generation, keyword optimization, and intelligent
            product listings.
          </li>
          <li>
            Architected{" "}
            <span className="font-semibold">scalable backend services</span>{" "}
            using NestJS, MongoDB, MySQL, Redis, BullMQ, and deployed them with
            Docker and AWS, ensuring resilience and high performance.
          </li>
          <li>
            Built a{" "}
            <span className="font-semibold">modern frontend architecture</span>{" "}
            in React 18 + TypeScript, with Redux Toolkit, MUI, advanced data
            grids, charting, and responsive design, providing a seamless user
            experience.
          </li>
          <li>
            Integrated{" "}
            <span className="font-semibold">Amazon Seller Partner APIs</span>{" "}
            and e-commerce automation, enabling large-scale product management,
            bulk operations, and analytics for clients.
          </li>
          <li>
            Led{" "}
            <span className="font-semibold">
              remote cross-functional collaboration
            </span>
            , taking responsibility for major releases while coordinating
            through GitHub, Jira, and Slack under Agile workflows.
          </li>
        </ul>
        <p>
          I thrive in fast-paced, distributed teams, where I combine{" "}
          <span className="font-semibold">
            clean code practices, strong problem-solving, and ownership
          </span>
          to deliver impactful products. My goal is to contribute as a{" "}
          <span className="font-semibold">remote software engineer</span> to
          global projects that value{" "}
          <span className="font-semibold">
            innovation, scalability, and intelligent automation
          </span>
          — while continuing to grow as a versatile engineer bridging mobile,
          web, and AI technologies.
        </p>
      </div>
    </div>
  );
}
