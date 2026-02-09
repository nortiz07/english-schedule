import * as dotenv from 'dotenv';

dotenv.config();

function verifyEnVariable() {
    const requiredVariables = [
        'LOGIN_USERNAME',
        'LOGIN_PASSWORD',
        'LOGIN_URL'
    ];

    requiredVariables.forEach(variable => {
        if (!process.env[variable] || process.env[variable]?.trim() === '') {
            throw new Error(`La variable de entorno ${variable} está vacía o no definida`);
        }
    });
}

try {
    verifyEnVariable();
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error('Error desconocido');
    }
    process.exit(1);
}

export const variable = {
    username: process.env.LOGIN_USERNAME as string,
    password: process.env.LOGIN_PASSWORD as string,
    url: process.env.LOGIN_URL as string
};
