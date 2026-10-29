import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const body = Geist({ variable: "--font-body", subsets: ["latin"] });
const code = Geist_Mono({ variable: "--font-code", subsets: ["latin"], preload: false });
const serif = Newsreader({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"] });

const title = "Zainab Yousaf – AI Engineer & Full-Stack Developer";
const description =
    "AI Engineer and Full-Stack Developer. Founding engineer at DreamDesk AI (UK, remote), building AI-powered applications, intelligent agents and full-stack products: multi-channel agents live across 3 hotels, voice agents at ~1.6s response time.";

export const metadata: Metadata = {
    metadataBase: new URL("https://zainab-yousaf.vercel.app"),
    title,
    description,
    keywords: [
        "Zainab Yousaf",
        "Founding AI Engineer",
        "AI Engineer",
        "Full-Stack Developer",
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
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-cream focus:text-espresso focus:px-4 focus:py-2 focus:rounded-full focus:border focus:border-line"
                >
                    Skip to content
                </a>
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    );
}
