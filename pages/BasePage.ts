import { Page, Locator } from '@playwright/test';

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
        console.log('locator', locator);
        await locator.fill(text);
    }


    async setInputValue(
        selector: string,
        value: string
    ): Promise<void> {
        await this.page.evaluate(
            ({ selector, value }: { selector: string; value: string }) => {
                const input = document.querySelector(selector) as HTMLInputElement | null;
                if (!input) return;

                // bỏ readonly nếu có
                input.removeAttribute('readonly');

                // lấy native setter
                const nativeSetter = Object.getOwnPropertyDescriptor(
                    HTMLInputElement.prototype,
                    'value'
                )?.set;

                if (!nativeSetter) return;

                // set value
                nativeSetter.call(input, value);

                // trigger event
                input.dispatchEvent(new Event('input', { bubbles: true }));
                input.dispatchEvent(new Event('change', { bubbles: true }));
            },
            { selector, value }
        );
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
