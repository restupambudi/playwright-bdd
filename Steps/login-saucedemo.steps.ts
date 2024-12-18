// google-test.ts
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

Given('I am on the Sauce Demo page', async function() {
    await saucedemoPage.goTo(); // Use the Page Object to go to Sauce Demo
});

When('I input username {string}', async function(username: string) {
    await saucedemoPage.inputUsername(username); // Use the Page Object to input username
});

When('I input password {string}', async function(password: string) {
    await saucedemoPage.inputPassword(password); // Use the Page Object to input password
});

When('I click login button', async function() {
    await saucedemoPage.clickLogin(); // Use the Page Object to login
});

Then('I should see the result for {string}', async function(result: string) {
    await saucedemoPage.verifyResults(result); // Use the Page Object to verify result
});
