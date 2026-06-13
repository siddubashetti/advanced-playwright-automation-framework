import { test, expect } from "../fixtures/baseFixture";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests", async () => {
    // Initialize the LoginPage object as a beforeEach test
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
    });

    // Test for login with valid credentials and validating the response
    test("Login with valid credentials", async ({ loginPage }) => {
        await loginPage.login("practice", "SuperSecretPassword!");

        await loginPage.verifyText("#flash", "You logged into a secure area!");
    });

    // Test for login with invalid credentials and validating the response
    test("Login with invalid credentials", async ({ loginPage }) => {
        await loginPage.login("practice", "WrongPassword!");

        await loginPage.verifyText("#flash", "Your password is invalid!");
    });

    // Test for login with empty username and validating the response
    test("Login with Empty credentials", async ({ loginPage }) => {
        await loginPage.login("", "SuperSecretPassword!");

        await loginPage.verifyText("#flash", "Your username is invalid!");

    });


    // Test afterEach hook to capture screenshot on test failure
    test.afterEach(async ({ page }) => {
        await page.screenshot({
            path: "screenshots/test.png"
        });
    });


});