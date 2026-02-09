/**
 * Selectores globales reutilizables
 * Centraliza selectores que se usan en múltiples lugares
 */

export const COMMON_SELECTORS = {
    // Iframes
    MAIN_IFRAME: '#gxp0_ifrm',

    // Botones comunes
    SUBMIT_BUTTON: '#BUTTON1',
    CANCEL_BUTTON: '[title="Cancelar"]',
    BACK_BUTTON: '[title="Regresar"]',

    // Loading indicators
    LOADING_SPINNER: '.loading',
    LOADING_OVERLAY: '.overlay'
} as const;

export const LOGIN_SELECTORS = {
    USERNAME_FIELD: '#vUSUCOD',
    PASSWORD_FIELD: '#vPASS',
    LOGIN_BUTTON: '#BUTTON1',
    SUBMIT_BUTTON_IFRAME: 'input[title="Regresar"]'
} as const;

export const SCHEDULE_SELECTORS = {
    SCHEDULE_BUTTON: '#IMAGE18'
} as const;

export const CLASS_SELECTORS = {
    DROPDOWN_PENDIENTE: 'select#vTPEAPROBO',
    ASIGNAR_BUTTON: '#BUTTON1'
} as const;
