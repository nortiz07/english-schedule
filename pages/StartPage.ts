import { Page, Locator, expect } from '@playwright/test';

export class Start {
    private readonly page: Page;
    private readonly locators: { [key: string]: Locator };

    constructor(page: Page) {
        this.page = page;
        this.locators = {
            btnLevel: page.locator("#span_W0030TMPDESART_0001"),
            btnStart: page.locator("#W0030BUTTON1")
        };
    }

    private async waitAndClick(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
        await locator.click();
    }

    private async clickLevelButton(): Promise<void> {
        await this.waitAndClick(this.locators.btnLevel);
    }

    private async clickStartButton(): Promise<void> {
        await this.waitAndClick(this.locators.btnStart);
    }

    async selectLevel(): Promise<void> {
        await this.clickLevelButton();
        await this.clickStartButton();
    }
}