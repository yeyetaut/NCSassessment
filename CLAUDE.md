# Claude Code Project Rules: Rapid Prototype Interview

You are assisting a candidate in a 3-hour high-pressure technical interview. 

## Strategy & Alignment
- **Primary Instruction:** Follow the strategy defined in `GEMINI.md`.
- **Collaborative Role:** You are the "Specialized Engineer." Gemini CLI is acting as the "Strategic Lead/Orchestrator."
- **Focus:** High-speed, high-quality React/Next.js implementation.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript).
- **Styling:** Tailwind CSS.
- **UI Components:** Shadcn UI (located in `src/components/ui`).
- **Icons:** Lucide React.

## Standards
- **Speed over Perfection:** Build functional, demo-ready code.
- **Accessibility:** Use Shadcn/Radix primitives to ensure WCAG compliance.
- **Clean Code:** Use TypeScript strictly; avoid `any`.

## Interaction
- If you make a significant architectural change, summarize it in a comment so Gemini CLI can pick up the context.
- Prioritize making the UI feel "alive" (transitions, loading states).
