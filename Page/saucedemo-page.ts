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
}
