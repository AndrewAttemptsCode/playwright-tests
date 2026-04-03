import { type Page } from "@playwright/test";

class BaseHelper {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoad() {
    await this.page.waitForLoadState("networkidle");
  }
}

export default BaseHelper;
