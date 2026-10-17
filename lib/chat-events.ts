// Dispatch this event on window to open the "Ask my AI" chat from anywhere.
// Kept in its own tiny module so buttons can open the chat without bundling the chat itself.
export const OPEN_CHAT_EVENT = "open-ai-chat";

export function openChat() {
    window.dispatchEvent(new Event(OPEN_CHAT_EVENT));
}
