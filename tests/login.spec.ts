import { test, BrowserContext } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe('set of scenarios to validate login faeture', () => {
    let context: BrowserContext;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
    });
    test.afterAll(async () => {
        await context.close();
    });

    test('user is able to login / logout @test', async () => {
        const page = await context.newPage();
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('');
        await loginPage.login('user');
        await loginPage.logout();
        await page.close();
    });
})