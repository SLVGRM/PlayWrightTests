import { test, expect } from '@playwright/test';
import { askQuestionPageUrl, stub} from './askQuestionPage';


test('Stub in ask-question', async ({ page }) => {
  await page.goto(askQuestionPageUrl);
  await  page.locator("[data-tid='UnAuthorizedStub']");
  await expect(page.locator(stub)).toBeVisible;
});