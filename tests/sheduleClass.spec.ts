import { test, expect } from '../setup/testTool';
import { variable } from '../config/testData';

/**
 * Suite de tests para la funcionalidad de Login
 */
test.describe('Shedule Class', () => {

    test.describe('Login', () => {

        test('Shedule class', async ({ loginPage, schedulePage, page, startPage, classPage }) => {
            // Navegar a la página de login
            await loginPage.goto();

            // Esperar a que la página de login esté completamente cargada
            await loginPage.waitForLoginPage();

            // Verificar que la URL sea la esperada
            expect(page.url()).toBe(variable.url);

            // Realizar login con credenciales válidas
            await loginPage.login(variable.username, variable.password);

            // Verificar login exitoso: intentar hacer click en Schedule (esto espera que esté visible)
            await schedulePage.clickSchedule();

            await startPage.selectLevel();

            // Buscar y asignar la clase "CLASE 71"
            await classPage.selectClass('CLASE 71');
        });
    });

});
