# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\fileUploadTest.spec.ts >> Basic Operations Tests >> Window Handling Test
- Location: src\tests\fileUploadTest.spec.ts:44:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.isVisible: Test timeout of 30000ms exceeded.
Call log:
    - checking visibility of locator('Example of a new window page for Automation Testing Practice')

```

# Test source

```ts
  1   | import { Page, expect } from "@playwright/test";
  2   | 
  3   | export class BasePage {
  4   |     readonly page: Page;
  5   | 
  6   |     constructor(page: Page) {
  7   |         this.page = page;
  8   |     }
  9   | 
  10  |     //navigateTo() → Opens URL.
  11  |     async navigateTo(url: string) {
  12  |         await this.page.goto(url, {
  13  |             waitUntil: "domcontentloaded",
  14  |             timeout: 30000
  15  |         });
  16  |     }
  17  | 
  18  |     //click() → Clicks on an element.
  19  |     async click(locator: string) {
  20  |         await this.page.click(locator);
  21  |     }
  22  | 
  23  |     //fillText() → clear and Fills text into an input field.
  24  |     async fillText(locator: string, text: string) {
  25  |         await this.page.fill(locator, text);
  26  |     }
  27  | 
  28  |     //verifyText() → Verifies that the text of an element matches the expected value.
  29  |     async verifyText(locator: string, expectedText: string) {
  30  |         await expect(this.page.locator(locator))
  31  |             .toContainText(expectedText);
  32  |     }
  33  | 
  34  |     //fileDownload() → Downloads file.
  35  |     async fileDownload(locator: string, downloadPath: string) {
  36  |         const [download] = await Promise.all([
  37  |             this.page.waitForEvent("download"),
  38  |             this.page.locator(locator).first().click()
  39  |         ])
  40  |         const fileName = download.suggestedFilename();
  41  |         await download.saveAs(`${downloadPath}/${fileName}`);
  42  |     }
  43  | 
  44  |     //windowHandling() = > Handles multiple browser windows or tabs.
  45  |     async windowHandling(locator: string, url: string) {
  46  |         const [newWindow] = await Promise.all([
  47  |             this.page.waitForEvent("popup"),
  48  |             this.page.locator(locator).click()
  49  |         ])
  50  |         await newWindow.waitForLoadState('load');
  51  |         await newWindow.goto(url);
  52  | 
  53  |     }
  54  | 
  55  |     //Radio Button() : selects a radio button based on the provided locator using check() method.
  56  |     async selectRadioButton(locator: string) {
  57  |         await this.page.locator(locator).check();
  58  |     }
  59  | 
  60  |     //dragAndDrop() → Drags an element and drops it onto another element.
  61  |     async dragAndDropOperation(sourceLocator: string, targetLocator: string) {
  62  |         await this.page.dragAndDrop(sourceLocator, targetLocator);
  63  |     }
  64  | 
  65  |     //waitForElement() → Waits until element becomes visible.
  66  |     async waitForElement(locator: string) {
  67  |         await this.page.waitForSelector(locator, {
  68  |             state: "visible"
  69  |         });
  70  |     }
  71  | 
  72  |     //waitForPageLoad() → Waits until the page is fully loaded.
  73  |     // async waitForPageLoad() {
  74  |     //     await this.page.waitForLoadState("load");
  75  |     // }
  76  | 
  77  |     //getText() → Gets the text content of an element.
  78  |     async getText(locator: string): Promise<string> {
  79  |         return await this.page.textContent(locator) || "";
  80  |     }
  81  | 
  82  |     //isVisible() → Checks if an element is visible.
  83  |     async isTextVisible(locator: string): Promise<boolean> {
> 84  |         return await this.page.isVisible(locator);
      |                                ^ Error: page.isVisible: Test timeout of 30000ms exceeded.
  85  |     }
  86  | 
  87  |     //scrollIntoView() → Scrolls an element into view.
  88  |     async scrollIntoView(locator: string) {
  89  |         await this.page.locator(locator).scrollIntoViewIfNeeded();
  90  |     }
  91  | 
  92  |     //hover() → Hovers over an element.
  93  |     async hoverMenu(locator: string) {
  94  |         await this.page.hover(locator);
  95  |     }
  96  | 
  97  |     //selectDropdown() → Selects an option from a dropdown.
  98  |     async selectDropdown(locator: string, option: { label?: string; value?: string; index?: number }) {
  99  |         await this.page.selectOption(locator, option);
  100 |     }
  101 | 
  102 |     //takeScreenshot() → Takes a screenshot of the current page.
  103 |     async takeScreenshot(path: string) {
  104 |         await this.page.screenshot({ path });
  105 |     }
  106 | 
  107 |     //uploadFile() → Uploads file.
  108 |     async uploadFile(locator: string, filePath: string) {
  109 |         await this.page.setInputFiles(locator, filePath);
  110 |     }
  111 | 
  112 |     //pressKey() → Press keyboard key.
  113 |     async pressKey(locator: string, key: string) {
  114 |         await this.page.press(locator, key);
  115 |     }
  116 | 
  117 |     //retryAction() → Retries failed action automatically for a specific line of a code, with a specified number of retries and delay between attempts.
  118 |     async retryAction(
  119 |         action: () => Promise<void>,
  120 |         retries: number = 3,
  121 |         delay: number = 1000
  122 |     ) {
  123 |         for (let i = 0; i < retries; i++) {
  124 |             try {
  125 |                 await action();
  126 |                 return;
  127 |             } catch (error) {
  128 |                 if (i === retries - 1) throw error;
  129 | 
  130 |                 console.log(`Retrying... Attempt ${i + 1}`);
  131 | 
  132 |                 await this.page.waitForTimeout(delay);
  133 |             }
  134 |         }
  135 |     }
  136 | }
```