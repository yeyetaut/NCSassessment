import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generateObject } from 'ai';

// 1. Mock dependencies BEFORE importing the tested module
vi.mock('ai', () => ({
  generateObject: vi.fn(),
}));

vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}));

vi.mock('@ai-sdk/openai', () => ({
  openai: vi.fn(),
}));

// 2. Import the tested module
import { processInput } from '@/app/actions';
import { cookies } from 'next/headers';

global.fetch = vi.fn();

describe('processInput action', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    
    // Setup default mock implementation for cookies
    (cookies as any).mockResolvedValue({
      get: vi.fn().mockReturnValue(undefined),
    });
  });

  it('branches for URL input and returns Synthesis data', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      text: async () => 'Mocked markdown content from URL',
    });

    const mockSynthesis = {
      topic: 'Test Topic',
      summary: 'Test Summary',
      consensus: ['Common fact'],
      conflicts: [],
    };
    (generateObject as any).mockResolvedValueOnce({
      object: mockSynthesis,
    });

    const result = await processInput({
      inputA: 'https://example.com',
      typeA: 'url',
      inputB: 'Other source text',
      typeB: 'text'
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://r.jina.ai/https://example.com'),
      expect.any(Object)
    );
    expect(generateObject).toHaveBeenCalled();
    expect(result).toEqual({ success: true, data: mockSynthesis });
  });

  it('branches for Text input and returns Synthesis data', async () => {
    const mockSynthesis = {
      topic: 'Test Topic',
      summary: 'Test Summary',
      consensus: ['Fact'],
      conflicts: [],
    };
    (generateObject as any).mockResolvedValueOnce({
      object: mockSynthesis,
    });

    const result = await processInput({
      inputA: 'Mocked text A',
      typeA: 'text',
      inputB: 'Mocked text B',
      typeB: 'text'
    });

    expect(global.fetch).not.toHaveBeenCalled();
    expect(generateObject).toHaveBeenCalled();
    expect(result).toEqual({ success: true, data: mockSynthesis });
  });

  it('handles Jina fetch failure by falling back to raw input', async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

    const mockSynthesis = {
      topic: 'Test Topic',
      summary: 'Test Summary',
      consensus: ['Fact'],
      conflicts: [],
    };
    (generateObject as any).mockResolvedValueOnce({
      object: mockSynthesis,
    });

    const result = await processInput({
      inputA: 'https://failing-url.com',
      typeA: 'url',
      inputB: 'Valid text',
      typeB: 'text'
    });

    expect(global.fetch).toHaveBeenCalled();
    expect(generateObject).toHaveBeenCalled();
    expect(result.success).toBe(true);
  });
});
