import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class CarAddonPage extends BasePage {
    readonly nextButton: Locator;
    readonly ncdProtectorCheckbox: Locator;

    constructor(page: Page) {
        super(page);
        this.nextButton = page.locator('button:has-text("Next")');
        this.ncdProtectorCheckbox = page.locator('input[name="ncdProtector"]');
    }

    async configureAddonsAndProceed(addons: string[] = []) {
        if (addons.includes('NCD_Protector')) {
            await this.clickElement(this.ncdProtectorCheckbox);
        }
        await this.clickElement(this.nextButton);
    }
}
