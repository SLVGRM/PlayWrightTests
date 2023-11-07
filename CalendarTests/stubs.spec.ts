import { test, expect } from '@playwright/test';
import { calendarPage } from './calendarPage'

test('Month info is visible', async ({ page }) => {
    await page.goto(calendarPage.calendarPageUrl);
    await  page.locator(calendarPage.previousQuarter).click();
    await  page.locator(calendarPage.nextQuarter).click();
    await expect(page.locator(calendarPage.monthInfoDays)).toHaveText('22рабочих дня');
    await expect(page.locator(calendarPage.monthInfoHours)).toHaveText('176рабочих часов');
  });