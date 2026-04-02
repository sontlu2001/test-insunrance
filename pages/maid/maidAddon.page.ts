import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class MaidAddonPage extends BasePage {
    readonly nextButton: Locator;
    readonly criticalIllnessCheckbox: Locator;

    constructor(page: Page) {
        super(page);
        this.nextButton = page.locator('button:has-text("Next")');
        this.criticalIllnessCheckbox = page.locator('input[name="criticalIllness"]');
    }

    async configureAddonsAndProceed(addons: string[] = []) {
        if (addons.includes('CriticalIllness')) {
            await this.clickElement(this.criticalIllnessCheckbox);
        }
        await this.clickElement(this.nextButton);
    }
}
