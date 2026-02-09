/**
 * Mensajes de error y éxito para los tests
 */

export const ERROR_MESSAGES = {
    LOGIN_FAILED: 'Login falló con credenciales válidas',
    INVALID_CREDENTIALS: 'Login con credenciales inválidas debería fallar',
    ELEMENT_NOT_VISIBLE: 'El elemento no está visible',
    ELEMENT_NOT_FOUND: 'El elemento no fue encontrado',
    TIMEOUT: 'La operación excedió el tiempo límite',
    NAVIGATION_FAILED: 'La navegación falló',
    BUTTON_NOT_CLICKABLE: 'El botón no es clickeable',
    DROPDOWN_NOT_FOUND: 'Dropdown no encontrado',
    CLASS_NOT_FOUND: 'Clase no encontrada',
    FORM_NOT_SUBMITTED: 'Formulario no fue enviado'
} as const;

export const SUCCESS_MESSAGES = {
    LOGIN_SUCCESS: 'Login exitoso',
    NAVIGATION_SUCCESS: 'Navegación exitosa',
    CLASS_ASSIGNED: 'Clase asignada correctamente',
    ELEMENT_VISIBLE: 'Elemento está visible',
    ELEMENT_FOUND: 'Elemento encontrado',
    FORM_SUBMITTED: 'Formulario enviado exitosamente',
    TEST_PASSED: 'Test ejecutado exitosamente'
} as const;

export const INFO_MESSAGES = {
    STARTING_TEST: 'Iniciando test',
    ENDING_TEST: 'Finalizando test',
    NAVIGATING_TO: 'Navegando a',
    FILLING_FORM: 'Llenando formulario',
    CLICKING_BUTTON: 'Haciendo click en botón',
    WAITING_FOR_ELEMENT: 'Esperando elemento',
    SELECTING_OPTION: 'Seleccionando opción'
} as const;
