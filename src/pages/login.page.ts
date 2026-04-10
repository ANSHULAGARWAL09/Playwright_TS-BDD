import { Page, Locator } from '@playwright/test';
import { BASE_URL } from '../utils/env';

export class LoginPage {
  // Make page immutable
  constructor(private readonly page: Page) {} // will check

  // Readonly locators (cannot be reassigned)
  readonly usernameInput: Locator = this.page.locator('input[name="username"]');
  readonly passwordInput: Locator = this.page.locator('input[name="password"]');
  readonly submitButton: Locator = this.page.locator('button[id="submit"]');
  readonly dashboardTitle: Locator = this.page.locator('.post-title');

  async goto(): Promise<void> {
    await this.page.goto(BASE_URL);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async isDashboardVisible(): Promise<boolean> {
    return await this.dashboardTitle.isVisible();
  }
}