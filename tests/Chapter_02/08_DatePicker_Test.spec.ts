import {test, expect} from '@playwright/test';

test('Selecting Date value in Playwright', async({page})=>{

    await page.goto('https://jqueryui.com/datepicker/');

    const iFram= page.frameLocator('[class="demo-frame"]');

    //await iFram.locator('[id="datepicker"]').fill('10/15/2024');

    //Selecting Dynamic Date
    //await iFram.locator('[id="datepicker"]').click();
   // await iFram.locator('.ui-datepicker-today').click();

    //Selecting Past Date
    // await iFram.locator('[id="datepicker"]').click();
    // await iFram.locator('[title="Prev"]').click();
    // await iFram.locator('text="25"').click();


    //Selecting Future Date
    await iFram.locator('[id="datepicker"]').click();
    await iFram.locator('[title="Next"]').click();
    await iFram.locator('text="28"').click();

    


});
