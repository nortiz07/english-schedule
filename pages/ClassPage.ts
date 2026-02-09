import { Page, Locator, FrameLocator, expect } from '@playwright/test';

/**
 * Page Object para la página de Clases
 * Implementa el patrón Page Object Model con principios SOLID y DRY
 */
export class Class {
    private readonly page: Page;
    private readonly programarClaseFrame: FrameLocator;
    private readonly locators: { [key: string]: Locator };

    constructor(page: Page) {
        this.page = page;
        this.programarClaseFrame = page.frameLocator('#gxp0_ifrm');

        this.locators = {
            dropdownPendiente: this.programarClaseFrame.locator('select#vTPEAPROBO'),
            asignarClaseButton: this.programarClaseFrame.locator('#BUTTON1')
        };
    }

    // ==================== MÉTODOS PRIVADOS (HELPERS) ====================
    // Encapsulación: Lógica interna reutilizable

    /**
     * Espera a que un elemento esté visible y luego hace click
     * @param locator - Localizador del elemento
     * @private
     */
    private async waitAndClick(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
        await locator.click();
    }

    /**
     * Espera a que un dropdown esté visible y selecciona una opción
     * @param locator - Localizador del dropdown
     * @param option - Opción a seleccionar
     * @private
     */
    private async waitAndSelectOption(locator: Locator, option: string): Promise<void> {
        await expect(locator).toBeVisible();
        await locator.selectOption(option);
    }

    private async selectPendientes(): Promise<void> {
        await this.waitAndSelectOption(this.locators.dropdownPendiente, 'Pendientes por programar');
    }

    /**
     * Asigna una clase específica por su nombre
     * @param nombreClase - Nombre exacto de la clase a asignar
     */
    private async asignarClase(nombreClase: string): Promise<void> {
        const claseLocator = this.programarClaseFrame.getByText(nombreClase, { exact: true });
        await this.waitAndClick(claseLocator);
        await this.waitAndClick(this.locators.asignarClaseButton);
    }

    // ==================== MÉTODOS PÚBLICOS ====================

    /**
     * Selecciona la opción "Pendientes por programar" en el dropdown
     */
    
    async selectClass(nombreClase: string):Promise<void>{
        await this.selectPendientes();
        await this.asignarClase(nombreClase);
    }

    /**
     * Espera a que la página de clases esté completamente cargada
     */
    async waitForClassPage(): Promise<void> {
        await expect(this.locators.dropdownPendiente).toBeVisible();
    }
}