import { test as baseTest, expect } from '@playwright/test';
import { Login } from '../pages/LoginPage';
import { Schedule } from '../pages/SchedulePage';
import { Start } from '../pages/StartPage';
import { Class } from '../pages/ClassPage';

type TestTools = {
    loginPage: Login;
    schedulePage: Schedule;
    startPage: Start;
    classPage: Class;
};

export const test = baseTest.extend<TestTools>({
    loginPage: async ({ page }, use) => {
        const loginPage = new Login(page);
        await use(loginPage);
    },

    schedulePage: async ({ page }, use) => {
        const schedulePage = new Schedule(page);
        await use(schedulePage);
    },

    startPage: async ({ page }, use) => {
        const startPage = new Start(page);
        await use(startPage);
    },

    classPage: async ({ page }, use) => {
        const classPage = new Class(page);
        await use(classPage);
    }
});

export { expect };

