import { Page } from 'playwright';

export class PageHelpers {
    constructor(public page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async inputUsername(username: string) {
        await this.page.locator('[data-test="username"]').fill(username);
    }

    async inputPassword(password: string) {
        await this.page.locator('[data-test="password"]').fill(password);
    }

    async clickLogin() {
        await this.page.getByRole('button', { name: 'LOGIN' }).click();
    }

    // ... other helper methods
}

// setWorldConstructor(PageHelpers);