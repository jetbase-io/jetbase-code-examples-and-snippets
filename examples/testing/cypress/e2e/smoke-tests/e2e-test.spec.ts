import inventoryPage from "cypress/app/pageobjects/inventoryPage";
import loginPage from "cypress/app/pageobjects/loginPage";
import checkoutPage from "cypress/app/pageobjects/checkoutPage";
import { itemsNames, orderSummary, checkoutInfo } from "../../fixtures/data.json";

describe("E2E: Purchase T-Shirt and Fleece Jacket and finish checkout", () => {
  beforeEach(() => {
    loginPage.loginWithValidData();
  });

  it("User gets T-Shirt and Fleece Jacket and completes checkout flow", () => {
    inventoryPage.item.itemByName("T-Shirt").should("be.visible");
    inventoryPage.item.addToCartByName("T-Shirt");
    inventoryPage.item.itemByName("Fleece Jacket").should("be.visible");
    inventoryPage.item.addToCartByName("Fleece Jacket");
    inventoryPage.assertCartLogoItems(2);
    inventoryPage.shoppingCartLogo().click();
    checkoutPage.title().should("be.visible");
    checkoutPage.item.itemByName(itemsNames.tshirt).should("be.visible");
    checkoutPage.item.itemByName(itemsNames.fleeceJacket).should("be.visible");
    checkoutPage.checkoutButton().click();
    checkoutPage.checkoutYourInformation.firstNameInput().type(checkoutInfo.firstName);
    checkoutPage.checkoutYourInformation.lastNameInput().type(checkoutInfo.lastName);
    checkoutPage.checkoutYourInformation.postalCodeInput().type(checkoutInfo.postalCode);
    checkoutPage.checkoutYourInformation.continueButton().click();
    checkoutPage.checkoutOverview.paymentInfoValue().contains(orderSummary.paymentInfo);
    checkoutPage.checkoutOverview.shippingInfoValue().contains(orderSummary.shippingInfo);
    checkoutPage.checkoutOverview.subtotalValue().contains(orderSummary.subtotal);
    checkoutPage.checkoutOverview.taxLabel().contains(orderSummary.tax);
    checkoutPage.checkoutOverview.totalLabel().contains(orderSummary.total);
    checkoutPage.checkoutOverview.finishButton().click();
    checkoutPage.checkoutOverview.complete().should("be.visible").contains(orderSummary.orderCompletionText);
  });
});
