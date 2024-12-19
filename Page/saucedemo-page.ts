// google-page.ts
import { Page, Locator } from '@playwright/test';
import {expect} from "playwright/test";

export default class SauceDemoPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Method to navigate to Sauce Demo
    async goTo(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    // Method to input username
    async inputUsername(query: string): Promise<void> {
        await this.page.locator('[data-test="username"]').fill('standard_user');
    }

    // Method to input password
    async inputPassword(query: string): Promise<void> {
        await this.page.locator('[data-test="password"]').fill('secret_sauce');
    }

    // Method to input incorrect password
    async inputIncorrectPassword(query: string): Promise<void> {
        await this.page.locator('[data-test="password"]').fill('123');
    }

    // Method to login
    async clickLogin(): Promise<void> {
        await this.page.getByRole('button', { name: 'LOGIN' }).click();
    }

    // Method to validate login success
    async verifyResults(query: string): Promise<void> {
        const resultsLocator = this.page.getByText('Products', { exact: true });
        await resultsLocator.waitFor(); // Wait until login success
        await expect(resultsLocator).toContainText(query); // Assert that the results contain "Products"
    }

    // Method to validate login fail | incorrect password
    async verifyIncorrectPassword(query: string): Promise<void> {
        const resultsLocator = this.page.getByText('Username and password do not match');
        await resultsLocator.waitFor(); // Wait until login fail | incorrect password
        await expect(resultsLocator).toContainText(query);
    }

    // Method to validate login fail | empty username and password
    async verifyEmptyUsernamePassword(query: string): Promise<void> {
        const resultsLocator = this.page.getByText('Username is required');
        await resultsLocator.waitFor(); // Wait until login fail | empty username and password
        await expect(resultsLocator).toContainText(query);
    }
}
