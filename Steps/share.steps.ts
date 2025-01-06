import { Given, Before, After } from '@cucumber/cucumber';
import playwright from 'playwright';
import LoginPage from '../Page/login-page';

Before(async function () {
    this.browser = await playwright['chromium'].launch({ headless: false });
    this.page = await this.browser.newPage();
});

After(async function() {
    await this.browser.close();
});

Given('I am on the dashboard page', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.goTo();
    await loginPage.inputUsername('standard_user');
    await loginPage.inputPassword('secret_sauce');
    await loginPage.clickLogin();
});
