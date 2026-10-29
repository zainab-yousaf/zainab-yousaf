"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contact } from "@/lib/content";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const EMPTY = { name: "", email: "", subject: "", message: "", website: "" };

// Contact form → /api/contact (Resend or Formspree, configured with env vars on the server).
export default function ContactForm() {
    const [form, setForm] = useState(EMPTY);
    const [status, setStatus] = useState<Status>({ kind: "idle" });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (status.kind === "error" || status.kind === "sent") setStatus({ kind: "idle" });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ kind: "sending" });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = (await res.json().catch(() => ({}))) as { error?: string };
            if (res.ok) {
                setStatus({ kind: "sent" });
                setForm(EMPTY);
            } else {
                setStatus({ kind: "error", message: data.error || "Your message couldn't be sent." });
            }
        } catch {
            setStatus({ kind: "error", message: "Network error: your message couldn't be sent." });
        }
    };

    const input =
        "w-full px-4 py-3 text-base text-espresso placeholder:text-muted bg-ivory border border-line-strong rounded-xl transition-colors focus:outline-none focus-visible:outline-none focus:border-espresso focus:ring-2 focus:ring-amber/40";
    const sending = status.kind === "sending";

    return (
        <form onSubmit={onSubmit} className="space-y-3" noValidate={false}>
            <div className="grid sm:grid-cols-2 gap-3">
                <input type="text" name="name" value={form.name} onChange={onChange} required maxLength={100} placeholder="Your name" aria-label="Your name" autoComplete="name" className={input} />
                <input type="email" name="email" value={form.email} onChange={onChange} required maxLength={200} placeholder="Your email" aria-label="Your email" autoComplete="email" className={input} />
            </div>
            <input type="text" name="subject" value={form.subject} onChange={onChange} required maxLength={200} placeholder="Subject" aria-label="Subject" className={input} />
            <textarea name="message" value={form.message} onChange={onChange} required maxLength={5000} rows={5} placeholder="Your message" aria-label="Your message" className={`${input} resize-none`} />

            {/* Honeypot for spam bots: hidden from people and screen readers */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                <label>
                    Website
                    <input type="text" name="website" value={form.website} onChange={onChange} tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            <button
                type="submit"
                disabled={sending}
                className="btn btn-primary w-full disabled:opacity-60"
            >
                {sending ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                ) : (
                    <Send className="w-4 h-4" aria-hidden="true" />
                )}
                {sending ? "Sending…" : "Send message"}
            </button>

            <div aria-live="polite">
                {status.kind === "sent" && (
                    <p className="flex items-center gap-2 text-base text-ok bg-ok/10 border border-ok/30 px-4 py-3 rounded-xl">
                        <CheckCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        Thanks! Your message was sent. I&apos;ll get back to you soon.
                    </p>
                )}
                {status.kind === "error" && (
                    <p className="flex items-start gap-2 text-base text-red-800 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-1" aria-hidden="true" />
                        <span>
                            {status.message} Please email me directly at{" "}
                            <a href={`mailto:${contact.email}`} className="underline font-medium">
                                {contact.email}
                            </a>
                            .
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
}
