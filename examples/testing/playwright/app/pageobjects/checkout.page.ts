import { Page, Locator } from "@playwright/test";
import BasePage from "./common";
import { ItemComponent } from "../components/item.component";

class CheckoutPage extends BasePage {
  item: ItemComponent;

  constructor(page: Page) {
    super(page);
    this.item = new ItemComponent(page);
  }

  title(): Locator {
    return this.page.getByTestId("title").filter({ hasText: "Your Cart" });
  }

  checkoutButton(): Locator {
    return this.page.getByTestId("checkout");
  }

  checkoutYourInformation = {
    firstNameInput: () => this.page.getByTestId("firstName"),
    lastNameInput: () => this.page.getByTestId("lastName"),
    postalCodeInput: () => this.page.getByTestId("postalCode"),
    continueButton: () => this.page.getByTestId("continue"),
  };

  checkoutOverview = {
    paymentInfoValue: () => this.page.getByTestId("payment-info-value"),
    shippingInfoValue: () => this.page.getByTestId("shipping-info-value"),
    subtotalValue: () => this.page.getByTestId("subtotal-label"),
    taxLabel: () => this.page.getByTestId("tax-label"),
    totalLabel: () => this.page.getByTestId("total-label"),
    finishButton: () => this.page.getByTestId("finish"),
    itemTotalLabel: () => this.page.getByTestId("item-total"),
    complete: () => this.page.getByTestId("complete-header"),
  };
}

export default CheckoutPage;
