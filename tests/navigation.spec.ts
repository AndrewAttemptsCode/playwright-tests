import { test, expect } from "@playwright/test";
import SideNav from "../pageObjects/SideNav";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Navigate to form layouts page", async ({ page }) => {
  const navigate = new SideNav(page);
  await navigate.navFormLayouts();
});

test("Navigate to multiple group links with sublinks", async ({ page }) => {
  const navigate = new SideNav(page);
  await navigate.navFormLayouts();
  await navigate.navDatepicker();
  await navigate.navSmartTable();
  await navigate.navToastr();
  await navigate.navTooltip();
});