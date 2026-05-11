# TDD Strategy: Reading Digest

## 1. Test Strategy: Demo-Critical Path Assurance

In a rapid prototyping environment, our QA strategy focuses strictly on **High-Risk/High-Impact** paths to ensure a flawless stakeholder demo.

**Core QA Priorities:**
- **Risk 1: AI Data Formatting (High):** Ensure strict boundary via Zod `SynthesisSchema`.
- **Risk 2: Hybrid Input Handling (High):** Ensure seamless branching logic for scraping vs. raw text.
- **Risk 3: UI Edge Cases (Medium):** Handle 0-conflict states gracefully.

---

## 2. Unit & Integration Tests (Vitest)

### A. Server Action Integration (`tests/actions.test.ts`)
Validates hybrid input logic and AI schema adherence.

### B. Component Edge Case Rendering (`tests/ConflictMatrix.test.tsx`)
Validates UI rendering for consensus and conflict states.

---

## 3. E2E Test Outline (Playwright)

### `e2e/demo-journey.spec.ts`
Tests the complete flow from input to dashboard, verifying the "60-second journey" including loading states and data mapping.
