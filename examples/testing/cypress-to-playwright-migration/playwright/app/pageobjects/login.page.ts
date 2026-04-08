import { Page, Locator } from "@playwright/test";
import BasePage from "./common";
import { getValidUserData } from "playwright/helpers/getEnvVariables.helper";

class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  usernameInput(): Locator {
    return this.page.getByTestId("username");
  }

  passwordInput(): Locator {
    return this.page.getByTestId("password");
  }

  loginButton(): Locator {
    return this.page.getByTestId("login-button");
  }

  loginError(): Locator {
    return this.page.getByTestId("error");
  }

  async fillUserNameInput(userName: string): Promise<void> {
    await this.usernameInput().fill(userName);
  }

  async fillPasswordInput(password: string): Promise<void> {
    await this.passwordInput().fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton().click();
  }

  async loginWithValidData(): Promise<void> {
    await super.openPage("/");
    await this.fillUserNameInput(getValidUserData.validUserLogin);
    await this.fillPasswordInput(getValidUserData.validUserPassword);
    await this.clickLoginButton();
  }
}

export default LoginPage;
