import { test } from "@playwright/test";

test("Auth Setup", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/login");

    await page.fill("#username", "practice");
    await page.fill("#password", "SuperSecretPassword!");
    await page.click("#submit-login");

    await page.context().storageState({
        path: "playwright/.auth/user.json"
    });

});