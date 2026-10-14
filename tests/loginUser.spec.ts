import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';


test('test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoUrl();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.getByText('Swag Labs')).toBeVisible();

});