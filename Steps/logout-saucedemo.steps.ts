import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import SauceDemoPage from "../Page/saucedemo-page";


let browser: any;
let page: any;
let saucedemoPage: SauceDemoPage; // Declare a variable for the GooglePage object

Before(async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    saucedemoPage = new SauceDemoPage(page); // Initialize GooglePage object with the page
});

After(async function() {
    await browser.close();
});

Given('I am on the dashboard page', async function() {
    await saucedemoPage.goTo();
    await saucedemoPage.inputUsername('standard_user'); // Use the Page Object to input username
    await saucedemoPage.inputPassword('secret_sauce'); // Use the Page Object to input password
    await saucedemoPage.clickLogin();
});

When('I open menu bar, I click logout button', async function() {
    await saucedemoPage.clickOpenMenu();
    await saucedemoPage.clickLogout();
});

Then('I should see the result {string}', async function(result: string) {
    await saucedemoPage.verifyLogout(result);
});