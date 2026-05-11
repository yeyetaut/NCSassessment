# Reading Digest: Executive Synthesis Dashboard

## Triage Conflicting Information at a Glance

In high-stakes operational environments, leaders are inundated with reports, articles, and intelligence briefings. Often, these sources present conflicting information or varying perspectives on the same event. **Reading Digest** is a rapid-prototype dashboard designed specifically for operations managers to cut through the noise. 

It takes multiple inputs (URLs or raw text), extracts the core information, and uses AI to synthesize a clear picture: highlighting what is universally agreed upon (Consensus) and isolating critical discrepancies (Conflicts). This enables leaders to make informed decisions faster.

---

## ⚡ The 60-Second Demo

When evaluating this prototype, pay attention to the following key features:

1. **Hybrid Input System:** Seamlessly paste raw text briefings or drop in URLs. The system automatically handles scraping and parsing.
2. **The Consensus vs. Conflict Matrix:** Our bento-grid UI instantly visually separates undisputed facts from conflicting reports, reducing cognitive load.
3. **Staggered Reveal Animations:** Built with Framer Motion, the UI guides the user's eye naturally through the synthesized data.
4. **Performance Optimized:** Engineered for speed, utilizing parallel processing and lightweight, fast LLMs (Gemini 1.5 Flash) to deliver results in seconds.

---

## 🏗️ Technical Architecture

This prototype was built prioritizing speed, professional quality, and a robust foundation:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router) for a robust full-stack foundation.
* **UI & Styling:** [Tailwind CSS](https://tailwindcss.com/) paired with [Shadcn UI](https://ui.shadcn.com/) for rapid, accessible, and premium component design.
* **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid, professional interactions.
* **AI Integration:** [Vercel AI SDK](https://sdk.vercel.ai/docs) orchestrating Google's [Gemini 1.5 Flash](https://deepmind.google/technologies/gemini/flash/) for high-speed, cost-effective reasoning and synthesis.
* **Content Extraction:** [Jina Reader API](https://jina.ai/reader/) for reliable, clean text extraction from URLs.

---

## 🛡️ Engineering Excellence & Quality Assurance

We believe rapid prototyping shouldn't mean sacrificing reliability. This project was developed using a Test-Driven Development (TDD) approach to ensure engineering robustness:

* **Comprehensive Testing:** Validated via Unit and Integration tests using [Vitest](https://vitest.dev/), and End-to-End (E2E) testing with [Playwright](https://playwright.dev/).
* **Deterministic "Mock Mode":** To ensure stable, reliable, and cost-free E2E testing in CI/CD pipelines, the application includes a deterministic mock mode, bypassing live API calls while validating core application logic.
* **Product Thinking:** Tests were specifically designed around the most sensitive logic—accurate conflict detection and synthesis—demonstrating a focus on delivering reliable value, not just shipping code.

---

## 🚀 Setup Instructions

Follow these steps to run the Reading Digest prototype locally:

### 1. Clone & Install
```bash
# Clone the repository (adjust URL as needed)
git clone <repository-url>
cd NCSinterview

# Install dependencies
npm install
```

### 2. Environment Variables
You will need API keys for Google Gemini and Jina Reader. Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add the following variables to your `.env.local` file:

```env
# Required for AI Synthesis
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here

# Required for URL scraping functionality
JINA_API_KEY=your_jina_api_key_here
```

### 3. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your browser to view the dashboard.

### 4. Running Tests
* **Unit/Integration (Vitest):** `npm run test`
* **E2E (Playwright):** `npm run test:e2e`