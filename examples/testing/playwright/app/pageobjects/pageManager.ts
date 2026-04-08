import { Page } from "@playwright/test";
import LoginPage from "./login.page";
import InventoryPage from "./inventory.page";
import CheckoutPage from "./checkout.page";

/**
 * Central access point for all page objects.
 * Instantiate once per test via the shared fixture.
 */
export class PageManager {
  readonly loginPage: LoginPage;
  readonly inventoryPage: InventoryPage;
  readonly checkoutPage: CheckoutPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.checkoutPage = new CheckoutPage(page);
  }
}
