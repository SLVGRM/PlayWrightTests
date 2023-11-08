import { test, expect } from '@playwright/test';
import { mainPage } from './mainPage';

test.use({timezoneId: 'Europe/Paris'});
test('Searching from main', async ({ page }) => {
    await page.goto(mainPage.mainPageUrl);
    await  page.locator(mainPage.searchInput).fill("налог");
    await (await page.locator(mainPage.submitButton)).click();
    await expect(page).toHaveURL(/.*searching=true&sortby=1&searchquerysource=2&from=Main/);
  });