import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Zainab Yousaf - Full-Stack Software Engineer Portfolio",
    description:
        "Portfolio of Zainab Yousaf, Full-Stack Software Engineer specializing in React, NestJS, Swift, and AI-powered applications. Building scalable, innovative solutions with proven impact - 30% performance improvements, 45% visibility increases.",
    keywords: [
        "Zainab Yousaf",
        "Full-Stack Developer",
        "Software Engineer",
        "React",
        "NestJS",
        "Swift",
        "AI",
        "Portfolio",
        "Web Developer",
        "Mobile Developer",
        "iOS Developer",
        "TypeScript",
        "Node.js",
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
        title: "Zainab Yousaf - Full-Stack Software Engineer",
        description:
            "Full-Stack Software Engineer specializing in AI-powered applications and scalable solutions. Proven track record of 30% performance improvements and 45% visibility increases.",
        url: "https://zainab-yousaf.vercel.app",
        siteName: "Zainab Yousaf Portfolio",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zainab Yousaf - Full-Stack Software Engineer",
        description:
            "Full-Stack Software Engineer specializing in AI-powered applications and scalable solutions.",
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
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    );
}
