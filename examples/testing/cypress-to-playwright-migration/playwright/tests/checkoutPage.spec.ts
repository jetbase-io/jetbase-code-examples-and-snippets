import { itemsNames } from "playwright/constants/data.json";
import { test, expect } from "playwright/app/fixtures/test.fixture";

test.describe("Checkout page tests", () => {
  test.beforeEach(async ({ pageManager }) => {
    await pageManager.loginPage.loginWithValidData();
  });

  test("The user should add item to the cart and they should be displayed at the checkout page", async ({ pageManager }) => {
    await expect(pageManager.inventoryPage.item.itemByName("Bike Light")).toHaveText(itemsNames.bikeLight);
    await pageManager.inventoryPage.item.addToCartByName("Bike Light");
    await expect(pageManager.inventoryPage.item.itemByName("Backpack")).toHaveText(itemsNames.backpackItemName);
    await pageManager.inventoryPage.item.addToCartByName("Backpack");
    await pageManager.inventoryPage.assertCartLogoItems(2);
    await pageManager.inventoryPage.shoppingCartLogo().click();
    await expect(pageManager.checkoutPage.title()).toBeVisible();
    await expect(pageManager.checkoutPage.item.itemByName("Bike Light")).toHaveText(itemsNames.bikeLight);
    await expect(pageManager.checkoutPage.item.itemByName("Backpack")).toHaveText(itemsNames.backpackItemName);
    await expect(pageManager.checkoutPage.item.priceByName("Bike Light")).toHaveText("$9.99");
    await expect(pageManager.checkoutPage.item.priceByName("Backpack")).toHaveText("$29.99");
  });
});
