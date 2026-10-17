"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { openChat } from "@/lib/chat-events";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("https://formspree.io/f/mqevpoal", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setSubmitStatus("idle"), 4000);
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass =
        "w-full px-4 py-3 text-sm text-fg placeholder:text-subtle bg-bg border border-line rounded-xl transition-colors focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/40";

    return (
        <section id="contact" className="defer-render max-w-[1100px] mx-auto px-4 sm:px-6 pt-24 pb-12">
            <SectionHeading eyebrow="// contact" title="Let's build something" />
            <p className="text-[15px] text-muted -mt-4 mb-8 max-w-xl">
                Open to all remote AI Engineer and AI Automation roles: full-time, part-time or contract.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
                {/* Contact Form */}
                <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
                    <h3 className="font-mono text-xs text-accent mb-4">send a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid sm:grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Your name"
                                aria-label="Your name"
                                className={inputClass}
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Your email"
                                aria-label="Your email"
                                className={inputClass}
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Subject"
                            aria-label="Subject"
                            className={inputClass}
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            placeholder="Your message"
                            aria-label="Your message"
                            className={inputClass + " resize-none"}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-bg bg-accent px-5 py-3 rounded-xl transition-shadow hover:shadow-[0_0_28px_-6px_var(--color-accent)] disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <Send className="w-4 h-4" />
                            )}
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>

                        {submitStatus === "success" && (
                            <div className="flex items-center gap-2 text-sm text-ok bg-ok/10 border border-ok/30 px-4 py-3 rounded-xl">
                                <CheckCircle className="w-4 h-4" />
                                Message sent!
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="flex items-center gap-2 text-sm text-red-300 bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-xl">
                                <AlertCircle className="w-4 h-4" />
                                Failed to send. Please try again.
                            </div>
                        )}
                    </form>
                </div>

                {/* Right column */}
                <div className="space-y-4">
                    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6 space-y-4">
                        <h3 className="font-mono text-xs text-accent">contact details</h3>
                        <a
                            href="mailto:zainab.yousaf161@gmail.com"
                            className="flex items-center gap-3 text-sm text-fg/90 hover:text-accent transition-colors break-all"
                        >
                            <Mail className="w-4 h-4 shrink-0" />
                            zainab.yousaf161@gmail.com
                        </a>
                    </div>

                    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
                        <h3 className="font-mono text-xs text-accent mb-4">connect</h3>
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/zainabyousaf/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center text-sm font-medium text-fg px-4 py-2.5 rounded-xl border border-line hover:border-accent/60 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/zainab-yousaf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center text-sm font-medium text-fg px-4 py-2.5 rounded-xl border border-line hover:border-accent/60 transition-colors"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <button
                        onClick={openChat}
                        className="w-full text-left rounded-2xl border border-accent/30 bg-accent/5 p-5 sm:p-6 hover:border-accent/60 transition-colors"
                    >
                        <p className="font-mono text-xs text-accent mb-1">✨ ask my AI</p>
                        <p className="text-sm text-fg/85">Quick question about my work? Ask the AI assistant.</p>
                    </button>
                </div>
            </div>
        </section>
    );
}
