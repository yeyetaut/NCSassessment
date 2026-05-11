import { describe, it, expect, vi, beforeEach } from 'vitest';
import { processInput } from '@/app/actions';
import { SynthesisSchema } from '@/lib/schema/data-model';
import { generateObject } from 'ai';

vi.mock('ai', () => ({
  generateObject: vi.fn(),
}));

global.fetch = vi.fn();

describe('processInput action', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('branches for URL input and returns SynthesisSchema', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      text: async () => 'Mocked markdown content from URL',
    });

    const mockSynthesis = {
      topic: 'Test Topic',
      summary: 'Test Summary',
      sources: [{ url: 'https://example.com', name: 'Example' }],
      conflicts: [],
    };
    (generateObject as any).mockResolvedValueOnce({
      object: mockSynthesis,
    });

    const result = await processInput('https://example.com');

    expect(global.fetch).toHaveBeenCalledWith('https://r.jina.ai/https://example.com');
    expect(generateObject).toHaveBeenCalled();
    expect(result).toEqual(mockSynthesis);
  });

  it('branches for Text input and returns SynthesisSchema', async () => {
    const mockSynthesis = {
      topic: 'Test Topic',
      summary: 'Test Summary',
      sources: [{ text: 'Mocked text content', name: 'User Input' }],
      conflicts: [],
    };
    (generateObject as any).mockResolvedValueOnce({
      object: mockSynthesis,
    });

    const result = await processInput('Mocked text content');

    expect(global.fetch).not.toHaveBeenCalled();
    expect(generateObject).toHaveBeenCalled();
    expect(result).toEqual(mockSynthesis);
  });
});
