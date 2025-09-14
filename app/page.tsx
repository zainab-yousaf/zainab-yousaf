import SideNav from "../components/SideNav";
import About from "../components/About";
import Projects from "@/components/Project";
export default function Home() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <SideNav />

            {/* Main Content */}
            <main className="ml-48 w-full px-8 bg-white">
                <section
                    id="home"
                    className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
                >
                    <h1 className="text-5xl font-extrabold mb-4">
                        Hi, I'm Zainab Yousaf
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Full-Stack Software Engineer building scalable,
                        AI-powered solutions with React and NestJS.
                    </p>
                </section>

                <section
                    id="about"
                    className="min-h-screen justify-center py-16 px-6 bg-white"
                >
                    <About />
                </section>

                <section
                    id="projects"
                    className="min-h-screen justify-center py-16 px-6 bg-white"
                >
                    <Projects />
                </section>

                <section
                    id="skills"
                    className="h-screen flex items-center justify-center bg-white"
                >
                    <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
                </section>

                <section
                    id="contact"
                    className="h-screen flex items-center justify-center bg-white"
                >
                    <h2 className="text-3xl font-bold text-gray-900">
                        Contact
                    </h2>
                </section>
            </main>
        </div>
    );
}
