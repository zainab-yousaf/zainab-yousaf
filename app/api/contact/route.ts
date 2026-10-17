// Contact form endpoint. Sends the message with Resend (RESEND_API_KEY) if configured,
// otherwise forwards it to Formspree (FORMSPREE_FORM_ID). Keys stay on the server.

const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { name: string; email: string; subject: string; message: string };

function parse(body: unknown): Fields | null {
    if (!body || typeof body !== "object") return null;
    const b = body as Record<string, unknown>;
    const out = {} as Fields;
    for (const key of Object.keys(LIMITS) as (keyof Fields)[]) {
        const v = b[key];
        if (typeof v !== "string") return null;
        const t = v.trim();
        if (!t || t.length > LIMITS[key]) return null;
        out[key] = t;
    }
    return EMAIL_RE.test(out.email) ? out : null;
}

const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendWithResend(f: Fields, apiKey: string) {
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    if (!to) throw new Error("CONTACT_TO_EMAIL is not set");
    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            from,
            to: [to],
            reply_to: f.email,
            subject: `Portfolio: ${f.subject}`,
            text: `From: ${f.name} <${f.email}>\n\n${f.message}`,
            html: `<p><strong>From:</strong> ${escape(f.name)} &lt;${escape(f.email)}&gt;</p><p>${escape(f.message).replace(/\n/g, "<br>")}</p>`,
        }),
        signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text().catch(() => "")}`);
}

async function sendWithFormspree(f: Fields, formId: string) {
    const res = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...f, _replyto: f.email, _subject: `Portfolio: ${f.subject}` }),
        signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) throw new Error(`Formspree ${res.status}: ${await res.text().catch(() => "")}`);
}

export async function POST(req: Request) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: real visitors never fill the hidden "website" field. Pretend success for bots.
    if (body && typeof body === "object" && (body as Record<string, unknown>).website) {
        return Response.json({ ok: true });
    }

    const fields = parse(body);
    if (!fields) {
        return Response.json({ error: "Please fill in every field with a valid email address." }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const formspreeId = process.env.FORMSPREE_FORM_ID;
    if (!resendKey && !formspreeId) {
        console.error("Contact: neither RESEND_API_KEY nor FORMSPREE_FORM_ID is set");
        return Response.json({ error: "The contact form isn't set up yet." }, { status: 503 });
    }

    try {
        if (resendKey) await sendWithResend(fields, resendKey);
        else await sendWithFormspree(fields, formspreeId!);
        return Response.json({ ok: true });
    } catch (err) {
        console.error("Contact: sending failed", err);
        return Response.json({ error: "Your message couldn't be sent." }, { status: 502 });
    }
}
