import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test('Add to cart', async ({ page }) => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const zipcode = faker.location.zipCode();

    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    // await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    // await page.getByRole('link', { name: '1' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill(firstname);
    await page.locator('[data-test="lastName"]').fill(lastname);
    await page.locator('[data-test="postalCode"]').fill(zipcode);
    await page.locator('[data-test="postalCode"]').fill(zipcode);
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await expect(page.getByText('$29.99', { exact: true })).toBeVisible();
    await page.locator('[data-test="finish"]').click();
    await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible();
    await page.close();
});