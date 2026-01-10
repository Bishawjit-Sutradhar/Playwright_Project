import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'সার্চ করুন' }).click();
  await page.getByRole('combobox', { name: 'সার্চ করুন' }).fill('Playwright by testers talk');
  await page.getByRole('combobox', {name: 'সার্চ করুন'}).press('Enter');
  
});