"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// Contact form (posts to Formspree).
export default function ContactForm() {
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
        "w-full px-4 py-3 text-sm text-fg placeholder:text-subtle bg-bg border border-line rounded-xl transition-colors focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25";

    return (
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
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-fg bg-accent px-5 py-3 rounded-xl transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-[0_10px_24px_-12px_var(--color-accent)] disabled:opacity-50"
            >
                {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-fg border-t-transparent rounded-full animate-spin" />
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
                <div className="flex items-center gap-2 text-sm text-red-800 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
                    <AlertCircle className="w-4 h-4" />
                    Failed to send. Please try again.
                </div>
            )}
        </form>
    );
}
