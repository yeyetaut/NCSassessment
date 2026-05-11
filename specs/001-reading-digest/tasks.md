# Tasks: Reading Digest (001-reading-digest)

## Phase 1: Environment & Test Setup (TDD Start)
- [x] Initialize project with Vitest and Playwright. <!-- id: 0 -->
- [x] Create `src/lib/schema/data-model.ts` with the Zod `SynthesisSchema`. <!-- id: 1 -->
- [x] Write failing integration test for `processInput` Server Action in `tests/actions.test.ts`. <!-- id: 2 -->
- [x] Write failing component test for `ConflictMatrix` UI in `tests/ConflictMatrix.test.tsx`. <!-- id: 3 -->

## Phase 2: Core Logic (The Synthesis Engine)
- [x] Implement `processInput` Server Action with Jina Reader scraping logic. <!-- id: 4 -->
- [x] Integrate Vercel AI SDK `generateObject` with the defined Zod schema. <!-- id: 5 -->
- [x] Verify `tests/actions.test.ts` passes. <!-- id: 6 -->

## Phase 3: Dashboard UI (The Matrix)
- [x] Implement `ConflictMatrix` component using CSS Grid (4-cols, asymmetric). <!-- id: 7 -->
- [x] Build `ConsensusList` and `ConflictCard` components with Shadcn UI. <!-- id: 8 -->
- [x] Add Framer Motion staggered reveal animations to the dashboard. <!-- id: 9 -->
- [x] Verify `tests/ConflictMatrix.test.tsx` passes. <!-- id: 10 -->

## Phase 4: Integration & E2E
- [x] Build main `page.tsx` with hybrid input forms and state management. <!-- id: 11 -->
- [x] Connect inputs to the `processInput` Server Action. <!-- id: 12 -->
- [x] Implement Playwright E2E test `e2e/demo-journey.spec.ts`. <!-- id: 13 -->
- [x] Final polish: typography (`Geist`), spacing, and loading skeletons. <!-- id: 14 -->

## Phase 5: Deployment & Validation
- [x] Deploy to Vercel. <!-- id: 15 -->
- [x] Run final E2E check against live environment. <!-- id: 16 -->
