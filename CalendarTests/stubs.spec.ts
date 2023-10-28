import { test, expect } from '@playwright/test';
import { calendarPageUrl, monthInfoHours, monthInfoDays, nextQuarter, previousQuarter } from './calendarPage'

test('Month info is visible', async ({ page }) => {
    await page.goto(calendarPageUrl);
    await  page.locator(previousQuarter).click();
    await  page.locator(nextQuarter).click();
    await expect(page.locator(monthInfoDays)).toHaveText('22рабочих дня');
    await expect(page.locator(monthInfoHours)).toHaveText('176рабочих часов');
  });