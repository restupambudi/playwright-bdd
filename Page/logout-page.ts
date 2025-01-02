import { Page, Locator } from '@playwright/test';
import {expect} from "playwright/test";

export default class LogoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Method to navigate to Sauce Demo
    async goTo(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com');
    }

    // Method to input username
    async inputUsername(username: string): Promise<void> {
        await this.page.locator('[data-test="username"]').fill(username);
    }

    // Method to input password
    async inputPassword(password: string): Promise<void> {
        await this.page.locator('[data-test="password"]').fill(password);
    }

    async clickOpenMenu(): Promise<void> {
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
    }

    // Method to login
    async clickLogin(): Promise<void> {
        await this.page.getByRole('button', { name: 'LOGIN' }).click();
    }

    async addToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    // Method to logout
    async clickLogout(): Promise<void> {
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }

    // Method to validate login success
    async verifyLogin(result: string): Promise<void> {
        const resultsLocator = this.page.getByText('Products', { exact: true });

        await resultsLocator.waitFor(); // Wait until login success
        await expect(resultsLocator).toContainText(result); // Assert that the results contain "Products"
    }

    // Method to validate login fail | incorrect password
    async verifyIncorrectPassword(result: string): Promise<void> {
        const resultsLocator = this.page.getByText('Username and password do not match');

        await resultsLocator.waitFor(); // Wait until login fail | incorrect password
        await expect(resultsLocator).toContainText(result);
    }

    // Method to validate login fail | empty username and password
    async verifyEmptyUsernamePassword(result: string): Promise<void> {
        const resultsLocator = this.page.getByText('Username is required');
        
        await resultsLocator.waitFor(); // Wait until login fail | empty username and password
        await expect(resultsLocator).toContainText(result);
    }

    async verifyProductInCart(product: string): Promise<void> {
        const resultsLocator = this.page.getByText('Sauce Labs Backpack');
        
        await resultsLocator.waitFor(); // Wait until login fail | empty username and password
        await expect(resultsLocator).toContainText(product);
    }

    // Method to validate login fail | empty username and password
    async verifyLogout(result: string): Promise<void> {
        const resultsLocator = this.page.getByRole('heading', { name: 'Accepted usernames are:' });

        await resultsLocator.waitFor({ state : 'visible' }); // Wait until logout success
        await expect(resultsLocator).toHaveText(new RegExp(result)); // Assert that the results contain "Accepted usernames are"
    }
    
}
