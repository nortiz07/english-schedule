import { Page } from '@playwright/test';
import path from 'path';

/**
 * Utilidades para capturas de pantalla
 */
export class ScreenshotHelper {
    private static screenshotDir = 'test-results/screenshots';

    /**
     * Toma una captura de pantalla con nombre personalizado
     */
    static async takeScreenshot(page: Page, name: string): Promise<string> {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `${name}-${timestamp}.png`;
        const filepath = path.join(this.screenshotDir, filename);

        await page.screenshot({ path: filepath, fullPage: true });

        return filepath;
    }

    /**
     * Toma captura de pantalla en caso de error
     */
    static async takeErrorScreenshot(page: Page, testName: string): Promise<string> {
        return await this.takeScreenshot(page, `ERROR-${testName}`);
    }

    /**
     * Toma captura de pantalla de un elemento específico
     */
    static async takeElementScreenshot(
        page: Page,
        selector: string,
        name: string
    ): Promise<string> {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `element-${name}-${timestamp}.png`;
        const filepath = path.join(this.screenshotDir, filename);

        const element = page.locator(selector);
        await element.screenshot({ path: filepath });

        return filepath;
    }
}
