"use client";

import Image from "next/image";
import ChatDemo from "./ChatDemo";

export default function Hero() {
  const scroll = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="pt-10 pb-3">
      <div
        className="bg-white rounded-2xl p-8 grid gap-10 md:grid-cols-[1fr_300px] md:items-center"
        style={{ border: "1px solid #e0dfd8" }}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/profileImage.jpg"
              alt="Zainab Yousaf"
              width={64}
              height={64}
              className="rounded-full object-cover"
              style={{ border: "2px solid #e0dfd8" }}
            />
            <div>
              <h1 className="text-3xl font-bold text-[#1a1a18] leading-tight">
                Zainab Yousaf
              </h1>
              <p className="text-sm text-[#8a8a82] mt-0.5">
                Founding AI Engineer · AI Agents · Voice AI · RAG · AI Automation
              </p>
            </div>
          </div>

          <div className="space-y-3 max-w-2xl">
            <p className="text-sm text-[#5a5a52] leading-relaxed">
              I build AI agents that handle real customer communication in
              production. I take ownership from unclear requirements to a working
              product, and I&apos;m comfortable working independently across time
              zones.
            </p>
            <p className="text-sm text-[#5a5a52] leading-relaxed">
              At DreamDesk AI, I build multi-channel AI agents across voice calls,
              WhatsApp, email and web chat, now live across 3 hotels. Before that,
              I built a GenAI pipeline at AutoMato AI serving 50+ companies,
              shipped PDF Converter (live on the App Store, 5.0 rating) and BGZoom
              for macOS at KATco, and collaborated with DFKI Germany on smart
              contract security research.
            </p>
          </div>

          <p className="flex items-center gap-2 text-xs text-[#3a3a32]">
            <span className="relative flex w-2 h-2 shrink-0" aria-hidden="true">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping"
                style={{ background: "#22a06b" }}
              />
              <span
                className="relative inline-flex w-2 h-2 rounded-full"
                style={{ background: "#22a06b" }}
              />
            </span>
            Open to all remote roles: full-time, part-time or contract.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => scroll("projects")}
              className="text-sm font-medium text-white bg-[#1a1a18] px-5 py-2.5 rounded-full hover:bg-[#333330] transition-colors"
            >
              View projects
            </button>
            <button
              onClick={() => scroll("contact")}
              className="text-sm font-medium text-[#1a1a18] px-5 py-2.5 rounded-full transition-colors hover:bg-[#f0efe8]"
              style={{ border: "0.5px solid #d3d1c7" }}
            >
              Get in touch
            </button>
          </div>
        </div>

        <ChatDemo />
      </div>
    </section>
  );
}
