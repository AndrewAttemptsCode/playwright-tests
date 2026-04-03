import { test } from "@playwright/test";
import PageManager from "../pageObjects/PageManager";


test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("'Using the grid' login", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();

  await pm.onFormLayoutsPage().signinGrid("email@email.com", "password123", "Option 1");
});

test("'Inline form' login", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();

  await pm.onFormLayoutsPage().signinInline("Andrew", "test@test.com", true);
  await pm.onFormLayoutsPage().signinInline("Bob", "email@email.com", false);
});
