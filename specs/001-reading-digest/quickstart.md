# Quickstart: Reading Digest

## Prerequisites
- Node.js 20+
- npm / pnpm / bun
- An OpenAI API Key (configured with GPT-4o or GPT-4o-mini access)

## Setup
1. **Clone & Install:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file in the root:
   ```env
   OPENAI_API_KEY=your_key_here
   ```

3. **Development Mode:**
   ```bash
   npm run dev
   ```

4. **Verify:**
   Navigate to `http://localhost:3000`. You should see the dual-input UI. Paste two pieces of text and hit "Synthesize".

## Demo Script
1. Paste a news article about a company's earnings from Source A.
2. Paste a different news article about the *same* earnings from Source B (ensure they have one conflicting number or projection).
3. Click Synthesize.
4. Watch the bento grid stagger in, clearly highlighting the numerical discrepancy in the "Conflicts" section.
