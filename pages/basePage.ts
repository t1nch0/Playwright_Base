import { Page } from "@playwright/test";
import { config } from "../config";
import { logger } from "../utils/logger";

export class BasePage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateTo(url: string) {
        logger.info(`navigating to URL: ${config.baseURL}`);
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
    }
}