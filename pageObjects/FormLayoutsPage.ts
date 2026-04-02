import { expect, type Page } from "@playwright/test";

class FormLayoutsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async signinGrid(email: string, password: string, radioOption: string) {
    const form = this.page.locator("nb-card", { hasText: /using the grid/i });
    await form.getByLabel(/email/i).fill(email);
    await form.getByLabel(/password/i).fill(password);
    await form.getByRole("radio", { name: radioOption }).check({ force: true });
    await form.getByRole("button", { name: /sign in/i }).click();
  }

  async signinInline(name: string, email: string, rememberMe: boolean) {
    const form = this.page.locator("nb-card", { hasText: /inline form/i });
    await form.getByPlaceholder(/jane doe/i).fill(name);
    await form.getByPlaceholder(/email/i).fill(email);
    
    const checkbox = form.getByRole("checkbox");
    const isChecked = await checkbox.isChecked();

    if (rememberMe !== isChecked) {
      if (rememberMe) {
        await checkbox.check({ force: true });
      } else {
        await checkbox.uncheck({ force: true });
      }
    }

    await form.getByRole("button", { name: /submit/i }).click();
  }

}

export default FormLayoutsPage;
