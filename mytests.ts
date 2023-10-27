import { test, expect } from '@playwright/test';
import { mainPage, SearchInput, SubmitButton } from './mainPage';
import {stub} from './askQuestionPage';
import {previousQuarter, nextQuarter, monthInfoDays, monthInfoHours} form '/.calendarPage'

test('Searching from main', async ({ page }) => {
  await page.goto(mainPage);
  await SearchInput.fill("налог");
  await SubmitButton.click();
  await expect(page).toHaveURL(/.*searching=true&sortby=1&searchquerysource=2&from=Main/);
});

test('Stub in ask-question', async ({ page }) => {
  await page.goto(askQuestionPage);
  await expect(stub).toBeVisible;
});

test('Month info is visible', async ({ page }) => {
  await page.goto(calendarPage);
  await  previousQuarter.click();
  await nextQuarter.click();
  await expect(monthInfoDays).toHaveText('22рабочих дня');
  await expect(monthInfoHours).toHaveText('176рабочих часов');
});