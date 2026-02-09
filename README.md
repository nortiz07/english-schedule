# English Schedule - Test Automation

Proyecto de automatización de pruebas E2E (End-to-End) utilizando Playwright y TypeScript con el patrón Page Object Model (POM).

## Tecnologías

- **Playwright** v1.58.2 - Framework de automatización de pruebas
- **TypeScript** - Lenguaje de programación
- **Node.js** - Entorno de ejecución
- **dotenv** - Gestión de variables de entorno

## Estructura del Proyecto

```
english-schedule/
├── config/
│   └── testData.ts          # Configuración y validación de variables de entorno
├── pages/
│   └── LoginPage.ts         # Page Object para la página de login
├── tests/
│   └── example.spec.ts      # Tests de ejemplo
├── .gitignore
├── playwright.config.ts     # Configuración de Playwright
├── package.json
└── README.md
```

## Requisitos Previos

- Node.js (versión 18 o superior recomendada)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd english-schedule
```

2. Instalar las dependencias:
```bash
npm install
```

3. Instalar los navegadores de Playwright:
```bash
npx playwright install
```

## Configuración

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
LOGIN_USERNAME=tu_usuario
LOGIN_PASSWORD=tu_contraseña
LOGIN_URL=https://url-de-la-aplicacion.com
```

**Importante:** El archivo `.env` debe estar incluido en `.gitignore` para evitar compartir credenciales sensibles.

### Configuración de Playwright

El archivo [playwright.config.ts](playwright.config.ts) incluye:

- Ejecución de tests en paralelo
- Soporte para múltiples navegadores (Chromium, Firefox, WebKit)
- Generación de reportes HTML
- Configuración de reintentos en CI/CD
- Trazas automáticas en caso de fallos

## Ejecución de Tests

### Ejecutar todos los tests
```bash
npx playwright test
```

### Ejecutar tests en modo UI
```bash
npx playwright test --ui
```

### Ejecutar tests en un navegador específico
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Ejecutar un test específico
```bash
npx playwright test tests/example.spec.ts
```

### Modo debug
```bash
npx playwright test --debug
```

### Ver el reporte HTML
```bash
npx playwright show-report
```

## Page Object Model (POM)

El proyecto utiliza el patrón Page Object Model para mejorar la mantenibilidad y reutilización del código:

- **pages/**: Contiene las clases que representan las páginas de la aplicación
- Cada Page Object encapsula los localizadores y acciones de una página
- Los tests interactúan con las páginas a través de estas clases

### Ejemplo de Page Object

```typescript
// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly locators: {[key:string]: Locator};

    constructor(page: Page) {
        this.page = page;
        // Definir localizadores aquí
    }

    async login(username: string, password: string) {
        // Implementar lógica de login
    }
}
```

## Configuración de CI/CD

El proyecto está preconfigurado para ejecutarse en entornos de CI/CD:

- Los tests fallan si se encuentra `test.only` (evita commits accidentales)
- Reintentos automáticos en caso de fallos (2 reintentos en CI)
- Ejecución secuencial en CI para mayor estabilidad

## Mejores Prácticas

1. **Variables de entorno**: Nunca commitear credenciales en el código
2. **Page Objects**: Mantener la lógica de UI separada de los tests
3. **Selectores**: Preferir selectores por role, text o test-id
4. **Esperas**: Usar esperas implícitas de Playwright, evitar timeouts fijos
5. **Independencia**: Cada test debe ser independiente y poder ejecutarse solo

## Scripts Disponibles

Actualmente el proyecto no tiene scripts personalizados. Puedes agregar scripts útiles en [package.json](package.json):

```json
"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:ui": "playwright test --ui",
  "test:debug": "playwright test --debug",
  "report": "playwright show-report",
  "test:chromium": "playwright test --project=chromium",
  "test:firefox": "playwright test --project=firefox",
  "test:webkit": "playwright test --project=webkit"
}
```

## Recursos

- [Documentación de Playwright](https://playwright.dev/)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Page Object Model](https://playwright.dev/docs/pom)
- [Best Practices](https://playwright.dev/docs/best-practices)

## Licencia

ISC
