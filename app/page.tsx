import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsStrip from "../components/StatsStrip";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/ContactInfo";
import LazyChat from "../components/LazyChat";
import MotionProvider from "../components/ui/MotionProvider";
import ScrollProgress from "../components/ui/ScrollProgress";
import SectionHeading from "../components/ui/SectionHeading";
import FadeIn from "../components/ui/FadeIn";

export default function Home() {
    return (
        <MotionProvider>
            <div className="min-h-screen bg-bg">
                <ScrollProgress />
                <Navbar />
                <main>
                    <Hero />
                    <StatsStrip />
                    <Experience />
                    <Projects />
                    <Skills />

                    <section className="defer-render max-w-[1100px] mx-auto px-4 sm:px-6 pt-24">
                        <SectionHeading eyebrow="// education" title="Education" />
                        <FadeIn>
                            <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <p className="font-display text-lg font-bold text-fg">BS Computer Science</p>
                                    <p className="text-sm text-muted mt-1">
                                        FAST-NUCES, Faisalabad · <span className="font-mono text-accent">2020 – 2024</span>
                                    </p>
                                </div>
                                <span className="self-start md:self-auto font-mono text-xs px-3 py-1.5 rounded-full text-fg/85 border border-line bg-surface-2">
                                    Dean&apos;s List (2x)
                                </span>
                            </div>
                        </FadeIn>
                    </section>

                    <Contact />
                </main>
                <footer className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 border-t border-line flex flex-col sm:flex-row gap-2 justify-between font-mono text-xs text-subtle">
                    <span>© {new Date().getFullYear()} Zainab Yousaf</span>
                    <span>
                        built with Next.js · Tailwind · Motion<span className="text-accent">_</span>
                    </span>
                </footer>
                <LazyChat />
            </div>
        </MotionProvider>
    );
}
