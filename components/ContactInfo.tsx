"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

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
        "w-full px-4 py-2.5 text-sm text-[#1a1a18] bg-[#f8f8f6] rounded-xl transition-colors focus:outline-none focus:ring-1 focus:ring-[#c0bfb7]";
    const inputStyle = { border: "1px solid #e0dfd8" };

    return (
        <section id="contact" className="pt-16 pb-10">
            <h2 className="text-xl font-semibold text-[#1a1a18] mb-2">Get in touch</h2>
            <p className="text-sm text-[#5a5a52] mb-8">
                Open to remote AI Engineer and Full-Stack AI roles globally.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e0dfd8" }}>
                    <h3 className="text-sm font-semibold text-[#1a1a18] mb-4">Send a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Your name"
                                className={inputClass}
                                style={inputStyle}
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Your email"
                                className={inputClass}
                                style={inputStyle}
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Subject"
                            className={inputClass}
                            style={inputStyle}
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            placeholder="Your message"
                            className={inputClass + " resize-none"}
                            style={inputStyle}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#1a1a18] px-5 py-2.5 rounded-xl hover:bg-[#333330] transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <Send className="w-4 h-4" />
                            )}
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>

                        {submitStatus === "success" && (
                            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-3 rounded-xl">
                                <CheckCircle className="w-4 h-4" />
                                Message sent!
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 px-4 py-3 rounded-xl">
                                <AlertCircle className="w-4 h-4" />
                                Failed to send. Please try again.
                            </div>
                        )}
                    </form>
                </div>

                {/* Right column */}
                <div className="space-y-4">
                    {/* Contact details */}
                    <div className="bg-white rounded-2xl p-6 space-y-4" style={{ border: "1px solid #e0dfd8" }}>
                        <h3 className="text-sm font-semibold text-[#1a1a18]">Contact details</h3>
                        <a
                            href="mailto:zainab.yousaf161@gmail.com"
                            className="flex items-center gap-3 text-sm text-[#5a5a52] hover:text-[#1a1a18] transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            zainab.yousaf161@gmail.com
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e0dfd8" }}>
                        <h3 className="text-sm font-semibold text-[#1a1a18] mb-4">Connect</h3>
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/zainabyousaf/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center text-xs font-medium text-white bg-[#0077b5] px-4 py-2.5 rounded-xl hover:bg-[#006399] transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/zainab-yousaf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center text-xs font-medium text-white bg-[#1a1a18] px-4 py-2.5 rounded-xl hover:bg-[#333330] transition-colors"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
