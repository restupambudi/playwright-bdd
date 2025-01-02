import { When, Then } from '@cucumber/cucumber';
import CartPage from '../Page/cart-page';
import '../Steps/share.steps';

When('I add a product to the cart', async function () {
    const cartPage = new CartPage(this.page);
    await cartPage.addToCart();
});

Then('I should see {string} in the cart', async function (product: string) {
    const cartPage = new CartPage(this.page);
    await cartPage.verifyProductInCart(product);
});
