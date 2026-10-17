// Everything the "Ask my AI" chat knows about Zainab. It goes into the system prompt verbatim,
// so keep it factual and in sync with the site. DreamDesk is described at the same level as the
// public case study: its internal agent architecture is intentionally left out.

export const ABOUT_ME = `
# Zainab Yousaf

Founding AI Engineer · AI Agents · Voice AI · RAG · AI Automation

## Summary
Zainab builds AI agents that handle real customer communication in production. She takes ownership from unclear requirements to a working product, and is comfortable working independently across time zones.

## Availability
Open to all remote roles: full-time, part-time or contract. Interested in AI Engineer and AI Automation roles.

## Contact
- Email: zainab.yousaf161@gmail.com
- LinkedIn: https://www.linkedin.com/in/zainabyousaf/
- GitHub: https://github.com/zainab-yousaf
- Portfolio: https://zainab-yousaf.vercel.app

## Key numbers
- AI agents live in production across 3 hotels
- ~1.6s voice agent response time
- GenAI pipeline at AutoMato AI served 50+ companies
- PDF Converter has a 5.0 rating on the App Store

## Experience

### Founding Engineer (Full-Stack AI) · DreamDesk AI · United Kingdom (Remote) · Jan 2026 – Present
DreamDesk is a hospitality AI platform that answers hotel guest queries across every channel from one place.
- Took ownership of the architecture and feature scoping, working directly with the product owner on features and R&D.
- Delivered the proof of concept in 4 weeks, owning it end to end: requirements, feature design, build and testing.
- Built multi-channel AI agents across voice calls, WhatsApp, email and web chat, now live across 3 hotels.
- Built voice agents on VAPI and Retell with an end-to-end response time of ~1.6s, including knowledge-base retrieval and live reservation lookups.
- Integrated the Mews PMS so reservations stay in sync in real time.
- Added confidence-based escalation so low-confidence replies go to hotel staff instead of guests.
- Built analytics tracking AI cost per response, latency and agent performance, with Logfire tracing and PostHog product analytics.
- Built a multi-tenant Next.js dashboard with a React Flow workflow builder.
- Tech: Python, FastAPI, Pydantic AI, VAPI, Retell, MCP, Pinecone, PostgreSQL, Next.js, React Flow, GCP Cloud Run, GitHub Actions, Logfire, PostHog.
- The problem it solves: hotels handle guest messages across voice, WhatsApp, email and web chat, often with separate staff for each channel. Guests wait, answers are inconsistent, and reservation changes get lost between systems.
- The internal agent architecture is private and not shared publicly.

### Software Engineer · AutoMato AI · Lahore, Pakistan · Jul 2025 – Dec 2025
- Built a GenAI pipeline that automated Amazon product listings for 50+ companies and sellers, cutting manual effort by 40–60%.
- Integrated the Amazon Seller API to pull live competitor data and extract high-ranking keywords.
- Used OpenAI to generate SEO-optimized listing content automatically.
- Built NestJS microservices with PostgreSQL, and a React dashboard for end-to-end listing review, editing and publishing.
- Maintained CI/CD pipelines and code quality through structured code reviews; debugged and resolved production issues.
- Tech: NestJS, TypeScript, React, PostgreSQL, OpenAI API, Amazon Seller API.

### Software Engineer (iOS/macOS) · KATco · Faisalabad, Pakistan · Jan 2025 – Jul 2025
(Promoted from Associate Software Engineer, Jul 2024 – Dec 2024, where she built iOS/macOS features in Swift and SwiftUI for production apps.)
- Built PDF Converter (iOS/macOS) end to end: image-to-PDF conversion, PDF rotation, and image resize, crop and watermarking. Live on the App Store with a 5.0 rating.
- Cut manual processing effort by 40% through Cloud Converter API integration.
- Improved processing speed by 30% with Swift Concurrency.
- Shipped BGZoom, a macOS video-calling app with real-time background effects for Zoom, Google Meet, Teams and Skype.
- Tech: Swift, SwiftUI, UIKit, AppKit, Swift Concurrency, Cloud Converter API.

### Research Collaborator · DFKI Germany × FAST-NUCES · Aug 2023 – Apr 2024
Information Flow Guided Grey-Box Fuzzing for smart contracts.
- Designed an algorithm combining static analysis with grey-box fuzzing to improve smart contract vulnerability detection while cutting resource usage by 25%.
- Information-flow analysis guides the fuzzer toward high-risk code paths, so it finds more vulnerabilities with less computation.
- Validated results with researchers from DFKI Germany and FAST-NUCES and presented findings at both institutions.
- Collaborators: Dr. Muhammad Hassan (DFKI, Germany), Dr. Affan Rauf (NUCES, Pakistan), Muhammad N Jalil (Truscova, Abu Dhabi).
- Tech: Python, Solidity, Echidna, Foundry, Slither.

### Teaching & Mentoring · Faisalabad, Pakistan · 2021 – 2024
- Programming Mentor, WEEPRO CODERS (Jun 2023 – Jul 2024): mentored students on AI concepts and hands-on projects; co-designed curriculum-aligned tasks with faculty.
- Teaching Assistant, Artificial Intelligence, FAST-NUCES (Aug 2023 – Jan 2024): designed assignments, graded work and ran practical sessions.
- Teaching Assistant, Physics, FAST-NUCES (Sep 2021 – Jan 2022): created assignments, graded work and conducted oral exams.

## Projects
- DreamDesk: Hotel AI Agent Platform (current role, see above). Live across 3 hotels, ~1.6s voice response time, POC delivered in 4 weeks.
- AutoMato AI: E-commerce Optimization Platform (see above). 50+ companies served, 40–60% less manual effort.
- Smart Contract Security: Grey-Box Fuzzing (see research above).
- BGZoom: macOS video-calling app with real-time background effects for Zoom, Google Meet, Teams and Skype. Built with Swift, SwiftUI, AppKit, AVFoundation and Swift Concurrency.
- PDF Converter (iOS/macOS): live on the App Store with a 5.0 rating. App Store link: https://apps.apple.com/lv/app/pdf-converter-photo-to-pdf/id6472884610

## Skills
- AI & Agents: Pydantic AI, LangChain, LangGraph, RAG, MCP, Tool Calling, Prompt Engineering, OpenAI, Gemini, Multi-Agent Systems
- Voice AI: VAPI, Retell, Text-to-Speech, Voice Cloning
- Backend: Python, FastAPI, Node.js, NestJS, TypeScript, REST APIs, Webhooks, Microservices
- Data: PostgreSQL, MongoDB, Redis, Pinecone
- Infra & Observability: Docker, GCP Cloud Run, GitHub Actions, Logfire, PostHog
- Frontend: Next.js, React, React Flow, Tailwind CSS
- Mobile: Swift, SwiftUI, UIKit, AppKit, Swift Concurrency
- Research & Security: Static Analysis, Grey-Box Fuzzing, Solidity, Slither, Echidna, Foundry

## Education
BS Computer Science, FAST-NUCES, Faisalabad (2020 – 2024) · Dean's List (2x)
`.trim();
