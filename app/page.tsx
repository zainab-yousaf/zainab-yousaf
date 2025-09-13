import SideNav from "../components/SideNav";
import About from "../components/About";
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
                    className="h-screen bg-white flex items-center justify-center"
                >
                    <About />
                </section>

                <section
                    id="projects"
                    className="h-screen flex items-center justify-center bg-white"
                >
                    <h2 className="text-3xl font-bold text-gray-900">
                        Projects
                    </h2>
                </section>

                <section
                    id="experience"
                    className="h-screen flex items-center justify-center bg-white"
                >
                    <h2 className="text-3xl font-bold text-gray-900">
                        Experience
                    </h2>
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
