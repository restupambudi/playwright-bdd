import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import LoginPage from "../Page/login-page";


let browser: any;
let page: any;
let loginPage: LoginPage; 

Before(async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
});

After(async function() {
    await browser.close();
});

Given('I am on the Sauce Demo page', async function() {
    await loginPage.goTo(); // Use the Page Object to go to Sauce Demo
});

When('I input username {string} and password {string}', async function(username: string, password: string) {
    await loginPage.inputUsername(username); // Use the Page Object to input username
    await loginPage.inputPassword(password); // Use the Page Object to input password
});

When('I input valid username {string} and invalid password {string}', async function(username: string, password: string) {
    await loginPage.inputUsername(username); // Use the Page Object to input username
    await loginPage.inputPassword(password); // Use the Page Object to input password
});

When('I click login button', async function() {
    await loginPage.clickLogin(); // Use the Page Object to login
});

Then('I should see the result for {string}', async function(result: string) {
    await loginPage.verifyLogin(result); // Use the Page Object to verify result
});

Then('I should see incorrect password message {string}', async function(result: string) {
    await loginPage.verifyIncorrectPassword(result); // Use the Page Object to verify incorrect password
});

Then('The system requires me to input username {string}', async function(result: string) {
    await loginPage.verifyEmptyUsernamePassword(result); // Use the Page Object to verify empty username and password
});