import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class MaidPaymentResultPage extends BasePage {
    readonly successMessage: Locator;
    readonly policyNumber: Locator;

    constructor(page: Page) {
        super(page);
        this.successMessage = page.locator('.payment-success-message');
        this.policyNumber = page.locator('.policy-number');
    }

    async isPaymentSuccessful(): Promise<boolean> {
        await this.successMessage.waitFor({ state: 'visible', timeout: 30000 });
        const text = await this.getText(this.successMessage);
        return Boolean(text && text.toLowerCase().includes('success'));
    }
}
