import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { FileUploadPage } from "../pages/FileUploadPage.ts";

// Define a custom fixture type that includes the LoginPage and FileUploadPage
type MyFixtures = {
    loginPage: LoginPage;
    fileUploadPage: FileUploadPage;

};

export const test = base.extend<MyFixtures>({
    // Initialize the LoginPage fixture
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    // Initialize the FileUploadPage fixture
    fileUploadPage: async ({ page }, use) => {
        const fileUploadPage = new FileUploadPage(page);

        await use(fileUploadPage);
    },
});
export { expect } from "@playwright/test";