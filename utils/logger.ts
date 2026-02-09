/**
 * Logger utility para logs consistentes en los tests
 */
export class Logger {
    /**
     * Log de información general
     */
    static info(message: string): void {
        console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }

    /**
     * Log de errores
     */
    static error(message: string, error?: Error): void {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
        if (error) {
            console.error(error.stack);
        }
    }

    /**
     * Log de debug (solo si DEBUG=true en .env)
     */
    static debug(message: string): void {
        if (process.env.DEBUG === 'true') {
            console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`);
        }
    }

    /**
     * Log de warnings
     */
    static warn(message: string): void {
        console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }

    /**
     * Log del inicio de un test
     */
    static testStart(testName: string): void {
        console.log(`\n${'='.repeat(50)}`);
        console.log(`🧪 TEST STARTED: ${testName}`);
        console.log(`${'='.repeat(50)}\n`);
    }

    /**
     * Log del fin de un test
     */
    static testEnd(testName: string, status: 'PASS' | 'FAIL'): void {
        const icon = status === 'PASS' ? '✅' : '❌';
        console.log(`\n${icon} TEST ${status}: ${testName}\n`);
    }
}
