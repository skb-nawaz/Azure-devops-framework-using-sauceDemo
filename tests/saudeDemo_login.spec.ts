import { test, expect } from "@playwright/test";
import CommonUtils from "../utils/commonUtils";

import dotenv from "dotenv";

test("sauce demo login @DEV", async ({ page }) => {
  const commonUtils = new CommonUtils();
  /*   const enc_userName = commonUtils.encryptData("standard_user");
  console.log("username", enc_userName);
  const enc_password = commonUtils.encryptData("secret_sauce");
  console.log("password", enc_password); */
  console.log(process.env.USER_NAME!);
  const username = commonUtils.decryptData(process.env.USER_NAME!);
  console.log(username);
  const password = commonUtils.decryptData(process.env.PASSWORD!);
  console.log(password);
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.locator('[data-test="inventory-item"]').first(),
  ).toBeVisible();
});

test("sauce demo login locakedout user @UAT", async ({ page }) => {
  const commonUtils = new CommonUtils();
  /*   const enc_userName = commonUtils.encryptData("standard_user");
  console.log("username", enc_userName);
  const enc_password = commonUtils.encryptData("secret_sauce");
  console.log("password", enc_password); */
  console.log(process.env.USER_NAME!);
  const username = commonUtils.decryptData(process.env.Locked_USER_NAME!);
  console.log(username);
  const password = commonUtils.decryptData(process.env.PASSWORD!);
  console.log(password);
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.locator('[data-test="inventory-item"]').first(),
  ).toBeVisible();
});
