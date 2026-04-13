import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Form suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("link", { name: /forms/i }).click();
  });

  test("Navigage to forms page", async ({ page }) => {
    await page.getByRole("link", { name: /form layouts/i }).click();
    await expect(page.getByText(/inline form/i)).toBeVisible();
  });

  test("Navigage to datepicker page", async ({ page }) => {
    await page.getByRole("link", { name: /datepicker/i }).click();
    await expect(page.getByText(/common datepicker/i)).toBeVisible();
  });
});

test.describe("Charts suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("link", { name: /^charts$/i }).click();
  });

  test("Navigate to charts page", async ({ page }) => {
    await page.getByRole("link", { name: /^echarts$/i }).click();
    await expect(page.getByText(/pie/i)).toBeVisible();
  });
});
