import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import {expect} from "playwright/test";

let browser: any;
let page: any;

Before(async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});

After(async function() {
    await browser.close();
});

Given('I am on the Google search page', async function() {
    await page.goto('https://www.google.com');
});

When('I search for {string}', async function(searchQuery: string) {
    await page.getByLabel('Cari').click();
    await page.getByLabel('Cari').fill('Playwright');
});

Then('I should see the results for {string}', async function(searchQuery: string) {
        await page.goto('https://www.google.com/search?q=Playwright&sca_esv=da052a448206c26a&source=hp&ei=LQdYZ_CXBI2l2roPopetyAU&iflsig=AL9hbdgAAAAAZ1gVPY1fiWYDHdjbiQMMi3cKG09QjN85&ved=0ahUKEwiw4v2b75yKAxWNklYBHaJLC1kQ4dUDCA4&uact=5&oq=Playwright&gs_lp=Egdnd3Mtd2l6IgpQbGF5d3JpZ2h0MgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiUKlCQBljPGnACeACQAQCYAZoBoAHjBaoBBDEwLjG4AQPIAQD4AQGYAg2gApYGqAIKwgIKEAAYAxjqAhiPAcICChAuGAMY6gIYjwHCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIOEC4YgAQYsQMYgwEYigXCAg4QLhiABBjHARiOBRivAcICBRAuGIAEwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGLEDGIMBmAMH8QWdj17uUWfhhZIHBDEyLjGgB8Fa&sclient=gws-wiz');
        await expect(page.locator('#rso')).toContainText('Playwright');

});
