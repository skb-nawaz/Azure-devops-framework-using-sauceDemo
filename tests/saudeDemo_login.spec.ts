/* import { test, expect } from "@playwright/test";
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
 */
/* 
import { test, expect } from "@playwright/test";
import CommonUtils from "../utils/commonUtils";

test("sauce demo login", async ({ page }) => {
  console.log("=".repeat(100));
  console.log("🚀 TEST STARTED");

  console.log("USER_NAME exists:", !!process.env.USER_NAME);
  console.log("PASSWORD exists:", !!process.env.PASSWORD);
  console.log("SECRET_KEY exists:", !!process.env.SECRET_KEY);

  console.log(
    "USER_NAME starts with U2FsdGVk:",
    process.env.USER_NAME?.startsWith("U2FsdGVk"),
  );

  console.log(
    "PASSWORD starts with U2FsdGVk:",
    process.env.PASSWORD?.startsWith("U2FsdGVk"),
  );

  const commonUtils = new CommonUtils();

  const username = commonUtils.decryptData(process.env.USER_NAME!);
  const password = commonUtils.decryptData(process.env.PASSWORD!);

  console.log("Username length:", username.length);
  console.log("Password length:", password.length);

  console.log("Username:", username); // DEMO ONLY
  console.log("Password:", password); // DEMO ONLY

  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);

  console.log(
    "Entered username:",
    await page.locator('[data-test="username"]').inputValue(),
  );

  console.log(
    "Entered password length:",
    (await page.locator('[data-test="password"]').inputValue()).length,
  );

  await page.locator('[data-test="login-button"]').click();

  console.log("Current URL:", page.url());

  const error = page.locator('[data-test="error"]');

  if (await error.isVisible()) {
    console.log("SauceDemo Error:", await error.textContent());
  }

  await expect(
    page.locator('[data-test="inventory-item"]').first(),
  ).toBeVisible();
});
 */

import { test } from "@playwright/test";
import CommonUtils from "../utils/commonUtils";

test("crypto check", async () => {
  const commonUtils = new CommonUtils();

  const encrypted = commonUtils.encryptData("hello");

  console.log("Encrypted:", encrypted);

  const decrypted = commonUtils.decryptData(encrypted);

  console.log("Decrypted:", decrypted);
});
