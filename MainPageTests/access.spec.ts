import { test, expect } from '@playwright/test';
import { mainPageUrl, submitButton, searchInput } from './mainPage';

test('Searching from main', async ({ page }) => {
    await page.goto(mainPageUrl);
    await  page.locator(searchInput).fill("налог");
    await (await page.locator(submitButton)).click();
    await expect(page).toHaveURL(/.*searching=true&sortby=1&searchquerysource=2&from=Main/);
  });