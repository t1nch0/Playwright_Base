import test from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test('user is able to login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('');
    await loginPage.login('user');
})