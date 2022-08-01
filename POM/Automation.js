const { expect } = require('@playwright/test');
const automation = require ('../fixtures/automation.json')
class Automation
{
    
    constructor(page)
    {
        this.page = page;
        this.search = page.locator('[placeholder="Search"]');
        this.submit = page.locator('[name="submit_search"]');
        this.alert = page.locator('.alert-warning');
        this.title = page.locator('.sf-menu > li:nth-child(2) > .sf-with-ul');
        this.product = page.locator('.product-container');
        this.size = page.locator('[id="uniform-layered_id_attribute_group_1"]');
        this.offer = page.locator('[id="our_price_display"]');
        this.cartbtn = page.locator('.box-cart-bottom >> .exclusive');
        this.popup = page.waitForSelector('.clearfix');
        this.msg = page.locator('.layer_cart_product >> h2');
        this.cartp = page.locator('[id="layer_cart_product_price"]');
        this.carttotal = page.locator('.ajax_block_cart_total');
    }

    async mainpage()
    {
        await this.page.goto('http://automationpractice.com/');
    }

    async namesearch()
    {
        await this.search.type(automation[0].name);
        await expect(this.search).toHaveValue(automation[0].name);
        await this.submit.click();

        await expect(this.page.url()).toContain(automation[0].s_name);
        await expect(this.alert).toContainText(automation[0].alertm);
    }

    async catg()
    {
        await this.title.click();
        await expect(this.page.url()).toContain(automation[0].category);

        await this.size.click();
        // await this.page.waitForSelector('.product-container>> nth=0').visible;
        
        await expect(this.product).toHaveCount(automation[0].product_count);
        await expect(this.page.url()).toContain(automation[0].size);
    }

    async cart()
    {
        await this.product.nth(1).click();
        let a = this.offer.innertText;
        await this.cartbtn.click();
    //   await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order');

        await this.popup;
        await expect(this.msg).toHaveText(automation[0].cartsuccess);
        await expect(this.cartp.innertText).toEqual(a);
        await expect(this.carttotal.innertText).toEqual(a);
    }

}
module.exports = {Automation}