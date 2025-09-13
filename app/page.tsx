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
                    className="h-screen flex items-center justify-center bg-white"
                >
                    <h2 className="text-4xl font-bold text-gray-900">
                        Hi, I'm Zainab Youasf
                    </h2>
                </section>

                <section
                    id="about"
                    className="h-screen flex items-center justify-center bg-white"
                >
                    <div className="bg-white text-gray-900 font-sans flex">
                        <div className="flex-1">
                            <About />
                        </div>
                    </div>
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
