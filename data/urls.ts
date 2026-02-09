/**
 * URLs para tests
 */

import * as dotenv from 'dotenv';
dotenv.config();

export const URLS = {
    /** URL base desde variables de entorno */
    BASE: process.env.LOGIN_URL || '',

    /** URL de login (por si es diferente de la base) */
    LOGIN: process.env.LOGIN_URL || '',

    /** Paths relativos */
    SCHEDULE: '/schedule',
    CLASSES: '/classes',
    PROFILE: '/profile'
} as const;
