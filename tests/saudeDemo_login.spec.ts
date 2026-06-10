import { test, expect } from "@playwright/test";
import CommonUtils from "../utils/commonUtils";

import dotenv from "dotenv";

test("sauce demo login", async ({ page }) => {
  const commonUtils = new CommonUtils();
  const username = commonUtils.decryptData(process.env.USER_NAME!);
  const password = commonUtils.decryptData(process.env.PASSWORD!);
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.locator('[data-test="inventory-item"]').first(),
  ).toBeVisible();
});
