import { Page, Locator } from '@playwright/test';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';

dayjs.extend(customParseFormat);

/**
 * BasePage is a wrapper over Playwright's Page object.
 * It contains common actions like navigation, waiting, and interacting with elements
 * to reduce duplication across specific Page Objects.
 */
export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to a path, appending to baseURL
     */
    async navigate(path: string) {
        await this.page.goto(path);
    }

    /**
     * Wait for a locator and click it
     */
    async clickElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    /**
     * Wait for a locator, clear it and fill text
     */
    async fillText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    /**
     * Fill date value using the date picker UI
     */
    async fillDateValue(
        selector: Locator,
        value: string | undefined
    ): Promise<void> {
        const d = dayjs(value, ['DD/MM/YYYY', 'YYYY-MM-DD']);
        const day = d.format('DD');
        const month = d.format('MM');
        const monthText = d.format('MMM');
        const year:Number = Number(d.format('YYYY'));

        await selector.click();
        let yearFromUI: Number = Number(await this.page.locator('.ant-picker-year-btn').last().textContent());

        // Loop to click next or previous until we find the correct year
        if (yearFromUI && yearFromUI < year) {
            while (yearFromUI && yearFromUI < year) {
                await this.page.click('.ant-picker-super-next-icon');
                yearFromUI = Number(await this.page.locator('.ant-picker-year-btn').textContent()); 
            }
        }
        else if (yearFromUI && yearFromUI > year) {
            while (yearFromUI && yearFromUI > year) {
                await this.page.click('.ant-picker-super-prev-icon');
                yearFromUI = Number(await this.page.locator('.ant-picker-year-btn').textContent()); 
            }
        }
        else {
            console.log(yearFromUI, 'yearFromUI is already correct');
        }
        // select the month
        await this.page.locator('.ant-picker-month-btn').last().click();
        await this.page.locator('.ant-picker-cell-inner', { hasText: monthText }).click();

        // select the day
        await this.page.locator(`td[title="${year}-${month}-${day}"] .ant-picker-cell-inner`).last().click();
    }

    async waitForTimeout(ms: number) {
        await this.page.waitForTimeout(ms);
    }

    async waitForPageStable(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    async selectDropdown(selector: Locator, value: string) {
        await selector.click();
        await this.page.getByPlaceholder('Search...').first().fill(value);
        await this.page.getByText(value.toLocaleUpperCase()).first().click();
    }

    async selectOption(selector: Locator, value: string) {
        await selector.click();
        await this.page.locator(`div[title="${value}"]`).click();
    }

    /**
     * Get text content from a locator
     */
    async getText(locator: Locator): Promise<string | null> {
        await locator.waitFor({ state: 'visible' });
        return await locator.textContent();
    }

    /**
     * Get the page title
     */
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }
}
