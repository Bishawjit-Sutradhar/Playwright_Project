import { test, expect } from '@playwright/test';


test.beforeAll(async()=>{
    console.log("Running before test");
});
test.beforeEach(async({page})=>{
    console.log("Running before each test");
    await page.goto('https://www.youtube.com/'); 
});
test.afterEach(async()=>{
    console.log("Running after each test"); 

});
test.afterAll(async()=>{
    console.log("Running after test");
});

test('Test 1', async ({ page }) => {
    console.log("Test 1 Execution Started...");
  //await page.goto('https://www.youtube.com/');

  // Search
  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('Playwright by Testers Talk');
  await searchBox.press('Enter');

  // Click first matching video (partial text)
  await page.getByRole('link', { name: /Playwright Tutorial/i }).first().click();

  // Wait for title to load
  //const videoTitle = page.locator('h1.title yt-formatted-string');

  //await expect(videoTitle).toContainText('Playwright Tutorial');
});

test('Test 2', async ({ page }) => {
    console.log("Test 2 Execution Started...");
  //await page.goto('https://www.youtube.com/');

  // Search
  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('Playwright by Testers Talk');
  await searchBox.press('Enter');

  // Click first matching video (partial text)
  await page.getByRole('link', { name: /Playwright Tutorial/i }).first().click();

  // Wait for title to load
 // const videoTitle = page.locator('h1.title yt-formatted-string');

  //await expect(videoTitle).toContainText('Playwright Tutorial');
});