/**
 * Timeouts globales para los tests
 * Todos los valores en milisegundos
 */
export const TIMEOUTS = {
    /** 5 segundos - Para elementos que cargan rápido */
    SHORT: 5000,

    /** 10 segundos - Timeout estándar */
    MEDIUM: 10000,

    /** 30 segundos - Para operaciones lentas */
    LONG: 30000,

    /** 60 segundos - Para operaciones muy lentas */
    VERY_LONG: 60000,

    /** 2 minutos - Para operaciones extremadamente lentas */
    EXTREME: 120000
} as const;
