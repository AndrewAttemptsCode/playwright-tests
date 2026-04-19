import { test } from "@playwright/test";
import PageManager from "../pageObjects/PageManager";

test("'Using the grid' login @smoke @regression", async ({ page, isMobile }) => {
  await page.goto("/");
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage(isMobile);
  await pm.onFormLayoutsPage().signinGrid("user@email.com", "password1234", "Option 1");
});
