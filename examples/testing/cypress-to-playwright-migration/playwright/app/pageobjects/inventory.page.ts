import { Page, Locator, expect } from "@playwright/test";
import { ItemComponent } from "../components/item.component";
import BasePage from "./common";

class InventoryPage extends BasePage {
  item: ItemComponent;

  constructor(page: Page) {
    super(page);
    this.item = new ItemComponent(page);
  }

  backbackItem(): Locator {
    return this.page.locator("#item_4_title_link");
  }

  backbackAddItemButton(): Locator {
    return this.page.getByTestId("add-to-cart-sauce-labs-backpack");
  }

  bikeLightsAddItemButton(): Locator {
    return this.page.getByTestId("add-to-cart-sauce-labs-bike-light");
  }

  backbackRemoveItemButton(): Locator {
    return this.page.getByTestId("remove-sauce-labs-backpack");
  }

  shoppingCartLogo(): Locator {
    return this.page.locator("#shopping_cart_container");
  }

  async clickBackbackAddItemButton(): Promise<void> {
    await this.backbackAddItemButton().click();
  }

  async clickBikeLightsAddItemButton(): Promise<void> {
    await this.bikeLightsAddItemButton().click();
  }

  async clickBackbackRemoveItemButton(): Promise<void> {
    await this.backbackRemoveItemButton().click();
  }

  async assertCartLogoItems(itemsNum: number): Promise<void> {
    await expect(this.shoppingCartLogo()).toHaveText(itemsNum.toString());
  }
}

export default InventoryPage;
