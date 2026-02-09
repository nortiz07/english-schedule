import { Page, Locator, expect } from '@playwright/test';

export class Schedule {
    private readonly page: Page;
    private readonly locators: { [key: string]: Locator };

    constructor(page: Page) {
        this.page = page;
        this.locators = {
            btnSchedule: page.locator("#IMAGE18")
        };
    }

    /**
     * Hace click en el botón de Schedule
     * Incluye validación automática de visibilidad antes del click
     */
    async clickSchedule(): Promise<void> {
        await expect(this.locators.btnSchedule).toBeVisible();
        await this.locators.btnSchedule.click();
    }
}