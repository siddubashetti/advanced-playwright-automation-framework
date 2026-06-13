import { expect, test } from "../fixtures/baseFixture.ts";

test.describe.serial("Basic Operations Tests", async () => {
    //fileUploadTest 
    test("File Upload Test", async ({ fileUploadPage, }) => {

        await fileUploadPage.navigateToFileUploadPage();
        await fileUploadPage.waitForPageLoad();
        await fileUploadPage.verifyText("#uploaded-files", "sample.pdf");
    });

    //fileDownloadTest
    test("File Download Test", async ({ fileUploadPage }) => {
        await fileUploadPage.navigateToFileDownloadPage();

    })

    //dragAndDropTest
    test("Drag and Drop Test", async ({ fileUploadPage }) => {
        await fileUploadPage.dragAndDropOperation();
    });

    //radioButtonSelectionTest
    test("Radio Button Selection Test", async ({ fileUploadPage }) => {
        await fileUploadPage.radioButtonSelection();
    })

    //calenderSelectionTest
    test("Calender Selection Test", async ({ fileUploadPage }) => {
        await fileUploadPage.calenderSelection();
        await fileUploadPage.isVisible("Form Confirmation page for Automation Testing Practice");
    })

    //hoverMenuTest
    test("Hover Menu Test", async ({ fileUploadPage }) => {
        await fileUploadPage.hoverMenu();
        await fileUploadPage.isVisible("Welcome user2");
    })

    //framesHandlingTest
    test("Frames Handling Test", async ({ fileUploadPage }) => {
        await fileUploadPage.framesHandling();
    })

    //windowHandlingTest
    test("Window Handling Test", async ({ fileUploadPage }) => {
        await fileUploadPage.newWindowHandling()
        await fileUploadPage.isVisible("Example of a new window page for Automation Testing Practice");
    })

    //tableHandlingTest
    test("table handling row data test", async ({ fileUploadPage }) => {
        await fileUploadPage.tableRowCount();
    })

    //tableHandlingTest
    test("table handling data test", async ({ fileUploadPage }) => {
        await fileUploadPage.tableDataCount();
    })

    //tableHandlingTest
    test("table handling row column test", async ({ fileUploadPage }) => {
        await fileUploadPage.tableRowColumnCount();
    });

    //visualTestingTest
    test("Visual Testing", async ({ fileUploadPage }) => {
        await fileUploadPage.visualTesting();
    })

    //fullPageVisualTestingTest
    test("Full Page Visual Testing", async ({ fileUploadPage }) => {
        await fileUploadPage.fullPageVisualTesting();
    })


});