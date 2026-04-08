// playwright/tests/userLogin.spec.ts

import { test, expect } from "playwright/app/fixtures/test.fixture";
import { itemsNames, errorTexts } from "playwright/constants/data.json";
import { getValidUserData } from "playwright/helpers/getEnvVariables.helper";

test.describe("Login tests", () => {
  test.beforeEach(async ({ pageManager }) => {
    await pageManager.loginPage.openPage("/");
  });

  test("The user should login with valid data", async ({ pageManager }) => {
    await pageManager.loginPage.fillUserNameInput(getValidUserData.validUserLogin);
    await pageManager.loginPage.fillPasswordInput(getValidUserData.validUserPassword);
    await pageManager.loginPage.clickLoginButton();
    await expect(pageManager.inventoryPage.backbackItem()).toHaveText(itemsNames.backpackItemName);
  });

  test("The application should show an error with invalid password", async ({ pageManager }) => {
    await pageManager.loginPage.fillUserNameInput(getValidUserData.validUserLogin);
    await pageManager.loginPage.fillPasswordInput("111111");
    await pageManager.loginPage.clickLoginButton();
    await expect(pageManager.loginPage.loginError()).toBeVisible();
    await expect(pageManager.loginPage.loginError()).toHaveText(errorTexts.loginErrorText);
  });
});
