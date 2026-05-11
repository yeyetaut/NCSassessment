import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ConflictMatrix } from '@/components/ConflictMatrix';

describe('ConflictMatrix Component', () => {
  it('correctly renders the topic, summary, and conflicts', () => {
    const mockData = {
      topic: 'Climate Change',
      summary: 'Summary of climate change.',
      sources: [],
      conflicts: [
        {
          point: 'Temperature rise',
          source1: 'Source A',
          claim1: 'Will rise by 2 degrees',
          source2: 'Source B',
          claim2: 'Will rise by 1.5 degrees',
          resolution: 'More data needed'
        }
      ]
    };

    render(<ConflictMatrix data={mockData} />);

    expect(screen.getByText('Climate Change')).toBeDefined();
    expect(screen.getByText('Summary of climate change.')).toBeDefined();
    expect(screen.getByText('Temperature rise')).toBeDefined();
    expect(screen.getByText('Source A')).toBeDefined();
    expect(screen.getByText('Will rise by 2 degrees')).toBeDefined();
  });

  it('shows a specific "All Consensus" message for Zero Conflicts edge case', () => {
    const mockData = {
      topic: 'Math',
      summary: 'Basic math facts.',
      sources: [],
      conflicts: []
    };

    render(<ConflictMatrix data={mockData} />);

    expect(screen.getByText(/All Consensus/i)).toBeDefined();
  });
});
