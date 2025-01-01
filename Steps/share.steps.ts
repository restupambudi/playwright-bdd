import { Given } from '@cucumber/cucumber';
import { Page } from 'playwright';
import { PageHelpers } from '../helpers/pageHelpers';

Given('I am on the dashboard page', async function (this: { page: Page }) {
    const pageHelpers = new PageHelpers(this.page);
    await pageHelpers.goTo();
    await pageHelpers.inputUsername('standard_user'); 
    await pageHelpers.inputPassword('secret_sauce'); 
    await pageHelpers.clickLogin();
});