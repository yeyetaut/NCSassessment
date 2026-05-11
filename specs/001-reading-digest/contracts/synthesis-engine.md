# Contract: Synthesis Engine

## Purpose
Defines the interface for the AI-powered synthesis of conflicting texts.

## Interface: `processInput` (Server Action)

### Input
- `inputA`: `string` (Either a URL or raw text)
- `inputB`: `string` (Either a URL or raw text)
- `typeA`: `'url' | 'text'`
- `typeB`: `'url' | 'text'`

### Processing Flow
1. If `type` is `'url'`, the engine calls `https://r.jina.ai/${input}` to extract Markdown content.
2. If scraping fails or `type` is `'text'`, it uses the raw text.
3. Both texts are passed to the AI Synthesis Engine (GPT-4o-mini).

### Output
Returns a `Promise` resolving to a structured result object:

```typescript
{
  success: boolean;
  data?: Synthesis; // See data-model.md
  sources?: {
    a: { title: string; content: string; url?: string };
    b: { title: string; content: string; url?: string };
  };
  error?: string;
}
```

## Constraints
- **Latency:** Target < 5 seconds for GPT-4o-mini processing.
- **Reliability:** The engine must return a valid JSON object even if the input texts are short or irrelevant (in which case, `conflicts` may be empty).
- **Security:** Requires a valid `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` in the environment.
