import { Page } from '@playwright/test';

/**
 * Utilidades para manejo de esperas
 */
export class WaitHelper {
    /**
     * Espera a que la página cargue completamente (networkidle)
     */
    static async waitForPageLoad(page: Page): Promise<void> {
        await page.waitForLoadState('networkidle');
    }

    /**
     * Espera a que se complete la carga del DOM
     */
    static async waitForDOMContentLoaded(page: Page): Promise<void> {
        await page.waitForLoadState('domcontentloaded');
    }

    /**
     * Espera un tiempo específico (usar solo cuando sea absolutamente necesario)
     * @param ms - Milisegundos a esperar
     */
    static async waitForTimeout(ms: number): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Espera a que la URL contenga un texto específico
     */
    static async waitForURL(page: Page, urlPart: string, timeout: number = 30000): Promise<void> {
        await page.waitForURL(`**/*${urlPart}*`, { timeout });
    }
}
