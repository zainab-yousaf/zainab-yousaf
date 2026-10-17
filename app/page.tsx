import BentoApp, { type TileSpec } from "../components/bento/BentoApp";
import {
    AboutDetail,
    AskPreview,
    ContactDetail,
    ContactPreview,
    DreamDeskDetail,
    DreamDeskPreview,
    ExperienceDetail,
    ExperiencePreview,
    IntroPreview,
    ProjectsDetail,
    ProjectsPreview,
    SkillsDetail,
    SkillsPreview,
    StatsDetail,
    StatsPreview,
} from "../components/bento/tiles";
import LazyChat from "../components/LazyChat";
import MotionProvider from "../components/ui/MotionProvider";

// Desktop (lg): a 4×3 bento that fits one screen.
//   [ intro      ][ dreamdesk  ]
//   [ ask ][stats][ dreamdesk  ]
//   [proj][exp  ][skills][contact]
// Tablet: two columns; phone: one column (scrolling is fine there).
const SMALL = "min-h-[230px] lg:min-h-0";

const tiles: TileSpec[] = [
    {
        id: "about",
        label: "Open about Zainab",
        className: "md:col-span-2 min-h-[300px] lg:min-h-0",
        preview: <IntroPreview />,
        detail: <AboutDetail />,
        detailTitle: "About Zainab Yousaf",
    },
    {
        id: "dreamdesk",
        label: "Open the DreamDesk case study",
        className: "md:col-span-2 lg:row-span-2 min-h-[480px] lg:min-h-0",
        preview: <DreamDeskPreview />,
        detail: <DreamDeskDetail />,
        detailTitle: "DreamDesk case study",
    },
    {
        id: "ask",
        label: "Ask my AI: open the chat",
        className: SMALL,
        preview: <AskPreview />,
        action: "chat",
        tone: "accent",
    },
    { id: "stats", label: "Open all numbers", className: SMALL, preview: <StatsPreview />, detail: <StatsDetail />, detailTitle: "By the numbers" },
    { id: "projects", label: "Open projects", className: SMALL, preview: <ProjectsPreview />, detail: <ProjectsDetail />, detailTitle: "Projects" },
    { id: "experience", label: "Open experience", className: SMALL, preview: <ExperiencePreview />, detail: <ExperienceDetail />, detailTitle: "Experience and education" },
    { id: "skills", label: "Open skills", className: SMALL, preview: <SkillsPreview />, detail: <SkillsDetail />, detailTitle: "Skills" },
    { id: "contact", label: "Open contact", className: SMALL, preview: <ContactPreview />, detail: <ContactDetail />, detailTitle: "Contact" },
];

export default function Home() {
    return (
        <MotionProvider>
            <main className="mx-auto max-w-[1500px] p-3 sm:p-4 lg:p-5 short:p-3 lg:h-dvh lg:min-h-[640px]">
                <BentoApp tiles={tiles} />
            </main>
            <footer className="lg:sr-only px-4 pb-6 pt-2 text-center font-mono text-[11px] text-subtle">
                © {new Date().getFullYear()} Zainab Yousaf
            </footer>
            <LazyChat />
        </MotionProvider>
    );
}
