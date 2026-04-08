// playwright/tests/e2e-test.spec.ts

import { test, expect } from "playwright/app/fixtures/test.fixture";
import { itemsNames, orderSummary, checkoutInfo } from "playwright/constants/data.json";

test.describe("E2E: Purchase T-Shirt and Fleece Jacket and finish checkout", () => {
  test.beforeEach(async ({ pageManager }) => {
    await pageManager.loginPage.loginWithValidData();
  });

  test("User gets T-Shirt and Fleece Jacket and completes checkout flow", async ({ pageManager }) => {
    // Add items to cart
    await expect(pageManager.inventoryPage.item.itemByName("T-Shirt")).toBeVisible();
    await pageManager.inventoryPage.item.addToCartByName("T-Shirt");
    await expect(pageManager.inventoryPage.item.itemByName("Fleece Jacket")).toBeVisible();
    await pageManager.inventoryPage.item.addToCartByName("Fleece Jacket");
    await pageManager.inventoryPage.assertCartLogoItems(2);

    // Go to checkout
    await pageManager.inventoryPage.shoppingCartLogo().click();
    await expect(pageManager.checkoutPage.title()).toBeVisible();
    await expect(pageManager.checkoutPage.item.itemByName(itemsNames.tshirt)).toBeVisible();
    await expect(pageManager.checkoutPage.item.itemByName(itemsNames.fleeceJacket)).toBeVisible();

    // Fill checkout info
    await pageManager.checkoutPage.checkoutButton().click();
    await pageManager.checkoutPage.checkoutYourInformation.firstNameInput().fill(checkoutInfo.firstName);
    await pageManager.checkoutPage.checkoutYourInformation.lastNameInput().fill(checkoutInfo.lastName);
    await pageManager.checkoutPage.checkoutYourInformation.postalCodeInput().fill(checkoutInfo.postalCode);
    await pageManager.checkoutPage.checkoutYourInformation.continueButton().click();

    // Assert order summary
    await expect(pageManager.checkoutPage.checkoutOverview.paymentInfoValue()).toContainText(orderSummary.paymentInfo);
    await expect(pageManager.checkoutPage.checkoutOverview.shippingInfoValue()).toContainText(orderSummary.shippingInfo);
    await expect(pageManager.checkoutPage.checkoutOverview.subtotalValue()).toContainText(orderSummary.subtotal);
    await expect(pageManager.checkoutPage.checkoutOverview.taxLabel()).toContainText(orderSummary.tax);
    await expect(pageManager.checkoutPage.checkoutOverview.totalLabel()).toContainText(orderSummary.total);

    // Finish checkout
    await pageManager.checkoutPage.checkoutOverview.finishButton().click();
    await expect(pageManager.checkoutPage.checkoutOverview.complete()).toBeVisible();
    await expect(pageManager.checkoutPage.checkoutOverview.complete()).toContainText(orderSummary.orderCompletionText);
  });
});
