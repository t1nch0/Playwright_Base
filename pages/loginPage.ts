import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { config } from "../config";

export class LoginPage extends BasePage {
    private readonly userInput: Locator;
    private readonly passInput: Locator;
    private readonly loginButton: Locator;
    constructor(page: Page) {
        super(page);
        this.userInput = page.locator('[data-test="username"]');
        this.passInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }
    async login(userRole: string) {
        // update userRole with switch to add multiple users 
        await this.userInput.waitFor({ state: 'visible' });
        await this.userInput.fill(config.user);
        await this.passInput.fill(config.pass);
        await this.loginButton.click();
    }
}