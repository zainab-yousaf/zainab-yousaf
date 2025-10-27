"use client";

import SideNav from "../components/SideNav";
import About from "../components/About";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import ContactInfo from "@/components/ContactInfo";
import { useState } from "react";
import {
    Menu,
    X,
    Home as HomeIcon,
    User,
    FolderKanban,
    Briefcase,
    Mail,
} from "lucide-react";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <SideNav />

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="fixed top-4 right-4 z-50 md:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white z-50 transform transition-transform duration-300 md:hidden ${
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full p-4">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Zainab Yousaf
                        </h1>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-4">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <HomeIcon size={20} />
                            <span>Home</span>
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <User size={20} />
                            <span>About</span>
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <FolderKanban size={20} />
                            <span>Projects</span>
                        </button>
                        <button
                            onClick={() => scrollToSection("skills")}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <Briefcase size={20} />
                            <span>Skills</span>
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <Mail size={20} />
                            <span>Contact</span>
                        </button>
                    </nav>

                    <div className="border-t border-gray-700 pt-4">
                        <div className="flex gap-3 justify-center">
                            <a
                                href="https://www.linkedin.com/in/zainabyousaf/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                            >
                                <span className="text-lg">💼</span>
                            </a>
                            <a
                                href="mailto:zainab.yousaf161@gmail.com"
                                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                            >
                                <span className="text-lg">📧</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="md:ml-64 w-full">
                {/* Home Section - Full Width Background */}
                <section
                    id="home"
                    className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
                >
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10">
                        <div className="mb-4">
                            <span className="text-base text-blue-400 font-medium tracking-wider uppercase animate-fade-in">
                                Welcome to my portfolio
                            </span>
                        </div>

                        <h1 className="text-5.5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-slide-up">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                Zainab Yousaf
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-6 animate-slide-up animation-delay-200">
                            Full-Stack Software Engineer building{" "}
                            <span className="text-blue-400 font-semibold">
                                scalable
                            </span>
                            ,{" "}
                            <span className="text-purple-400 font-semibold">
                                AI-powered
                            </span>{" "}
                            solutions with React and NestJS.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up animation-delay-400">
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("about")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                }}
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Explore My Work
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                }}
                                className="px-6 py-2 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
                        onClick={() =>
                            document.getElementById("about")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }
                    >
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-blue-400 transition-colors duration-300">
                            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </section>

                {/* Other Sections - Full Width */}
                <section id="about" className="min-h-screen bg-white">
                    <About />
                </section>

                <section id="projects" className="min-h-screen bg-white">
                    <Projects />
                </section>

                <section id="skills" className="min-h-screen bg-white">
                    <Skills />
                </section>

                <section id="contact" className="min-h-screen bg-white">
                    <ContactInfo />
                </section>
            </main>
        </div>
    );
}
