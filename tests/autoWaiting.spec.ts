import { test, expect } from "@playwright/test";

const UiTestingUrl = process.env.UI_TESTING_URL;

if (!UiTestingUrl) {
  throw new Error("UI testing url env var is missing");
}

test.beforeEach(async ({ page }) => {
  await page.goto(UiTestingUrl);
});

test("auto wait for data", async ({ page }) => {
  await page
    .getByRole("button", { name: /button triggering ajax request/i })
    .click();
  await expect(
    page.getByText(/data loaded with ajax get request./i))
    .toBeVisible({ timeout: 20000 });
});
