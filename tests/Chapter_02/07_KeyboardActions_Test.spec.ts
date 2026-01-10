import {test, expect} from '@playwright/test';

test('Keyboard Actions in Playwright', async({page})=>{

    await page.goto('https://www.google.com/');

    await page.getByLabel('Search', {exact: true}).first().click();
    await page.getByLabel('Search', {exact:true}).first().fill('Playwright by Testers Talk');
    await page.getByLabel('Search', {exact:true}).first().press('Enter');

    //Selecting and Deleting from Keyboard

    await page.getByLabel('Search', {exact:true}).first().click();
    await page.keyboard.press('ctrl+a');
    await page.keyboard.press('delete');

    // Press TAB and Enter

    await page.getByLabel('Search', {exact:true}).first().click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    


});