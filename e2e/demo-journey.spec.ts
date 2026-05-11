import { test, expect } from '@playwright/test';

test('E2E Demo Journey', async ({ page, context }) => {
  // 1. Set mock cookie to trigger the deterministic response from the Server Action
  await context.addCookies([{
    name: 'mock-ai',
    value: 'true',
    domain: 'localhost',
    path: '/',
  }]);

  // 2. Navigate to landing page
  await page.goto('/');

  // 3. Input Source A (URL)
  await page.getByPlaceholder('https://example.com/article-a').fill('https://example.com/a');

  // 4. Input Source B (Text)
  const sourceBCard = page.locator('div').filter({ hasText: /^Source B/ }).first();
  await sourceBCard.getByRole('button', { name: /Paste/i }).click();
  await page.getByPlaceholder('Paste text content from Source B...').fill('Raw text from source B');

  // 5. Click Generate Synthesis
  const generateBtn = page.getByRole('button', { name: 'Generate Synthesis' });
  await generateBtn.click();

  // 6. Verify loading state appears
  await expect(page.getByText('Synthesizing insights...')).toBeVisible();

  // 7. Verify dashboard components appear with mapped data from the mock
  // We use a longer timeout here because it involves a server round-trip
  await expect(page.getByText('Mocked E2E Topic')).toBeVisible({ timeout: 15000 });
  await expect(page.getByText('Both sources agree E2E testing is valuable')).toBeVisible();
  
  // Verify specific conflict card content
  await expect(page.getByText('Testing Scope')).toBeVisible();
  await expect(page.getByText('Test everything')).toBeVisible();
  await expect(page.getByText('Test only critical paths')).toBeVisible();

  // Verify ability to reset and go back
  await page.getByRole('button', { name: /New Synthesis/i }).click();
  await expect(page.getByPlaceholder('https://example.com/article-a')).toBeVisible();
});
