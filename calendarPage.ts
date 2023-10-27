var calendarPage = 'https://normativ.kontur.ru/buhcalendar/2023/10/3';
async ({ page }) => {
    var previousQuarter = page.locator('.calendar-prev');
    var nextQuarter = page.locator('.calendar-next');
    var monthInfoDays = page.locator("[data-tid='BuhCalendarMonthInfoDays']")
    var monthInfoHours = page.locator("[data-tid='BuhCalendarMonthInfoHours']")
    }