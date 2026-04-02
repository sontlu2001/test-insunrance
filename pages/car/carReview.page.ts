import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class CarReviewPage extends BasePage {
    readonly termsCheckbox: Locator;
    readonly payButton: Locator;

    constructor(page: Page) {
        super(page);
        this.termsCheckbox = page.locator('input[name="agreeTerms"]');
        this.payButton = page.locator('button:has-text("Proceed to Pay")');
    }

    async acceptTermsAndPay() {
        await this.clickElement(this.termsCheckbox);
        await this.clickElement(this.payButton);
    }
}
