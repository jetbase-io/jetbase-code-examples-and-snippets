import { test as base, expect } from "@playwright/test";
import { PageManager } from "../pageobjects/pageManager";

type Fixtures = {
  pageManager: PageManager;
};

export const test = base.extend<Fixtures>({
  pageManager: async ({ page }, use) => {
    const manager = new PageManager(page);
    await use(manager);
  },
});

export { expect };
