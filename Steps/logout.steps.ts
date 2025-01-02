import { When, Then } from '@cucumber/cucumber';
import LogoutPage from "../Page/logout-page";
import '../Steps/share.steps';

When('I open menu bar, I click logout button', async function() {
    const logoutPage = new LogoutPage(this.page);
    await logoutPage.clickOpenMenu();
    await logoutPage.clickLogout();
});

Then('I should see the result {string}', async function(result: string) {
    const logoutPage = new LogoutPage(this.page);
    await logoutPage.verifyLogout(result);
});