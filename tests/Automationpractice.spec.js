// @ts-check

const { test, expect } = require('@playwright/test');
const automation = require ('../fixtures/automation.json')
const {Automation} = require('../POM/Automation');

test('Automation Practice', async ({ page }) => 
{
    const automation = new Automation(page);
    
    // // Search with Your Name
    await automation.mainpage();
    await automation.namesearch();

    // // Check number of length of dresses
    await automation.mainpage();
    await automation.catg();

    // Add to cart
    await automation.mainpage();
    await automation.cart();

});