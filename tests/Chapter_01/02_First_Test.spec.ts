import { test, expect } from '@playwright/test';

test('YouTube search and play video', async ({ page }) => {
  console.log('Test execution started...');
  await page.goto('https://www.youtube.com/');

  // Search
  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('Playwright by Testers Talk');
  await searchBox.press('Enter');

  // Click first matching video (partial text)
  await page.getByRole('link', { name: /Playwright Tutorial/i }).first().click();

  // Wait for title to load
  const videoTitle = page.locator('h1.title yt-formatted-string');

  await expect(videoTitle).toContainText('Playwright Tutorial');
});