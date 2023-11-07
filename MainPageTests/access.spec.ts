import { test, expect } from '@playwright/test';
import { mainPageElements } from './mainPage';

test('Searching from main', async ({ page }) => {
    await page.goto(mainPageElements.mainPageUrl);
    await  page.locator(mainPageElements.searchInput).fill("налог");
    await (await page.locator(mainPageElements.submitButton)).click();
    await expect(page).toHaveURL(/.*searching=true&sortby=1&searchquerysource=2&from=Main/);
  });