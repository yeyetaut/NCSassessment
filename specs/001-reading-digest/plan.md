# Implementation Plan: Reading Digest

**Branch**: `001-reading-digest` | **Date**: 2026-05-11 | **Spec**: [specs/001-reading-digest/spec.md](spec.md)
**Input**: Feature specification from `/specs/001-reading-digest/spec.md`

## Summary
The "Reading Digest" is a dashboard that synthesizes conflicting information from multiple sources. It supports a **Hybrid Input** model: users can either drop URLs (which are automatically scraped into Markdown using Jina Reader) or paste raw text. The tool then uses an LLM to generate a "Consensus vs. Conflict Matrix", allowing users to scan and triage information in under 60 seconds.

## Technical Context

**Language/Version**: TypeScript / Node.js 20+
**Primary Dependencies**: Next.js 14+ (App Router), Tailwind CSS, Shadcn UI, Framer Motion, `ai` (Vercel AI SDK), `@ai-sdk/openai`, `Jina Reader API` (via fetch)
**Storage**: N/A (Stateless for MVP)
**Testing**: Playwright (for core flow validation)
**Target Platform**: Web (Vercel)
**Project Type**: Web Application
**Performance Goals**: < 8s for (Scraping + AI Synthesis), 60fps animations
**Constraints**: 3-hour build limit, must pass the "60-second test"
**Scale/Scope**: 2 Sources per digest, ~2000-5000 words total input

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Taste Over Defaults:** Customizing Shadcn components with high-end typography (`Geist`) and spacing.
- **Judgment in Cutting:** Advanced scraping features (like JS execution or custom selector overrides) are CUT; we rely on Jina's default "Reader" mode for speed.
- **Scannability First:** Dashboard layout is mandatory; chatbots are BANNED.
- **Reliability:** UI must include a manual "Paste" fallback for sites that block Jina.

## Project Structure

### Documentation (this feature)

```text
specs/001-reading-digest/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── actions.ts       # AI Synthesis Server Action
│   ├── layout.tsx       # Global layout & fonts
│   └── page.tsx         # Main input/dashboard view
├── components/
│   ├── dashboard/       # Feature-specific components
│   │   ├── ConflictMatrix.tsx
│   │   ├── ConsensusList.tsx
│   │   └── SourceInput.tsx
│   └── ui/              # Shadcn primitives
├── lib/
│   └── ai/              # AI SDK configuration & prompts
└── tests/
    └── e2e/             # Core flow validation
```

**Structure Decision**: Using a standard Next.js App Router structure. Feature-specific logic is isolated in `components/dashboard/` and `app/actions.ts`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |
