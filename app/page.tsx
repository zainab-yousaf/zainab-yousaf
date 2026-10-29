import Hero from "../components/Hero";
import TopNav from "../components/TopNav";
import {
    AboutSection,
    ContactSection,
    DreamDeskSection,
    ExperienceSection,
    ProjectsSection,
    SiteFooter,
    SkillsSection,
} from "../components/sections";
import LazyChat from "../components/LazyChat";
import MotionProvider from "../components/ui/MotionProvider";

export default function Home() {
    return (
        <MotionProvider>
            <TopNav />
            <main id="main">
                <Hero />
                <AboutSection />
                {/* "Work" in the nav: the case study followed by the other projects */}
                <div id="work">
                    <DreamDeskSection />
                    <ProjectsSection />
                </div>
                <ExperienceSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <SiteFooter />
            <LazyChat />
        </MotionProvider>
    );
}
