import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://uitestingplayground.com/ajax");
});

test("auto wait for data", async ({ page }) => {
  await page
    .getByRole("button", { name: /button triggering ajax request/i })
    .click();
  await expect(
    page.getByText(/data loaded with ajax get request./i))
    .toBeVisible({ timeout: 20000 });
});
