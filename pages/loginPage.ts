import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { config } from "../config";
import { logger } from "../utils/logger";

export class LoginPage extends BasePage {

    private readonly userInput: Locator;
    private readonly passInput: Locator;
    private readonly loginButton: Locator;
    private readonly menuButton: Locator;
    private readonly logoutButton: Locator;
    constructor(page: Page) {
        super(page);
        this.userInput = page.locator('[data-test="username"]');
        this.passInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByText('Logout');
    }
    async login(userRole: string) {
        // update userRole with switch to add multiple users 
        await this.userInput.waitFor({ state: 'visible' });
        try {
            await this.userInput.fill(config.user);
            await this.passInput.fill(config.pass);
            await this.loginButton.click();
            logger.info(`logging with user ${userRole}`)
        } catch (error) {
            logger.error(`unable to login`)
            throw error
        }

    }

    async logout() {
        try {
            await this.menuButton.click();
            await this.logoutButton.click()
            logger.info(`logging out`)
        } catch (error) {
            logger.error(`not able to logout`);
            throw error
        }
    }
}