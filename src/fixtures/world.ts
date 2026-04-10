import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  videoPath?: string; // optional so TS never complains

  async launchBrowser() {
    this.browser = await chromium.launch({headless: false,});
    this.context = await this.browser.newContext({
      recordVideo: { dir: 'reports/videos/' }
    });
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    const video = this.page.video();
    await this.page.close();
    await this.context.close();
    await this.browser.close();

    if (video) {
      this.videoPath = await video.path();
    }
  }
}

setWorldConstructor(CustomWorld);
