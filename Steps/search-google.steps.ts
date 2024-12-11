// google-test.ts
import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import GooglePage from "../Page/google-page";


let browser: any;
let page: any;
let googlePage: GooglePage; // Declare a variable for the GooglePage object

Before(async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    googlePage = new GooglePage(page); // Initialize GooglePage object with the page
});

After(async function() {
    await browser.close();
});

Given('I am on the Google search page', async function() {
    await googlePage.goTo(); // Use the Page Object to go to Google
});

When('I search for {string}', async function(searchQuery: string) {
    await googlePage.search(searchQuery); // Use the Page Object to perform the search
});

Then('I should see the results for {string}', async function(searchQuery: string) {
    await googlePage.verifyResults(searchQuery); // Use the Page Object to verify search results
});
