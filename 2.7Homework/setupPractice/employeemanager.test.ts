import { employeeManager } from "./employeeManager";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new employeeManager(driver);

test("it works", async () => {
  await page.navigate();
  
});