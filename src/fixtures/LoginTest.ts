import { test as base, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type MyFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page.getByText('Swag Labs')).toBeVisible();

        await use(page);
    },
});

export { expect };