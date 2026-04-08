import { Page } from "@playwright/test";

abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  openPage(pageEndpoint: string) {
    return this.page.goto(pageEndpoint);
  }
}

export default BasePage;
