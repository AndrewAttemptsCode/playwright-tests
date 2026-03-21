import { test, expect } from "@playwright/test";

test("Navigage to forms page", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await expect(page.getByText('Inline form')).toBeVisible();
});
