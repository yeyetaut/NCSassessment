import { test, expect } from '@playwright/test';
test('mock test', async ({ page }) => {
  await page.route('**/*', async (route) => {
    const req = route.request();
    if (req.method() === 'POST' && await req.headerValue('next-action')) {
      const mockResult = { success: true, data: { consensus: ['They agree'], conflicts: [{ subject: 'A', sourceA: 'B', sourceB: 'C', significance: 'high' }] } };
      await route.fulfill({ status: 200, contentType: 'text/x-component', body: '0:' + JSON.stringify(mockResult) + '
' });
      return;
    }
    await route.continue();
  });
  await page.goto('/');
  await page.getByPlaceholder('https://example.com/article-a').fill('https://a.com');
  await page.getByPlaceholder('https://example.com/article-b').fill('https://b.com');
  await page.getByRole('button', { name: 'Generate Synthesis' }).click();
  await page.waitForTimeout(3000);
});