import { test, expect } from "@playwright/test";

test.beforeEach(async({ page }) => {
  await page.goto("http://uitestingplayground.com/sampleapp");
});

test("Login form is rendered", async({ page }) => {
  const heading = page.getByRole("heading", { name: /sample app/i });
  await expect(heading).toBeVisible();
});

test("User is logged out", async({ page }) => {
  const loginStatus = page.locator("#loginstatus");
  await expect(loginStatus).toHaveText(/user logged out./i);
});

test("Login fails with empty credentials", async({ page }) => {
  const loginStatus = page.locator("#loginstatus");

  const loginButton = page.getByRole("button", { name: /log in/i });
  await loginButton.click();

  await expect(loginStatus).toHaveText(/invalid username\/password/i);
});

test("Login fails with only password", async({ page }) => {
  const loginStatus = page.locator("#loginstatus");

  const passwordField = page.locator('input[name="Password"]');
  await passwordField.fill("password");

  const loginButton = page.getByRole("button", { name: /log in/i });
  await loginButton.click();

  await expect(loginStatus).toHaveText(/invalid username\/password/i);
});

test("Login fails with only username", async({ page }) => {
  const loginStatus = page.locator("#loginstatus");

  const usernameField = page.locator('input[name="UserName"]');
  await usernameField.fill("Andy");

  const loginButton = page.getByRole("button", { name: /log in/i });
  await loginButton.click();

  await expect(loginStatus).toHaveText(/invalid username\/password/i);
});

test("Login fails with incorrect username and password", async({ page }) => {
  const loginStatus = page.locator("#loginstatus");

  const usernameField = page.locator('input[name="UserName"]');
  await usernameField.fill("Andy");

  const passwordField = page.locator('input[name="Password"]');
  await passwordField.fill("password");

  const loginButton = page.getByRole("button", { name: /log in/i });
  await loginButton.click();

  await expect(loginStatus).toHaveText(/invalid username\/password/i);
});

test("Login successful", async({ page }) => {
  const loginStatus = page.locator("#loginstatus");
  
  const usernameField = page.locator('input[name="UserName"]');
  await usernameField.fill("Andy");
  await expect(usernameField).toHaveValue("Andy");
  
  const passwordField = page.locator('input[name="Password"]');
  await passwordField.fill("pwd");
  await expect(passwordField).toHaveValue("pwd");
  
  const loginButton = page.getByRole("button", { name: /log in/i });
  await loginButton.click();

  await expect(loginStatus).toHaveText(/welcome, andy!/i);
});

test("Logout successful", async({ page }) => {
  const loginStatus = page.locator("#loginstatus");
  
  const usernameField = page.locator('input[name="UserName"]');
  await usernameField.fill("Andy");
  
  const passwordField = page.locator('input[name="Password"]');
  await passwordField.fill("pwd");
  
  const loginButton = page.getByRole("button", { name: /log in/i });
  await loginButton.click();

  await expect(loginStatus).toHaveText(/welcome, andy!/i);

  const logoutButton = page.getByRole("button", { name: /log out/i });
  await expect(logoutButton).toBeVisible();
  await expect(loginButton).not.toBeVisible();

  await logoutButton.click();
  await expect(loginStatus).toHaveText(/user logged out./i);
  await expect(usernameField).toBeEmpty();
  await expect(passwordField).toBeEmpty();
  await expect(loginButton).toBeVisible();
  await expect(logoutButton).not.toBeVisible();
});
