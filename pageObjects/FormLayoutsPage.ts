import { type Page } from "@playwright/test";

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

}

export default FormLayoutsPage;
