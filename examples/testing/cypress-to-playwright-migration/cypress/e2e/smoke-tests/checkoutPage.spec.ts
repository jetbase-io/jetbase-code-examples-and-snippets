import inventoryPage from "cypress/app/pageobjects/inventoryPage";
import loginPage from "cypress/app/pageobjects/loginPage";
import { itemsNames } from "../../fixtures/data.json";
import checkoutPage from "cypress/app/pageobjects/checkoutPage";

describe("Checkout page tests", () => {
  beforeEach(() => {
    loginPage.loginWithValidData();
  });

  it("The user should add item to the cart and they should be displayed at the checkout page", () => {
    inventoryPage.item.itemByName("Bike Light").should("have.text", itemsNames.bikeLight);
    inventoryPage.item.addToCartByName("Bike Light");
    inventoryPage.item.itemByName("Backpack").should("have.text", itemsNames.backpackItemName);
    inventoryPage.item.addToCartByName("Backpack");
    inventoryPage.assertCartLogoItems(2);
    inventoryPage.shoppingCartLogo().click();
    checkoutPage.title().should("be.visible");
    checkoutPage.item.itemByName("Bike Light").should("have.text", itemsNames.bikeLight);
    checkoutPage.item.itemByName("Backpack").should("have.text", itemsNames.backpackItemName);
    checkoutPage.item.priceByName("Bike Light").should("have.text", "$9.99");
    checkoutPage.item.priceByName("Backpack").should("have.text", "$29.99");
  });
});
