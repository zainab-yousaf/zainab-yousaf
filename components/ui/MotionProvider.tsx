"use client";

import { MotionConfig } from "motion/react";

// reducedMotion="user": visitors with "reduce motion" turned on get no movement, only instant changes.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
