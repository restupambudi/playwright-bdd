import { Page } from '@playwright/test';
import { expect } from "playwright/test";
import { faker } from '@faker-js/faker';

export default class CheckoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkoutProduct(): Promise<void> {
        await this.page.locator('[data-test="checkout"]').click();
    }

    async inputPersonalData(): Promise<void> {
        const firstname = faker.person.firstName();
        const lastname = faker.person.lastName();
        const zipcode = faker.location.zipCode();

        await this.page.locator('[data-test="firstName"]').fill(firstname);
        await this.page.locator('[data-test="lastName"]').fill(lastname);
        await this.page.locator('[data-test="postalCode"]').fill(zipcode);
        await this.page.locator('[data-test="postalCode"]').fill(zipcode);
        await this.page.getByRole('button', { name: 'CONTINUE' }).click();
        await this.page.locator('[data-test="finish"]').click();
    }

    async verifyCheckout(result: string): Promise<void> {
        const resultsLocator = this.page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' });

        await resultsLocator.waitFor({ state: 'visible' });
        await expect(resultsLocator).toHaveText(new RegExp(result));
    }

}
