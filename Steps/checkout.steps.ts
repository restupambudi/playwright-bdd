import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutPage from '../Page/checkout-page';
import LoginPage from "../Page/login-page";
import CartPage from '../Page/cart-page';

Given('I have a product in my cart', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.goTo();
    await loginPage.inputUsername('standard_user');
    await loginPage.inputPassword('secret_sauce');
    await loginPage.clickLogin();

    const cartPage = new CartPage(this.page);
    await cartPage.addToCart();
});

When('I checkout the product', async function () {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.checkoutProduct();
});

When('I input my personal information', async function () {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.inputPersonalData();
});

Then('I should see {string}', async function (label: string) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.verifyCheckout(label);
});