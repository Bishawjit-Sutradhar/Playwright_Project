import {test, expect} from '@playwright/test';

test('Drag and Drop Iframe in Playwright', async({page})=>{

    await page.goto('https://jqueryui.com/droppable/');

    const iFram= page.frameLocator('[class="demo-frame"]');
    const draggElement= iFram.locator('[id="draggable"]');
    const droppElement= iFram.locator('[id="droppable"]');

    await draggElement.dragTo(droppElement);
    


});