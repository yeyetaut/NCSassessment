# Research: Reading Digest

## Decision: AI Synthesis Pattern
**Choice:** Vercel AI SDK `generateObject` in a Next.js Server Action.
**Rationale:** 
- `generateObject` provides strict schema validation via Zod, ensuring the dashboard UI doesn't break.
- Server Actions allow for a cleaner DX (no need for manual fetch calls) and keep API keys secure.
- **Alternatives Considered:** `streamObject`. Rejected because a bento-grid dashboard requires the full structured data to calculate the layout. A "pop-in" staggered reveal of the finished grid is a superior "Executive Digest" experience.

## Decision: Dashboard Layout (Bento Grid)
**Choice:** CSS Grid with `grid-cols-4` and `grid-flow-dense`.
**Rationale:**
- This allows for the "Asymmetric" look requested in the design principles.
- Use `md:col-span-2` for high-significance conflicts and `md:row-span-2` for tall items like the "Consensus List".
- `grid-flow-dense` ensures no awkward whitespace holes in the grid.
- **Alternatives Considered:** Flexbox. Rejected because complex asymmetric grids are difficult to manage with flex-basis and percentage math.

## Decision: Animation Orchestration
**Choice:** Framer Motion Variants with `staggerChildren`.
**Rationale:**
- Provides the "Editorial" feel defined in `minimalist-ui`.
- Orchestrating the reveal from the parent ensures a professional, coordinated entrance rather than items popping in randomly.
- **Alternatives Considered:** Native CSS transitions. Rejected because orchestrating a staggered sequence of 5-10 cards is complex to manage with manual `animation-delay` calculations.

## Technical Unknowns Resolved
- **JSON Schema:** Use `.describe()` on Zod fields to provide inline instructions to the LLM.
- **Mobile Fallback:** Asymmetric grid will fall back to a single column (`grid-cols-1`) on mobile to maintain readability.
## Decision: AI Model
**Choice:** `gemini-2.5-flash` (Google AI SDK).
**Rationale:**
- Latest generation model for superior reasoning and speed.
- Massive context window for handling large-scale source synthesis.
- Optimized for structured JSON extraction.
