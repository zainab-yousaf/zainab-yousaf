"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Home,
    User,
    FolderKanban,
    Briefcase,
    Mail,
    Linkedin,
} from "lucide-react";
import imageProfile from "../public/profileImage.jpg";

const sections = ["home", "about", "projects", "skills", "contact"];

const icons: Record<string, any> = {
    home: Home,
    about: User,
    projects: FolderKanban,
    skills: Briefcase,
    contact: Mail,
};

export default function SideNav() {
    const [active, setActive] = useState("home");
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sections.map((id) => {
                const el = document.getElementById(id);
                if (!el) return { id, offset: 0 };
                return { id, offset: el.getBoundingClientRect().top };
            });

            const current = offsets.reduce((prev, curr) =>
                Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev
            );
            setActive(current.id);

            // Calculate scroll progress
            const scrollTop = window.pageYOffset;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-2xl flex flex-col items-center p-4 border-r border-gray-700 overflow-y-auto">
            {/* Scroll Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
                {/* Profile Image with Enhanced Styling */}
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                                src={imageProfile}
                                alt="Zainab Yousaf"
                                width={90}
                                height={90}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    {/* Online Status Indicator */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                </div>

                {/* Name with Gradient */}
                <h1 className="font-bold text-lg bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent text-center mt-4 mb-2">
                    Zainab Yousaf
                </h1>
                <p className="text-xs text-gray-400 text-center mb-3">
                    Full-Stack Software Engineer
                </p>
            </div>

            {/* Social Links with Enhanced Styling */}
            <div className="flex gap-3 mb-6">
                <a
                    href="https://www.linkedin.com/in/zainabyousaf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                    <Linkedin size={16} />
                </a>
                <a
                    href="mailto:zainab.yousaf161@gmail.com"
                    title="Email"
                    className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                    <Mail size={16} />
                </a>
            </div>

            {/* Navigation Links with Enhanced Styling */}
            <ul className="space-y-2 w-full">
                {sections.map((sec) => {
                    const Icon = icons[sec];
                    const isActive = active === sec;
                    return (
                        <li key={sec}>
                            <a
                                href={`#${sec}`}
                                onClick={(e) => handleNavClick(e, sec)}
                                className={`group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 relative ${
                                    isActive
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                                        : "hover:bg-gray-700/50 hover:text-white"
                                }`}
                            >
                                {/* Active Indicator */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                                )}

                                {/* Icon */}
                                <div
                                    className={`transition-all duration-300 ${
                                        isActive
                                            ? "text-white"
                                            : "text-gray-400 group-hover:text-blue-400"
                                    }`}
                                >
                                    <Icon size={16} />
                                </div>

                                {/* Text */}
                                <span
                                    className={`font-medium text-sm transition-all duration-300 ${
                                        isActive
                                            ? "text-white"
                                            : "text-gray-300 group-hover:text-white"
                                    }`}
                                >
                                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                                </span>

                                {/* Hover Effect */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                )}
                            </a>
                        </li>
                    );
                })}
            </ul>

            {/* Bottom Section */}
            <div className="mt-auto mb-4">
                <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm">🚀</span>
                    </div>
                    <p className="text-xs text-gray-500">
                        Available for opportunities
                    </p>
                </div>
            </div>

            {/* Vertical Scroll Progress Indicator */}
            <div className="absolute right-2 top-20 bottom-20 w-1 bg-gray-700 rounded-full">
                <div
                    className="w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                    style={{ height: `${scrollProgress}%` }}
                ></div>
            </div>
        </nav>
    );
}
