import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://normativ.kontur.ru/');
  await page.locator('span').filter({ hasText: 'Калькуляторы' }).locator('span').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Калькулятор пеней' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('0,00').fill('184');
  await page1.locator('label').nth(2).click();
  await page1.locator('#startDate').fill('01.10.2023');
  await page1.locator('div:nth-child(4) > .penicalc-input-wrapper > .calc-icon').click();
  await page1.locator('label').nth(3).click();
  await page1.locator('#endDate').fill('31.10.2023');
  await page1.getByRole('button', { name: 'Рассчитать' }).click();
  await page1.locator('.checkbox').click();
  await expect(page1.locator('.text_result')).toHaveText('2,32 руб.')
});