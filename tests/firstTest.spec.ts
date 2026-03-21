import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole("link", { name: "Forms" }).click();
});

test("Navigage to forms page", async ({ page }) => {
  await page.getByRole("link", { name: "Form Layouts" }).click();
  await expect(page.getByText("Inline form")).toBeVisible();
});

test("Navigage to datepicker page", async ({ page }) => {
  await page.getByRole("link", { name: "Datepicker" }).click();
  await expect(page.getByText("Common Datepicker")).toBeVisible();
});
