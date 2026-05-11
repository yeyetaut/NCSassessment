# Specification: Reading Digest

## Problem Brief
Building a tool that helps users synthesize information from multiple conflicting sources. When researching a topic, different sources often present conflicting facts, differing statistics, or opposing opinions.

## Core Flow
- **Input:** User drops URLs or raw text from multiple sources.
- **Action:** AI synthesizes the content.
- **Output:** A synthesis that explicitly surfaces where sources disagree and what they agree on.

## Requirements
- Must be a dashboard, not a chatbot.
- Must surface recurring topics.
- Must identify "high-risk" or urgent discrepancies.
- Must be understandable in 60 seconds (The "60-second test").

## Constraints
- 3-hour build limit.
- Must use Next.js, Tailwind, and Shadcn UI.
- Must be demo-ready and scannable.
- (Self-imposed for demo robustness) Focus on raw text input to bypass paywalls/scraping issues.

## User Persona
An operations manager or researcher who needs to triage high volumes of information and identify contradictions quickly.
