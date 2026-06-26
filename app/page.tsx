import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/ContactInfo";

export default function Home() {
    return (
        <div className="min-h-screen" style={{ background: "#f8f8f6" }}>
            <Navbar />
            <main className="max-w-[1100px] mx-auto px-6">
                <Hero />
                <BentoGrid />
                <Projects />
                <section className="pt-16 pb-4">
                    <h2 className="text-xl font-semibold text-[#1a1a18] mb-6">Education</h2>
                    <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ border: "1px solid #e0dfd8" }}>
                        <div>
                            <p className="text-sm font-semibold text-[#1a1a18]">BS Computer Science</p>
                            <p className="text-sm text-[#5a5a52] mt-1">FAST-NUCES, Faisalabad · CGPA 3.34</p>
                        </div>
                        <span className="text-xs px-3 py-1.5 rounded-full bg-[#f4f4f0] text-[#3a3a32]" style={{ border: "0.5px solid #e0dfd8" }}>Dean's List ×2</span>
                    </div>
                </section>
                <Skills />
                <Contact />
                <footer className="py-8 text-center text-xs text-[#8a8a82]">
                    © {new Date().getFullYear()} Zainab Yousaf
                </footer>
            </main>
        </div>
    );
}
