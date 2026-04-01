import { expect, type Page, type Locator } from "@playwright/test";

class SideNav {
  readonly page: Page;
  readonly formsLink: Locator;
  readonly formLayoutsLink: Locator;
  readonly formLayoutsHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formsLink = page.getByRole("link", { name: /forms/i });
    this.formLayoutsLink = page.getByRole("link", { name: /form layouts/i });
    this.formLayoutsHeader = page.locator("nb-card-header", { hasText: /using the grid/i });
  }

  async navFormLayouts() {
    await this.formsLink.click();
    await this.formLayoutsLink.click();
    await expect(this.formLayoutsHeader).toBeVisible();
  }

}

export default SideNav;
