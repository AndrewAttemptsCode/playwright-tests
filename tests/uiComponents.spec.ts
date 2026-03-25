import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200");
});

test.describe("Form layouts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole("link", { name: /forms/i }).click();
    await page.getByRole("link", { name: /form layouts/i }).click();
  });

  test("Input fields", async ({ page }) => {
    const loginForm = page
      .locator("nb-card")
      .filter({ hasText: /using the grid/i });
    const emailField = loginForm.getByRole("textbox", { name: "Email" });
    // Fill email input field with value
    await emailField.fill("test@test.com");
    // Clear email input field of value
    await emailField.clear();
    // Typing email input field with value and delay
    await emailField.pressSequentially("test@test.com", { delay: 100 });

    // Expect email to have a value
    await expect(emailField).toHaveValue("test@test.com");
  });

  test("Radio buttons", async ({ page }) => {
    const loginForm = page
      .locator("nb-card")
      .filter({ hasText: /using the grid/i });
    
    // Check radio option 1
    const radioButton1 = loginForm.getByRole("radio", { name: /option 1/i });
    await radioButton1.check({ force: true });

    // Validate radio option 1 is checked
    await expect(radioButton1).toBeChecked();

    // Check radio option 2
    const radioButton2 = loginForm.getByRole("radio", { name: /option 2/i });
    await radioButton2.check({ force: true });

    // Validate radio option 2 is checked
    await expect(radioButton2).toBeChecked();

    // Validate radio option 1 is no longer checked
    await expect(radioButton1).not.toBeChecked();
  });
});

test.describe("Modal & Overlays page", () => {
  test.beforeEach(async({ page }) => {
    await page.getByRole("link", { name: /modal & overlays/i }).click();
    await page.getByRole("link", { name: /toastr/i }).click();
  });

  test("Checkboxes", async({ page }) => {
    // Uncheck first checkbox
    const firstCheckbox = page.getByRole("checkbox", { name: /hide on click/i });
    await firstCheckbox.uncheck({ force: true });
    await expect(firstCheckbox).not.toBeChecked();

    // Check second checkbox
    const secondCheckbox = page.getByRole("checkbox", { name: /prevent arising/i });
    await secondCheckbox.check({ force: true });
    await expect(secondCheckbox).toBeChecked();

    // Check ALL checkboxes
    const allCheckboxes = page.getByRole("checkbox");
    for (const checkbox of await allCheckboxes.all()) {
      await checkbox.check({ force: true });
      await expect(checkbox).toBeChecked();
    };

    // Uncheck ALL checkboxes
    for (const checkbox of await allCheckboxes.all()) {
      await checkbox.uncheck({ force: true });
      await expect(checkbox).not.toBeChecked();
    };

  });
})
