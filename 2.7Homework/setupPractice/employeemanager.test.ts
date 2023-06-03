import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

import { employeeManager } from "./emPageObject";
const ep = new employeeManager(driver);

Test("Edit name"), async ( => {
    await ep.navigate();
    await ep.click(ep.addEmployee);
    await ep.elementLocated(ep.nameEntry);
    await ep.click(ep.newEmployee);
    await ep.click(ep.nameEntry);
    await ep.sendKeys(ep.nameEntry);
})
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new employeeManager(driver);

test("it works", async () => {
  await page.navigate();
  
});