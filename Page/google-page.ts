// google-page.ts
import { Page, Locator } from '@playwright/test';
import {expect} from "playwright/test";

export default class GooglePage {
    private page: Page;
    private searchBox: Locator;
    private searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator('input[name="q"]'); // Locator for search input box
        this.searchButton = page.locator('input[name="btnK"]'); // Locator for the search button
    }

    // Method to navigate to Google
    async goTo(): Promise<void> {
        await this.page.goto('https://www.google.com');
    }

    // Method to perform search
    async search(query: string): Promise<void> {
        // await this.searchBox.fill(query); // Fill the search input
        // await this.searchButton.click(); // Click the search button
        await this.page.getByLabel('Cari').click();
        await this.page.getByLabel('Cari').fill('Playwright');
        await this.page.keyboard.press('Enter');
    }

    // Method to validate search results
    async verifyResults(query: string): Promise<void> {
        const resultsLocator = this.page.locator('#rso');
        await resultsLocator.waitFor(); // Wait until results are loaded
        await expect(resultsLocator).toContainText(query); // Assert that the results contain the query
    }
}
