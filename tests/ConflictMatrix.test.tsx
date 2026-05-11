import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ConflictMatrix } from '@/components/dashboard/ConflictMatrix';

describe('ConflictMatrix Component', () => {
  it('correctly renders the topic, summary, and conflicts', () => {
    const mockData = {
      topic: 'Climate Change',
      summary: 'Summary of climate change.',
      consensus: ['Earth is warming'],
      conflicts: [
        {
          subject: 'Temperature rise',
          sourceA_claim: 'Will rise by 2 degrees',
          sourceB_claim: 'Will rise by 1.5 degrees',
          significance: 'high'
        }
      ]
    };

    render(<ConflictMatrix data={mockData as any} />);

    expect(screen.getByText('Climate Change')).toBeDefined();
    expect(screen.getByText('Summary of climate change.')).toBeDefined();
    expect(screen.getByText('Temperature rise')).toBeDefined();
    expect(screen.getByText('Will rise by 2 degrees')).toBeDefined();
  });

  it('shows a specific "All Consensus" message for Zero Conflicts edge case', () => {
    const mockData = {
      topic: 'Math',
      summary: 'Basic math facts.',
      consensus: ['1 + 1 = 2'],
      conflicts: []
    };

    render(<ConflictMatrix data={mockData as any} />);

    expect(screen.getByText(/All Consensus/i)).toBeDefined();
  });
});
