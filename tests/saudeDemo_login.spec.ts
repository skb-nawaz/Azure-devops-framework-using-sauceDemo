import { test, expect } from "@playwright/test";
import CommonUtils from "../utils/commonUtils";

import dotenv from "dotenv";

test("sauce demo login", async ({ page }) => {
  const commonUtils = new CommonUtils();
  const enc_userName = commonUtils.encryptData("standard_user");
  console.log("username", enc_userName);
  const enc_password = commonUtils.encryptData("secret_sauce");
  console.log("password", enc_password);
  const username = commonUtils.decryptData(enc_userName);
  console.log(username);
  const password = commonUtils.decryptData(enc_password);
  console.log(password);
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.locator('[data-test="inventory-item"]').first(),
  ).toBeVisible();
});
