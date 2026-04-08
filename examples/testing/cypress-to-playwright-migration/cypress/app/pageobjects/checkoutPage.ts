import { first } from "cypress/types/lodash";
import { ItemComponent } from "../components/item.component";
import Common from "./common";

class CheckoutPage extends Common {
  item = new ItemComponent();

  title = () => cy.getByTestId("title").contains("Your Cart");
  checkoutButton = () => cy.getByTestId("checkout");

  checkoutYourInformation = {
    firstNameInput: () => cy.getByTestId("firstName"),
    lastNameInput: () => cy.getByTestId("lastName"),
    postalCodeInput: () => cy.getByTestId("postalCode"),
    continueButton: () => cy.getByTestId("continue"),
  };

  checkoutOverview = {
    paymentInfoValue: () => cy.getByTestId("payment-info-value"),
    shippingInfoValue: () => cy.getByTestId("shipping-info-value"),
    subtotalValue: () => cy.getByTestId("subtotal-label"),
    taxLabel: () => cy.getByTestId("tax-label"),
    totalLabel: () => cy.getByTestId("total-label"),
    finishButton: () => cy.getByTestId("finish"),
    itemTotalLabel: () => cy.getByTestId("item-total"),
    complete: () => cy.getByTestId("complete-header"),
  };
}

export default new CheckoutPage();
