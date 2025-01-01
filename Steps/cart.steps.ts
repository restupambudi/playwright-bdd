import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import SauceDemoPage from "../Page/cart-page";
import LoginPage from "../Page/login-page";

let browser: any;
let page: any;
let saucedemoPage: SauceDemoPage; 
let loginPage: LoginPage;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    saucedemoPage = new SauceDemoPage(page);
    loginPage = new LoginPage(page);
});

After(async function () {
    await browser.close();
});

// Given('I am on the dashboard page', async function () {
//     await loginPage.goTo();
//     await loginPage.inputUsername('standard_user'); // Use the Page Object to input username
//     await loginPage.inputPassword('secret_sauce'); // Use the Page Object to input password
//     await loginPage.clickLogin();
// });

When('I add a product to the cart', async function () {
    await saucedemoPage.addToCart();
});

Then('I should see {string} in the cart', async function (product: string) {
    await saucedemoPage.verifyProductInCart(product);
});