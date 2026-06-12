import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    //navigateToLoginPage() → Navigates to the login page URL.
    async navigateToLoginPage() {
        await this.navigateTo("https://practice.expandtesting.com/login");
    }

    //login() → Performs login action by filling in the username and password fields and clicking the login button.
    async login(username: string, password: string) {
        await this.fillText("#username", username);
        await this.fillText("#password", password);
        await this.click("#submit-login");
    }

    //saveStorageState() → Saves the storage state of the browser context to a specified file path, allowing for reuse of authentication state in future tests.
    async saveStorageState() {
        await this.page.context().storageState({
            path: "playwright/.auth/user.json"
        });
    }

}