"use client";

import SideNav from "../components/SideNav";
import About from "../components/About";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import ContactInfo from "@/components/ContactInfo";

export default function Home() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <SideNav />

            {/* Main Content */}
            <main className="ml-64 w-full">
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

                        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-slide-up">
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
