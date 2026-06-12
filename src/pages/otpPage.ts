import { BasePage } from "./BasePage";

export class OtpPage extends BasePage {
    //navigateToOtpPage() → Navigates to the OTP login page URL.
    async navigateToOtpPage() {
        await this.navigateTo("https://practice.expandtesting.com/otp-login");

    }

    //sendOtp() → Sends an OTP to the provided email address.
    async sendOtp(email: string) {
        await this.fillText("#email", email);
        await this.click("#btn-send-otp");
    }

    //enterOtp() → Enters the received OTP and verifies it.
    async enterOtp(otp: string) {
        await this.fillText("#otp", otp);
        await this.click("#btn-send-verify");
    }

}