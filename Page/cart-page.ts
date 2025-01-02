import { Page } from '@playwright/test';
import { expect } from "playwright/test";

export default class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async verifyProductInCart(product: string): Promise<void> {
        const resultsLocator = this.page.getByText('Sauce Labs Backpack');
        
        await resultsLocator.waitFor(); // Wait until login fail | empty username and password
        await expect(resultsLocator).toContainText(product);
    }

}
