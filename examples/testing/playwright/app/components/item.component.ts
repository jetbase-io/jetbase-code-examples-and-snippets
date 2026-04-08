// playwright/app/components/item.component.ts

import { Page, Locator } from "@playwright/test";

export class ItemComponent {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  itemByNth(eq: number): Locator {
    return this.page.getByTestId("inventory-item").nth(eq);
  }

  imgLinkByNumber(num: number): Locator {
    return this.page.getByTestId(`item-${num}-img-link`);
  }

  titleLinkByNumber(num: number): Locator {
    return this.page.getByTestId(`item-${num}-title-link`);
  }

  descByNumber(num: number): Locator {
    return this.page.locator(`[data-test=\"item-${num}-title-link\"] ~ inventory-item-desc`);
  }

  itemByName(name: string): Locator {
    return this.page.locator('[data-test="inventory-item-name"]', { hasText: name }).first();
  }

  async addToCartByName(name: string): Promise<void> {
    const button = this.itemByName(name).locator("..").locator("..").locator("..").locator("button");
    await button.click();
  }

  priceByName(name: string): Locator {
    return this.itemByName(name).locator("..").locator("..").locator("..").locator('[data-test="inventory-item-price"]');
  }
}
