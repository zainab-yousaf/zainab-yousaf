import BentoGrid, { type TileSpec } from "../components/bento/BentoGrid";
import {
    AskPreview,
    ContactPreview,
    DreamDeskPreview,
    ExperiencePreview,
    IntroPreview,
    ProjectsPreview,
    SkillsPreview,
    StatsPreview,
} from "../components/bento/tiles";
import {
    AboutSection,
    ContactSection,
    DreamDeskSection,
    ExperienceSection,
    ProjectsSection,
    SiteFooter,
    SkillsSection,
} from "../components/sections";
import StickyNav from "../components/StickyNav";
import LazyChat from "../components/LazyChat";
import MotionProvider from "../components/ui/MotionProvider";

// First screen (desktop): a 4×3 bento overview that fits the viewport.
//   [ intro      ][ dreamdesk  ]
//   [ ask ][stats][ dreamdesk  ]
//   [proj][exp  ][skills][contact]
// Tiles link down to the full sections below. Tablet: two columns; phone: one column.
const SMALL = "min-h-[230px] lg:min-h-0";

const tiles: TileSpec[] = [
    { id: "intro", className: "md:col-span-2 min-h-[300px] lg:min-h-0", preview: <IntroPreview /> },
    {
        id: "dreamdesk",
        className: "md:col-span-2 lg:row-span-2 min-h-[480px] lg:min-h-0",
        preview: <DreamDeskPreview />,
        href: "#dreamdesk",
        label: "Go to the DreamDesk case study",
    },
    { id: "ask", className: SMALL, preview: <AskPreview />, action: "chat", label: "Ask my AI: open the chat", tone: "accent" },
    { id: "stats", className: SMALL, preview: <StatsPreview /> },
    { id: "projects", className: SMALL, preview: <ProjectsPreview />, href: "#projects", label: "Go to projects" },
    { id: "experience", className: SMALL, preview: <ExperiencePreview />, href: "#experience", label: "Go to experience" },
    { id: "skills", className: SMALL, preview: <SkillsPreview />, href: "#skills", label: "Go to skills" },
    { id: "contact", className: SMALL, preview: <ContactPreview />, href: "#contact", label: "Go to contact" },
];

export default function Home() {
    return (
        <MotionProvider>
            <StickyNav />
            <main>
                <div id="overview" className="mx-auto max-w-[1500px] p-3 sm:p-4 lg:p-5 short:p-3 lg:h-dvh lg:min-h-[640px]">
                    <BentoGrid tiles={tiles} />
                </div>
                <AboutSection />
                <DreamDeskSection />
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <SiteFooter />
            <LazyChat />
        </MotionProvider>
    );
}
