import { z } from 'zod';

export const SynthesisSchema = z.object({
  topic: z.string().describe('The overall subject matter being discussed across sources.'),
  summary: z.string().describe('A 1-2 sentence high-level executive summary of the consensus and major friction points.'),
  consensus: z.array(z.string()).describe('A list of key facts, dates, or conclusions that all sources agree upon.'),
  conflicts: z.array(z.object({
    subject: z.string().describe('The specific point of disagreement (e.g., "Market Valuation", "Launch Date").'),
    sourceA_claim: z.string().describe('The specific claim or statistic provided by Source A.'),
    sourceB_claim: z.string().describe('The specific claim or statistic provided by Source B.'),
    significance: z.enum(['low', 'medium', 'high']).describe('The impact this disagreement has on the overall understanding of the topic.')
  })).describe('A collection of discrepancies or contradictions found between the sources.')
});

export type Synthesis = z.infer<typeof SynthesisSchema>;
