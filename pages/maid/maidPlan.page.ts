import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class MaidPlanPage extends BasePage {
    readonly planCardKeys: Record<string, Locator>;
    readonly nextButton: Locator;

    constructor(page: Page) {
        super(page);
        this.planCardKeys = {
            'Plan1': page.locator('button:has-text("Plan 1")'),
            'Plan2': page.locator('button:has-text("Plan 2")')
        };
        this.nextButton = page.locator('button:has-text("Next")');
    }

    async selectPlanAndProceed(planName: string) {
        if (this.planCardKeys[planName]) {
            await this.clickElement(this.planCardKeys[planName]);
        }
        await this.clickElement(this.nextButton);
    }
}
