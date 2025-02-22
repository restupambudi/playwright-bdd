import { Page, Locator } from '@playwright/test';
import {expect} from "playwright/test";

export default class LoginPage {
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

    // Method to login
    async clickLogin(): Promise<void> {
        await this.page.getByRole('button', { name: 'LOGIN' }).click();
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
    
}
