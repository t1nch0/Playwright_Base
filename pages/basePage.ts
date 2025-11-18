import { Page } from "@playwright/test";
import { config } from "../config";

export class BasePage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateTo(url: string) {
        console.log(config.baseURL);
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
    }
}