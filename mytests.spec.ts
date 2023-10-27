import { test, expect } from '@playwright/test';
import { mainPageUrl, submitButton, searchInput } from './mainPage';
import { askQuestionPageUrl, stub} from './askQuestionPage';
import { calendarPageUrl, monthInfoHours, monthInfoDays, nextQuarter, previousQuarter } from './calendarPage'

test('Searching from main', async ({ page }) => {
  await page.goto(mainPageUrl);
  await  page.locator(searchInput).fill("налог");
  await (await page.locator(submitButton)).click();
  await expect(page).toHaveURL(/.*searching=true&sortby=1&searchquerysource=2&from=Main/);
});

test('Stub in ask-question', async ({ page }) => {
  await page.goto(askQuestionPageUrl);
  await  page.locator("[data-tid='UnAuthorizedStub']");
  await expect(page.locator(stub)).toBeVisible;
});

test('Month info is', async ({ page }) => {
  await page.goto(calendarPageUrl);
  await  page.locator(previousQuarter).click();
  await  page.locator(nextQuarter).click();
  await expect(page.locator(monthInfoDays)).toHaveText('22рабочих дня');
  await expect(page.locator(monthInfoHours)).toHaveText('176рабочих часов');
});