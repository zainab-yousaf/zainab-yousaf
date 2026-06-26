"use client";

import Image from "next/image";

export default function Hero() {
  const scroll = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="py-10">
      <div
        className="bg-white rounded-2xl p-8 space-y-6"
        style={{ border: "1px solid #e0dfd8" }}
      >
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
              AI Engineer · Full-Stack · DFKI Germany Research
            </p>
          </div>
        </div>

        <p className="text-sm text-[#5a5a52] leading-relaxed max-w-2xl">
          I build production AI systems that work under real load, not just
          demos. My flagship project, DreamDesk, is a multi-agent platform that
          autonomously handles 100% of hotel guest communications across email,
          chat, and WhatsApp with zero dedicated support staff. Before that, I
          engineered an OpenAI-powered pipeline at AutoMato AI serving 50+
          companies, shipped 2 native apps to the App Store, and collaborated
          with DFKI Germany on smart contract security research. I specialize in
          multi-agent LLM pipelines, RAG architectures, and end-to-end product
          delivery.
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
    </section>
  );
}
