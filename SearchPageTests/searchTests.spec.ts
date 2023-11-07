import { test, expect } from '@playwright/test';
import { mainPageElements } from '../MainPageTests/mainPage';
import { searchPage } from './searchPage';


  test('Encoded query in URL success', async ({ page, context }) => {
    await page.goto(mainPageElements.mainPageUrl);
    let searchquery = "<script>alert('1')</script>";
    const newPage = await context.newPage();
    await newPage.goto(mainPageElements.mainPageUrl);
    await newPage.locator(mainPageElements.searchInput).fill(searchquery);
    await Promise.all([
        newPage.click(mainPageElements.submitButton)
    ]);
    const newPageUrl = newPage.url();
    await expect(newPageUrl).not.toContain(searchquery);
    });

    test('Search menu items are visible', async ({ page, context }) => {
        await page.goto(mainPageElements.mainPageUrl);
        let searchquery = "yfkjujdsq rjltrc";
        await page.locator(mainPageElements.searchInput).fill(searchquery);
        const [newPage] = await Promise.all([
            new Promise((resolve) => page.once('popup', resolve)),
            page.locator(mainPageElements.submitButton).click()
        ]);
        expect(Object.values(searchPage.menuItems).every(item => newPage.isVisible(item))).toBeTruthy();
        expect(await newPage.isVisible(searchPage.prompt)).toBeTruthy();
        const searchResultText = await newPage.textContent(searchPage.searchResultContainer);
            expect(searchResultText).toContain("Налоговый кодекс");
    });

