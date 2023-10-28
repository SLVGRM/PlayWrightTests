import { test, expect } from '@playwright/test';
import { calculatorPageUrl } from './CalculatorPage'
import { mainPageUrl } from '../MainPageTests/mainPage'

test('Calculator access', async ({ page }) => {
  await page.goto(mainPageUrl);
  await page.locator('span').filter({ hasText: 'Калькуляторы' }).locator('span').click();
  await page.getByRole('link', { name: 'Калькулятор пеней' }).click();
  const newPage = await page.waitForEvent('popup');
  const newPageUrl = await newPage.url();
  await expect(newPageUrl).toContain(calculatorPageUrl);
});

test('Calculation success', async ({ page }) => {
  await page.goto(calculatorPageUrl);
  await page.getByPlaceholder('0,00').fill('184');
  await page.locator('label').nth(2).click();
  await page.locator('#startDate').fill('01.10.2023');
  await page.locator('div:nth-child(4) > .penicalc-input-wrapper > .calc-icon').click();
  await page.locator('label').nth(3).click();
  await page.locator('#endDate').fill('31.10.2023');
  await page.getByRole('button', { name: 'Рассчитать' }).click();
  await page.locator('.checkbox').click();
  await expect(page.locator('.text_result')).toHaveText('2,32 руб.')
});

