import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FileUploadPage extends BasePage {

    //navigateToFileUploadPage() → Navigates to the file upload page, uploads a file, and submits it.
    async navigateToFileUploadPage() {
        await this.navigateTo("https://practice.expandtesting.com/upload");
        await this.uploadFile("#fileInput", "test-data/files/sample.pdf");
        await this.click("#fileSubmit");
    }

    //navigateToFileDownloadPage() → Navigates to the file download page and downloads a file.
    async navigateToFileDownloadPage() {
        await this.navigateTo("https://practice.expandtesting.com/download");
        await this.fileDownload('[data-testid="1779254154596_DNDAgentFile.txt"]', "test-data/download");
    }

    //dragAndDropOperation() → Performs drag and drop operation between two elements.
    async dragAndDropOperation() {
        await this.navigateTo("https://practice.expandtesting.com/drag-and-drop");
        await this.page.dragAndDrop("#column-a", "#column-b");
        await this.page.dragAndDrop("#column-b", "#column-a");
    }

    //radioButtonSelection() → Selects multiple radio buttons on the page based on their locators.
    async radioButtonSelection() {
        await this.navigateTo("https://practice.expandtesting.com/radio-buttons");
        await this.waitForPageLoad();
        await this.page.locator("#green").scrollIntoViewIfNeeded();
        await this.selectRadioButton("#blue");
        await this.selectRadioButton("#yellow");
        await this.selectRadioButton("#tennis");
    }

    //calenderSelection() → Selects a date from a calendar input field and submits the form.
    async calenderSelection() {
        await this.navigateTo("https://practice.expandtesting.com/form-validation");
        await this.waitForPageLoad();
        await this.page.fill('[name="ContactName"]', "dodo");
        await this.page.fill('[name="contactnumber"]', "876-5434567");
        await this.page.fill('[name="pickupdate"]', "2024-12-12");
        await this.selectDropdown('[name="payment"]', { value: "cashondelivery" });
        await this.page.getByText("Register").click();

    }

    //hoverMenu() → Hovers over a menu item to reveal a submenu and clicks on an option within the submenu.
    async hoverMenu() {
        await this.navigateTo("https://practice.expandtesting.com/hovers");
        await this.waitForPageLoad();
        await this.page.hover('[data-testid="img-user-2"]');
        await this.page.getByText("View profile").nth(1).click();
    }

    //framesHandling() → Handles interactions within an iframe, such as filling out a form or clicking a button.
    async framesHandling() {
        await this.navigateTo("https://practice.expandtesting.com/iframe");
        const frame = this.page.frameLocator("#mce_0_ifr");
        await frame.locator("#tinymce").fill("This is a test message");

        const emailFrame = this.page.frameLocator("#email-subscribe");
        await emailFrame.locator("#email").fill("test@example.com");
        await emailFrame.locator("#btn-subscribe").click();
        await emailFrame.getByText("You are now subscribed!").isVisible();

    }

    //newWindowHandling() → Handles interactions with a new browser window or tab, such as switching between windows and performing actions in the new window.
    async newWindowHandling() {
        await this.navigateTo("https://practice.expandtesting.com/windows");
        await this.windowHandling("text=Click Here", "https://practice.expandtesting.com/windows/new");

    }

    //tableRowCount() → Counts the number of rows in a table and logs the count to the console.
    async tableRowCount() {
        await this.navigateTo("https://practice.expandtesting.com/challenging-dom");
        const rows = this.page.locator("table tbody tr");
        const rowCount = await rows.count();
        console.log(`Total rows: ${rowCount}`);

    }

    //tableDataCount() → Counts the number of data cells in a table and logs the count to the console.
    async tableDataCount() {
        await this.navigateTo("https://practice.expandtesting.com/challenging-dom");
        const rows = this.page.locator("table tbody tr td");
        const rowCount = await rows.count();
        console.log(`Total rows: ${rowCount}`);

    }

    //tableRowColumnCount() → Counts the number of rows and columns in a table and logs the counts to the console.
    async tableRowColumnCount() {
        await this.navigateTo("https://practice.expandtesting.com/challenging-dom");

        //to get a perticular row column data
        //const columns = await this.page.locator("table tbody tr").nth(0).locator("td").allTextContents();

        //to get a perticular column data
        const columns = await this.page.locator("table tbody tr").nth(0).locator("td").nth(0)
            .allTextContents();

        console.log(columns);

    }

    //visualTesting() → Takes a screenshot of a specific element or the entire page and compares it with a baseline image for visual regression testing.
    async visualTesting() {
        await this.navigateTo("https://practice.expandtesting.com/test-cases");
        await this.takeScreenshot("screenshots/homepage.png");
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.getByRole('link', { name: 'Test Cases' }).first()).toHaveScreenshot("screenshots/testcases.png");
    }

    //fullPageVisualTesting() → Takes a full-page screenshot and compares it with a baseline image for visual regression testing.
    async fullPageVisualTesting() {
        await this.navigateTo("https://practice.expandtesting.com/test-cases");
        await expect(this.page).toHaveScreenshot("screenshots/homepage.png", {
            fullPage: true,
            timeout: 15000
        });

    }
}