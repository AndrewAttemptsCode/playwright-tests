import { test } from "@playwright/test";
import PageManager from "../pageObjects/PageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Date picker tests", () => {
  test("Single date, n days from today", async ({ page }) => {
    const pm = new PageManager(page);
    await pm.navigateTo().datepickerPage();

    await pm.onDatePickerPage().daysFromToday(10);
    await pm.onDatePickerPage().daysFromToday(30);
  });

  test("Range dates, n days from today", async ({ page })=> {
    const pm = new PageManager(page);
    await pm.navigateTo().datepickerPage();

    await pm.onDatePickerPage().rangeFromToday(2, 5);
    await pm.onDatePickerPage().rangeFromToday(5, 62);
  });

});