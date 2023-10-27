import { test, expect } from '@playwright/test';

test('Searching from main', async ({ page }) => {
  await page.goto('https://normativ.kontur.ru/');
  await  page.locator("[data-tid='SearchInput']").fill("налог");
  await (await page.locator("[data-tid='SearchSubmitButton']")).click();
  await expect(page).toHaveURL(/.*searching=true&sortby=1&searchquerysource=2&from=Main/);
});

test('Stub in ask-question', async ({ page }) => {
  await page.goto('https://normativ.kontur.ru/consult/ask-question');
  await  page.locator("[data-tid='UnAuthorizedStub']");
  var stub = page.locator("[data-tid='UnAuthorizedStub']");
  await expect(stub).toBeVisible;
});

test('Month info is', async ({ page }) => {
  await page.goto('https://normativ.kontur.ru/buhcalendar/2023/10/30?from=mainPageHeader');
  await  page.locator('.calendar-prev').click();
  await  page.locator('.calendar-next').click();
  var monthInfoDays = page.locator("[data-tid='BuhCalendarMonthInfoDays']")
  var monthInfoHours = page.locator("[data-tid='BuhCalendarMonthInfoHours']")
  await expect(monthInfoDays).toHaveText('22рабочих дня');
  await expect(monthInfoHours).toHaveText('176рабочих часов');
});
