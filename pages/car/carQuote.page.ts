import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class CarQuotePage extends BasePage {
    readonly vehicleNoInput: Locator;
    readonly nricInput: Locator;
    readonly getQuoteButton: Locator;
    readonly emailInput: Locator;
    readonly phoneNumber: Locator;
    readonly dateOfBirthInput: Locator;
    readonly vehicleMakeInput: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('input[name="quick_quote_email"]');
        this.phoneNumber = page.locator('input[name="quick_quote_mobile"]');
        this.dateOfBirthInput = page.locator('input[name="quick_quote_owner_dob"]');
        this.vehicleMakeInput = page.locator('input[name="quick_quote_make"]');
        this.vehicleNoInput = page.locator('input[name="vehicleNo"]');
        this.nricInput = page.locator('input[name="nric"]');
        this.getQuoteButton = page.locator('button:has-text("Get Quote")');
    }

    async goto() {
        await this.navigate('/motor/insurance/basic-detail?manual=true');
    }

    async submitQuote(quoteData: any) {
        // await this.clickElement(this.getQuoteButton);

        // if (quoteData.email) await this.fillText(this.emailInput, quoteData.email);
        // if (quoteData.phoneNumber) await this.fillText(this.phoneNumber, quoteData.phoneNumber);
        if (quoteData.dateOfBirth) await this.setInputValue('#quick_quote_owner_dob', '01/01/2001');
    }
}
