import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200");
  await page.getByRole("link", { name: /forms/i }).click();
  await page.getByRole("link", { name: /form layouts/i }).click();
  await expect(page.getByText(/using the grid/i)).toBeVisible();
});

test("Log in", async ({ page }) => {
  await page.locator("#inputEmail1").fill("test@test.com");
  await page.locator("#inputPassword2").fill("password");
  await page
    .locator('button[status="primary"]')
    .getByText(/sign in/i)
    .click();
});
