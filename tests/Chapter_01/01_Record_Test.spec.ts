import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigating to URL', async()=>{
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });

  await test.step('Enter username and password', async()=>{

    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('12345');

  });

  await test.step('Click on Sign in button', async()=>{
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });
  

  await test.step('Veriry error message', async()=>{
      await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });
  

  
});