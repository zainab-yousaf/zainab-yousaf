import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const body = Geist({ variable: "--font-body", subsets: ["latin"] });
const code = Geist_Mono({ variable: "--font-code", subsets: ["latin"], preload: false });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"], preload: false });

const title = "Zainab Yousaf – Founding AI Engineer | AI Agents · Voice AI · RAG";
const description =
    "Founding AI Engineer at DreamDesk AI (UK, remote). I build production AI agents, voice AI and automation: multi-channel agents live across 3 hotels, voice agents at ~1.6s response time.";

export const metadata: Metadata = {
    metadataBase: new URL("https://zainab-yousaf.vercel.app"),
    title,
    description,
    keywords: [
        "Zainab Yousaf",
        "Founding AI Engineer",
        "AI Engineer",
        "AI Agents",
        "Voice AI",
        "RAG",
        "AI Automation",
        "Pydantic AI",
        "MCP",
        "Python",
        "FastAPI",
        "Next.js",
        "Portfolio",
    ],
    authors: [{ name: "Zainab Yousaf" }],
    creator: "Zainab Yousaf",
    publisher: "Zainab Yousaf",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title,
        description,
        url: "https://zainab-yousaf.vercel.app",
        siteName: "Zainab Yousaf Portfolio",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
    alternates: {
        canonical: "https://zainab-yousaf.vercel.app",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${body.variable} ${code.variable} ${serif.variable}`}>
            <body className="antialiased">
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    );
}
