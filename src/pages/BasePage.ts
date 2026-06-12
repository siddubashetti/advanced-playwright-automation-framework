import { Page, expect } from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //navigateTo() → Opens URL.
    async navigateTo(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 30000
        });
    }

    //click() → Clicks on an element.
    async click(locator: string) {
        await this.page.click(locator);
    }

    //fillText() → clear and Fills text into an input field.
    async fillText(locator: string, text: string) {
        await this.page.fill(locator, text);
    }

    //verifyText() → Verifies that the text of an element matches the expected value.
    async verifyText(locator: string, expectedText: string) {
        await expect(this.page.locator(locator))
            .toContainText(expectedText);
    }

    //fileDownload() → Downloads file.
    async fileDownload(locator: string, downloadPath: string) {
        const [download] = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(locator)
        ])
        const fileName = download.suggestedFilename();
        await download.saveAs(`${downloadPath}/${fileName}`);
    }

    //windowHandling() = > Handles multiple browser windows or tabs.
    async windowHandling(locator: string, url: string) {
        const [newWindow] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(locator)
        ])
        await newWindow.waitForLoadState();
        await newWindow.goto(url);

    }

    //Radio Button() : selects a radio button based on the provided locator using check() method.
    async selectRadioButton(locator: string) {
        await this.page.check(locator);
    }

    //dragAndDrop() → Drags an element and drops it onto another element.
    async dragAndDropOperation(sourceLocator: string, targetLocator: string) {
        await this.page.dragAndDrop(sourceLocator, targetLocator);
    }

    //getByText() → Gets element by text
    async getByText(text: string) {
        return this.page.isVisible(text);
    }

    //waitForElement() → Waits until element becomes visible.
    async waitForElement(locator: string) {
        await this.page.waitForSelector(locator, {
            state: "visible"
        });
    }

    //waitForPageLoad() → Waits until the page is fully loaded.
    async waitForPageLoad() {
        await this.page.waitForLoadState("load");
    }

    //getText() → Gets the text content of an element.
    async getText(locator: string): Promise<string> {
        return await this.page.textContent(locator) || "";
    }

    //isVisible() → Checks if an element is visible.
    async isVisible(locator: string): Promise<boolean> {
        return await this.page.isVisible(locator);
    }

    //scrollIntoView() → Scrolls an element into view.
    async scrollIntoView(locator: string) {
        await this.page.locator(locator).scrollIntoViewIfNeeded();
    }

    //hover() → Hovers over an element.
    async hover(locator: string) {
        await this.page.hover(locator);
    }

    //selectDropdown() → Selects an option from a dropdown.
    async selectDropdown(locator: string, option: { label?: string; value?: string; index?: number }) {
        await this.page.selectOption(locator, option);
    }

    //takeScreenshot() → Takes a screenshot of the current page.
    async takeScreenshot(path: string) {
        await this.page.screenshot({ path });
    }

    //uploadFile() → Uploads file.
    async uploadFile(locator: string, filePath: string) {
        await this.page.setInputFiles(locator, filePath);
    }

    //pressKey() → Press keyboard key.
    async pressKey(locator: string, key: string) {
        await this.page.press(locator, key);
    }

    //retryAction() → Retries failed action automatically for a specific line of a code, with a specified number of retries and delay between attempts.
    async retryAction(
        action: () => Promise<void>,
        retries: number = 3,
        delay: number = 1000
    ) {
        for (let i = 0; i < retries; i++) {
            try {
                await action();
                return;
            } catch (error) {
                if (i === retries - 1) throw error;

                console.log(`Retrying... Attempt ${i + 1}`);

                await this.page.waitForTimeout(delay);
            }
        }
    }
}