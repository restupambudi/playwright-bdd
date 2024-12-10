import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';

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
    await page.fill('input[name="q"]', searchQuery);
    await page.press('input[name="q"]', 'Enter');
});

Then('I should see the results for {string}', async function(searchQuery: string) {
    const result = await page.locator('h3').first();
    const text = await result.textContent();
    if (!text?.includes(searchQuery)) {
        throw new Error(`Expected to see search results for ${searchQuery}, but found: ${text}`);
    }
});
