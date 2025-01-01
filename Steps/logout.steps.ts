import { Before, After, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import LogoutPage from "../Page/logout-page";


let browser: any;
let page: any;
let logoutPage: LogoutPage;

Before(async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    logoutPage = new LogoutPage(page); 
});

After(async function() {
    await browser.close();
});

When('I open menu bar, I click logout button', async function() {
    await logoutPage.clickOpenMenu();
    await logoutPage.clickLogout();
});

Then('I should see the result {string}', async function(result: string) {
    await logoutPage.verifyLogout(result);
});