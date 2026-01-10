import{test,expect} from '@playwright/test';

test('Soft Assertion in Playwright', async({page})=>{

    await page.goto('https://www.youtube.com/');

    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEmpty();

    await page.getByPlaceholder('Search', {exact:true}).first().click();
    await page.getByPlaceholder('Search', {exact:true}).first().fill('Playwright by Testers Talk');
    await page.getByPlaceholder('Search', {exact:true}).first().press('Enter');

    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+Testers+Talk');
    await expect.soft(page).toHaveTitle('Playwright typescript by Testers Talk - YouTube');
    await expect(page.locator('[id="text-container"]').nth(2)).toHaveText('Testers Talk');

    

});
