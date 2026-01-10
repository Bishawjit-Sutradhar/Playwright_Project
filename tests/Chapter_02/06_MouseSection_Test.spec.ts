import {test, expect} from '@playwright/test';

test('Mouse Section in Playwright', async({page})=>{

    await page.goto('https://www.google.com/search?q=playwright+by+tester+talk');

    await page.getByRole('link', {name: 'Playwright by Testers Talk'}).click({button:'left'});

    await page.getByRole('link', {name: 'Playwright by Testers Talk'}).click({button:'right'});

    await page.getByRole('link', {name: 'Playwright by Testers Talk'}).click({button: 'middle'});


    

});