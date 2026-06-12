import { test, expect } from "playwright/test";
import { OtpPage } from "../pages/otpPage.ts";

test.describe("OTP Page Tests", () => {
    // Test for OTP generation and validating the response
    test("OTP Generation Test", async ({ page }) => {
        const otpPage = new OtpPage(page);

        await otpPage.navigateToOtpPage();
        await otpPage.sendOtp("practice@expandtesting.com");
        await otpPage.verifyText("#otp-message", "We've sent an OTP code to your email:");

        await otpPage.enterOtp("214365");
        await otpPage.verifyText("#flash", "You logged into a secure area!");

    })
});