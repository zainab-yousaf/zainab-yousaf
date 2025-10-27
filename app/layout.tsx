import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        "Portfolio of Zainab Yousaf, Full-Stack Software Engineer specializing in React, NestJS, Swift, and AI-powered applications. Building scalable, innovative solutions.",
    keywords: [
        "Zainab Yousaf",
        "Full-Stack Developer",
        "Software Engineer",
        "React",
        "NestJS",
        "Swift",
        "AI",
        "Portfolio",
    ],
    authors: [{ name: "Zainab Yousaf" }],
    openGraph: {
        title: "Zainab Yousaf - Full-Stack Software Engineer",
        description:
            "Full-Stack Software Engineer specializing in AI-powered applications and scalable solutions",
        url: "https://zainabyousaf.dev",
        type: "website",
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
                {children}
            </body>
        </html>
    );
}
