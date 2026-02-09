import { test, expect } from '../setup/testTool';
import { variable } from '../config/testData';

/**
 * Suite de tests para programar clases (Schedule Class)
 * Cubre el flujo completo desde login hasta asignación de clase
 */
test.describe('Schedule Class - Flujo completo', () => {

    test('Debe asignar la clase', async ({ 
        loginPage, 
        schedulePage, 
        page, 
        startPage, 
        classPage 
    }) => {
        // Login
        await loginPage.goto();
        await loginPage.waitForLoginPage();
        expect(page.url()).toBe(variable.url);
        await loginPage.login(variable.username, variable.password);

        // Navegación a Schedule
        await schedulePage.clickSchedule();

        // Selección de nivel
        await startPage.selectLevel();

        // Asignar clase "CLASE 71" desde pendientes
        await classPage.selectClass('CLASE 71');

        // ✅ TODO: Agregar validación de que la clase fue asignada exitosamente
        // Por ejemplo: verificar mensaje de éxito, o que la clase ya no esté en pendientes
    });
});
