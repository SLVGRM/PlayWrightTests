import { test, expect } from '@playwright/test';
import { askQuestionPage} from './askQuestionPage';


test('Stub in ask-question', async ({ page }) => {
  await page.goto(askQuestionPage.askQuestionPageUrl);
  await  page.locator("[data-tid='UnAuthorizedStub']");
  await expect(page.locator(askQuestionPage.stub)).toBeVisible;
});