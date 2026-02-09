/**
 * Datos de usuarios para tests
 */

import * as dotenv from 'dotenv';
dotenv.config();

export const TEST_USERS = {
    /** Usuario válido desde variables de entorno */
    VALID: {
        username: process.env.LOGIN_USERNAME || '',
        password: process.env.LOGIN_PASSWORD || ''
    },

    /** Usuario inválido para tests negativos */
    INVALID: {
        username: 'usuario_invalido',
        password: 'password_invalido'
    },

    /** Usuario con campo vacío */
    EMPTY: {
        username: '',
        password: ''
    },

    /** Usuario con solo username */
    NO_PASSWORD: {
        username: process.env.LOGIN_USERNAME || '',
        password: ''
    },

    /** Usuario con solo password */
    NO_USERNAME: {
        username: '',
        password: process.env.LOGIN_PASSWORD || ''
    }
} as const;
