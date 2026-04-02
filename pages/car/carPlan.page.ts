import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class CarPlanPage extends BasePage {
    readonly comprehensivePlanBtn: Locator;
    readonly thirdPartyPlanBtn: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        super(page);
        this.comprehensivePlanBtn = page.locator('button:has-text("Comprehensive")');
        this.thirdPartyPlanBtn = page.locator('button:has-text("Third Party")');
        this.nextButton = page.locator('button:has-text("Next")');
    }

    async selectPlanAndProceed(planType: string) {
        if (planType === 'Comprehensive') {
            await this.clickElement(this.comprehensivePlanBtn);
        } else {
            await this.clickElement(this.thirdPartyPlanBtn);
        }
        await this.clickElement(this.nextButton);
    }
}
