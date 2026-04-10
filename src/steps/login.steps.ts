import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../fixtures/world';
import { LoginPage } from '../pages/login.page';

let loginPage: LoginPage;

Given('user is on login page', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('user logs in with valid credentials', async function (this: CustomWorld) {
  await loginPage.login('student', 'Password123');
});

Then('login dashboard should be visible', async function (this: CustomWorld) {
  expect(await loginPage.isDashboardVisible()).toBeTruthy();
});