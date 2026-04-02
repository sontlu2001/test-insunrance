import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class MaidQuotePage extends BasePage {
    readonly maidNameInput: Locator;
    readonly maidPassportInput: Locator;
    readonly getQuoteButton: Locator;

    constructor(page: Page) {
        super(page);
        this.maidNameInput = page.locator('input[name="maidName"]');
        this.maidPassportInput = page.locator('input[name="passport"]');
        this.getQuoteButton = page.locator('button:has-text("Get Quote")');
    }

    async goto() {
        await this.navigate('/maid/insurance/basic-detail');
    }

    async submitQuote(quoteData: any) {
        if (quoteData.maidName) await this.fillText(this.maidNameInput, quoteData.maidName);
        if (quoteData.passport) await this.fillText(this.maidPassportInput, quoteData.passport);
        await this.clickElement(this.getQuoteButton);
    }
}
