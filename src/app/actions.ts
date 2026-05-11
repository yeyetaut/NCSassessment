'use server';

import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { SynthesisSchema } from '@/lib/schema/data-model';
import { cookies } from 'next/headers';

export type ProcessInputParams = {
  inputA: string;
  typeA: 'url' | 'text';
  inputB: string;
  typeB: 'url' | 'text';
};

export async function processInput(params: ProcessInputParams) {
  // Mock mode for E2E testing to avoid API costs and provide deterministic results
  // Checked via env var or a specific 'mock-ai' cookie
  const cookieStore = await cookies();
  const isMockMode = process.env.NEXT_PUBLIC_MOCK_AI === 'true' || cookieStore.get('mock-ai')?.value === 'true';

  if (isMockMode) {
    return {
      success: true,
      data: {
        topic: 'Mocked E2E Topic',
        summary: 'This is a mocked summary for E2E testing.',
        consensus: ['Both sources agree E2E testing is valuable'],
        conflicts: [
          {
            subject: 'Testing Scope',
            sourceA_claim: 'Test everything',
            sourceB_claim: 'Test only critical paths',
            significance: 'high'
          }
        ]
      }
    };
  }

  try {
    const [contentA, contentB] = await Promise.all([
      fetchContent(params.inputA, params.typeA),
      fetchContent(params.inputB, params.typeB),
    ]);

    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      temperature: 0, // Forces deterministic output
      schema: SynthesisSchema,
      prompt: `You are an expert intelligence analyst. Your task is to perform an EXHAUSTIVE and DETERMINISTIC comparison of the following two sources.

MANDATORY RULES:
1. CONSENSUS: Extract EVERY single fact, metric, and conclusion that both sources agree on.
2. CONFLICTS: Extract EVERY single discrepancy, contradiction, or differing opinion, no matter how minor. Do not leave any conflicts out.
3. Do not generalize. Be specific and comprehensive.

Source A:
${contentA}

Source B:
${contentB}`,
    });

    return { success: true, data: object };
  } catch (error) {
    console.error('Synthesis error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}

async function fetchContent(input: string, type: 'url' | 'text'): Promise<string> {
  if (type === 'text') {
    return input;
  }

  try {
    const response = await fetch(`https://r.jina.ai/${input}`, {
      method: 'GET',
      headers: {
        'Accept': 'text/markdown',
      },
      // Adding a reasonable timeout for scraping
      signal: AbortSignal.timeout(10000), 
    });

    if (!response.ok) {
      throw new Error(`Jina fetch failed: ${response.status}`);
    }

    const text = await response.text();
    return text || input;
  } catch (error) {
    console.warn(`Scraping failed for ${input}, falling back to raw input:`, error);
    return input;
  }
}
