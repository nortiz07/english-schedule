import { Page, Locator, expect } from '@playwright/test';
import { variable } from '../config/testData';

/**
 * Page Object para la página de Login
 * Implementa el patrón Page Object Model con principios SOLID y DRY
 */
export class Login {
    private readonly page: Page;
    private readonly url: string;
    private readonly locators: { [key: string]: Locator };

    constructor(
        page: Page,
        url: string = variable.url
    ) {
        this.page = page;
        this.url = url;
        this.locators = {
            usernameField: page.locator("#vUSUCOD"),
            passwordField: page.locator("#vPASS"),
            btnLogin: page.locator("#BUTTON1"),
            btnSubmit: page.frameLocator('#gxp0_ifrm').locator('input[title="Regresar"]')
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
     * Espera a que un elemento esté visible y luego lo llena con un valor
     * @param locator - Localizador del elemento
     * @param value - Valor a ingresar
     * @private
     */
    private async waitAndFill(locator: Locator, value: string): Promise<void> {
        await expect(locator).toBeVisible();
        await locator.fill(value);
    }

    // ==================== MÉTODOS PÚBLICOS (ACCIONES DE BAJO NIVEL) ====================

    /**
     * Navega a la página de login
     */
    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    /**
     * Espera a que la página de login esté completamente cargada
     */
    async waitForLoginPage(): Promise<void> {
        await expect(this.locators.usernameField).toBeVisible();
        await expect(this.locators.passwordField).toBeVisible();
    }

    /**
     * Ingresa el nombre de usuario en el campo correspondiente
     * @param username - Nombre de usuario a ingresar
     */
    async enterUsername(username: string): Promise<void> {
        await this.waitAndFill(this.locators.usernameField, username);
    }

    /**
     * Ingresa la contraseña en el campo correspondiente
     * @param password - Contraseña a ingresar
     */
    async enterPassword(password: string): Promise<void> {
        await this.waitAndFill(this.locators.passwordField, password);
    }

    /**
     * Hace click en el botón de login principal
     */
    async clickLoginButton(): Promise<void> {
        await this.waitAndClick(this.locators.btnLogin);
    }

    /**
     * Hace click en el botón de submit (dentro del iframe)
     */
    async clickSubmitButton(): Promise<void> {
        await this.waitAndClick(this.locators.btnSubmit);
    }

    // ==================== MÉTODOS PÚBLICOS (FLUJOS DE NEGOCIO) ====================

    /**
     * Realiza el proceso completo de login
     * @param username - Nombre de usuario
     * @param password - Contraseña
     */
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
        await this.clickSubmitButton();
    }
}