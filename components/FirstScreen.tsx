import ChatTrigger from "./bento/ChatTrigger";
import { AskTile, DreamDeskTile, IntroTile } from "./bento/tiles";

// First screen. Desktop: the intro is the focal point on the left with a compact "Ask my AI" strip
// under it; DreamDesk sits on the right. Fits the viewport below the 64px top nav.
// Tablet and phone: one column, scrolling.
export default function FirstScreen() {
    return (
        <div id="overview" className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8 pt-3 pb-10 lg:pb-8 short:pb-5 lg:h-[calc(100dvh-64px)] lg:min-h-[600px]">
            <div className="grid gap-4 lg:gap-5 lg:grid-cols-[1.2fr_1fr] lg:h-full">
                <div className="flex flex-col gap-4 lg:gap-5 min-h-0">
                    <div className="tile-in flex-1 min-h-0" style={{ "--delay": "0ms" } as React.CSSProperties}>
                        <div className="tile tile-static h-full rounded-[28px] overflow-hidden">
                            <IntroTile />
                        </div>
                    </div>
                    <div className="tile-in" style={{ "--delay": "160ms" } as React.CSSProperties}>
                        <div className="tile relative rounded-[28px] overflow-hidden !bg-accent !border-accent">
                            <ChatTrigger
                                label="Ask my AI: open the chat"
                                className="absolute inset-0 z-0 w-full h-full rounded-[28px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-fg"
                            />
                            <div className="relative pointer-events-none">
                                <AskTile />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile-in min-h-[520px] lg:min-h-0" style={{ "--delay": "80ms" } as React.CSSProperties}>
                    <div className="tile tile-static h-full rounded-[28px] overflow-hidden">
                        <DreamDeskTile />
                    </div>
                </div>
            </div>
        </div>
    );
}
